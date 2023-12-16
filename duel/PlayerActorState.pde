abstract class PlayerActorState
{
  abstract void act(PlayerActor parentActor);
  abstract void displayEffect(PlayerActor parentActor);
  abstract PlayerActorState entryState(PlayerActor parentActor);

  float getEnemyPlayerActorAngle(PlayerActor parentActor) {
    final AbstractPlayerActor enemyPlayer = parentActor.group.enemyGroup.player;
    return atan2(enemyPlayer.yPosition - parentActor.yPosition, enemyPlayer.xPosition - parentActor.xPosition);
  }
  boolean isDamaged() {
    return false;
  }
  boolean isDrawingLongBow() {
    return false;
  }
  boolean hasCompletedLongBowCharge(PlayerActor parentActor) {
    return false;
  }
}

final class DamagedPlayerActorState
  extends PlayerActorState
{
  PlayerActorState moveState;
  final int durationFrameCount = int(0.75 * IDEAL_FRAME_RATE);

  void act(PlayerActor parentActor) {
    parentActor.damageRemainingFrameCount--;
    if (parentActor.damageRemainingFrameCount <= 0) parentActor.state = moveState.entryState(parentActor);
  }
  void displayEffect(PlayerActor parentActor) {
    noFill();
    stroke(192.0, 64.0, 64.0, 255.0 * float(parentActor.damageRemainingFrameCount) / durationFrameCount);
    ellipse(0.0, 0.0, 64.0, 64.0);
  }
  PlayerActorState entryState(PlayerActor parentActor) {
    parentActor.damageRemainingFrameCount = durationFrameCount;
    return this;
  }
  boolean isDamaged() {
    return true;
  }
}

final class MovePlayerActorState
  extends PlayerActorState
{
  PlayerActorState drawShortbowState, drawLongbowState;

  void act(PlayerActor parentActor) {
    final AbstractInputDevice input = parentActor.engine.controllingInputDevice;
    parentActor.addVelocity(1.0 * input.horizontalMoveButton, 1.0 * input.verticalMoveButton);

    if (input.shotButtonPressed) {
      parentActor.state = drawShortbowState.entryState(parentActor);
      parentActor.aimAngle = getEnemyPlayerActorAngle(parentActor);
      return;
    }
    if (input.longShotButtonPressed) {
      parentActor.state = drawLongbowState.entryState(parentActor);
      parentActor.aimAngle = getEnemyPlayerActorAngle(parentActor);
      return;
    }
  }
  void displayEffect(PlayerActor parentActor) {
  }
  PlayerActorState entryState(PlayerActor parentActor) {
    return this;
  }
}

abstract class DrawBowPlayerActorState
  extends PlayerActorState
{
  PlayerActorState moveState;

  void act(PlayerActor parentActor) {
    final AbstractInputDevice input = parentActor.engine.controllingInputDevice;
    aim(parentActor, input);

    parentActor.addVelocity(0.25 * input.horizontalMoveButton, 0.25 * input.verticalMoveButton);

    if (triggerPulled(parentActor)) fire(parentActor);

    if (buttonPressed(input) == false) {
      parentActor.state = moveState.entryState(parentActor);
    }
  }

  abstract void aim(PlayerActor parentActor, AbstractInputDevice input);
  abstract void fire(PlayerActor parentActor);
  abstract boolean buttonPressed(AbstractInputDevice input);
  abstract boolean triggerPulled(PlayerActor parentActor);
}

final class DrawShortbowPlayerActorState
  extends DrawBowPlayerActorState
{
  final int fireIntervalFrameCount = int(IDEAL_FRAME_RATE * 0.2);

  void aim(PlayerActor parentActor, AbstractInputDevice input) {
    parentActor.aimAngle = getEnemyPlayerActorAngle(parentActor);
  }

  void fire(PlayerActor parentActor) {
    ShortbowArrow newArrow = new ShortbowArrow();
    final float directionAngle = parentActor.aimAngle;
    newArrow.xPosition = parentActor.xPosition + 24.0 * cos(directionAngle);
    newArrow.yPosition = parentActor.yPosition + 24.0 * sin(directionAngle);
    newArrow.rotationAngle = directionAngle;
    newArrow.setVelocity(directionAngle, 24.0);

    parentActor.group.addArrow(newArrow);
  }

  void displayEffect(PlayerActor parentActor) {
    line(0.0, 0.0, 70.0 * cos(parentActor.aimAngle), 70.0 * sin(parentActor.aimAngle));
    noFill();
    arc(0.0, 0.0, 100.0, 100.0, parentActor.aimAngle - QUARTER_PI, parentActor.aimAngle + QUARTER_PI);
  }
  PlayerActorState entryState(PlayerActor parentActor) {
    return this;
  }

  boolean buttonPressed(AbstractInputDevice input) {
    return input.shotButtonPressed;
  }
  boolean triggerPulled(PlayerActor parentActor) {
    return frameCount % fireIntervalFrameCount == 0;
  }
}

final class DrawLongbowPlayerActorState
  extends DrawBowPlayerActorState
{
  final float unitAngleSpeed = 0.1 * TWO_PI / IDEAL_FRAME_RATE;
  final int chargeRequiredFrameCount = int(0.5 * IDEAL_FRAME_RATE);
  final color effectColor = color(192.0, 64.0, 64.0);
  final float ringSize = 80.0;
  final float ringStrokeWeight = 5.0;

  PlayerActorState entryState(PlayerActor parentActor) {
    parentActor.chargedFrameCount = 0;
    return this;
  }

  void aim(PlayerActor parentActor, AbstractInputDevice input) {
    parentActor.aimAngle += input.horizontalMoveButton * unitAngleSpeed;
  }

  void fire(PlayerActor parentActor) {
    final float arrowComponentInterval = 24.0;
    final int arrowShaftNumber = 5;
    for (int i = 0; i < arrowShaftNumber; i++) {
      LongbowArrowShaft newArrow = new LongbowArrowShaft();
      newArrow.xPosition = parentActor.xPosition + i * arrowComponentInterval * cos(parentActor.aimAngle);
      newArrow.yPosition = parentActor.yPosition + i * arrowComponentInterval * sin(parentActor.aimAngle);
      newArrow.rotationAngle = parentActor.aimAngle;
      newArrow.setVelocity(parentActor.aimAngle, 64.0);

      parentActor.group.addArrow(newArrow);
    }

    LongbowArrowHead newArrow = new LongbowArrowHead();
    newArrow.xPosition = parentActor.xPosition + arrowShaftNumber * arrowComponentInterval * cos(parentActor.aimAngle);
    newArrow.yPosition = parentActor.yPosition + arrowShaftNumber * arrowComponentInterval * sin(parentActor.aimAngle);
    newArrow.rotationAngle = parentActor.aimAngle;
    newArrow.setVelocity(parentActor.aimAngle, 64.0);

    final Particle newParticle = system.commonParticleSet.builder
      .type(2)  // Line
      .position(parentActor.xPosition, parentActor.yPosition)
      .polarVelocity(0.0, 0.0)
      .rotation(parentActor.aimAngle)
      .particleColor(color(192.0, 64.0, 64.0))
      .lifespanSecond(2.0)
      .weight(16.0)
      .build();    
    system.commonParticleSet.particleList.add(newParticle);

    parentActor.group.addArrow(newArrow);

    system.screenShakeValue += 10.0;
    
    parentActor.chargedFrameCount = 0;
    parentActor.state = moveState.entryState(parentActor);
  }

  void displayEffect(PlayerActor parentActor) {
    noFill();
    stroke(0.0);
    arc(0.0, 0.0, 100.0, 100.0, parentActor.aimAngle - QUARTER_PI, parentActor.aimAngle + QUARTER_PI);

    if (hasCompletedLongBowCharge(parentActor)) stroke(effectColor);
    else stroke(0.0, 128.0);

    line(0.0, 0.0, 800.0 * cos(parentActor.aimAngle), 800.0 * sin(parentActor.aimAngle));

    rotate(-HALF_PI);
    strokeWeight(ringStrokeWeight);
    arc(0.0, 0.0, ringSize, ringSize, 0.0, TWO_PI * min(1.0, float(parentActor.chargedFrameCount) / chargeRequiredFrameCount));
    strokeWeight(1.0);
    rotate(+HALF_PI);

    parentActor.chargedFrameCount++;
  }

  void act(PlayerActor parentActor) {
    super.act(parentActor);

    if (parentActor.chargedFrameCount != chargeRequiredFrameCount) return;

    final Particle newParticle = system.commonParticleSet.builder
      .type(3)  // Ring
      .position(parentActor.xPosition, parentActor.yPosition)
      .polarVelocity(0.0, 0.0)
      .particleSize(ringSize)
      .particleColor(effectColor)
      .weight(ringStrokeWeight)
      .lifespanSecond(0.5)
      .build();    
    system.commonParticleSet.particleList.add(newParticle);
  }

  boolean isDrawingLongBow() {
    return true;
  }
  boolean hasCompletedLongBowCharge(PlayerActor parentActor) {
    return parentActor.chargedFrameCount >= chargeRequiredFrameCount;
  }

  boolean buttonPressed(AbstractInputDevice input) {
    return input.longShotButtonPressed;
  }
  boolean triggerPulled(PlayerActor parentActor) {
    return buttonPressed(parentActor.engine.controllingInputDevice) == false && hasCompletedLongBowCharge(parentActor);
  }
}