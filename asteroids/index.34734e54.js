var s;
var asteroids = [];
var deadCounter = 0;
var deadTimer = 300;
var score = 0;
function resetSketch() {
    asteroids = [];
    deadCounter = 0;
    deadTimer = 300;
    score = 0;
    setup();
}
function Asteroid(state, x, y) {
    this.alive = true;
    this.position = createVector(0, 0);
    if (x === undefined && y === undefined) {
        edge = floor(random(0, 3));
        if (edge === 0) {
            this.position.x = 0;
            this.position.y = random(height);
        }
        if (edge === 1) {
            this.position.x = width;
            this.position.y = random(height);
        }
        if (edge === 2) {
            this.position.y = 0;
            this.position.x = random(width);
        }
        if (edge === 3) {
            this.position.y = height;
            this.position.x = random(width);
        }
    } else {
        this.position.x = x;
        this.position.y = y;
    }
    if (state === undefined) this.state = 3;
    else this.state = state;
    this.velocity = createVector(0, 0);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(0.01);
    this.size = 50 * this.state;
    this.hitbox = this.size * 0.5;
    this.generateShape = function() {
        angle = 0;
        radius = this.size / 2;
        verts = 8;
        vertArray = [];
        for(i = 0; i < verts; i++){
            rndRadius = random(radius - 10, radius + 10);
            x = cos(angle) * rndRadius;
            y = sin(angle) * rndRadius;
            vertArray.push(createVector(x, y));
            angle += TWO_PI / verts;
        }
        return vertArray;
    };
    this.shape = this.generateShape();
    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(1);
        this.position.add(this.velocity);
        if (this.position.x < -this.size / 2) this.position.x = width + this.size / 2;
        if (this.position.x > width + this.size / 2) this.position.x = -this.size / 2;
        if (this.position.y < -this.size / 2) this.position.y = height + this.size / 2;
        if (this.position.y > height + this.size / 2) this.position.y = -this.size / 2;
    };
    this.render = function() {
        push();
        translate(this.position.x, this.position.y);
        noFill();
        stroke(255, 50);
        //ellipse(0, 0, this.hitbox);
        stroke(255);
        px = this.shape[this.shape.length - 1].x;
        py = this.shape[this.shape.length - 1].y;
        for(v = 0; v < this.shape.length; v++){
            line(this.shape[v].x, this.shape[v].y, px, py);
            px = this.shape[v].x;
            py = this.shape[v].y;
        }
        pop();
    };
    this.kill = function() {
        if (this.state > 1) {
            asteroids.push(new Asteroid(this.state - 1, this.position.x, this.position.y));
            asteroids.push(new Asteroid(this.state - 1, this.position.x, this.position.y));
        }
        score += 10;
        this.alive = false;
    };
}
function Bullet(x, y, angleHeading) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 0.04;
    this.acceleration.add(angleHeading.mult(this.maxSpeed));
    this.render = function() {
        push();
        translate(this.position.x, this.position.y);
        rotate(angleHeading.heading());
        stroke(255);
        line(2, 0, 5, 0);
        pop();
    };
    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };
}
function Ship() {
    this.expRad = 0;
    this.alive = true;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 3;
    this.scl = 1.2;
    this.direction = createVector(0, 0);
    this.bullets = [];
    this.render = function() {
        push();
        translate(this.position.x, this.position.y);
        if (this.alive) {
            nose = createVector(10, 0).mult(this.scl);
            lWing = createVector(-10, -5).mult(this.scl);
            tail = createVector(-8, 0).mult(this.scl);
            rWing = createVector(-10, 5).mult(this.scl);
            rotate(this.direction.heading());
            noFill();
            stroke(255);
            strokeWeight(1);
            line(nose.x, nose.y, lWing.x, lWing.y);
            line(lWing.x, lWing.y, tail.x, tail.y);
            line(tail.x, tail.y, rWing.x, rWing.y);
            line(rWing.x, rWing.y, nose.x, nose.y);
        } else {
            noFill();
            stroke(255);
            strokeWeight(1);
            line(0 + this.expRad, 0 + this.expRad, 15 + this.expRad, 15 + this.expRad);
            line(0 - this.expRad, 0 - this.expRad, -8 - this.expRad, 15 - this.expRad);
            line(0 - this.expRad * 0.5, 5 - this.expRad * 0.5, 4 - this.expRad * 0.5, -12 - this.expRad * 0.5);
            this.expRad += 0.1;
        }
        pop();
    };
    this.aim = function() {
        mouseVector = createVector(mouseX, mouseY);
        dir = p5.Vector.sub(mouseVector, this.position);
        this.direction = dir;
    };
    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        if (this.position.x < 0) this.position.x = width;
        if (this.position.x > width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = height;
        if (this.position.y > height) this.position.y = 0;
        this.aim();
        this.checkBullets();
    };
    this.applyForce = function(force) {
        this.acceleration.add(force);
    };
    this.spawnBullet = function() {
        this.bullets.push(new Bullet(this.position.x, this.position.y, this.direction));
        this.deleteBullets();
    };
    this.checkBullets = function() {
        for(var b = this.bullets.length - 1; b >= 0; b--){
            for(var a = asteroids.length - 1; a >= 0; a--)if (p5.Vector.dist(this.bullets[b].position, asteroids[a].position) < asteroids[a].hitbox) {
                delete this.bullets[b];
                this.bullets.splice(b, 1);
                asteroids[a].kill();
                break;
            }
        }
    };
    this.deleteBullets = function() {
        for(var i1 = this.bullets.length - 1; i1 >= 0; i1--)if (this.bullets[i1].position.x < 0 || this.bullets[i1].position.x > width || this.bullets[i1].position.y < 0 || this.bullets[i1].position.y > height) {
            delete this.bullets[i1];
            this.bullets.splice(i1, 1);
        }
    };
    this.die = function() {
        this.alive = false;
    };
}
const parent = document.querySelector(".main");
function setup() {
    const CANVAS = createCanvas(parent.offsetWidth, parent.offsetHeight);
    CANVAS.parent("Asteroids");
    pixelDensity(2);
    background(0);
    s = new Ship();
    asteroids.push(new Asteroid());
}
function windowResized() {
    windowResizeHandler();
}
document.querySelector(".screen").addEventListener("click", ()=>setTimeout(windowResizeHandler, 5));
// @see https://stackoverflow.com/a/51600005
function windowResizeHandler() {
    resizeCanvas(parent.offsetWidth, parent.offsetHeight);
}
function draw() {
    if (!s.alive) {
        deadCounter += 1;
        if (deadCounter > deadTimer) resetSketch();
    }
    background(0);
    if (keyIsPressed) {
        if (s.alive) s.applyForce(s.direction.mult(0.001));
    }
    s.update();
    s.render();
    for(i = s.bullets.length - 1; i >= 0; i--){
        s.bullets[i].update();
        s.bullets[i].render();
    }
    for(i = asteroids.length - 1; i >= 0; i--){
        if (asteroids[i].alive != true) {
            delete asteroids[i];
            asteroids.splice(i, 1);
            break;
        }
        asteroids[i].update();
        asteroids[i].render();
        if (p5.Vector.dist(asteroids[i].position, s.position) < asteroids[i].hitbox) s.die();
    }
    if (frameCount % 50 === 0 && asteroids.length < 5) asteroids.push(new Asteroid(3));
    if (frameCount % 100 === 0 && s.alive) score += 1;
    push();
    fill(255);
    textSize(12);
    text(score, 10, 30);
    pop();
}
function mouseReleased() {
    if (s.alive) s.spawnBullet();
}

//# sourceMappingURL=index.34734e54.js.map
