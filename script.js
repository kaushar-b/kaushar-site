// Veil lift on scroll reveal
const veilElements = document.querySelectorAll('.veil-lift, .veil-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('veil-lift-visible'); // optional extra class if needed
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

veilElements.forEach(el => observer.observe(el));

// Optional: Glitch trigger on hover for fun
document.querySelectorAll('.glass-veil').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('animate-glitch');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('animate-glitch');
  });
});
