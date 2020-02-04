import { getRandomNumber } from './helpers';

const IMAGES = [
    'https://media.giphy.com/media/kudIERso2pFiE/giphy.gif',
    'https://media.giphy.com/media/bU6GKBpWaJ4tO/giphy.gif',
    'https://media.giphy.com/media/l4KibK3JwaVo0CjDO/giphy.gif',
    'https://media.giphy.com/media/TmVqs1EEKnFjq/giphy.gif',
    'https://media.giphy.com/media/BpS7QWoAiaSrsBA07n/giphy.gif',
    'https://media.giphy.com/media/14MjVpzfpuzqE/giphy.gif',
    'https://media.giphy.com/media/aQYR1p8saOQla/giphy.gif',
    'https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif',
    'https://media.giphy.com/media/QqvitvWW3eGZi/giphy.gif',
    'https://media.giphy.com/media/3o85xtk0zf2Vvpuy1W/giphy.gif',
    'https://www.reactiongifs.com/wp-content/uploads/2013/11/baby-dance.gif',
    'https://www.reactiongifs.com/r/bbym.gif',
    'https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif',
    'https://media.giphy.com/media/lpHPFVpk65qpbH2XY5/giphy.gif',
    'https://media.giphy.com/media/dUkfmgv3ILgWc/giphy.gif',
    'https://media.giphy.com/media/cOmKweWa4w0XS/giphy.gif',
    'https://media.giphy.com/media/10nM2EN6kCgMbS/giphy.gif',
    'https://media.giphy.com/media/zrxazUScjhxo4/giphy.gif',
    'https://media.giphy.com/media/RpfIXomvjCh8I/giphy.gif',
    'https://media.giphy.com/media/x28cIQSn19Tbi/giphy.gif',
    'https://media.giphy.com/media/SQQZhdNAcqNFu/giphy.gif',
    'https://media.giphy.com/media/5m8ToSKIEtw7S/giphy.gif',
    'https://media.giphy.com/media/CkE3ge4PJofcI/giphy.gif',
    'https://media.giphy.com/media/ZD2rvdSsDrmEXoY1l6/giphy.gif',
    'https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/giphy.gif',
    'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
    'https://media2.giphy.com/media/xSlfy3sa3ecEw/giphy.gif',
    'https://media1.giphy.com/media/OXHvH0XHKxtm0/giphy.gif',
    'https://media.giphy.com/media/pziV12OyKYOoE/giphy.gif',
    'https://media0.giphy.com/media/l2Sq1Uuog38ZeQ6UU/giphy.gif',
    'https://media.giphy.com/media/3oriNYroyEyMgGGt0Y/giphy.gif',
    'https://media.giphy.com/media/26ufk9v09HdAS7Z6M/giphy.gif',
    'https://media0.giphy.com/media/l0MYM8iCTykT0yUp2/giphy.gif',
    'https://media1.giphy.com/media/cZjU52iy5UOqs/giphy.gif',
    'https://media0.giphy.com/media/aBRi9FGnL6i3u/giphy.gif',
    'https://media.giphy.com/media/vKyQhMr07DeEw/giphy.gif',
    'https://media.giphy.com/media/4wP5ibnC67CjC/giphy.gif',
    'https://media0.giphy.com/media/Xvdz8x3dd4M8/giphy.gif',
    'https://media1.giphy.com/media/LaWjY1Iwq6YJW/giphy.gif',
    'https://media0.giphy.com/media/TEz7FKWLCgt8s/giphy.gif',
    'https://media2.giphy.com/media/wNG4ysbmrz89q/giphy.gif',
    'https://media1.giphy.com/media/yaesArbH6B7Ak/giphy.gif',
    'https://media.giphy.com/media/1jze3FAE8nENW/giphy.gif',
    'https://media2.giphy.com/media/WAGYH6TFa8E9O/giphy.gif',
    'https://media0.giphy.com/media/1eulzZvD1cz0lyKcBJ/giphy.gif',
    'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
    'https://media.giphy.com/media/qi9MwDajfmXde/giphy.gif',
    'https://media3.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
    'https://media0.giphy.com/media/f3cwDsLAKkEAE/giphy.gif',
    'https://media2.giphy.com/media/4xpB3eE00FfBm/giphy.gif',
    'https://media.giphy.com/media/AQ7GWTm9iBxaU/giphy.gif',
    'https://media0.giphy.com/media/11vVUnbjUONl3q/giphy.gif',
    'https://media.giphy.com/media/9PgvV8ale90lQwfQTZ/giphy.gif',
    'https://media.giphy.com/media/YL5SehCH4EuAM/giphy.gif',
    'https://media.giphy.com/media/BsaFG67bRanhC/giphy.gif',
    'https://media.giphy.com/media/C23cMUqoZdqMg/giphy.gif',
    'https://media.giphy.com/media/IhPQmt87rL0Jf9I73K/giphy.gif',
    'https://media.giphy.com/media/SsNDV7vk05GjotlOvu/giphy.gif',
    'https://media0.giphy.com/media/Tdd58vnrtqTLWmdKeA/giphy.gif',
    'https://media.giphy.com/media/S78nkNXYVXAUJWY4H4/giphy.gif',
    'https://media.giphy.com/media/J4nFtTzjsluVhOOKJo/giphy.gif',
    'https://media.giphy.com/media/UWRyZHCsHtBFS/giphy.gif',
    'https://media3.giphy.com/media/r997ekHoZ6jdK/giphy.gif',
    'https://media3.giphy.com/media/WRPWMPe6HkyWs/giphy.gif',
    'https://media2.giphy.com/media/nOqDm37B67gcg/giphy.gif',
    'https://media.giphy.com/media/fwEVUFkDc66xA7mXBc/giphy.gif',
    'https://media2.giphy.com/media/jxETRYAi2KReel7pqy/giphy.gif',
    'https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif',
    'https://media.giphy.com/media/f05VvUD4SEdig/giphy.gif',
    'https://media.giphy.com/media/Jk4ZT6R0OEUoM/giphy.gif',
    'https://media1.giphy.com/media/1nQ8eYFjfT5xAKJpTz/giphy.gif',
    'https://media1.giphy.com/media/2zoLjKxnxHYS5fTJrr/giphy.gif',
    'https://media2.giphy.com/media/xUOwGks2TghYmEaqf6/giphy.gif',
    'https://media1.giphy.com/media/SSKfIa7bI6YT2AcMWE/giphy.gif',
    'https://media1.giphy.com/media/Wp0xMVPMbMUVh4xIOb/giphy.gif',
    'https://media2.giphy.com/media/RiiIAqThYlE9kIpbqW/giphy.gif',
    'https://media3.giphy.com/media/cJHBpFwQqSd5hCnOtS/giphy.gif',
    'https://media.giphy.com/media/1nQ8eYFjfT5xAKJpTz/giphy.gif',
    'https://media0.giphy.com/media/ZaFVUQJweIFLvi25v2/giphy.gif',
    'https://media.giphy.com/media/l378Bu88CUbQyFniM/giphy.gif',
    'https://media1.giphy.com/media/l378jvVVbvhjLojBK/giphy.gif',
    'https://media3.giphy.com/media/3ov9jRXY88TszvB8kw/giphy.gif',
    'https://media0.giphy.com/media/l378zKVk7Eh3yHoJi/giphy.gif',
    'https://media1.giphy.com/media/57WbKZXeVO6z7F2DET/giphy.gif',
    'https://media2.giphy.com/media/l378tbMVnOycjrfa0/giphy.gif',
    'https://media1.giphy.com/media/mFeBlofsDIDtFUVtno/giphy.gif',
    'https://media.giphy.com/media/W6aQJOobbZ8BboYFY4/giphy.gif',
    'https://media.giphy.com/media/kHHEyYTaSPPWn7IjSO/giphy.gif',
    'https://media.giphy.com/media/4KFvWyb6izh6e0spNL/giphy.gif',
    'https://media.giphy.com/media/cmYgHhyR2Ug0tYZxFf/giphy.gif',
    'https://media.giphy.com/media/2Ys9oIKMwdWxy4MxjK/giphy.gif',
    'https://media1.giphy.com/media/fo5yAsIt1ZkjXcFfSf/giphy.gif',
    'https://media.giphy.com/media/1ymqOsKqLqna4YLKCE/giphy.gif',
    'https://media1.giphy.com/media/1wmMjzfp0DV5xOCkil/giphy.gif',
    'https://media.giphy.com/media/VzHaBJtTIiRzrNRb6U/giphy.gif',
    'https://media0.giphy.com/media/fBM4lu1cFjhGktZvVQ/giphy.gif',
    'https://media.giphy.com/media/5z2cV4tWz04P4BQj9Z/giphy.gif',
    'https://media.giphy.com/media/1xOPXg3tjTFVEcnl2W/giphy.gif',
    'https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif'
];

const prices = [];

const randomImg = () => {
    let img = false;
    while (img === false) {
        const random = IMAGES[getRandomNumber(0, IMAGES.length - 1)];
        if (!prices.includes(random)) {
            img = random;
            prices.push(img);
        }
    }
    if (prices.length === IMAGES.length) prices.splice(0);
    return img;
};

export const preloadImage = () => {
    const img = randomImg();
    new Image().src = img;
    return img;
}