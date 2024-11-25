const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
const GameOverScreen = document.getElementById('GameOverScreen');
const RetryButton = document.getElementById('RetryButton');
const ExitButton = document.getElementById('ExitButton');

let score = 0;
let isGameOver = false;

const scoreElement = document.createElement('div');
scoreElement.style.position = 'absolute';
scoreElement.style.down = '20px';
scoreElement.style.left = '20px';
scoreElement.style.fontSize = '24px';
scoreElement.style.fontfamily = 'Arial', 'sans-serif';
scoreElement.style.color = 'white';
scoreElement.textContent = `Pontos: ${score}`;
document.body.appendChild(scoreElement);

const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');

        score++;
        scoreElement.textContent = `Pontos: ${score}`;

        setTimeout(() => {

            mario.classList.remove('jump');

        }, 500);
    }
}

const showGameOverScreen = () => {
    GameOverScreen.style.display = 'flex';
    isGameOver = true;
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'IMG/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        showGameOverScreen();

        clearInterval(scoreInterval);
    }
}, 10);

RetryButton.addEventListener('click', () => {
    window.location.reload(); 
});

ExitButton.addEventListener('click', () => {
    window.close(); 
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') jump();
});