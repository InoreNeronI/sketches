// https://coolors.co/242331-533e2d-a27035-b88b4a-ddca7d

let palette = {
  white: '#DDCA7D',
  light: '#B88B4A',
  mid: '#A27035',
  dark: '#533E2D',
  black: '#242331',
  blacker: '#1B1924',
  blackest: '#16151E',
  mote: '#322C44',
};

let grid;
let targets = [];
let fallingCells = [];
let motes = [];

let cellSize = 40;

let score = -1;

let images = {};
let sounds = {};
let soundIndexes = {};

let fudgeFont;

let interacted = false;

function preload() {
  images.tile = {};

  images.tile.deselected = loadImage('../assets/supratetris/images/tile-deselected.png');
  images.tile.selected = loadImage('../assets/supratetris/images/tile-selected.png');

  images.tile.blue = loadImage('../assets/supratetris/images/tile-cyan.png');
  images.tile.cyan = loadImage('../assets/supratetris/images/tile-green.png');
  images.tile.green = loadImage('../assets/supratetris/images/tile-orange.png');
  images.tile.orange = loadImage('../assets/supratetris/images/tile-purple.png');
  images.tile.purple = loadImage('../assets/supratetris/images/tile-red.png');
  images.tile.red = loadImage('../assets/supratetris/images/tile-yellow.png');
  images.tile.yellow = loadImage('../assets/supratetris/images/tile-blue.png');

  images.background = loadImage('../assets/supratetris/images/background.png');

  fudgeFont = loadFont('../assets/supratetris/DarumadropOne-Regular.ttf');

  sounds.rerollButton = [];
  soundIndexes.rerollButton = 0;
  for (let i = 0; i < 6; i++) {
    sounds.rerollButton.push(new Audio('../assets/supratetris/sounds/reroll-button.ogg'));
  }

  sounds.completeShape = [];
  soundIndexes.completeShape = 0;
  for (let i = 0; i < 6; i++) {
    sounds.completeShape.push(new Audio('../assets/supratetris/sounds/complete-shape.ogg'));
  }

  sounds.incompleteShape = [];
  soundIndexes.incompleteShape = 0;
  for (let i = 0; i < 6; i++) {
    sounds.incompleteShape.push(new Audio('../assets/supratetris/sounds/incomplete-shape.ogg'));
  }

  sounds.selectBlock = [];
  for (let i = 1; i <= 3; i++) {
    sounds.selectBlock.push(new Audio('../assets/supratetris/sounds/select-block-' + i + '.ogg'));
  }

  sounds.deselectBlock = [];
  soundIndexes.deselectBlock = 0;
  for (let i = 0; i < 6; i++) {
    sounds.deselectBlock.push(new Audio('../assets/supratetris/sounds/deselect-block.ogg'));
  }

  sounds.music = new Audio('../assets/supratetris/sounds/music.ogg');
  sounds.music.loop = true;
}

function windowResized() {
  windowResizeHandler();
}

document.querySelector('.screen').addEventListener('click', () => setTimeout(windowResizeHandler, 5));
const parent = document.querySelector('.main');

// @see https://stackoverflow.com/a/51600005
function windowResizeHandler() {
  resizeCanvas(parent.offsetWidth, parent.offsetHeight);
}

function setup() {
  const CANVAS = createCanvas(parent.offsetWidth, parent.offsetHeight);
  CANVAS.parent('Supratetris');

  for (let colour in palette) {
    palette[colour] = color(palette[colour]);
  }

  targetShapes = [
    [
      images.tile.cyan,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ],
    ],
    [
      images.tile.cyan,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ],
    ],
    [
      images.tile.cyan,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.cyan,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.red,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.green,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.red,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.green,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.red,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.green,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.red,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.green,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.yellow,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.yellow,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.yellow,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.yellow,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.purple,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.purple,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.purple,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.purple,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.orange,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.blue,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.blue,
      [
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.orange,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.orange,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.blue,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.blue,
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
    [
      images.tile.orange,
      [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    ],
  ];

  rectMode(CENTER);
  imageMode(CENTER);
  textFont(fudgeFont);
  textAlign(CENTER, CENTER);

  targetBubble = new TargetBubble();

  for (let i = 0; i < 50; i++) {
    motes.push(new Mote());
  }

  setupButtons();
  newGame();
}

function setupButtons() {
  let respinButton = select('#respin-button');
  let buttonX = windowWidth / 2 - 400 - 120;
  let buttonY = windowHeight / 2 - 303;
  respinButton.style('transform', 'translate(' + buttonX + 'px,' + buttonY + 'px)');
  respinButton.style('display', 'inline');
  respinButton.mousePressed(respin);
}

function newGame() {
  grid = new Grid(10, 14, cellSize);
  grid.createGrid();
  grid.updateScore();
  targets = [];

  for (let i = 0; i < 3; i++) {
    targets.push(new Target(cellSize, i));
  }
}

function draw() {
  update();
  display();
  displayUI();
}

function update() {
  grid.update();
  targetBubble.update();

  for (let i = 0; i < targets.length; i++) {
    targets[i].update();
  }

  for (let i = 0; i < fallingCells.length; i++) {
    fallingCells[i].update();
  }

  for (let i = 0; i < motes.length; i++) {
    motes[i].update();
  }
}

function display() {
  image(images.background, width / 2, height / 2, width, height);

  for (let i = 0; i < motes.length; i++) {
    motes[i].display();
  }

  grid.display();
  targetBubble.display();

  for (let i = 0; i < targets.length; i++) {
    targets[i].display();
  }

  for (let i = 0; i < fallingCells.length; i++) {
    fallingCells[i].display();
  }
}

function displayUI() {
  push();
  translate(width / 2 + 420, height / 2 - 200);

  fill(palette.blacker);
  stroke(palette.blackest);
  strokeWeight(5);
  rect(0, 0, 270, 200, 40);

  fill(palette.white);
  textSize(30);
  text('lowest score', 0, -40);
  textSize(60);
  text(score, 0, 5);

  pop();

  fill(palette.white);
  textSize(30);
}

function mousePressed() {
  if (grid.hover()) {
    if (grid.validate()) {
      grid.dropSelected();
      grid.updateScore();
      playSoundFromArray('completeShape');
    }
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    respin();
  }
}

function respin() {
  for (let i = 0; i < targets.length; i++) {
    targets[i].newShape();
  }
  grid.addNewRow();
  grid.clearSelected();

  playSoundFromArray('rerollButton');
}

function playSoundFromArray(name) {
  sounds[name][soundIndexes[name]].play();
  soundIndexes[name]++;
  if (soundIndexes[name] >= sounds[name].length) soundIndexes[name] = 0;
  return soundIndexes[name];
}
