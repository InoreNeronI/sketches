const parent = document.querySelector('.main');

class Game {
  constructor() {
    this.BLOCK_WIDTH = 35;
    this.GRID_COLOUR = [207, 181, 242];
    this.SNAKE_COLOUR = [117, 232, 116];
    this.FOOD_COLOUR = [230, 80, 90];
    this.canvasWidth = parent.offsetWidth - 20;
    this.canvasHeight = parent.offsetHeight - 20;
    this.grid;
    this.snake;
    this.food;
    this.score;
    this.gridColour;
    this.inputQueue = [];
    this.paused = false;

    this.SNAKE_MOVES = {
      UP: () => this.snake.up(),
      DOWN: () => this.snake.down(),
      LEFT: () => this.snake.left(),
      RIGHT: () => this.snake.right(),
    };

    const CANVAS = createCanvas(this.canvasWidth, this.canvasHeight);
    CANVAS.parent('Snake');
    const fr = (this.canvasWidth + this.canvasHeight) / 170;
    frameRate(fr);
    this.newGame();
  }

  newGame() {
    this.gridColour = [Math.random() * 130, Math.random() * 130, Math.random() * 130];
    this.grid = new Grid(this.canvasWidth, this.canvasHeight, this.gridColour, this.BLOCK_WIDTH);

    const safeBlock = this.grid.safeBlocks[0];
    this.snake = new Snake(safeBlock.x, safeBlock.y, this.BLOCK_WIDTH, this.SNAKE_COLOUR);

    this.food = new Food(this.BLOCK_WIDTH, this.FOOD_COLOUR);
    this._placeNewFood();

    this.score = new Score(this.BLOCK_WIDTH, this.BLOCK_WIDTH - this.BLOCK_WIDTH / 7, this.BLOCK_WIDTH / 1.5, 0);
  }

  drawPaused() {
    fill([220, 220, 220]);
    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text('PAUSED', this.canvasWidth / 2, this.canvasHeight / 2);
  }

  update() {
    if (this.paused) return this.drawPaused();

    // update snakes direction from the input queue
    this.inputQueue.length > 0 && this.inputQueue.shift().call();

    this.snake.update();

    this.grid.update();

    if (this.snake.isDead(this.grid)) {
      window.alert(`GAME OVER! Score: ${this.score.points}\nClick 'OK' to restart`);
      this.newGame();
    }

    if (this.snake.eat(this.food)) {
      this.score.points++;
      this._placeNewFood();
    }

    [this.grid, this.food, this.snake, this.score].forEach((object) => object.draw());
  }

  handleDoubleTap() {
    this._togglePaused();
  }

  handleKeyPress(keyCode) {
    if (keyCode === 80) {
      this._togglePaused();
      return;
    }

    if (this.paused) {
      return;
    }

    switch (keyCode) {
      case UP_ARROW:
        this._queueMove(this.SNAKE_MOVES.UP);
        break;
      case DOWN_ARROW:
        this._queueMove(this.SNAKE_MOVES.DOWN);
        break;
      case LEFT_ARROW:
        this._queueMove(this.SNAKE_MOVES.LEFT);
        break;
      case RIGHT_ARROW:
        this._queueMove(this.SNAKE_MOVES.RIGHT);
        break;
    }
  }

  handleTouchSwipe(dx, dy) {
    if (this.paused) {
      return;
    }

    const move =
      abs(dx) > abs(dy) ? (dx > 0 ? this.SNAKE_MOVES.RIGHT : this.SNAKE_MOVES.LEFT) : dy > 0 ? this.SNAKE_MOVES.DOWN : this.SNAKE_MOVES.UP;

    this._queueMove(move);
  }

  _queueMove(callback) {
    this.inputQueue.push(callback);
  }

  _togglePaused() {
    this.paused = !this.paused;
  }

  _placeNewFood() {
    const block = this._findUnoccupiedSafeBlock();
    this.food.place(block.x, block.y);
  }

  _findUnoccupiedSafeBlock() {
    const snakeCoords = this.snake.coords();
    const unOccupiedSafeBlocks = this.grid.safeBlocks.filter((block) => !snakeCoords[[block.x, block.y]]);

    return unOccupiedSafeBlocks[Math.floor(Math.random() * unOccupiedSafeBlocks.length)];
  }
}
