import './style.css'
import { update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';

body.appendChild(gameBoard)

// -------------------------------------------------

let lastRenderTime = 0;


function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1/snakeSpeed) return

    
    lastRenderTime = currentTime;
    console.log('Render')

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
}