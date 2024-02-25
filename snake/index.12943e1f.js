let game;
let startTouchX, startTouchY;
let endTouchX, endTouchY;
const swipeThreshold = 30;
let lastTapTime = 0;
const doubleTapThreshold = 300;
function setup() {
    const fontRegular = loadFont("../assets/Creepster-Regular.ttf");
    textFont(fontRegular);
    game = new Game();
}
function draw() {
    game.update();
}
function keyPressed() {
    game.handleKeyPress(keyCode);
}
function touchStarted(event) {
    event.preventDefault();
    const now = Date.now();
    if (now - lastTapTime < doubleTapThreshold) game.handleDoubleTap();
    else lastTapTime = now;
    startTouchX = mouseX;
    startTouchY = mouseY;
}
function touchMoved(event) {
    event.preventDefault();
    endTouchX = mouseX;
    endTouchY = mouseY;
}
function touchEnded(event) {
    event.preventDefault();
    var dx = endTouchX - startTouchX;
    var dy = endTouchY - startTouchY;
    if (_hasSwiped(dx, dy)) game.handleTouchSwipe(dx, dy);
}
function _hasSwiped(dx, dy) {
    return abs(dx) > swipeThreshold || abs(dy) > swipeThreshold;
}

//# sourceMappingURL=index.12943e1f.js.map
