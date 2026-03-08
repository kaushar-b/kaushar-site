// 1. Typing animation
const typed = document.getElementById('typed');
const phrases = ['Viewy', 'Liquid Prism Builder', 'ML + Security', 'Creative Coder'];
let i = 0, j = 0, isDeleting = false;

function typeLoop() {
  const word = phrases[i];
  typed.textContent = isDeleting ? word.substring(0, j - 1) : word.substring(0, j + 1);

  j = isDeleting ? j - 1 : j + 1;

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && j === word.length) {
    speed = 1800; // pause
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, speed);
}
typeLoop();

// 2. Interactive Refraction / Prism Beams (Canvas)
const canvas = document.getElementById('refraction-canvas');
const ctx = canvas.getContext('2d');

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let mouse = { x: w/2, y: h/2 };
window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Prism beams array
const beams = [];
for (let i = 0; i < 12; i++) {
  beams.push({
    x: Math.random() * w,
    y: Math.random() * h,
    angle: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.6,
    length: 200 + Math.random() * 300,
    hue: 180 + Math.random() * 120 // cyan-purple range
  });
}

function drawBeam(b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(b.angle + Math.sin(Date.now() * 0.0005 + b.x * 0.001) * 0.3);

  // Mouse influence
  const dx = mouse.x - b.x;
  const dy = mouse.y - b.y;
  const dist = Math.hypot(dx, dy);
  if (dist < 400) {
    b.angle += (dx * 0.0003) * (1 - dist / 400);
  }

  // Draw gradient line with refraction glow
  const grad = ctx.createLinearGradient(0, 0, b.length, 0);
  grad.addColorStop(0, `hsla(${b.hue}, 80%, 70%, 0)`);
  grad.addColorStop(0.4, `hsla(${b.hue}, 90%, 80%, 0.6)`);
  grad.addColorStop(0.6, `hsla(${b.hue + 30}, 100%, 90%, 0.8)`);
  grad.addColorStop(1, `hsla(${b.hue + 60}, 100%, 100%, 0)`);

  ctx.strokeStyle = grad;
  ctx.lineWidth = 3 + Math.sin(Date.now() * 0.001 + b.x) * 2;
  ctx.shadowBlur = 30;
  ctx.shadowColor = `hsl(${b.hue}, 100%, 70%)`;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(b.length, 0);
  ctx.stroke();

  // Small prism sparkle at end
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.7;
  ctx.fillRect(b.length - 10, -5, 20, 10);

  ctx.restore();

  // Slow drift
  b.x += Math.cos(b.angle) * b.speed;
  b.y += Math.sin(b.angle) * b.speed;

  // Wrap around screen
  if (b.x < -b.length) b.x = w + b.length;
  if (b.x > w + b.length) b.x = -b.length;
  if (b.y < -b.length) b.y = h + b.length;
  if (b.y > h + b.length) b.y = -b.length;
}

function animate() {
  ctx.fillStyle = 'rgba(0,0,0,0.04)'; // gentle fade trail
  ctx.fillRect(0, 0, w, h);

  beams.forEach(drawBeam);
  requestAnimationFrame(animate);
}
animate();
