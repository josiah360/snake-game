import './style.css';
import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from './snake';
import { update as updateFood, draw as drawFood } from './food';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
body.appendChild(gameBoard);

//--------------------------------------------------

let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime
    console.log('render')

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
    drawFood(gameBoard)
}