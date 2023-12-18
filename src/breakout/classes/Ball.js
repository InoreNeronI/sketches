class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.speed = 3;
    this.vel = createVector(this.speed, -this.speed);
    this.r = 7;
  }

  render() {
    push();
    strokeWeight(3);
    stroke('rebeccapurple');
    fill('crimson');
    circle(this.pos.x, this.pos.y, this.r * 2);
    pop();
  }

  update() {
    this.pos.add(this.vel);
  }

  colliding(brick) {
    if (this.pos.x + this.r < brick.pos.x - brick.width / 2) {
      return false;
    } else if (this.pos.x - this.r > brick.pos.x + brick.width / 2) {
      return false;
    } else if (this.pos.y + this.r < brick.pos.y - brick.height / 2) {
      return false;
    } else if (this.pos.y - this.r > brick.pos.y + brick.height / 2) {
      return false;
    } else {
      return true;
    }
  }

  bounceOff(brick) {
    this.vel.x *= -1;
    this.update();

    var prevVel = this.vel.copy();

    if (this.colliding(brick)) {
      //console.log("bounce");
      this.vel.x *= -1;
      this.vel.y *= -1;
    }
    this.pos.sub(prevVel);
  }

  edges() {
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

  bounce(paddle) {
    if (
      this.pos.x > paddle.pos.x - paddle.width / 2 &&
      this.pos.x < paddle.pos.x + paddle.width / 2 &&
      this.pos.y + this.r > paddle.pos.y - paddle.height / 2 &&
      this.pos.y < paddle.pos.y
    ) {
      let relativeX = map(this.pos.x, paddle.pos.x - paddle.width / 2, paddle.pos.x + paddle.width / 2, -1, 1);
      this.vel.set(relativeX * this.speed, -this.speed);
    }
  }

  end() {
    if (this.pos.y > height) {
      lives--;
      this.reset();
      paddle.reset();
    }
    if (lives <= 0) {
      gameOver = true;
      gameStarted = false;
    }
  }

  won() {
    if (bricks.length === 0) {
      gameWon = true;
      gameOver = false;
      gameStarted = false;
      gameInfo = false;
    }
  }

  reset() {
    this.pos.x = width / 2;
    this.pos.y = height - 94;
    this.vel.set(this.speed, -this.speed);
  }
}
