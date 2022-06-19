import { onSnake, expandSnake } from "./snake";

let food = {x: 1, y: 1};
const EXPANSION_RATE = 1;

export function update() {
  if(onSnake(food)) {
      expandSnake(EXPANSION_RATE)
      food = {x: 10, y: 18}
  } 
}

export function draw(gameBody) {
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    gameBody.appendChild(foodElement)
}