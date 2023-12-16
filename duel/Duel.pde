// Title: Duel
// Author: FAL ( https://www.fal-works.com/ )
// Made with Processing 3.3.6
/* Change log:
    Ver. 0.1 (30. Sep. 2017)  First version.
    Ver. 0.2 ( 1. Oct. 2017)  Bug fix (unintended change of strokeWeight), minor update (enabled to hide instruction window).
    Ver. 0.3 (10. Feb. 2018)  Minor fix (lack of semicolon).
    Ver. 0.4 (12. Feb. 2018)  Enabled scaling.
*/

/* @pjs font="../assets/Creepster-Regular.ttf"; */

// CAUTION: spaghetti code!!!

private static final float IDEAL_FRAME_RATE = 60.0;
private static final boolean USE_WEB_FONT = false;

KeyInput currentKeyInput;
GameSystem system;
PFont smallFont, largeFont;
boolean paused;

float scaleFactor;

/* For processing.js */
const containerRect = window.document.querySelector("canvas").getBoundingClientRect();
canvasSideLength = min(containerRect.width, containerRect.height);
private static final int INTERNAL_CANVAS_SIDE_LENGTH = canvasSideLength;

/* For OpenProcessing
canvasSideLength = min(window.innerWidth, window.innerHeight);
*/

/* For Processing Java mode
void settings() {
  size(canvasSideLength, canvasSideLength);
}
*/

void setup() {
  /* For processing.js */
  size(canvasSideLength, canvasSideLength);

  scaleFactor = (float)canvasSideLength / (float)INTERNAL_CANVAS_SIDE_LENGTH;

  frameRate(IDEAL_FRAME_RATE);

  // Prepare font
  final String fontFilePath = "../assets/Creepster-Regular.ttf";
  final String fontName = "Creepster";
  smallFont = createFont(USE_WEB_FONT ? fontName : fontFilePath, 20.0, true);
  largeFont = createFont(USE_WEB_FONT ? fontName : fontFilePath, 96.0, true);
  textFont(largeFont, 96.0);
  textAlign(CENTER, CENTER);

  rectMode(CENTER);
  ellipseMode(CENTER);

  currentKeyInput = new KeyInput();

  newGame(true, true);  // demo play (computer vs computer), shows instruction window
}

void draw() {
  background(255.0);
  scale(scaleFactor);
  system.run();
}

void newGame(boolean demo, boolean instruction) {
  system = new GameSystem(demo, instruction);
}

void mousePressed() {
  system.showsInstructionWindow = !system.showsInstructionWindow;
}
