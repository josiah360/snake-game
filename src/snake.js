export const snakeSpeed = 1;
const snakeBody = [{x: 11, y:11}]

export function update() {
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += 1
    snakeBody[0].x += 0
}

export function draw(gameBody) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        gameBody.appendChild(snakeElement);
    })
}