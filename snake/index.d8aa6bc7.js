class Snake {
    constructor(x, y, width, colour, initialSize = 1){
        this.x = x;
        this.y = y;
        this.width = width;
        this.colour = colour;
        this.initialSize = initialSize;
        this.borderRadius = this.width / 2;
        this.xdir = width;
        this.ydir = 0;
        this.size = initialSize;
        this.body = [];
        this.eyeSize = width / 5;
        this.eyePosFacing = width / 2;
        this.eyePosLeft = width / 4;
        this.eyePosRight = width / 1.25;
    }
    coords() {
        return this.body.reduce((coords, block)=>{
            coords[[
                block.x,
                block.y
            ]] = true;
            return coords;
        }, {});
    }
    changeDir(xdir, ydir) {
        this.xdir = xdir;
        this.ydir = ydir;
    }
    eat(food) {
        return this.x === food.x && this.y === food.y && ++this.size;
    }
    isDead(grid) {
        return this.body.concat(grid.unsafeBlocks).some((block)=>dist(this.x, this.y, block.x, block.y) < 1);
    }
    up() {
        (this.size === 0 || this.xdir !== 0 && this.ydir === 0) && this.changeDir(0, -this.width);
    }
    down() {
        (this.size === 0 || this.xdir !== 0 && this.ydir === 0) && this.changeDir(0, this.width);
    }
    left() {
        (this.size === 0 || this.xdir === 0 && this.ydir !== 0) && this.changeDir(-this.width, 0);
    }
    right() {
        (this.size === 0 || this.xdir === 0 && this.ydir !== 0) && this.changeDir(this.width, 0);
    }
    update() {
        for(let i = 0; i < this.body.length - 1; i++)this.body[i] = this.body[i + 1];
        if (this.size >= this.body.length) this.body[this.size - 1] = createVector(this.x, this.y);
        this.x += this.xdir;
        this.y += this.ydir;
    }
    isFacingUp() {
        return this.xdir === 0 && this.ydir < 0;
    }
    isFacingDown() {
        return this.xdir === 0 && this.ydir > 0;
    }
    isFacingRight() {
        return this.xdir > 0 && this.ydir === 0;
    }
    isFacingLeft() {
        return this.xdir < 0 && this.ydir === 0;
    }
    getHeadDimensions() {
        return [
            this.isFacingUp() || this.isFacingLeft() ? this.borderRadius : 0,
            this.isFacingUp() || this.isFacingRight() ? this.borderRadius : 0,
            this.isFacingDown() || this.isFacingRight() ? this.borderRadius : 0,
            this.isFacingDown() || this.isFacingLeft() ? this.borderRadius : 0
        ];
    }
    getEyeDimensions() {
        return [
            this.isFacingLeft() || this.isFacingRight() ? this.eyePosFacing : this.eyePosLeft,
            this.isFacingLeft() || this.isFacingRight() ? this.eyePosFacing : this.eyePosRight,
            this.isFacingLeft() || this.isFacingRight() ? this.eyePosLeft : this.eyePosFacing,
            this.isFacingLeft() || this.isFacingRight() ? this.eyePosRight : this.eyePosFacing
        ];
    }
    draw() {
        fill(this.colour);
        const [topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius] = this.getHeadDimensions();
        // draw head
        rect(this.x, this.y, this.width, this.width, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius);
        // draw body
        this.body.forEach((block)=>rect(block.x, block.y, this.width, this.width));
        // draw eyes
        fill(25, 25, 25);
        const [xEyeLeft, xEyeRight, yEyeLeft, yEyeRight] = this.getEyeDimensions();
        circle(this.x + xEyeLeft, this.y + yEyeLeft, this.eyeSize);
        circle(this.x + xEyeRight, this.y + yEyeRight, this.eyeSize);
    }
}

//# sourceMappingURL=index.d8aa6bc7.js.map
