abstract class AbstractInputDevice
{
  int horizontalMoveButton, verticalMoveButton;
  boolean shotButtonPressed, longShotButtonPressed;

  void operateMoveButton(int horizontal, int vertical) {
    horizontalMoveButton = horizontal;
    verticalMoveButton = vertical;
  }
  void operateShotButton(boolean pressed) {
    shotButtonPressed = pressed;
  }
  void operateLongShotButton(boolean pressed) {
    longShotButtonPressed = pressed;
  }
}

final class InputDevice
  extends AbstractInputDevice
{
}

final class ShotDisabledInputDevice
  extends AbstractInputDevice
{
  void operateShotButton(boolean pressed) {
  }
  void operateLongShotButton(boolean pressed) {
  }
}

final class DisabledInputDevice
  extends AbstractInputDevice
{
  void operateMoveButton(int horizontal, int vertical) {
  }
  void operateShotButton(boolean pressed) {
  }
  void operateLongShotButton(boolean pressed) {
  }
}



abstract class PlayerEngine
{
  final AbstractInputDevice controllingInputDevice;

  PlayerEngine() {
    controllingInputDevice = new InputDevice();
  }

  abstract void run(PlayerActor player);
}

final class HumanPlayerEngine
  extends PlayerEngine
{
  final KeyInput currentKeyInput;

  HumanPlayerEngine(KeyInput _keyInput) {
    currentKeyInput = _keyInput;
  }

  void run(PlayerActor player) {
    final int intUp = currentKeyInput.isUpPressed ? -1 : 0;
    final int intDown = currentKeyInput.isDownPressed ? 1 : 0;
    final int intLeft = currentKeyInput.isLeftPressed ? -1 : 0;
    final int intRight = currentKeyInput.isRightPressed ? 1 : 0;  

    controllingInputDevice.operateMoveButton(intLeft + intRight, intUp + intDown);
    controllingInputDevice.operateShotButton(currentKeyInput.isZPressed);
    controllingInputDevice.operateLongShotButton(currentKeyInput.isXPressed);
  }
}

final class ComputerPlayerEngine
  extends PlayerEngine
{
  final int planUpdateFrameCount = 10;
  PlayerPlan currentPlan;

  ComputerPlayerEngine() {
    // There shoud be a smarter way!!!
    final MovePlayerPlan move = new MovePlayerPlan();
    final JabPlayerPlan jab = new JabPlayerPlan();
    final KillPlayerPlan kill = new KillPlayerPlan();
    move.movePlan = move;
    move.jabPlan = jab;
    move.killPlan = kill;
    jab.movePlan = move;
    jab.jabPlan = jab;
    jab.killPlan = kill;
    kill.movePlan = move;

    currentPlan = move;
  }

  void run(PlayerActor player) {
    currentPlan.execute(player, controllingInputDevice);

    if (frameCount % planUpdateFrameCount == 0) currentPlan = currentPlan.nextPlan(player);
  }
}

abstract class PlayerPlan
{
  abstract void execute(PlayerActor player, AbstractInputDevice input);
  abstract PlayerPlan nextPlan(PlayerActor player);
}

abstract class DefaultPlayerPlan
  extends PlayerPlan
{
  PlayerPlan movePlan, jabPlan, escapePlan, killPlan;
  int horizontalMove, verticalMove;
  boolean shoot;

  void execute(PlayerActor player, AbstractInputDevice input) {
    input.operateMoveButton(horizontalMove, verticalMove);
    input.operateLongShotButton(false);
  }

  PlayerPlan nextPlan(PlayerActor player) {
    final AbstractPlayerActor enemy = player.group.enemyGroup.player;

    // Draw longbow if enemy is damaged
    if (enemy.state.isDamaged()) {
      if (random(1.0) < 0.3) return killPlan;
    }
    
    // Avoid the nearest arrow
    AbstractArrowActor nearestArrow = null;
    float tmpMinDistancePow2 = 999999999.0;
    for (AbstractArrowActor eachArrow : enemy.group.arrowList) {
      final float distancePow2 = player.getDistancePow2(eachArrow);
      if (distancePow2 < tmpMinDistancePow2) {
        nearestArrow = eachArrow;
        tmpMinDistancePow2 = distancePow2;
      }
    }
    if (tmpMinDistancePow2 < 40000.0) {
      final float playerAngleInArrowFrame = nearestArrow.getAngle(player);
      float escapeAngle = nearestArrow.directionAngle;
      if (playerAngleInArrowFrame - nearestArrow.directionAngle > 0.0) escapeAngle += QUARTER_PI + random(QUARTER_PI);
      else escapeAngle -= QUARTER_PI + random(QUARTER_PI);
      final float escapeTargetX = player.xPosition + 100.0 * cos(escapeAngle);
      final float escapeTargetY = player.yPosition + 100.0 * sin(escapeAngle);
      setMoveDirection(player, escapeTargetX, escapeTargetY, 0.0);
      if (random(1.0) < 0.7) return movePlan;
      else return jabPlan;
    }

    // Away from enemy
    setMoveDirection(player, enemy);
    if (player.getDistancePow2(enemy) < 100000.0) {
      if (random(1.0) < 0.7) return movePlan;
      else return jabPlan;
    }

    // If there is nothing special
    if (random(1.0) < 0.2) return movePlan;
    else return jabPlan;
  }
  
  void setMoveDirection(PlayerActor player, AbstractPlayerActor enemy) {
    float targetX, targetY;
    if (enemy.xPosition > INTERNAL_CANVAS_SIDE_LENGTH * 0.5) targetX = random(0.0, INTERNAL_CANVAS_SIDE_LENGTH * 0.5);
    else targetX = random(INTERNAL_CANVAS_SIDE_LENGTH * 0.5, INTERNAL_CANVAS_SIDE_LENGTH);
    if (enemy.yPosition > INTERNAL_CANVAS_SIDE_LENGTH * 0.5) targetY = random(0.0, INTERNAL_CANVAS_SIDE_LENGTH * 0.5);
    else targetY = random(INTERNAL_CANVAS_SIDE_LENGTH * 0.5, INTERNAL_CANVAS_SIDE_LENGTH);
    setMoveDirection(player, targetX, targetY, 100.0);
  }
  void setMoveDirection(PlayerActor player, float targetX, float targetY, float allowance) {
    if (targetX > player.xPosition + allowance) horizontalMove = 1;
    else if (targetX < player.xPosition - allowance) horizontalMove = -1;
    else horizontalMove = 0;

    if (targetY > player.yPosition + allowance) verticalMove = 1;
    else if (targetY < player.yPosition - allowance) verticalMove = -1;
    else verticalMove = 0;
  }
}

final class MovePlayerPlan
  extends DefaultPlayerPlan
{
  void execute(PlayerActor player, AbstractInputDevice input) {
    super.execute(player, input);
    input.operateShotButton(false);
  }
}

final class JabPlayerPlan
  extends DefaultPlayerPlan
{
  void execute(PlayerActor player, AbstractInputDevice input) {
    super.execute(player, input);
    input.operateShotButton(true);
  }
}

final class KillPlayerPlan
  extends PlayerPlan
{
  PlayerPlan movePlan, escapePlan;

  void execute(PlayerActor player, AbstractInputDevice input) {
    int horizontalMove;
    final float relativeAngle = player.getAngle(player.group.enemyGroup.player) - player.aimAngle;
    if (abs(relativeAngle) < radians(1.0)) horizontalMove = 0;
    else {
      if ((relativeAngle + TWO_PI) % TWO_PI > PI) horizontalMove = -1;
      else horizontalMove = +1;
    }
    input.operateMoveButton(horizontalMove, 0);

    input.operateShotButton(false);

    if (player.state.hasCompletedLongBowCharge(player) && random(1.0) < 0.05) input.operateLongShotButton(false);
    else input.operateLongShotButton(true);
  }

  PlayerPlan nextPlan(PlayerActor player) {
    final AbstractPlayerActor enemy = player.group.enemyGroup.player;

    if (abs(player.getAngle(player.group.enemyGroup.player) - player.aimAngle) > QUARTER_PI) return movePlan;
    if (player.getDistance(enemy) < 400.0) return movePlan;
    if (player.engine.controllingInputDevice.longShotButtonPressed == false) return movePlan;

    return this;
  }
}