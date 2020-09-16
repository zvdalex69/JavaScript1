const SIZE = {
  WIDTH: 20,
  HEIGHT: 20,
};

let SNAKE_SPEED = 300;

let $gameField;
let $gameTable
let snakeCoordX;
let snakeCoordY;
let interval;
let direction = 'top';
let snake = [];
let score = 0;

function prepareGameField() {
  $gameTable = document.createElement('table');
  $gameTable.classList.add('game-table');

  for (let i = 0; i < SIZE.HEIGHT; i++) {
    const $row = document.createElement('tr');

    for (let j = 0; j < SIZE.WIDTH; j++) {
      const $cell = document.createElement('td');
      $cell.classList.add('game-table-cell');

      $row.appendChild($cell);
    }

    $gameTable.appendChild($row);
  }

  $gameField.appendChild($gameTable);
}

function respawn() {

  snakeCoordX = Math.floor(SIZE.WIDTH / 2);
  snakeCoordY = Math.floor(SIZE.HEIGHT / 2);

  const $snakeHead = $gameTable.children[snakeCoordY].children[snakeCoordX];
  $snakeHead.classList.add('snake-unit');

  const $snakeTail = $gameTable.children[snakeCoordY + 1].children[snakeCoordX];
  $snakeTail.classList.add('snake-unit');

  snake.push($snakeTail);
  snake.push($snakeHead);
}

function inBounds() {
  return snakeCoordX >= 0 && snakeCoordX < SIZE.WIDTH && snakeCoordY >= 0 && snakeCoordY < SIZE.HEIGHT;
}

function gameOver() {
  alert('You loose');
  clearInterval(interval);
}

function isSnakeUnit(unit) {
  return snake.includes(unit);
}

function move() {
  switch (direction) {
    case 'top':
      snakeCoordY--;
      break;
    case 'bottom':
      snakeCoordY++;
      break;
    case 'left':
      snakeCoordX--;
      break;
    case 'right':
      snakeCoordX++;
      break;
  }

  if (!inBounds()) {
    if (snakeCoordX <= 0) {
      snakeCoordX = SIZE.WIDTH;
    } else if (snakeCoordX >= SIZE.WIDTH) {
      snakeCoordX = 0;
    } else if (snakeCoordY <= 0) {
      snakeCoordY = SIZE.HEIGHT;
    } else if (snakeCoordY >= SIZE.HEIGHT) {
      snakeCoordY = 0;
    }
  }


  let $newUnit = $gameTable.children[snakeCoordY].children[snakeCoordX];
  if (!isSnakeUnit($newUnit)) {
    $newUnit.classList.add('snake-unit');
    snake.push($newUnit);

    if (!isFood($newUnit)) {
      const $snakeRemoved = snake.shift();
      $snakeRemoved.classList.remove('snake-unit');
    }
  } else {
    gameOver();
  }
}

function isFood(unit) {
  if (unit.classList.contains('food-unit')) {
    unit.classList.remove('food-unit');
    score++;
    document.querySelector('#score').textContent = score;
    SNAKE_SPEED = 300 - score * 5;
    clearInterval(interval);
    interval = setInterval(move, SNAKE_SPEED);
    createFood();
    return true;
  } else {
    return false;
  }
}

function createFood() {
  while (true) {
    let foodX = Math.floor(Math.random() * SIZE.WIDTH);
    let foodY = Math.floor(Math.random() * SIZE.HEIGHT);

    let $foodCell = $gameTable.children[foodY].children[foodX];

    if (!snake.includes($foodCell)) {
      $foodCell.classList.add('food-unit');

      break;
    }
  }
}

function handleStartClick(event) {
  respawn();

  interval = setInterval(move, SNAKE_SPEED);
  createFood();
}

function handleRenewClick(event) {
  window.location.reload();
}

function handleDirectionChange(event) {
  switch (event.code) {
    case 'ArrowLeft':
      if (direction !== 'right') direction = 'left';
      break;
    case 'ArrowUp':
      if (direction !== 'bottom') direction = 'top';
      break;
    case 'ArrowRight':
      if (direction !== 'left') direction = 'right';
      break;
    case 'ArrowDown':
      if (direction !== 'top') direction = 'bottom';
      break;
  }
}

function init() {
  $gameField = document.querySelector('#snake-field');

  prepareGameField();

  document.querySelector('#snake-start').addEventListener('click', handleStartClick);
  document.querySelector('#snake-renew').addEventListener('click', handleRenewClick);

  window.addEventListener('keydown', handleDirectionChange);
}

window.addEventListener('load', init);