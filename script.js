
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = '☀ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}