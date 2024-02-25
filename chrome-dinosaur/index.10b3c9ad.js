let isPlaying = false;
var dino;
var cactus = [];
var clouds = [];
var ground;
var game_over;
let game_over_width = 250;
let game_over_height = 100;
let score = 0;
let highScore = 0;
let movementVelocity = -5;
let nextCactus = 0;
let nextCloud = 0;
let fontRegular;
const parent = document.querySelector(".main");
function preload() {
    game_over = loadImage("../assets/chrome-dinosaur/game_over.png");
    fontRegular = loadFont("../assets/Creepster-Regular.ttf");
}
function setup() {
    const CANVAS = createCanvas(parent.offsetWidth, parent.offsetHeight);
    CANVAS.parent("ChromeDinosaur");
    textFont(fontRegular);
    ground = new Ground();
    dino = new Dino();
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
    background(255);
    if (frameCount % 8 == 0) {
        score += 1;
        if (score > highScore) highScore = score;
    }
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(16);
    text(score, width - 10, 25);
    textStyle(NORMAL);
    text(highScore, width - 10, 45);
    ground.update();
    ground.show();
    dino.update();
    dino.show();
    if (nextCactus <= 0) {
        cactus.push(new Cactus());
        nextCactus = random(70, 150);
    }
    if (nextCloud <= 0) {
        clouds.push(new Cloud());
        nextCloud = random(80, 120);
    }
    nextCactus--;
    nextCloud--;
    for(let i = clouds.length - 1; i >= 0; i--){
        clouds[i].update();
        clouds[i].show();
        if (clouds[i].offscreen()) clouds.splice(i, 1);
    }
    for(let i = cactus.length - 1; i >= 0; i--){
        cactus[i].update();
        cactus[i].show();
        if (cactus[i].offscreen()) cactus.splice(i, 1);
        if (cactus[i]) {
            if (cactus[i].hits(dino)) {
                cactus = [];
                clouds = [];
                score = 0;
                ground.x = 0;
                image(game_over, width / 2 - game_over_width / 2, height / 2 - game_over_height / 2, game_over_width, game_over_height);
                noLoop();
            }
        }
    }
}
function keyPressed() {
    if (key == " ") action();
}
function mousePressed() {
    action();
}
function action() {
    dino.jump();
    isPlaying = true;
    loop();
}

//# sourceMappingURL=index.10b3c9ad.js.map
