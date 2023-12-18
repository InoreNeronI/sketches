class Brick extends Paddle {
  constructor(x, y, w, h, points) {
    super(x, y, w, h);
    this.points = points;
  }

  render() {
    push();
    strokeWeight(2);
    if (this.points === 1) {
      stroke('orchid');
      fill('plum');
    } else if (this.points === 2) {
      stroke('indianred');
      fill('lightcoral');
    } else if (this.points === 3) {
      stroke('darkorange');
      fill('orange');
    } else if (this.points === 4) {
      stroke('gold');
      fill('yellow');
    } else if (this.points === 5) {
      stroke('chartreuse');
      fill('greenyellow');
    } else if (this.points === 6) {
      stroke('darkturquoise');
      fill('turquoise');
    } else if (this.points === 7) {
      stroke('steelblue');
      fill('cadetblue');
    }
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width - 2, this.height - 2);
    textAlign(CENTER, CENTER);
    textSize(15);
    noStroke();
    fill(0);
    text(this.points, this.pos.x, this.pos.y);
    pop();
  }
}
