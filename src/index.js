import './style.css';
import { SNAKE_SPEED, update as updateSnake, draw as drawSnake} from './snake';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
body.appendChild(gameBoard);

//------------------------------------------------------

let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);

    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;


    lastRenderTime = currentTime
    console.log(secondsSinceLastRender)

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