import { onSnake, expandSnake } from "./snake";


let food = getRandomGridPosition()
const expansionRate = 1;

export function update() {
   if(onSnake(food)) {
       expandSnake(expansionRate)
       food = getRandomGridPosition()
   }
}


export function draw(gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        foodElement.style.gridColumnStart = food.x
        foodElement.style.gridRowStart = food.y
        gameBoard.appendChild(foodElement)
}

function getRandomGridPosition() {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}