function Cloud() {
  var graphics = loadImage('../assets/chrome-dinosaur/cloud.png');

  this.x = width;
  this.y = random(0, height - 80);

  this.width = 60;
  this.height = 20;

  this.velocityMultiplier = 0.5;

  this.update = function () {
    this.x += movementVelocity * this.velocityMultiplier;
  };

  this.show = function () {
    image(graphics, this.x, this.y, this.width, this.height);
  };

  this.offscreen = function () {
    return this.x < -this.width;
  };
}
