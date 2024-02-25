class Mote {
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.size = random(10, 20);
        this.velX = random(-1, 1);
        this.velY = random(-1, 1);
    }
    update() {
        this.x += this.velX * 0.2;
        this.y += this.velY * 0.2;
        if (this.x > width + this.size) this.x = -this.size;
        else if (this.x < 0 - this.size) this.x = width + this.size;
        if (this.y > height + this.size) this.y = -this.size;
        else if (this.y < 0 - this.size) this.y = height + this.size;
    }
    display() {
        push();
        fill(palette.mote);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }
}

//# sourceMappingURL=index.27ffb54f.js.map
