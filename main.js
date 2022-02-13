const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const size = width/10;

// Iteration 1
function drawGrid() {
    context.lineWidth = 1;

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if ((row + column) % 2 === 0) {
          context.strokeRect(column * size, row * size, size, size);
        }
      }
      context.strokeRect(0, 0, 500, 500);
    } 
}

// Go on with the character creation

class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    moveUp() {
        this.row--;
    }
    moveRight() {
        this.col++;
    }
    moveDown() {
        this.row++;
    }
    moveLeft() {
        this.col--;
    }
};

class Treasure {
  constructor(col, row){
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    let treasureX = randomBetweenIntegers(0, 9) * size;
    let treasureY = randomBetweenIntegers(0, 9) * size;
  }
}

// Create New Character
const player = new Character(0, 0) 
  console.log(player.col, player.row);

  player.moveDown();
  player.moveDown();
  player.moveRight();
  
  console.log(player.col, player.row);

// Draw Player

function drawPlayer() {
const playerImage = new Image();
playerImage.src = '/images/character-down.png';
playerImage.addEventListener('load', () => {
  context.drawImage(playerImage, player.col * size, player.row * size, size, size);
});
}
//images/character-down.png


// Draw Treasure

function drawTreasure() {
  const treasureImage = new Image();
  treasureImage.src = '/images/treasure.png';
  treasureImage.addEventListener('load', () => {
    context.drawImage(treasureImage, 200, 100, size, size);
  })
}

// Clean everything


window.addEventListener('keydown', (event) => {
  const keyCode = event.code; 
  console.dir(event)
  event.preventDefault();
  
  switch (keyCode) {
    case 'ArrowLeft':
      console.log('l')
      player.moveLeft();
      break;
    case 'ArrowUp':
      console.log('u')
      player.moveUp();
      break;
    case 'ArrowRight':
      console.log('r')
      player.moveRight(); 
      break;
    case 'ArrowDown':
      console.log('d')
      player.moveDown();
      break;
  };
  drawEverything();

  



/* if (player.col === treasureX && player.row === treasureY) {
  alert('You reached the goal!');
} */

});

function drawEverything() {
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
