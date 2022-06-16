import './style.css'
import { snakeSpeed, update as updateSnake, draw as drawSnake } from './snake';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
body.appendChild(gameBoard);


//------------------------------------------

let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1/snakeSpeed) return

    lastRenderTime = currentTime;
    console.log('render')

    update()
    draw()
}

window.requestAnimationFrame(main);

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
}