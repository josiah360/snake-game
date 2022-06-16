import { getInputDirection } from "./input";

export const snakeSpeed = 5;
const snakeBody = [{x: 11, y: 11}]

export function update() {
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}


export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        gameBoard.appendChild(snakeElement)
    })
}