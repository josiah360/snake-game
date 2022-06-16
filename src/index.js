import './style.css'

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';

body.appendChild(gameBoard)

// -------------------------------------------------

let lastRenderTime = 0;
const gameSpeed = 2;

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1/gameSpeed) return

    
    lastRenderTime = currentTime
    console.log('render')
}

window.requestAnimationFrame(main)