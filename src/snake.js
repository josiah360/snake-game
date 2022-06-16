export const snakeSpeed = 1;
const snakeBody = [
    {x: 11, y: 11},
    {x: 12, y: 11},
    {x: 13, y: 11}
]

export function update() {
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += 0;
    snakeBody[0].y += 0;
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