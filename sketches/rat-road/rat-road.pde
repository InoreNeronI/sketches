final int gridSpace = 40;
int totalX;
int totalY;
int[][] connections;//{grid index} X {x1, y1, x2, y2}
boolean[][] closed1;//{x} X {y}
boolean[][] closed2;//{x} X {y}
int totalConnections = 0;//maximum connections
int totalConnected = 0;
int totalClosed = 0;
int score1 = 0;
int score2 = 0;
int currentPlayer = 0;
color textColor = color(0);
color color1 = color(5, 205, 229);
color color2 = color(255, 184, 3);
color dotColor = color(0);
color connectionColor = color(0);
int cursorX, cursorY;
boolean started = false;
boolean simulateMouse = true;

int boardX, boardY, boardWidth, boardHeight;

/* @pjs font="../assets/Creepster-Regular.ttf"; */
textFont(createFont("../assets/Creepster-Regular.ttf", 128));

const containerRect = window.document.querySelector("canvas").getBoundingClientRect();

void setup(){
  size(containerRect.width, containerRect.height);
  init();
}

void init(){
  //resize vars
  boardX = gridSpace;
  boardY = 100;
  boardWidth = width-boardX-gridSpace;
  boardHeight = height-boardY-gridSpace;

  //doesnt work
  //totalX = ceil((float)boardWidth/(float)gridSpace);
  //totalY = ceil((float)boardHeight/(float)gridSpace);
  totalX = 0;
  totalY = 0;
  for (int x = 0; x <= boardWidth; x += gridSpace) totalX++;
  for (int y = 0; y <= boardHeight; y += gridSpace) totalY++;

  //startup vars
  totalConnections = (totalX-1)*totalY+(totalY-1)*totalX;
  closed1 = new boolean[totalX][totalY];
  closed2 = new boolean[totalX][totalY];
  connections = new int[totalConnections][4];

  totalConnected = 0;
  totalClosed = 0;
  score1 = 0;
  score2 = 0;
  currentPlayer = 0;

  started = false;
  simulateMouse = true;
}

void startGame(){
  init();
  started = true;
  simulateMouse = false;
}

void mousePressed() {
  if(!started){
    startGame();
  }else{
    if(totalConnected==totalConnections){
      init();
    }
  }
}

void draw(){

  background(255);

  //for debugging
  //fill(textColor);
  //textSize(10);
  //text(totalX + ", " + totalY + ", " + totalConnected + "/" + totalConnections, 0, 10);

  if(simulateMouse){
    cursorX = (int)random(width);
    cursorY = (int)random(height);
  }else{
    cursorX = mouseX-boardX;
    cursorY = mouseY-boardY;
  }

  translate(boardX, boardY);

  if(started){
    textSize(20);
    if(currentPlayer==0){
      fill(color1);
      text(">", 0, -60);
    }else{
      fill(125);
    }
    text("player 1 = " + score1, 15, -60);

    if(currentPlayer==1){
      fill(color2);
      text(">", 0, -30);
    }else{
      fill(125);
    }
    text("player 2 = " + score2, 15, -30);
  }

  //draw grid
  for (int x = 0; x <= boardWidth; x += gridSpace) {
    for (int y = 0; y <= boardHeight; y += gridSpace) {
        noStroke();
        fill(dotColor);
        rect(x-2, y-2, 4, 4);
    }
  }

  //draw temp closest line
  int [] closest = findClosest();
  if(currentPlayer==0){
    stroke(color1);
  }else{
    stroke(color2);
  }
  line(closest[0]*gridSpace, closest[1]*gridSpace, closest[2]*gridSpace, closest[3]*gridSpace);

  int prevTotalConnected = totalConnected;
  int prevTotalClosed = totalClosed;
  //confirm line pressed
  if(mousePressed || simulateMouse){
    if(isConnected(closest)){
      //already connected = cancel click
      stroke(255, 0, 0);
      line(closest[0]*gridSpace, closest[1]*gridSpace, closest[2]*gridSpace, closest[3]*gridSpace);
    }else{
      //not connected = allow click
      connections[totalConnected] = closest;
      totalConnected++;
    }
  }

  //paint closed areas
  for (int x = 0; x < totalX; x++) {
    for (int y = 0; y < totalY; y++) {
        if(isClosed(x, y)){
          if(!closed1[x][y] && !closed2[x][y]){
            totalClosed++;
            if(currentPlayer==0){
              score1++;
              closed1[x][y] = true;
            }else{
              score2++;
              closed2[x][y] = true;
            }
          }
          noStroke();
          if(closed1[x][y]){
            fill(color1, 125);
          }else if(closed2[x][y]){
            fill(color2, 125);
          }
          rect(x*gridSpace, y*gridSpace, gridSpace, gridSpace);
        }
    }
  }

  //draw connected lines
  for(int i=0; i<totalConnected; i++){
    stroke(connectionColor);
    line(connections[i][0]*gridSpace, connections[i][1]*gridSpace, connections[i][2]*gridSpace, connections[i][3]*gridSpace);
  }

  //if not closed, go to next player
  if(prevTotalConnected<totalConnected){
     if(prevTotalClosed==totalClosed){
       if(currentPlayer==0){
         currentPlayer=1;
       }else{
         currentPlayer=0;
       }
     }
  }

  //opening screen
  textSize(18);
  fill(textColor);
  text("Multiplayer game, the objective is to close a square.", 290, -55);

  //opening screen
  if(!started){
    textSize(38);
    fill(textColor);
    text("CLICK TO START", 175, boardHeight/2+3);
  }

  //game over screen
  if(totalConnected==totalConnections){
    if(started){
      noStroke();
      fill(255, 100);
      rect(-20, -20, boardWidth+40, boardHeight+40);

      textSize(38);
      fill(textColor);
      if(score1==score2) text("DRAW", 100, 80);
      else text("Player " + (score1 > score2 ? "1" : "2") + " won!", 100, 80);

      if(sin(millis()/1000.*PI*2.)>0){
        textSize(26);
        fill(textColor);
        text("CLICK TO FINISH", 100, 160);
      }
    }else{
      init();
    }
  }
}

PVector boardToScreen(PVector pos){
  return new PVector(pos.x+boardX, pos.y+boardY);
}

PVector screenToCanvas(PVector pos){
  return new PVector(pos.x-boardX, pos.y-boardY);
}

//return {x1, y1, x2, y2}
int[] findClosest(){
  float closest1 = 99999999;
  float closest2 = 99999999;
  int[] closestIndex = {0,0,1,0};
  for (int x = 0; x <= boardWidth; x += gridSpace) {
    for (int y = 0; y <= boardHeight; y += gridSpace) {
        float distance = dist(x, y, cursorX, cursorY);
        if(distance < closest1){
          closest1 = distance;
          closestIndex[0] = x/gridSpace;
          closestIndex[1] = y/gridSpace;
        }
    }
  }
  for (int x = 0; x <= boardWidth; x += gridSpace) {
    for (int y = 0; y <= boardHeight; y += gridSpace) {
        float distance = dist(x, y, cursorX, cursorY);
        if(distance < closest2 && distance!=closest1){
          closest2 = distance;
          closestIndex[2] = x/gridSpace;
          closestIndex[3] = y/gridSpace;
        }
    }
  }
  return closestIndex;
}

boolean isConnected(int[] coords){
  for(int i=0; i<totalConnected; i++){
    if((connections[i][0]==coords[0] && connections[i][1]==coords[1] && connections[i][2]==coords[2] && connections[i][3]==coords[3]) ||
    (connections[i][0]==coords[2] && connections[i][1]==coords[3] && connections[i][2]==coords[0] && connections[i][3]==coords[1])){
      return true;
    }
  }
  return false;
}

boolean isClosed(int indexX, int indexY){
  int[] top = {indexX, indexY, indexX+1, indexY};
  int[] right = {indexX+1, indexY, indexX+1, indexY+1};
  int[] bottom = {indexX, indexY+1, indexX+1, indexY+1};
  int[] left = {indexX, indexY, indexX, indexY+1};
  return isConnected(top) && isConnected(right) && isConnected(bottom) && isConnected(left);
}

void windowResized(){
    init();
}
