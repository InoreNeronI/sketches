var blockImg;
var foodImg;
var powerImg;
var angrypacmanImg;
var enemy1Img;
var enemy2Img;
var enemy3Img;
var enemy1ImgWeak;
var enemy2ImgWeak;
var enemy3ImgWeak;
var angrypacman = { instance: null, frame: 0, direction: 0 };
var blocks = [];
var foods = [];
var powers = [];
var enemies = [];
var activeEnemies = [];
var maze;
var p5 = new p5();
var standarSize = 40;

function preload() {
  blockImg = loadImage('../assets/angry-pacman/block.png');
  foodImg = loadImage('../assets/angry-pacman/food.png');
  powerImg = loadImage('../assets/angry-pacman/power.png');
  angrypacmanImg = loadImage('../assets/angry-pacman/pacman_tile.png');
  enemy1Img = loadImage('../assets/angry-pacman/pig_1.png');
  enemy2Img = loadImage('../assets/angry-pacman/pig_2.png');
  enemy3Img = loadImage('../assets/angry-pacman/pig_3.png');
  enemy1ImgWeak = loadImage('../assets/angry-pacman/pig_1.png');
  enemy2ImgWeak = loadImage('../assets/angry-pacman/pig_2.png');
  enemy3ImgWeak = loadImage('../assets/angry-pacman/pig_3.png');
}

function setup() {
  const CANVAS = createCanvas(882, 562);
  CANVAS.parent('AngryPacman');
  maze = new Maze();
  for (let i = 0; i < maze.rows; i++) {
    for (let j = 0; j < maze.cols; j++) {
      if (maze.maze[i][j] === '*') {
        blocks.push(new Element(j * standarSize, i * standarSize, blockImg, angrypacman));
      } else if (maze.maze[i][j] === '-') {
        foods.push(new Element(j * (standarSize + 1), i * (standarSize + 1), foodImg, angrypacman));
      } else if (maze.maze[i][j] === 'x') {
        powers.push(new Element(j * standarSize, i * standarSize, powerImg, angrypacman));
      } else if (maze.maze[i][j] === 'p') {
        angrypacman.instance = new Element(j * standarSize, i * standarSize, angrypacmanImg, angrypacman);
      } else if (maze.maze[i][j] === 'e1') {
        enemies.push(new Element(j * standarSize, i * standarSize, enemy1Img, angrypacman));
      } else if (maze.maze[i][j] === 'e2') {
        enemies.push(new Element(j * standarSize, i * standarSize, enemy2Img, angrypacman));
      } else if (maze.maze[i][j] === 'e3') {
        enemies.push(new Element(j * standarSize, i * standarSize, enemy3Img, angrypacman));
      }
    }
  }
  enemyOutInterval(5000);
}

function draw() {
  background(225, 245, 254);
  enemy1ImgWeak.filter('gray');
  enemy2ImgWeak.filter('gray');
  enemy3ImgWeak.filter('gray');
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].show();
  }
  for (let i = 0; i < foods.length; i++) {
    foods[i].show();
  }
  for (let i = 0; i < powers.length; i++) {
    powers[i].show();
  }
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].show();
  }
  for (let i = 0; i < activeEnemies.length; i++) {
    frameRate(8);
    activeEnemies[i].moveEnemy(blocks);
    activeEnemies[i].show();

    if (angrypacman.instance.enemyPackmanColission(activeEnemies[i])) {
      if (activeEnemies[i].isWeak === true) {
        const activeInitX = activeEnemies[i].initx;
        const activeInitY = activeEnemies[i].inity;
        activeEnemies.splice(i, 1);
        enemies.push(new Element(activeInitX, activeInitY, eval('enemy' + (i + 1) + 'Img'), angrypacman));
        document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 100;
      } else {
        alert('*** GAME OVER ***');
        window.location.reload();
      }
    }
  }
  angrypacman.instance.showPac();
  for (let i = 0; i < foods.length; i++) {
    if (angrypacman.instance.eatPac(foods[i])) {
      foods.splice(i, 1);
    }
  }
  for (let i = 0; i < powers.length; i++) {
    if (angrypacman.instance.eatPower(powers[i])) {
      powers.splice(i, 1);
      makeWeak();
    }
  }

  if (foods.length <= 0) {
    alert('*** WIN!!! ***');
    window.location.reload();
  }
}

function makeWeak() {
  for (let i = 0; i < activeEnemies.length; i++) {
    activeEnemies[i].image = eval('enemy' + (i + 1) + 'ImgWeak');
    activeEnemies[i].isWeak = true;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (maze.maze[angrypacman.instance.y / standarSize][angrypacman.instance.x / standarSize + 1] !== '*') {
      angrypacman.instance.movePac(0);
    }
  } else if (keyCode === DOWN_ARROW) {
    if (maze.maze[angrypacman.instance.y / standarSize + 1][angrypacman.instance.x / standarSize] !== '*') {
      angrypacman.instance.movePac(1);
    }
  } else if (keyCode === LEFT_ARROW) {
    if (maze.maze[angrypacman.instance.y / standarSize][angrypacman.instance.x / standarSize - 1] !== '*') {
      angrypacman.instance.movePac(2);
    }
  } else if (keyCode === UP_ARROW) {
    if (maze.maze[angrypacman.instance.y / standarSize - 1][angrypacman.instance.x / standarSize] !== '*') {
      angrypacman.instance.movePac(3);
    }
  }
}

function enemyOutInterval(interval) {
  setInterval(function () {
    if (enemies.length > 0) {
      const eout = enemies.pop();
      eout.isWeak = false;
      eout.enemyOut(maze);
      activeEnemies.push(eout);
    }
  }, interval);
}

// ----------------------------ELEMENT: BLOCK, FOOD, POWER, PACMAN, ENEMY----------------------------
function Element(x, y, image, character) {
  this.x = x;
  this.y = y;
  this.initx = this.x;
  this.inity = this.y;
  this.image = image;
  this.imageWeak = image;
  this.frame = character.frame;
  this.direction = character.direction;
  this.pacRadius = 16;
  this.foodRadius = 9;
  this.powerRadius = 6;
  this.enemyRadius = 18;
  this.blockRadius = 6;
  this.enemyMovement = true;
  this.isWeak = false;

  this.show = function () {
    p5.image(this.image, this.x, this.y);
  };

  this.showPac = function () {
    p5.image(
      this.image.get(standarSize * this.frame++, this.direction * standarSize, standarSize, standarSize),
      this.x,
      this.y,
    );
    this.frame = this.frame === 8 ? 0 : this.frame;
  };

  this.movePac = function (d) {
    this.direction = d;
    if (this.direction === 0) {
      this.x += standarSize;
    } else if (this.direction === 1) {
      this.y += standarSize;
    } else if (this.direction === 2) {
      this.x -= standarSize;
    } else if (this.direction === 3) {
      this.y -= standarSize;
    }
  };

  this.moveEnemy = function (blocks) {
    if (this.enemyMovement === false) {
      this.direction = Math.floor(Math.random() * 4);
    }
    const lastx = this.x;
    const lasty = this.y;
    if (this.direction === 0) {
      this.x += standarSize;
    } else if (this.direction === 1) {
      this.y += standarSize;
    } else if (this.direction === 2) {
      this.x -= standarSize;
    } else if (this.direction === 3) {
      this.y -= standarSize;
    }
    for (let i = 0; i < blocks.length; i++) {
      if (this.enemyBlockColission(blocks[i])) {
        this.x = lastx;
        this.y = lasty;
        this.enemyMovement = false;
        this.moveEnemy(blocks);
      } else {
        this.enemyMovement = true;
      }
    }
  };

  this.enemyBlockColission = function (b) {
    return (
      dist(this.x, this.y, b.x, b.y) < this.enemyRadius + b.blockRadius ||
      this.x + this.enemyRadius * 2 > maze.cols * (this.enemyRadius * 2) ||
      this.x - this.enemyRadius * 2 < 0 ||
      this.y + this.enemyRadius * 2 > maze.rows * (this.enemyRadius * 2) ||
      this.y - this.enemyRadius * 2 < 0
    );
  };

  this.enemyPackmanColission = function (e) {
    return dist(this.x, this.y, e.x, e.y) < this.pacRadius + e.enemyRadius;
  };

  this.enemyOut = function (m) {
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        if (m.maze[i][j] === 'eout') {
          this.y -= 80;
          break;
        }
      }
    }
  };

  this.eatPac = function (f) {
    if (dist(this.x, this.y, f.x, f.y) < this.pacRadius + f.foodRadius) {
      document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 10;
      return true;
    } else {
      return false;
    }
  };

  this.eatPower = function (p) {
    return dist(this.x, this.y, p.x, p.y) < this.pacRadius + p.powerRadius;
  };
}

// ----------------------------MAZE----------------------------
function Maze() {
  var levels = [];
  levels.push([
    ['*', '*', '*', '*', '-', '-', '-', '-', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '-', '-', '*'],
    ['*', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*', '*', 'x', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['*', '-', '*', '*', '-', '*', '-', '*', '*', '-', '-', '*', '*', '-', '-', '*', '*', '-', '-', '*', '-', '*'],
    ['*', '-', '*', '*', '-', '-', '-', '*', '*', '-', 'p', '-', '-', '-', '-', '*', '*', '-', '-', '-', '-', '*'],
    ['-', '-', 'x', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '*', '*', '-', '-', '-', '*', '-', '-', '*', '*', '*', '*', '-', '-', '*', '-', '-', '-', '-', '*'],
    ['-', '-', '-', '-', '-', '*', '-', '*', '-', '-', '-', '*', '*', '-', '-', '-', '*', '-', '-', '*', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '*', '*', '*', '-', '*', '*', '-', '*', '*', '*', '-', '-', '-', '-', '-'],
    [
      '-',
      '*',
      '*',
      '*',
      '-',
      '-',
      '-',
      '*',
      'x',
      '-',
      'eout',
      'eout',
      'eout',
      '-',
      '-',
      '-',
      '*',
      '-',
      '-',
      '-',
      '-',
      '*',
    ],
    ['*', '*', '', '*', '-', '-', '-', '*', '-', '*', '*', '*', '*', '*', '*', '-', '*', '-', '-', '-', '-', '*'],
    ['*', '*', '', '*', 'x', '*', '-', '-', '-', '*', 'e1', 'e2', 'e3', '', '*', '-', '-', '-', '-', '*', '-', '*'],
    ['-', '*', '*', '*', '-', '-', '-', '-', '-', '*', '', '', '', '', '*', '-', 'x', '-', '-', '-', '-', '*'],
    ['-', '-', '-', '-', '-', '-', '-', '*', '-', '*', '*', '*', '*', '*', '*', '-', '*', '-', '-', '-', '-', '-'],
    ['-', '*', '*', '*', '-', '*', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '*', '-', '-'],
  ]);
  levels.push([
    ['-', '*', '*', '*', '-', '*', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '*', '-', '-', '*', '-', '-'],
    [
      '-',
      '-',
      '-',
      '*',
      '-',
      '-',
      '-',
      '*',
      '-',
      '-',
      'eout',
      'eout',
      'eout',
      '-',
      '-',
      '-',
      '*',
      '-',
      '-',
      '-',
      '-',
      '*',
    ],
    ['-', '-', '-', '*', '-', '*', 'x', '*', '-', '*', '*', '*', '*', '*', '-', '-', '-', '-', '*', '*', '-', '*'],
    ['-', '*', '*', '*', '-', '*', '-', '*', '-', '*', 'e1', 'e2', 'e3', '*', '-', '-', '*', 'x', '-', '-', '-', '*'],
    ['-', '-', '-', '-', '-', '*', '-', '*', '-', '*', '*', '*', '*', '*', '-', '-', '*', '-', '-', '-', '-', '-'],
    ['*', '-', '-', '-', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['*', '-', '*', '*', '-', '*', '-', '*', '*', '-', '-', '*', '*', '-', '-', '*', '*', '-', '-', '*', '-', '*'],
    ['*', '-', '*', '*', '-', '-', '-', '*', '*', 'p', '-', '-', '-', '-', '-', '*', '*', '-', '-', '-', '-', '*'],
    ['-', '-', 'x', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*', '*', '*', '*', '*'],
    ['-', '-', '*', '*', '-', '-', '-', '*', '-', '-', '*', '*', '*', '*', '-', '-', '*', '-', '-', '-', '-', '*'],
    ['-', '-', '-', '-', '-', '*', '-', '*', '-', '-', '*', '', '', '*', '-', '-', '*', '-', '-', '*', '-', '*'],
    ['-', '-', '-', '-', '-', '-', '-', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '-', '-', '-', '-', '*'],
    ['-', '*', '*', '*', '-', '-', '-', '-', '-', '-', '-', 'x', '-', '-', '-', '-', '-', '-', '-', '-', '-', '*'],
    ['-', '*', '*', '*', '-', '*', '-', '*', '-', '-', '-', '-', '-', '-', '-', '-', '*', 'x', '-', '*', '-', '*'],
  ]);
  this.rows = 14;
  this.cols = 22;

  //-------------------------------------------------SELECT LEVEL HERE-------------------------------------------------
  this.maze = levels[0];
  //---------------------------------------------JUST CHANGE LEVEL'S INDEX---------------------------------------------

  this.show = function () {
    p5.image(this.image, this.x, this.y);
  };
}
