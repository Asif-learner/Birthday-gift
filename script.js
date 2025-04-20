const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.speedX = Math.random() * 5 - 2.5;
    this.speedY = Math.random() * 5 - 2.5;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
  }
}

function createParticles(x, y) {
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(x, y));
  }
  return particles;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (particles.length > 0) {
    particles.forEach((particle, index) => {
      particle.draw();
      particle.update();

      if (particle.size <= 0.3) {
        particles.splice(index, 1);
      }
    });
  }

  requestAnimationFrame(animate);
}

let particles = [];
document.addEventListener('click', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  particles = particles.concat(createParticles(x, y));
});

animate();