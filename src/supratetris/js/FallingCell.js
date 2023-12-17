class FallingCell {
  constructor(x, y, cellSize, colour) {
    this.x = x;
    this.y = y;
    this.cellSize = cellSize;
    this.colour = colour;
  }

  update() {
    this.y += 3;

    if (this.y - this.cellSize > height) {
      this.destruct();
    }
  }

  destruct() {
    let index = fallingCells.indexOf(this);
    if (index != -1) fallingCells.splice(index, 1);
  }

  display() {
    push();
    translate(this.x, this.y);

    image(this.colour, 0, 0, 40, 40);

    pop();
  }
}
