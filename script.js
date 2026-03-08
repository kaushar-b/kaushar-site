// Typing effect
const roles = ["AI Red Teamer", "Pentester", "Bug Bounty Hunter", "Security Researcher"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deleteSpeed = 50;

function type() {
  const element = document.getElementById("roles");
  const currentRole = roles[roleIndex];

  if (!isDeleting && charIndex < currentRole.length) {
    element.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    element.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, deleteSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(type, 1500); // pause before next
  }
}
type();

// Simple particles (canvas)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 0.5 + 0.1,
    color: `rgba(0, 245, 255, ${Math.random() * 0.5 + 0.3})`
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
