void keyPressed() {
  if (key != CODED) {
    if (key == 'z' || key == 'Z') {
      currentKeyInput.isZPressed = true;
      return;
    }
    if (key == 'x' || key == 'X') {
      currentKeyInput.isXPressed = true;
      return;
    }
    if (key == 'p') {
      if (paused) loop();
      else noLoop();
      paused = !paused;
    }
    return;
  }
  switch(keyCode) {
  case UP:
    currentKeyInput.isUpPressed = true;
    return;
  case DOWN:
    currentKeyInput.isDownPressed = true;
    return;
  case LEFT:
    currentKeyInput.isLeftPressed = true;
    return;
  case RIGHT:
    currentKeyInput.isRightPressed = true;
    return;
  }
}

void keyReleased() {
  if (key != CODED) {
    if (key == 'z' || key == 'Z') {
      currentKeyInput.isZPressed = false;
      return;
    }
    if (key == 'x' || key == 'X') {
      currentKeyInput.isXPressed = false;
      return;
    }
    return;
  }
  switch(keyCode) {
  case UP:
    currentKeyInput.isUpPressed = false;
    return;
  case DOWN:
    currentKeyInput.isDownPressed = false;
    return;
  case LEFT:
    currentKeyInput.isLeftPressed = false;
    return;
  case RIGHT:
    currentKeyInput.isRightPressed = false;
    return;
  }
}



final class KeyInput {
  boolean isUpPressed = false;
  boolean isDownPressed = false;
  boolean isLeftPressed = false;
  boolean isRightPressed = false;
  boolean isZPressed = false;
  boolean isXPressed = false;
}