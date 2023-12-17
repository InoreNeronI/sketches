// @see https://codepen.io/72lions/pen/nzdpWz

const CONTAINER = document.querySelector('.main');
let SCREEN_WIDTH = CONTAINER.offsetWidth;
let SCREEN_HEIGHT = CONTAINER.offsetHeight;

const QUANTITY = 100;
const PARTICLE_SIZE = 10;
const CANVAS = document.querySelector('.canvas-background');
let context;
let particles;

function createParticles() {
  particles = [];
  const depth = 0;

  for (let i = 0; i < QUANTITY; i++) {
    const posX = PARTICLE_SIZE / 2 + Math.random() * (CONTAINER.offsetWidth - PARTICLE_SIZE / 2);
    const posY = PARTICLE_SIZE / 2 + Math.random() * (CONTAINER.offsetHeight - PARTICLE_SIZE / 2);

    const speed = 2;
    const directionX = -speed + Math.random() * speed * 2;
    const directionY = -speed + Math.random() * speed * 2;

    particles.push({
      position: { x: posX, y: posY },
      size: PARTICLE_SIZE,
      directionX,
      directionY,
      speed,
      targetX: posX,
      targetY: posY,
      depth,
      index: i,
      fillColor: `#${((Math.random() * 0x00eaff + 0xff0000) | 0).toString(16)}`,
    });
  }
}

function loop() {
  context.fillStyle = 'rgba(255,255,255,0.2)';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  let z = 0;
  let xdist = 0;
  let ydist = 0;
  let dist = 0;

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    const lp = { x: particle.position.x, y: particle.position.y };

    if (particle.position.x <= particle.size / 2 || particle.position.x >= SCREEN_WIDTH - PARTICLE_SIZE / 2) {
      particle.directionX *= -1;
    }

    if (particle.position.y <= particle.size / 2 || particle.position.y >= SCREEN_HEIGHT - PARTICLE_SIZE / 2) {
      particle.directionY *= -1;
    }

    for (let s = 0; s < particles.length; s++) {
      const bounceParticle = particles[s];
      if (bounceParticle.index !== particle.index) {
        //what are the distances
        z = PARTICLE_SIZE;
        xdist = Math.abs(bounceParticle.position.x - particle.position.x);
        ydist = Math.abs(bounceParticle.position.y - particle.position.y);
        dist = Math.sqrt(xdist ** 2 + ydist ** 2);
        if (dist < z) {
          randomiseDirection(particle);
          randomiseDirection(bounceParticle);
        }
      }
    }

    particle.position.x -= particle.directionX;
    particle.position.y -= particle.directionY;

    context.beginPath();
    context.fillStyle = particle.fillColor;
    context.lineWidth = particle.size;
    context.moveTo(lp.x, lp.y);
    context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }

  requestAnimationFrame(loop);
}

function randomiseDirection(particle) {
  //pick a random deg
  let d = 0;
  while (d === 0 || d === 90 || d === 180 || d === 360) {
    d = Math.floor(Math.random() * 360);
  }

  const r = (d * 180) / Math.PI;
  particle.directionX = Math.sin(r) * particle.speed;
  particle.directionY = Math.cos(r) * particle.speed;
}

// @see https://stackoverflow.com/a/51600005
function windowResizeHandler() {
  SCREEN_WIDTH = CONTAINER.offsetWidth;
  SCREEN_HEIGHT = CONTAINER.offsetHeight;
  CANVAS.width = SCREEN_WIDTH;
  CANVAS.height = SCREEN_HEIGHT;
}

if (CANVAS && CANVAS.getContext) {
  context = CANVAS.getContext('2d');
  context.globalCompositeOperation = 'destination-over';
  window.addEventListener('resize', windowResizeHandler, false);
  setTimeout(windowResizeHandler, 5);
  createParticles();
  loop();
}

document.querySelector('.screen').addEventListener('click', () => setTimeout(windowResizeHandler, 5));
