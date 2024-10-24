const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray = 
  [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]) {
    this.fieldArray = fieldArray;
    this._xCoord = 0;
    this._yCoord = 0;
    this.hatFound = false;
  }

  get xCoord() {
    return this._xCoord;
  }

  get yCoord() {
    return this._yCoord;
  }

  set xCoord(newXCoord) {
    if (newXCoord >= 0 && newXCoord < this.fieldArray[0].length) {
      this._xCoord = newXCoord;
    } else {
      console.log("You cannot move that way");
    }
  }

  set yCoord(newYCoord) {
    if (newYCoord >= 0 && newYCoord < this.fieldArray.length) {
      this._yCoord = newYCoord;
    } else {
      console.log("You cannot move that way");
    }
  }

  print() {
    console.log(this.fieldArray.join("\n"));
  }

  startGame() {
    this.print();

    while (!this.hatFound) {

      const moveInput = prompt("Which direction would you like to move? ").toLowerCase();

      switch (moveInput) {
        case "right":
          this.xCoord += 1;
          break;
        case "left":
          this.xCoord -= 1;
          break;
        case "up":
          this.yCoord -= 1;
          break;
        case "down":
          this.yCoord += 1;
          break;
        default:
          console.log("Input must be up, down, left or right");
          break;
      }

      if (this.fieldArray[this.yCoord][this.xCoord] === hat) {
        this.hatFound = true;
        console.log("You have won!");
      } else if (this.fieldArray[this.yCoord][this.xCoord] === hole) {
        console.log("You have lost!");
        break;
      }
      this.fieldArray[this.yCoord][this.xCoord] = pathCharacter;
      this.print();
    } 
  }

  static generateField(height, width, percentage = 20) {
    let array = new Array(height);
    for (let i = 0; i < height; i++) {
      array[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        array[i][j] = fieldCharacter;
      }
    }

    let numOfHoles = Math.floor((height * width * percentage) / 100);
    let holeXCoords = new Array(numOfHoles);
    let holeYCoords = new Array(numOfHoles);

    //generate hole coordinates
    for (let i = 0; i < numOfHoles; i++) {
      let newX = -1;
      let newY = -1;
      while (!holeXCoords.includes(newX) && !holeYCoords.includes(newY)) {
        newX = Math.floor(Math.random() * width);
        newY = Math.floor(Math.random() * height);
        holeXCoords[i] = newX;
        holeYCoords[i] = newY;
      }

      array[holeYCoords[i]][holeXCoords[i]] = hole;
    }

    //generate hat coord
    let hatX = Math.floor(Math.random() * width);
    let hatY = Math.floor(Math.random() * height);
    array[hatY][hatX] = hat;

    array[0][0] = pathCharacter;

    return array;
  }
}

const field = new Field(Field.generateField(5, 5));
field.startGame();
