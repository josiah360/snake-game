import { snakeSpeed, updateSnake, draw as drawSnake } from './snake';
import './style.css';


const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board'
body.appendChild(gameBoard)


// ----------------------------------------


let lastRenderTime = 0;


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) return

    
    console.log('render');
    lastRenderTime = currentTime;

    updateLoop()
    draw()
}

window.requestAnimationFrame(main)


function updateLoop() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
}

