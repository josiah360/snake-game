import { getInputDirection } from "./input";

export const SNAKE_SPEED = 2;
let newSegments = 0;
const snakeBody = [
    {x: 11, y: 11}
]

export function update() {
    addSegment()
    
    const inputDirection = getInputDirection()

    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBody) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        gameBody.appendChild(snakeElement)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if(index === 0 && ignoreHead) return false
        return equalPosition(position, segment)
    })
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}

export function expandSnake(amount) {
    newSegments += amount
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegment() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0;
}