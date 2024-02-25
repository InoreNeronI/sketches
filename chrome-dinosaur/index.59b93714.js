function Cactus() {
    var graphics = loadImage("../assets/chrome-dinosaur/cacti.png");
    this.x = width;
    this.y = height - 5;
    this.width = 20;
    this.height = 40;
    this.update = function() {
        this.x += movementVelocity;
    };
    this.offscreen = function() {
        return this.x < -this.width;
    };
    this.show = function() {
        image(graphics, this.x, this.y - this.height, this.width, this.height);
    };
    this.hits = function(dino) {
        if (this.x < dino.x + dino.width && this.x > dino.x - this.width) {
            if (dino.y >= height - this.height) return true;
        }
        return false;
    };
}

//# sourceMappingURL=index.59b93714.js.map
