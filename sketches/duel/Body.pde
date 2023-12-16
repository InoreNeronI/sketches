abstract class Body
{
  float xPosition, yPosition;
  float xVelocity, yVelocity;
  float directionAngle;
  float speed;

  void update() {
    xPosition += xVelocity;
    yPosition += yVelocity;
  }
  abstract void display();

  void setVelocity(float dir, float spd) {
    directionAngle = dir;
    speed = spd;
    xVelocity = speed * cos(dir);
    yVelocity = speed * sin(dir);
  }
  
  float getDistance(Body other) {
    return dist(this.xPosition, this.yPosition, other.xPosition, other.yPosition);
  }
  float getDistancePow2(Body other) {
    return sq(other.xPosition - this.xPosition) + sq(other.yPosition - this.yPosition);
  }
  float getAngle(Body other) {
    return atan2(other.yPosition - this.yPosition, other.xPosition - this.xPosition);
  }
}

abstract class Actor
  extends Body
{
  ActorGroup group;
  float rotationAngle;
  final float collisionRadius;

  Actor(float _collisionRadius) {
    collisionRadius = _collisionRadius;
  }

  abstract void act();

  boolean isCollided(Actor other) {
    return getDistance(other) < this.collisionRadius + other.collisionRadius;
  }
}


abstract class AbstractPlayerActor
  extends Actor
{
  final PlayerEngine engine;
  PlayerActorState state;

  AbstractPlayerActor(float _collisionRadius, PlayerEngine _engine) {
    super(_collisionRadius);
    engine = _engine;
  }

  boolean isNull() {
    return false;
  }
}

final class NullPlayerActor
  extends AbstractPlayerActor
{
  NullPlayerActor() {
    super(0.0, null);
  }

  void act() {
  }
  void display() {
  }
  boolean isNull() {
    return true;
  }
}

final class PlayerActor
  extends AbstractPlayerActor
{
  final float bodySize = 32.0;
  final float halfBodySize = bodySize * 0.5;
  final color fillColor;

  float aimAngle;
  int chargedFrameCount;
  int damageRemainingFrameCount;

  PlayerActor(PlayerEngine _engine, color col) {
    super(16.0, _engine);
    fillColor = col;
  }

  void addVelocity(float xAcceleration, float yAcceleration) {
    xVelocity = constrain(xVelocity + xAcceleration, -10.0, 10.0);
    yVelocity = constrain(yVelocity + yAcceleration, -7.0, 7.0);
  }

  void act() {
    engine.run(this);
    state.act(this);
  }

  void update() {
    super.update();

    if (xPosition < halfBodySize) {
      xPosition = halfBodySize;
      xVelocity = -0.5 * xVelocity;
    }
    if (xPosition > INTERNAL_CANVAS_SIDE_LENGTH - halfBodySize) {
      xPosition = INTERNAL_CANVAS_SIDE_LENGTH - halfBodySize;
      xVelocity = -0.5 * xVelocity;
    }
    if (yPosition < halfBodySize) {
      yPosition = halfBodySize;
      yVelocity = -0.5 * yVelocity;
    }
    if (yPosition > INTERNAL_CANVAS_SIDE_LENGTH - halfBodySize) {
      yPosition = INTERNAL_CANVAS_SIDE_LENGTH - halfBodySize;
      yVelocity = -0.5 * yVelocity;
    }

    xVelocity = xVelocity * 0.92;
    yVelocity = yVelocity * 0.92;

    rotationAngle += (0.1 + 0.04 * (sq(xVelocity) + sq(yVelocity))) * TWO_PI / IDEAL_FRAME_RATE;
  }

  void display() {
    stroke(0.0);
    fill(fillColor);
    pushMatrix();
    translate(xPosition, yPosition);
    pushMatrix();
    rotate(rotationAngle);
    rect(0.0, 0.0, 32.0, 32.0);
    popMatrix();
    state.displayEffect(this);
    popMatrix();
  }
}



abstract class AbstractArrowActor
  extends Actor
{
  final float halfLength;

  AbstractArrowActor(float _collisionRadius, float _halfLength) {
    super(_collisionRadius);
    halfLength = _halfLength;
  }

  void update() {
    super.update();
    if (
      xPosition < -halfLength ||
      xPosition > INTERNAL_CANVAS_SIDE_LENGTH + halfLength ||
      yPosition < -halfLength ||
      yPosition > INTERNAL_CANVAS_SIDE_LENGTH + halfLength
    ) {
      group.removingArrowList.add(this);
    }
  }

  abstract boolean isLethal();
}

class ShortbowArrow
  extends AbstractArrowActor
{
  final float terminalSpeed;

  final float halfHeadLength = 8.0;
  final float halfHeadWidth = 4.0;
  final float halfFeatherWidth = 4.0;
  final float featherLength = 8.0;

  ShortbowArrow() {
    super(8.0, 20.0);
    terminalSpeed = 8.0;
  }

  void update() {
    xVelocity = speed * cos(directionAngle);
    yVelocity = speed * sin(directionAngle);
    super.update();

    speed += (terminalSpeed - speed) * 0.1;
  }

  void act() {
    if (random(1.0) < 0.5 == false) return;

    final float particleDirectionAngle = this.directionAngle + PI + random(-QUARTER_PI, QUARTER_PI);
    for (int i = 0; i < 3; i++) {
      final float particleSpeed = random(0.5, 2.0);
      final Particle newParticle = system.commonParticleSet.builder
        .type(1)  // Square
        .position(this.xPosition, this.yPosition)
        .polarVelocity(particleDirectionAngle, particleSpeed)
        .particleSize(2.0)
        .particleColor(color(192.0))
        .lifespanSecond(0.5)
        .build();
      system.commonParticleSet.particleList.add(newParticle);
    }
  }

  void display() {
    stroke(0.0);
    fill(0.0);
    pushMatrix();
    translate(xPosition, yPosition);
    rotate(rotationAngle);
    line(-halfLength, 0.0, halfLength, 0.0);
    quad(
      halfLength, 0.0, 
      halfLength - halfHeadLength, -halfHeadWidth, 
      halfLength + halfHeadLength, 0.0, 
      halfLength - halfHeadLength, +halfHeadWidth
      );
    line(-halfLength, 0.0, -halfLength - featherLength, -halfFeatherWidth);
    line(-halfLength, 0.0, -halfLength - featherLength, +halfFeatherWidth);
    line(-halfLength + 4.0, 0.0, -halfLength - featherLength + 4.0, -halfFeatherWidth);
    line(-halfLength + 4.0, 0.0, -halfLength - featherLength + 4.0, +halfFeatherWidth);
    line(-halfLength + 8.0, 0.0, -halfLength - featherLength + 8.0, -halfFeatherWidth);
    line(-halfLength + 8.0, 0.0, -halfLength - featherLength + 8.0, +halfFeatherWidth);
    popMatrix();
  }

  boolean isLethal() {
    return false;
  }
}

abstract class LongbowArrowComponent
  extends AbstractArrowActor
{
  LongbowArrowComponent() {
    super(16.0, 16.0);
  }

  void act() {
    final float particleDirectionAngle = this.directionAngle + PI + random(-HALF_PI, HALF_PI);
    for (int i = 0; i < 5; i++) {
      final float particleSpeed = random(2.0, 4.0);
      final Particle newParticle = system.commonParticleSet.builder
        .type(1)  // Square  
        .position(this.xPosition, this.yPosition)
        .polarVelocity(particleDirectionAngle, particleSpeed)
        .particleSize(4.0)
        .particleColor(color(64.0))
        .lifespanSecond(1.0)
        .build();
      system.commonParticleSet.particleList.add(newParticle);
    }
  }

  boolean isLethal() {
    return true;
  }
}

final class LongbowArrowHead
  extends LongbowArrowComponent
{
  final float halfHeadLength = 24.0;
  final float halfHeadWidth = 24.0;

  LongbowArrowHead() {
    super();
  }

  void display() {
    strokeWeight(5.0);
    stroke(0.0);
    fill(0.0);
    pushMatrix();
    translate(xPosition, yPosition);
    rotate(rotationAngle);
    line(-halfLength, 0.0, 0.0, 0.0);
    quad(
      0.0, 0.0, 
      -halfHeadLength, -halfHeadWidth, 
      +halfHeadLength, 0.0, 
      -halfHeadLength, +halfHeadWidth
      );
    popMatrix();
    strokeWeight(1.0);
  }
}

final class LongbowArrowShaft
  extends LongbowArrowComponent
{
  LongbowArrowShaft() {
    super();
  }

  void display() {
    strokeWeight(5.0);
    stroke(0.0);
    fill(0.0);
    pushMatrix();
    translate(xPosition, yPosition);
    rotate(rotationAngle);
    line(-halfLength, 0.0, halfLength, 0.0);
    popMatrix();
    strokeWeight(1.0);
  }
}



final class Particle
  extends Body
  implements Poolable
{
  // fields for Poolable
  boolean allocatedIndicator;
  ObjectPool belongingPool;
  int allocationIdentifier;  

  float rotationAngle;
  color displayColor;
  float strokeWeightValue;
  float displaySize;

  int lifespanFrameCount;
  int properFrameCount;
  int particleTypeNumber;

  // override methods of Poolable
  public boolean isAllocated() { 
    return allocatedIndicator;
  }
  public void setAllocated(boolean indicator) { 
    allocatedIndicator = indicator;
  }
  public ObjectPool getBelongingPool() { 
    return belongingPool;
  }
  public void setBelongingPool(ObjectPool pool) { 
    belongingPool = pool;
  }
  public int getAllocationIdentifier() { 
    return allocationIdentifier;
  }
  public void setAllocationIdentifier(int id) { 
    allocationIdentifier = id;
  }
  public void initialize() {
    xPosition = 0.0;
    yPosition = 0.0;
    xVelocity = 0.0;
    yVelocity = 0.0;
    directionAngle = 0.0;
    speed = 0.0;

    rotationAngle = 0.0;
    displayColor = color(0.0);
    strokeWeightValue = 1.0;
    displaySize = 10.0;

    lifespanFrameCount = 0;
    properFrameCount = 0;
    particleTypeNumber = 0;
  }


  void update() {
    super.update();

    xVelocity = xVelocity * 0.98;
    yVelocity = yVelocity * 0.98;

    properFrameCount++;
    if (properFrameCount > lifespanFrameCount) system.commonParticleSet.removingParticleList.add(this);

    switch(particleTypeNumber) {
    case 1:    // Square
      rotationAngle += 1.5 * TWO_PI / IDEAL_FRAME_RATE;
      break;
    default:
      break;
    }
  }

  float getProgressRatio() {
    return min(1.0, float(properFrameCount) / lifespanFrameCount);
  }
  float getFadeRatio() {
    return 1.0 - getProgressRatio();
  }

  void display() {
    switch(particleTypeNumber) {
    case 0:  // Dot
      set(int(xPosition), int(yPosition), color(128.0 + 127.0 * getProgressRatio()));
      break;
    case 1:  // Square
      noFill();
      stroke(displayColor, 255.0 * getFadeRatio());
      pushMatrix();
      translate(xPosition, yPosition);
      rotate(rotationAngle);
      rect(0.0, 0.0, displaySize, displaySize);
      popMatrix();
      break;
    case 2:  // Line
      stroke(displayColor, 128.0 * getFadeRatio());
      strokeWeight(strokeWeightValue * pow(getFadeRatio(), 4.0));
      line(xPosition, yPosition, xPosition + 800.0 * cos(rotationAngle), yPosition + 800.0 * sin(rotationAngle));
      strokeWeight(1.0);
      break;
    case 3:  // Ring
      final float ringSizeExpandRatio = 2.0 * (pow(getProgressRatio() - 1.0, 5.0) + 1.0);
      noFill();
      stroke(displayColor, 255.0 * getFadeRatio());
      strokeWeight(strokeWeightValue * getFadeRatio());
      ellipse(xPosition, yPosition, displaySize * (1.0 + ringSizeExpandRatio), displaySize * (1.0 + ringSizeExpandRatio));
      strokeWeight(1.0);
      break;
    default: 
      break;
    }
  }
}