import {onSnake, expandSnake} from './snake.js'

let food = {x: 1, y: 1}
const EXPANSION_RATE = 1;

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = {x: 18, y: 10}
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridColumnStart = food.x;  
    foodElement.style.gridRowStart = food.y;
    gameBoard.appendChild(foodElement);
}