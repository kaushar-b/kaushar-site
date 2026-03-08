// Mouse refraction glow
const glow = document.getElementById('mouse-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
  glow.style.opacity = '0.7';
});

document.addEventListener('mouseleave', () => {
  glow.style.opacity = '0';
});

// Optional: add tilt on project cards if you want (uncomment)
 document.querySelectorAll('.glass-card').forEach(card => {
   card.addEventListener('mousemove', e => {
     const rect = card.getBoundingClientRect();
     const x = e.clientX - rect.left - rect.width / 2;
     const y = e.clientY - rect.top - rect.height / 2;
     card.style.transform = `perspective(1000px) rotateY(${x/30}deg) rotateX(${-y/30}deg)`;
   });
   card.addEventListener('mouseleave', () => {
     card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
   });
 });
