import './index.less';
import { getRandomNumber } from './helpers';
import { preloadImage } from './images';

let solution;
let MAX = 8;
const GOAL = 5;
let counter = 0;

const exerciseEl = document.querySelector('.js-exercise');
const numPadEl = document.querySelector('.js-num-pad');
const winEl = document.querySelector('.js-win');
const gifEl = winEl.querySelector('.js-gif');
let imgToShow = '';

const exerciseGenerator = {
    '+': (randoms) => {
        const valueZ = Math.max(...randoms);
        const valueX = Math.min(...randoms);
        const valueY = valueZ - valueX;
        return { valueX, valueY, valueZ };
    },
    '-': (randoms) => {
        const valueX = Math.max(...randoms);
        const valueZ = Math.min(...randoms);
        const valueY = valueX - valueZ;
        return { valueX, valueY, valueZ };
    }
}
const symbols = Object.keys(exerciseGenerator);

const resetInterface = () => {
    document.body.classList.remove('wrong', 'correct');

    exerciseEl.innerHTML = '';

    const radio = document.querySelector('input[name="num"]:checked');
    if (radio) radio.checked = false;
}

const createExercise = (ev) => {
    if (ev) ev.preventDefault();

    resetInterface();

    const randoms = [getRandomNumber(0, MAX), getRandomNumber(1, MAX)];
    const symbol = symbols[getRandomNumber(0, symbols.length - 1)];
    const { valueX, valueY, valueZ } = exerciseGenerator[symbol](randoms)

    return { valueX, valueY, valueZ, symbol };
}

const setExercise = ({ valueX, valueY, valueZ = '&hellip;', symbol }) => {
    const dots = new Array(valueX).fill({}).map(() => '<div class="dot"></div>');
    exerciseEl.innerHTML = `
        <span>${valueX}${symbol}${valueY}=${valueZ}</span>
        <div class="dots">${dots.join('')}</div>
    `;
}

const validateExercise = (ev) => {
    document.body.classList.remove('wrong', 'correct');
    if (parseInt(ev.target.value, 10) === solution.valueZ) {
        document.body.classList.add('correct');
        setExercise({ ...solution });
        counter++;
        setTimeout(() => {
            solution = createExercise();
            setExercise({ ...solution, valueZ: '&hellip;' });
            if (counter === GOAL) {
                counter = 0;
                gifEl.setAttribute('src', imgToShow);
                winEl.classList.add('visible');
                imgToShow = preloadImage();
            }
        }, 1200);
    } else {
        document.body.classList.add('wrong');
        setTimeout(() => {
            document.body.classList.remove('wrong');
        }, 900);
    }
}

const createNumPad = (max = MAX) => {
    numPadEl.innerHTML = new Array(max + 1).fill({}).map((_, idx) => `
    <label>
        <input type="radio" value="${idx}" name="num" />
        <span class="value">${idx}</span>
    </label>`).join('');

    [...numPadEl.querySelectorAll('input[name="num"]')].forEach(el => {
        el.addEventListener('change', validateExercise)
    });
};

createNumPad(MAX);

winEl.addEventListener('click', (ev) => ev.target.classList.remove('visible'));
gifEl.addEventListener('click', () => winEl.classList.remove('visible'));
imgToShow = preloadImage();

solution = createExercise();
setExercise({ ...solution, valueZ: '&hellip;' });
