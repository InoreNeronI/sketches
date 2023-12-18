class Food extends Block {
  constructor(width, colour) {
    super(-50, -50, width, colour);
  }

  place(x, y) {
    this.x = x;
    this.y = y;
  }
}
