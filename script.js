// ===== Birthday Story Interactions =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.10, rootMargin: '0px 0px -60px 0px' });

revealElements.forEach((element) => revealObserver.observe(element));

// Floating blue particles
function createSpark() {
  const spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.left = Math.random() * 100 + 'vw';
  spark.style.top = (55 + Math.random() * 45) + 'vh';
  spark.style.animationDuration = (4 + Math.random() * 6) + 's';
  spark.style.animationDelay = (Math.random() * 1.5) + 's';
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 11000);
}
setInterval(createSpark, 700);

// Gentle mouse parallax on desktop
const bg = document.querySelector('.bg');
window.addEventListener('mousemove', (event) => {
  if (window.innerWidth < 700 || !bg) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;
  bg.style.transform = `scale(1.06) translate(${x}px, ${y}px)`;
}, { passive: true });

// Soft click glow effect
window.addEventListener('click', (event) => {
  const glow = document.createElement('div');
  glow.className = 'spark';
  glow.style.left = event.clientX + 'px';
  glow.style.top = event.clientY + 'px';
  glow.style.position = 'fixed';
  glow.style.animationDuration = '1.4s';
  document.body.appendChild(glow);
  setTimeout(() => glow.remove(), 1500);
});
