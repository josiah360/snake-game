import './style.css'
import { snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake';
import { update as updateFood, draw as drawFood } from './food';
import { outsideGrid } from './grid';

const body = document.querySelector('body');
const gameBoard = document.createElement('div');
gameBoard.id = 'game-board';
body.appendChild(gameBoard);


//------------------------------------------

