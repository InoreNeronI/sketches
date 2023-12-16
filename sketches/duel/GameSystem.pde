final class GameSystem
{
  final ActorGroup myGroup, otherGroup;
  final ParticleSet commonParticleSet;
  GameSystemState currentState;
  float screenShakeValue;
  final DamagedPlayerActorState damagedState;
  final GameBackground currentBackground;
  final boolean demoPlay;
  boolean showsInstructionWindow;

  GameSystem(boolean demo, boolean instruction) {
    // prepare ActorGroup
    myGroup = new ActorGroup();
    otherGroup = new ActorGroup();
    myGroup.enemyGroup = otherGroup;
    otherGroup.enemyGroup = myGroup;

    // prepare PlayerActorState
    final MovePlayerActorState moveState = new MovePlayerActorState();
    final DrawBowPlayerActorState drawShortbowState = new DrawShortbowPlayerActorState();
    final DrawBowPlayerActorState drawLongbowState = new DrawLongbowPlayerActorState();
    damagedState = new DamagedPlayerActorState();
    moveState.drawShortbowState = drawShortbowState;
    moveState.drawLongbowState = drawLongbowState;
    drawShortbowState.moveState = moveState;
    drawLongbowState.moveState = moveState;
    damagedState.moveState = moveState;

    // prepare PlayerActor
    PlayerEngine myEngine;
    if (demo) myEngine = new ComputerPlayerEngine();
    else myEngine = new HumanPlayerEngine(currentKeyInput);
    PlayerActor myPlayer = new PlayerActor(myEngine, color(255.0));
    myPlayer.xPosition = INTERNAL_CANVAS_SIDE_LENGTH * 0.5;
    myPlayer.yPosition = INTERNAL_CANVAS_SIDE_LENGTH - 100.0;
    myPlayer.state = moveState;
    myGroup.setPlayer(myPlayer);
    PlayerEngine otherEngine = new ComputerPlayerEngine();
    PlayerActor otherPlayer = new PlayerActor(otherEngine, color(0.0));
    otherPlayer.xPosition = INTERNAL_CANVAS_SIDE_LENGTH * 0.5;
    otherPlayer.yPosition = 100.0;
    otherPlayer.state = moveState;
    otherGroup.setPlayer(otherPlayer);

    // other
    commonParticleSet = new ParticleSet(2048);
    currentState = new StartGameState();
    currentBackground = new GameBackground(color(224.0), 0.1);
    demoPlay = demo;
    showsInstructionWindow = instruction;
  }
  GameSystem() {
    this(false, false);
  }

  void run() {
    if (demoPlay) {
      if (currentKeyInput.isZPressed) {
        system = new GameSystem();  // stop demo and start game
        return;
      }
    }

    pushMatrix();

    if (screenShakeValue > 0.0) {
      translate(random(-screenShakeValue, screenShakeValue), random(-screenShakeValue, screenShakeValue));
      screenShakeValue -= 50.0 / IDEAL_FRAME_RATE;
    }
    currentBackground.update();
    currentBackground.display();
    currentState.run(this);

    popMatrix();
    if (demoPlay && showsInstructionWindow) displayDemo();
  }

  void displayDemo() {
    pushStyle();

    stroke(0.0);
    strokeWeight(2.0);
    fill(255.0, 240.0);
    rect(
      INTERNAL_CANVAS_SIDE_LENGTH * 0.5,
      INTERNAL_CANVAS_SIDE_LENGTH * 0.5,
      INTERNAL_CANVAS_SIDE_LENGTH * 0.7,
      INTERNAL_CANVAS_SIDE_LENGTH * 0.6
    );

    textFont(smallFont, 20.0);
    textLeading(26.0);
    textAlign(RIGHT, BASELINE);
    fill(0.0);
    text("Z key:", 280.0, 250.0);
    text("X key:", 280.0, 320.0);
    text("Arrow key:", 280.0, 415.0);
    textAlign(LEFT);
    text("Weak shot\n (auto aiming)", 300.0, 250.0);
    text("Lethal shot\n (manual aiming,\n  requires charge)", 300.0, 320.0);
    text("Move\n (or aim lethal shot)", 300.0, 415.0);
    textAlign(CENTER);
    text("- Press Z key to start -", INTERNAL_CANVAS_SIDE_LENGTH * 0.5, 500.0);
    text("(Click to hide this window)", INTERNAL_CANVAS_SIDE_LENGTH * 0.5, 545.0);
    popStyle();

    strokeWeight(1.0);
  }

  void addSquareParticles(float x, float y, int particleCount, float particleSize, float minSpeed, float maxSpeed, float lifespanSecondValue) {
    final ParticleBuilder builder = system.commonParticleSet.builder
      .type(1)  // Square
      .position(x, y)
      .particleSize(particleSize)
      .particleColor(color(0.0))
      .lifespanSecond(lifespanSecondValue)
      ;
    for (int i = 0; i < particleCount; i++) {
      final Particle newParticle = builder
        .polarVelocity(random(TWO_PI), random(minSpeed, maxSpeed))
        .build();
      system.commonParticleSet.particleList.add(newParticle);
    }
  }
}

final class GameBackground
{
  final ArrayList<BackgroundLine> lineList = new ArrayList<BackgroundLine>();
  final float maxAccelerationMagnitude;
  final color lineColor;

  GameBackground(color col, float maxAcc) {
    lineColor = col;
    maxAccelerationMagnitude = maxAcc;
    for (int i = 0; i < 10; i++) {
      lineList.add(new HorizontalLine());
    }
    for (int i = 0; i < 10; i++) {
      lineList.add(new VerticalLine());
    }
  }

  void update() {
    for (BackgroundLine eachLine : lineList) {
      eachLine.update(random(-maxAccelerationMagnitude, maxAccelerationMagnitude));
    }
  }
  void display() {
    stroke(lineColor);
    for (BackgroundLine eachLine : lineList) {
      eachLine.display();
    }
  }
}
abstract class BackgroundLine
{
  float position;
  float velocity;

  BackgroundLine(float initialPosition) {
    position = initialPosition;
  }
  void update(float acceleration) {
    position += velocity;
    velocity += acceleration;
    if (position < 0.0 || position > getMaxPosition()) velocity = -velocity;
  }
  abstract void display();
  abstract float getMaxPosition();
}
final class HorizontalLine
  extends BackgroundLine
{
  HorizontalLine() {
    super(random(INTERNAL_CANVAS_SIDE_LENGTH));
  }
  void display() {
    line(0.0, position, INTERNAL_CANVAS_SIDE_LENGTH, position);
  }
  float getMaxPosition() {
    return INTERNAL_CANVAS_SIDE_LENGTH;
  }
}
final class VerticalLine
  extends BackgroundLine
{
  VerticalLine() {
    super(random(INTERNAL_CANVAS_SIDE_LENGTH));
  }
  void display() {
    line(position, 0.0, position, INTERNAL_CANVAS_SIDE_LENGTH);
  }
  float getMaxPosition() {
    return INTERNAL_CANVAS_SIDE_LENGTH;
  }
}



abstract class GameSystemState
{
  int properFrameCount;

  void run(GameSystem system) {
    runSystem(system);

    translate(INTERNAL_CANVAS_SIDE_LENGTH * 0.5, INTERNAL_CANVAS_SIDE_LENGTH * 0.5);
    displayMessage(system);

    checkStateTransition(system);

    properFrameCount++;
  }
  abstract void runSystem(GameSystem system);
  abstract void displayMessage(GameSystem system);
  abstract void checkStateTransition(GameSystem system);
}

final class StartGameState
  extends GameSystemState
{
  final int frameCountPerNumber = int(IDEAL_FRAME_RATE);
  final float ringSize = 200.0;
  final color ringColor = color(0.0);
  final float ringStrokeWeight = 5.0;
  int displayNumber = 4;

  void runSystem(GameSystem system) {
    system.myGroup.update();
    system.otherGroup.update();
    system.myGroup.displayPlayer();
    system.otherGroup.displayPlayer();
  }

  void displayMessage(GameSystem system) {
    final int currentNumberFrameCount = properFrameCount % frameCountPerNumber;
    if (currentNumberFrameCount == 0) displayNumber--;
    if (displayNumber <= 0) return;

    fill(ringColor);
    text(displayNumber, 0.0, 0.0);

    rotate(-HALF_PI);
    strokeWeight(3.0);
    stroke(ringColor);
    noFill();
    arc(0.0, 0.0, ringSize, ringSize, 0.0, TWO_PI * float(properFrameCount % frameCountPerNumber) / frameCountPerNumber);
    strokeWeight(1.0);
  }

  void checkStateTransition(GameSystem system) {
    if (properFrameCount >= frameCountPerNumber * 3) {
      final Particle newParticle = system.commonParticleSet.builder
        .type(3)  // Ring
        .position(INTERNAL_CANVAS_SIDE_LENGTH * 0.5, INTERNAL_CANVAS_SIDE_LENGTH * 0.5)
        .polarVelocity(0.0, 0.0)
        .particleSize(ringSize)
        .particleColor(ringColor)
        .weight(ringStrokeWeight)
        .lifespanSecond(1.0)
        .build();
      system.commonParticleSet.particleList.add(newParticle);

      system.currentState = new PlayGameState();
    }
  }
}

final class PlayGameState
  extends GameSystemState
{
  int messageDurationFrameCount = int(IDEAL_FRAME_RATE);

  void runSystem(GameSystem system) {
    system.myGroup.update();
    system.myGroup.act();
    system.otherGroup.update();
    system.otherGroup.act();
    system.myGroup.displayPlayer();
    system.otherGroup.displayPlayer();
    system.myGroup.displayArrows();
    system.otherGroup.displayArrows();

    checkCollision();

    system.commonParticleSet.update();
    system.commonParticleSet.display();
  }

  void displayMessage(GameSystem system) {
    if (properFrameCount >= messageDurationFrameCount) return;
    fill(0.0, 255.0 * (1.0 - float(properFrameCount) / messageDurationFrameCount));
    text("Go", 0.0, 0.0);
  }

  void checkStateTransition(GameSystem system) {
    if (system.myGroup.player.isNull()) {
      system.currentState = new GameResultState("You lose.");
    } else if (system.otherGroup.player.isNull()) {
      system.currentState = new GameResultState("You win.");
    }
  }

  void checkCollision() {
    final ActorGroup myGroup = system.myGroup;
    final ActorGroup otherGroup = system.otherGroup;

    for (AbstractArrowActor eachMyArrow : myGroup.arrowList) {
      for (AbstractArrowActor eachEnemyArrow : otherGroup.arrowList) {
        if (eachMyArrow.isCollided(eachEnemyArrow) == false) continue;
        breakArrow(eachMyArrow, myGroup);
        breakArrow(eachEnemyArrow, otherGroup);
      }
    }

    if (otherGroup.player.isNull() == false) {
      for (AbstractArrowActor eachMyArrow : myGroup.arrowList) {

        AbstractPlayerActor enemyPlayer = otherGroup.player;
        if (eachMyArrow.isCollided(enemyPlayer) == false) continue;

        if (eachMyArrow.isLethal()) killPlayer(otherGroup.player);
        else thrustPlayerActor(eachMyArrow, (PlayerActor)enemyPlayer);

        breakArrow(eachMyArrow, myGroup);
      }
    }

    if (myGroup.player.isNull() == false) {
      for ( AbstractArrowActor eachEnemyArrow : otherGroup.arrowList) {
        if (eachEnemyArrow.isCollided(myGroup.player) == false) continue;

        if (eachEnemyArrow.isLethal()) killPlayer(myGroup.player);
        else thrustPlayerActor(eachEnemyArrow, (PlayerActor)myGroup.player);

        breakArrow(eachEnemyArrow, otherGroup);
      }
    }
  }

  void killPlayer(AbstractPlayerActor player) {
    system.addSquareParticles(player.xPosition, player.yPosition, 50, 16.0, 2.0, 10.0, 4.0);
    player.group.player = new NullPlayerActor();
    system.screenShakeValue = 50.0;
  }

  void breakArrow(AbstractArrowActor arrow, ActorGroup group) {
    system.addSquareParticles(arrow.xPosition, arrow.yPosition, 10, 7.0, 1.0, 5.0, 1.0);
    group.removingArrowList.add(arrow);
  }

  void thrustPlayerActor(Actor referenceActor, PlayerActor targetPlayerActor) {
    final float relativeAngle = atan2(targetPlayerActor.yPosition - referenceActor.yPosition, targetPlayerActor.xPosition - referenceActor.xPosition);
    final float thrustAngle = relativeAngle + random(-0.5 * HALF_PI, 0.5 * HALF_PI);
    targetPlayerActor.xVelocity += 20.0 * cos(thrustAngle);
    targetPlayerActor.yVelocity += 20.0 * sin(thrustAngle);
    targetPlayerActor.state = system.damagedState.entryState(targetPlayerActor);
    system.screenShakeValue += 10.0;
  }
}

final class GameResultState
  extends GameSystemState
{
  final String resultMessage;
  final int durationFrameCount = int(IDEAL_FRAME_RATE);

  GameResultState(String msg) {
    resultMessage = msg;
  }

  void runSystem(GameSystem system) {
    system.myGroup.update();
    system.otherGroup.update();
    system.myGroup.displayPlayer();
    system.otherGroup.displayPlayer();

    system.commonParticleSet.update();
    system.commonParticleSet.display();
  }

  void displayMessage(GameSystem system) {
    if (system.demoPlay) return;

    fill(0.0);
    text(resultMessage, 0.0, 0.0);
    if (properFrameCount > durationFrameCount) {
      pushStyle();
      textFont(smallFont, 20.0);
      text("Press X key to reset.", 0.0, 80.0);
      popStyle();
    }
  }

  void checkStateTransition(GameSystem system) {
    if (system.demoPlay) {
      if (properFrameCount > durationFrameCount * 3) {
        newGame(true, system.showsInstructionWindow);
      }
    } else {
      if (properFrameCount > durationFrameCount && currentKeyInput.isXPressed) {
        newGame(true, true);  // back to demoplay with instruction window
      }
    }
  }
}


final class ActorGroup
{
  ActorGroup enemyGroup;

  AbstractPlayerActor player;
  final ArrayList<AbstractArrowActor> arrowList = new ArrayList<AbstractArrowActor>();
  final ArrayList<AbstractArrowActor> removingArrowList = new ArrayList<AbstractArrowActor>();

  void update() {
    player.update();

    if (removingArrowList.size() >= 1) {
      arrowList.removeAll(removingArrowList);
      removingArrowList.clear();
    }

    for (AbstractArrowActor eachArrow : arrowList) {
      eachArrow.update();
    }
  }
  void act() {
    player.act();
    for (AbstractArrowActor eachArrow : arrowList) {
      eachArrow.act();
    }
  }

  void setPlayer(PlayerActor newPlayer) {
    player = newPlayer;
    newPlayer.group = this;
  }
  void addArrow(AbstractArrowActor newArrow) {
    arrowList.add(newArrow);
    newArrow.group = this;
  }

  void displayPlayer() {
    player.display();
  }
  void displayArrows() {
    for (AbstractArrowActor eachArrow : arrowList) {
      eachArrow.display();
    }
  }
}

final class ParticleSet
{
  final ArrayList<Particle> particleList;
  final ArrayList<Particle> removingParticleList;
  final ObjectPool<Particle> particlePool;
  final ParticleBuilder builder;

  ParticleSet(int capacity) {
    particlePool = new ObjectPool<Particle>(capacity);
    for (int i = 0; i < capacity; i++) {
      particlePool.pool.add(new Particle());
    }

    particleList = new ArrayList<Particle>(capacity);
    removingParticleList = new ArrayList<Particle>(capacity);
    builder = new ParticleBuilder();
  }

  void update() {
    particlePool.update();

    for (Particle eachParticle : particleList) {
      eachParticle.update();
    }

    if (removingParticleList.size() >= 1) {
      for (Particle eachInstance : removingParticleList) {
        particlePool.deallocate(eachInstance);
      }
      particleList.removeAll(removingParticleList);
      removingParticleList.clear();
    }
  }

  void display() {
    for (Particle eachParticle : particleList) {
      eachParticle.display();
    }
  }

  Particle allocate() {
    return particlePool.allocate();
  }
}

final class ParticleBuilder {
  int particleTypeNumber;

  float xPosition, yPosition;
  float xVelocity, yVelocity;
  float directionAngle, speed;

  float rotationAngle;
  color displayColor;
  float strokeWeightValue;
  float displaySize;

  int lifespanFrameCount;

  ParticleBuilder initialize() {
    particleTypeNumber = 0;
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
    lifespanFrameCount = 60;
    return this;
  }
  ParticleBuilder type(int v) {
    particleTypeNumber = v;
    return this;
  }
  ParticleBuilder position(float x, float y) {
    xPosition = x;
    yPosition = y;
    return this;
  }
  ParticleBuilder polarVelocity(float dir, float spd) {
    directionAngle = dir;
    speed = spd;
    xVelocity = spd * cos(dir);
    yVelocity = spd * sin(dir);
    return this;
  }
  ParticleBuilder rotation(float v) {
    rotationAngle = v;
    return this;
  }
  ParticleBuilder particleColor(color c) {
    displayColor = c;
    return this;
  }
  ParticleBuilder weight(float v) {
    strokeWeightValue = v;
    return this;
  }
  ParticleBuilder particleSize(float v) {
    displaySize = v;
    return this;
  }
  ParticleBuilder lifespan(int v) {
    lifespanFrameCount = v;
    return this;
  }
  ParticleBuilder lifespanSecond(float v) {
    lifespan(int(v * IDEAL_FRAME_RATE));
    return this;
  }
  Particle build() {
    final Particle newParticle = system.commonParticleSet.allocate();
    newParticle.particleTypeNumber = this.particleTypeNumber;
    newParticle.xPosition = this.xPosition;
    newParticle.yPosition = this.yPosition;
    newParticle.xVelocity = this.xVelocity;
    newParticle.yVelocity = this.yVelocity;
    newParticle.directionAngle = this.directionAngle;
    newParticle.speed = this.speed;
    newParticle.rotationAngle = this.rotationAngle;
    newParticle.displayColor = this.displayColor;
    newParticle.strokeWeightValue = this.strokeWeightValue;
    newParticle.displaySize = this.displaySize;
    newParticle.lifespanFrameCount = this.lifespanFrameCount;
    return newParticle;
  }
}
