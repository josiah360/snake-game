import { getInputDirection } from "./input";

export const SNAKE_SPEED = 5;
let newSegments = 0;

const snakeBody = [
    {x: 11, y: 11},
    {x: 12, y: 11},
    {x: 13, y: 11}
]

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPosition(position, segment)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        gameBoard.appendChild(snakeElement)
    })
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0;
}