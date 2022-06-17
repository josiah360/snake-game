import './style.css';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
body.appendChild(gameBoard);

//------------------------------------------------------

let lastRenderTime = 0;
const SNAKE_SPEED = 2;

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

}

function draw() {
    
}