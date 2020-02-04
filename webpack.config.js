/* global __dirname */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

const developConfig = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devServer: {
    openPage: './dist/index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.template.html',
      alwaysWriteToDisk: true, // this option was added by html-webpack-harddisk-plugin
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[name].[chunkhash:8].chunk.css',
      filename: '[name].css'
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CleanWebpackPlugin()
  ],
  watch: true,
  watchOptions: {
    ignored: ['node_modules', 'smsc']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { javascriptEnabled: true } },
          {
            loader: 'string-replace-loader',
            options: {
              search: 'locate://',
              replace: `${__dirname}/`,
              flags: 'g'
            }
          }
        ]
      }
    ]
  }
};

const productionConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:8].js',
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.template.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    chrome: 49,
                    edge: 13,
                    firefox: 51,
                    safari: 9
                  },
                  forceAllTransforms: true,
                  modules: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },
          {
            loader: 'string-replace-loader',
            options: {
              search: 'locate://',
              replace: `${__dirname}/`,
              flags: 'g'
            }
          }
        ]
      }
    ]
  }
};

module.exports = mode => {
  switch (mode) {
    case 'production':
      return productionConfig;
    default:
      return developConfig;
  }
};
