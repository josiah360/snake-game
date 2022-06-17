let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            if(inputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break;
        case 'ArrowDown':
            if(inputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break;
        case 'ArrowLeft':
            if(inputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break;
        case 'ArrowRight':
            if(inputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break;
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}











// const food = {x: 1, y: 1}

// export function update() {
//     if(onSnake())
// }

// export function draw(gameBoard) {
//     const foodElement = document.createElement('div');
//     foodElement.classList.add('food');
//     foodElement.style.gridColumnStart = food.x;  
//     foodElement.style.gridRowStart = food.y;
//     gameBoard.appendChild(foodElement);
// }