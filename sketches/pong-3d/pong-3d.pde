
/* @pjs font="../assets/Creepster-Regular.ttf"; */

float WALL_LEFT = -200, WALL_RIGHT = 200;
float WALL_BACK = -1000, WALL_RED = 180;
float PADDLE_WIDTH = 100;

int score;
PVector ballPos, paddlePos;
PVector ballSpeed;
boolean gameOver;

float screenshake;

void setup() {
	size(500, 500, P3D);
	noStroke();
	startGame();
}

void startGame() {
	score = 0;
	ballPos = new PVector(0, -50, 0);
	ballSpeed = new PVector(4, 0, -8);
	paddlePos = new PVector(0, -30, 160);
	gameOver = false;
}

void draw() {
	lights();

	PVector screenshakeVector = new PVector(random(-screenshake, screenshake), random(-screenshake, screenshake), random(-screenshake, screenshake));
	camera(0 + screenshakeVector.x - (mouseX - (width / 2)), -300 + screenshakeVector.y, 500 + screenshakeVector.z, 0, 0, 0, 0, 1, 0);

	background(40, 0, 40);

	gameLogic();
	gameDisplay();
	worldDisplay();
	funkyFloor();
}

void worldDisplay() {
	// ground
	pushMatrix();
	translate(0, 0, -400);
	fill(0, 150, 255);
	box(450, 50, 1200);
	popMatrix();

	// middle strip
	pushMatrix();
	translate(0, -5, -100);
	fill(255);
	box(450, 50, 10);
	popMatrix();

	// death wall
	pushMatrix();
	translate(0, -25, WALL_RED);
	fill(lerp(0, 50, sin(millis() / 100)) + 200, 0, 0);
	box(460, 20, 20);
	popMatrix();

	// score display
	textSize(90);
	pushMatrix();
	fill(255);
	translate(0, -70, 80);
	rotateX(PI / 2);
  textFont(createFont("../assets/Creepster-Regular.ttf", 48));
	text(score, 0, 0);
	popMatrix();

	// game info
	textSize(50);
	pushMatrix();
	if (gameOver) {
		fill(255, 255, 0);
		translate(-120, -170, -600);
		text("Game Over", 0, 0);
	}
	popMatrix();
}

void gameLogic() {
	screenshake *= 0.9;
	if (gameOver) {
		return;
	}

	paddlePos.x = constrain(mouseX - (width / 2), WALL_LEFT + 50, WALL_RIGHT - 50);

	ballPos.add(ballSpeed);

	if (ballPos.x < WALL_LEFT + 25 || ballPos.x > WALL_RIGHT - 25) {
		ballSpeed.x *= -1;
		screenshake = 2;
	}
	if (ballPos.z < WALL_BACK + 30) {
		ballSpeed.z *= -1;
		screenshake = 4;
	}
	if (ballPos.x < paddlePos.x + (PADDLE_WIDTH / 2) && ballPos.x > paddlePos.x - (PADDLE_WIDTH / 2)) {
		if (ballPos.z > paddlePos.z - 30) {
			ballSpeed.z *= -1;
			ballSpeed.mult(1.1);
			PADDLE_WIDTH *= 0.9;
			score++;
			ballPos.z = paddlePos.z - 30;

			pushMatrix();
			translate(ballPos.x, ballPos.y, ballPos.z);
			fill(0, 255, 0);
			sphere(30);
			popMatrix();
			screenshake = 20;

		}
	}
	if (ballPos.z > WALL_RED) {
		gameOver = true;
		screenshake = 70;
	}


}

void gameDisplay() {
	//outline
	pushMatrix();
	translate(ballPos.x, ballPos.y, ballPos.z);
	fill(0, 0, 200);
	//ellipse (0, 0, 50, 50);
	popMatrix();

	// ball
	pushMatrix();
	translate(ballPos.x, ballPos.y, ballPos.z);
	fill(255, 255, 0);
	sphere(20);
	popMatrix();

	// paddle
	pushMatrix();
	translate(paddlePos.x, paddlePos.y, paddlePos.z);
	fill(0, 255, 0);
	box(PADDLE_WIDTH, 70, 30);
	popMatrix();

	// left wall
	pushMatrix();
	translate(WALL_LEFT, -30, -400);
	fill(255);
	box(20, 50, 1205);
	popMatrix();

	// right wall
	pushMatrix();
	translate(WALL_RIGHT, -30, -400);
	fill(255);
	box(20, 50, 1205);
	popMatrix();

	// back wall
	pushMatrix();
	translate(0, -30, WALL_BACK);
	fill(255);
	box(400, 50, 20);
	popMatrix();
}

void funkyFloor() {
	for (int x = (int) WALL_LEFT + 100; x < (int) WALL_RIGHT; x += 100) {
		for (int z = (int) WALL_BACK + 100; z < -100; z += 100) {


			pushMatrix();
			translate(x, -25, z);

			float distToBall = PVector.dist(new PVector(x, z), new PVector(ballPos.x, ballPos.z));

			distToBall /= 200;
			distToBall = constrain(distToBall, 0, 1);

			fill(lerpColor(color(0, 255, 255), color(0, 150, 255), distToBall));
			box(90, 5, 90);

			popMatrix();
		}
	}
}
