class TargetBubble {
    constructor(){
        this.x = width / 2 - 400;
        this.y = height / 2 + 70;
        this.w = 200;
        this.h = 550;
        this.bubbles = [];
        for(let i = 0; i < this.w; i += 50)for(let j = 0; j < this.h; j += 50)this.bubbles.push({
            x: i,
            y: j,
            size: random(110, 150),
            offset: random(3360)
        });
    }
    update() {}
    display() {
        push();
        translate(this.x - this.w / 2, this.y - this.h / 2);
        fill(palette.blackest);
        noStroke();
        for(let i = 0; i < this.bubbles.length; i++){
            push();
            translate(this.bubbles[i].x, this.bubbles[i].y);
            ellipse(0, 0, this.bubbles[i].size + sin((frameCount + this.bubbles[i].offset) * 0.002) * 40 + 10);
            pop();
        }
        fill(palette.blacker);
        noStroke();
        for(let i = 0; i < this.bubbles.length; i++){
            push();
            translate(this.bubbles[i].x, this.bubbles[i].y);
            ellipse(0, 0, this.bubbles[i].size + sin((frameCount + this.bubbles[i].offset) * 0.002) * 40);
            pop();
        }
        pop();
    }
}

//# sourceMappingURL=index.1d45d287.js.map
