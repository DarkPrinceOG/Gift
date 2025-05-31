// Background music autoplay with user interaction fallback
window.addEventListener('load', function () {
  const audio = document.getElementById('bgmusic');
  if (audio) {
    const tryPlay = () => {
      audio.play().catch(() => {
        console.log("Waiting for user interaction...");
        document.body.addEventListener('click', () => {
          audio.play();
        }, { once: true });
      });
    };
    tryPlay();
  }
});

// Create falling petals
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDuration = (5 + Math.random() * 5) + 's';

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

// Generate petals every 300ms
setInterval(createPetal, 300);