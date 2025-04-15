let audio;
let images = [];
let currentImageIndex = 0;

function showGreeting() {
    document.getElementById('greetingBox').style.display = 'flex';
    launchHearts();
}

function closeGreeting() {
    document.getElementById('greetingBox').style.display = 'none';
}

function showGallery() {
    const gallery = document.getElementById('imageGallery');
    gallery.style.display = 'block';
    images = Array.from(gallery.getElementsByTagName('img'));
    images.forEach(img => {
        img.addEventListener('click', openFullscreen);
    });
}

function closeGallery() {
    document.getElementById('imageGallery').style.display = 'none';
    images.forEach(img => {
        img.removeEventListener('click', openFullscreen);
    });
    images = [];
}

function launchConfetti() {
    for (let i = 0; i < 80; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerText = Math.random() > 0.5 ? '🎉' : '🥳';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10vh';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 6000);
    }
}

function launchHearts() {
    for (let i = 0; i < 80; i++) {
        let heart = document.createElement('div');
        heart.className = 'confetti';
        heart.innerText = Math.random() > 0.5 ? '💖💖' : '💖💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-10vh';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
}

const surpriseButton = document.getElementById('surpriseButton');
surpriseButton.addEventListener('click', () => {
    launchFireworks();
    launchPapers();
    startRain();
});

function launchFireworks() {
    const numberOfFireworks = 7;
    for (let i = 0; i < numberOfFireworks; i++) {
        createFirework();
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;
    const delay = Math.random() * 200;
    firework.style.left = `${startX}px`;
    firework.style.top = `${startY}px`;
    firework.style.animationDelay = `${delay}ms`;

    document.body.appendChild(firework);

    firework.style.animation = 'explode 1.5s ease-out forwards';

    setTimeout(() => {
        firework.remove();
    }, 1500);
}

function launchPapers() {
    const numberOfPapers = 30;
    for (let i = 0; i < numberOfPapers; i++) {
        createPaper();
    }
}

function createPaper() {
    const paper = document.createElement('div');
    paper.className = 'paper';
    const startX = Math.random() * window.innerWidth;
    const startY = -10;
    const delay = Math.random() * 300;
    const rotationDir = Math.random() < 0.3 ? -1 : 1;
    const endX = Math.random() * window.innerWidth;
    const endRotation = Math.random() * 360 * rotationDir;

    paper.style.left = `${startX}px`;
    paper.style.top = `${startY}px`;
    paper.style.animationDelay = `${delay}ms`;

    document.body.appendChild(paper);

    paper.style.animation = 'paperFall 2s linear forwards';

    setTimeout(() => {
        paper.remove();
    }, 2000);
}

function openFullscreen(event) {
    const image = event.target;
    const index = parseInt(image.getAttribute('data-index'));
    currentImageIndex = index;

    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImg = document.getElementById('fullscreenImg');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeBtn = document.getElementById('closeBtn');

    fullscreenImg.src = image.src;
    overlay.style.display = 'flex';

    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);
    closeBtn.addEventListener('click', closeFullscreen);
}

function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeBtn = document.getElementById('closeBtn');

    overlay.style.display = 'none';
    prevBtn.removeEventListener('click', showPrevious);
    nextBtn.removeEventListener('click', showNext);
    closeBtn.removeEventListener('click', closeFullscreen);
}

function showPrevious() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = images[currentImageIndex].src;
}

function showNext() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = images[currentImageIndex].src;
}

function startRain() {
    const intervalId = setInterval(() => {
        createRaindrop();
    }, 100);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 10000);
}

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 1000;

    raindrop.style.left = `${startX}px`;
    raindrop.style.animationDuration = '1s';
    raindrop.style.animationDelay = `${delay}ms`;

    document.body.appendChild(raindrop);

    raindrop.addEventListener('animationend', () => {
        raindrop.remove();
    });
}
