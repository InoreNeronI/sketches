
/* @pjs font="../assets/Creepster-Regular.ttf"; */

PFont font;

Ball ball;
Score score;
Net net;
RightPaddle paddleR;
LeftPaddle paddleL;
int level = 2;    // Level determines ball speed and left paddle speed

const containerRect = window.document.querySelector("canvas").getBoundingClientRect();

void setup() {
  // Set screen size
  size(containerRect.width, containerRect.height);
  // Cursor is not visible
  noCursor();
  // Create font file
  font = createFont("../assets/Creepster-Regular.ttf", 128);
  // Initialize objects
  ball = new Ball();
  score = new Score();
  net = new Net();
  paddleR = new RightPaddle();
  paddleL = new LeftPaddle();
}

void draw() {
  background(0);
  score.display();
  net.display();
  ball.display();
  ball.move(paddleR, paddleL);
  paddleL.display();
  paddleL.move();
  paddleR.displayAndMove(mouseY);   // Right paddle is controlled by mouse
  //paddleR.move();
  //paddleR.display();              // Right paddle is controlled by keys
}
