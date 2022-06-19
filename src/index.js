import './style.css';
import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake';
import { update as updateFood, draw as drawFood } from './food';
import { outsideGrid } from './grid';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
body.appendChild(gameBoard);

//--------------------------------------------------

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
    if(gameOver) {
        if(confirm('You lose. Press OK to plat again')) {
            window.location.reload()
        }
        return
    }

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
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}