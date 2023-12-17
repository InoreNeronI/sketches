// https://coolors.co/fffb00-00cfb7-d60000-57c02e-a01ce1-ffb700-001dd7

let targetShapes = [];

class Target {
  constructor(cellSize, num) {
    this.cellSize = cellSize;
    this.num = num;

    this.shapeAndColour = random(targetShapes);
    this.colour = this.shapeAndColour[0];
    this.shape = this.shapeAndColour[1];
  }

  update() {}

  newShape() {
    let oldShapeAndColour = this.shapeAndColour;

    while (this.shapeAndColour == oldShapeAndColour) this.shapeAndColour = random(targetShapes);

    this.colour = this.shapeAndColour[0];
    this.shape = this.shapeAndColour[1];
  }

  display() {
    push();
    translate(width / 2 - 500, height / 2 - 300);
    translate(0, 70 + this.num * 200);

    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        if (!this.shape[i][j]) continue;

        push();
        translate(j * this.cellSize, i * this.cellSize);

        stroke(palette.white);
        strokeWeight(2);
        noFill();
        rect(0, 0, this.cellSize, this.cellSize);

        pop();
      }
    }

    pop();
  }
}
