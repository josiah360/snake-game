import { onSnake, expandSnake } from "./snake";
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
  if(onSnake(food)) {
      expandSnake(EXPANSION_RATE)
      food = getRandomFoodPosition();
  } 
}

export function draw(gameBody) {
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    gameBody.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let randomFoodPosition
    while(randomFoodPosition == null || onSnake(randomFoodPosition)) {
        randomFoodPosition = randomGridPosition()
    }
    return randomFoodPosition
}