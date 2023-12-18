PImage title;
PImage redDrop,orangeDrop, yellowDrop, blueDrop, greenDrop, violetDrop, brownDrop;
PImage[] randColors = new PImage [7];
ArrayList <Drops> rainDrops = new ArrayList <Drops> ();

PImage redCup, orangeCup, yellowCup, blueCup, greenCup, violetCup, brownCup;
PImage[] randCupColors = new PImage [7];

Drops rainbowDrops;
Drops drop;
Drops newDrop;
Cup rainbowCup;
Score scoreBoard;
boolean screen = true;


class Drops {
public float moveY = random(-300, 0);
public float moveX = random(width);
public PImage newColor;
float speed = random(2, 10);


Drops() {
 this.moveY = random(-200, - 100);
 this.moveX = random(width);
 this.speed = random(1, 3);
 this.newColor = randColors[int(random(randColors.length))];
}

void moveDrops() {
   moveY = moveY + speed;
}

 void drawDrops() {
  image(this.newColor, moveX, moveY, 40, 40);
  if(moveY >= height) {
     moveY = random(-150, -100);
     /*A new color is needed so there isn't a endless loop of the same colors in the same
     positions each time
     */
     this.newColor = randColors[int(random(randColors.length))];
     this.moveY =  random(-200, - 100);
     this.moveX = random(width);
     this.speed = random(1, 3);
  }

}

}

class Cup {
  public PImage cupColor;
  public float cupY = 750;
  public float cupHeight = 100;
  public float cupWidth = 100;

 Cup () {
   this.cupColor = randCupColors[int(random(randCupColors.length))];
 }

 void drawCup() {
   noStroke();
   image(cupColor, mouseX, cupY, cupWidth, cupHeight);
 }
}

class Score {
 int points;
 Score() {
   this.points = 0;
 }

 void pointsLost() {
  points = this.points - 10;
  rainbowCup.cupColor = randCupColors[int(random(randCupColors.length))];

  if(points < 0) {
    background(#b6c9ff);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0);
    text("You Lose!", width/2, height/3);
    textSize(30);
    text("To replay, press your mouse!", width/2, height/2);
    noLoop();
    }
   }


 void pointsGained() {
  points = this.points + 10;
  rainbowCup.cupColor = randCupColors[int(random(randCupColors.length))];

  if(points >= 100) {
    background(#b6c9ff);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0);
    text("You Win!", width/2, height/3);
    textSize(30);
    text("To replay, press your mouse!", width/2, height/2);
    noLoop();
  }
 }

 void restart() {
   this.points = 0;
 }

}
void mousePressed() {
  screen = !screen;
  loop();
  for(int i = 0; i < rainDrops.size(); i++) {
   rainDrops.get(i).moveY = -100;
  }
  scoreBoard.restart();
}

void setup() {
size(1000, 800);
smooth(0);
title = loadImage("../assets/rainbow-drops/rainbow-drops-title.png");
smooth(40);
redDrop = loadImage("../assets/rainbow-drops/red-drop.png");
orangeDrop = loadImage("../assets/rainbow-drops/orange-drop.png");
yellowDrop = loadImage("../assets/rainbow-drops/yellow-drop.png");
blueDrop = loadImage("../assets/rainbow-drops/blue-drop.png");
greenDrop = loadImage("../assets/rainbow-drops/green-drop.png");
violetDrop = loadImage("../assets/rainbow-drops/purple-drop.png");
brownDrop = loadImage("../assets/rainbow-drops/brown-drop.png");
randColors[0] = redDrop;
randColors[1] = orangeDrop;
randColors[2] = yellowDrop;
randColors[3] = blueDrop;
randColors[4] = greenDrop;
randColors[5] = violetDrop;
randColors[6] = brownDrop;

redCup = loadImage("../assets/rainbow-drops/red-cup.png");
orangeCup = loadImage("../assets/rainbow-drops/orange-cup.png");
yellowCup = loadImage("../assets/rainbow-drops/yellow-cup.png");
blueCup = loadImage("../assets/rainbow-drops/blue-cup.png");
greenCup = loadImage("../assets/rainbow-drops/green-cup.png");
violetCup = loadImage("../assets/rainbow-drops/purple-cup.png");
brownCup = loadImage("../assets/rainbow-drops/brown-cup.png");
randCupColors[0] = redCup;
randCupColors[1] = orangeCup;
randCupColors[2] = yellowCup;
randCupColors[3] = blueCup;
randCupColors[4] = greenCup;
randCupColors[5] = violetCup;
randCupColors[6] = brownCup;
imageMode(CENTER);
 for(int i = 0; i < 20; i++) {
    Drops drop = new Drops();
    rainDrops.add(drop);
 }
  rectMode(CENTER);
  rainbowCup = new Cup();
  scoreBoard = new Score();
}

/* @pjs font="../assets/Creepster-Regular.ttf"; */

textFont(createFont("../assets/Creepster-Regular.ttf", 128));

void draw() {
  background(#b6c9ff);
 if(screen) {
  image(title, width/2, height/3, 600, 250);
  textSize(30);
  fill(0);
  textAlign(CENTER);
  text("Press your mouse to start!", width/2, height/2 + 50);
  }
  else {

  for(int i = 0; i < rainDrops.size(); i++) {
     rainDrops.get(i).moveDrops();
     rainDrops.get(i).drawDrops();

  if((dist(rainDrops.get(i).moveX, rainDrops.get(i).moveY, mouseX, rainbowCup.cupY) < 50)) {
    Drops newDrop = new Drops();

       if((rainDrops.get(i).newColor == redDrop && rainbowCup.cupColor == redCup) ||
           (rainDrops.get(i).newColor == orangeDrop && rainbowCup.cupColor == orangeCup) ||
           (rainDrops.get(i).newColor == yellowDrop && rainbowCup.cupColor == yellowCup) ||
           (rainDrops.get(i).newColor == greenDrop && rainbowCup.cupColor == greenCup) ||
           (rainDrops.get(i).newColor == blueDrop && rainbowCup.cupColor == blueCup) ||
           (rainDrops.get(i).newColor == violetDrop && rainbowCup.cupColor == violetCup) ||
           (rainDrops.get(i).newColor == brownDrop && rainbowCup.cupColor == brownCup)) {
         scoreBoard.pointsGained();
         rainDrops.remove(i);
         rainDrops.add(newDrop);

       }
       else {
         scoreBoard.pointsLost();
         rainDrops.remove(i);
         rainDrops.add(newDrop);
       }
    }
  }
  rainbowCup.drawCup();

//Score is drawn last so score is always visible even on top of drops

  textSize(30);
  fill(0);
  textAlign(LEFT);
  textLeading(25);
  text("Score \n" + scoreBoard.points, 10, 24);
}
}
