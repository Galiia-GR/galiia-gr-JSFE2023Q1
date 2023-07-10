import './styles/style.css';
import { levelsList } from './levelList';
import DefaultLevel from './DefaultLevel';

const showLevel = document.querySelector('.levels-show');
const arrBoardPictires = document.querySelectorAll('.bun');
const htmlMarkUp = document.querySelector('.editor-html__markup');
const arrLevels = document.querySelectorAll('.levels__item');
const levels = document.querySelectorAll('.levels-container');
const inputPlace = document.querySelector('.editor-css__input') as HTMLInputElement;
const buttonReset = document.querySelector('.editor-css__resetLev');
const dataLevel: number[] = [];
const dataTips: number[] = [];

const layerBunsZero = document.querySelector('.board-buns__level0') as HTMLElement;
const layerBunsOne = document.querySelector('.board-buns__level1') as HTMLElement;
const layerBunsTwo = document.querySelector('.board-buns__level2') as HTMLElement;
const layerBunsThree = document.querySelector('.board-buns__level3') as HTMLElement;
const layerBunsFour = document.querySelector('.board-buns__level4') as HTMLElement;
const layerBunsFive = document.querySelector('.board-buns__level5') as HTMLElement;

const boardImg = document.querySelector('.board-img') as HTMLElement;
const winImg = document.querySelector('.board-win') as HTMLElement;
const winHeader = document.querySelector('.editor-win') as HTMLElement;
const editorHeader = document.querySelector('.editor-title') as HTMLElement;
const button = document.querySelector('.editor-css__button') as HTMLElement;
const buttonHelp = document.querySelector('.editor-css__help') as HTMLElement;

let currentLevel: number = levelsList[0].level;
let tag: string;

function drawLevel(level: number) {
    const myObj = new DefaultLevel(
        levelsList[level].level,
        levelsList[level].title,
        levelsList[level].history,
        levelsList[level].tag,
        levelsList[level].id,
        levelsList[level].html,
        levelsList[level].childFist,
        levelsList[level].childSecond,
        levelsList[level].childThird,
        levelsList[level].childFourth,
        levelsList[level].childFifth
    );

    if (layerBunsOne?.style) layerBunsOne.style.display = 'none';
    if (layerBunsTwo?.style) layerBunsTwo.style.display = 'none';
    if (layerBunsThree?.style) layerBunsThree.style.display = 'none';
    if (layerBunsFour?.style) layerBunsFour.style.display = 'none';
    if (layerBunsFive?.style) layerBunsFive.style.display = 'none';

    arrLevels.forEach((el) => {
        if (Number(el.getAttribute('id')) === currentLevel) el.classList.add('hover');
    });
    myObj.createAppendLevel();
    myObj.createHtmlMarkUp();
    myObj.createHintsShakeElements();
    myObj.pressHelp();

    tag = myObj.tag;
}

drawLevel(currentLevel);

function clearDrawLevel() {
    if (htmlMarkUp && showLevel && arrBoardPictires) {
        htmlMarkUp.innerHTML = '';
        showLevel.innerHTML = '';
        arrBoardPictires.forEach((element) => {
            if (element.classList.contains('shake')) element.classList.remove('shake');
        });
        arrLevels.forEach((el) => {
            if (el.classList.contains('hover')) el.classList.remove('hover');
        });
    }
}

levels.forEach((el) =>
    el.addEventListener('click', (e) => {
        const temp = e.target;

        if ((temp as HTMLElement)?.getAttribute('id')) {
            currentLevel = Number((temp as HTMLElement)?.getAttribute('id'));
            inputPlace.value = '';

            clearDrawLevel();
            drawLevel(currentLevel);
        }
    })
);

htmlMarkUp?.addEventListener('mouseover', (e) => {
    const targetNode = e.target as Node;
    if (targetNode.parentNode) {
        const parentElement = targetNode.parentNode as HTMLElement;
        const dataHtml = parentElement.getAttribute('data');

        arrBoardPictires.forEach((el) => {
            if (dataHtml) {
                if (el.parentElement?.classList.contains(dataHtml)) {
                    el.parentElement?.classList.add('hover');
                }
            }

            const dataTools = el.getAttribute('data-tooltip');

            if (dataTools && el.parentElement?.classList.contains('hover')) {
                const tooltipEl = document.createElement('div');
                tooltipEl.classList.add('tooltip');

                const findElForTool = document.querySelectorAll(`
                [data="${dataHtml}"]`);

                console.log(findElForTool);

                findElForTool.forEach((elTool) => {
                    const spanEl = elTool.querySelector('span');

                    const spanText = spanEl ? spanEl.textContent : null;
                    if (spanText) {
                        tooltipEl.innerText = spanText;
                    }
                    el.parentNode?.append(tooltipEl);
                });
            }
        });
    }
});

htmlMarkUp?.addEventListener('mouseout', (e) => {
    const targetNode = e.target as Node;
    if (targetNode.parentNode) {
        const parentElement = targetNode.parentNode as HTMLElement;
        const dataHtml = parentElement.getAttribute('data');

        arrBoardPictires.forEach((el) => {
            if (dataHtml && el.parentElement?.classList.contains(dataHtml)) {
                el.parentElement?.classList.remove('hover');
            }

            const tooltipEl = el.parentElement?.querySelector('.tooltip');

            if (tooltipEl) {
                tooltipEl.classList.remove('tooltip');
                tooltipEl.remove();
            }
        });
    }
});

export function checkArray(arr: number[] = []) {
    const expected = Array.from(Array(11).keys()); // Создаем массив с элементами от 0 до 10
    return expected.every((element) => arr.includes(element));
}

const checkWin = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            const targetElement = mutation.target as HTMLElement;
            if (targetElement.classList.contains('win')) {
                dataLevel.push(Number(targetElement.getAttribute('id')));
                localStorage.setItem('dataLevel', JSON.stringify(dataLevel));
                clearDrawLevel();
                inputPlace.value = '';
                if (targetElement.classList.contains('tips')) {
                    dataTips.push(Number(targetElement.getAttribute('id')));
                    localStorage.setItem('dataTips', JSON.stringify(dataTips));
                }
                if (checkArray(dataLevel)) {
                    if (layerBunsZero?.style) layerBunsZero.style.display = 'none';
                    if (layerBunsOne?.style) layerBunsOne.style.display = 'none';
                    if (layerBunsTwo?.style) layerBunsTwo.style.display = 'none';
                    if (layerBunsThree?.style) layerBunsThree.style.display = 'none';
                    if (layerBunsFour?.style) layerBunsFour.style.display = 'none';
                    if (layerBunsFive?.style) layerBunsFive.style.display = 'none';

                    if (boardImg?.style) boardImg.style.display = 'none';
                    if (editorHeader?.style) editorHeader.style.display = 'none';

                    if (winHeader?.style) winHeader.style.display = 'block';
                    if (winImg?.style) winImg.style.display = 'block';

                    console.log('!!!!You win !!!!');
                } else {
                    if (currentLevel !== 10) {
                        currentLevel = Number(targetElement.getAttribute('id')) + 1;
                        drawLevel(currentLevel);
                    }
                    return;
                }
            }
        }
    });
});

arrLevels.forEach((element) => {
    checkWin.observe(element, { attributes: true });
});

function win() {
    button.addEventListener('click', () => {
        if (tag !== inputPlace?.value) {
            boardImg.style.animation = 'shake 0.5s';
            boardImg.style.border = '5px solid red';
            console.log('You wrong');
        } else {
            arrLevels.forEach((item) => {
                if (Number(item.getAttribute('id')) === currentLevel) {
                    item.classList.add('win');
                }
            });
            console.log('You right');
        }
    });

    inputPlace.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (tag !== inputPlace.value) {
                boardImg.style.animation = 'shake 0.5s';
                boardImg.style.border = '5px solid red';
                console.log('You wrong');
            } else {
                arrLevels.forEach((item) => {
                    if (Number(item.getAttribute('id')) === currentLevel) {
                        item.classList.add('win');
                    }
                });
                console.log('You right');
            }
        }
    });
}

boardImg.addEventListener('animationend', () => {
    boardImg.style.animation = '';
    boardImg.style.border = '5px solid rgba(73, 36, 158, 0.61)'; // Сбросить стиль animation
});

function winStore() {
    const getLevel = localStorage.getItem('dataLevel');
    const getTips = localStorage.getItem('dataTips');
    if (getLevel) {
        const levelData = JSON.parse(getLevel);
        arrLevels.forEach((item) => {
            levelData.forEach((el: number) => {
                if (Number(item.getAttribute('id')) === el) {
                    item.classList.add('win');
                }
            });
        });
    }
    if (getTips) {
        const levelTips = JSON.parse(getTips);
        arrLevels.forEach((item) => {
            levelTips.forEach((el: number) => {
                if (Number(item.getAttribute('id')) === el) {
                    item.classList.add('tips');
                }
            });
        });
    }
}

buttonReset?.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

function checkTips() {
    buttonHelp.addEventListener('click', () => {
        arrLevels.forEach((item) => {
            if (Number(item.getAttribute('id')) === currentLevel) {
                item.classList.add('tips');
                console.log('I see');
            }
        });
    });
}

win();

winStore();

checkTips();
