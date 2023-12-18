class Block {
  constructor(x, y, width, colour) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.colour = colour;
  }

  draw() {
    fill(this.colour);
    rect(this.x, this.y, this.width, this.width);
  }
}
