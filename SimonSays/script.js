const buttons = document.querySelectorAll('.btn');
const startBtn = document.getElementById('start');

let pattern = [];
let playerPattern = [];
let level = 1;
let isPlaying = false;

startBtn.addEventListener('click', startGame);

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => handleClick(index));
});

function startGame() {
    pattern = [];
    level = 1;
    isPlaying = true;
    startBtn.textContent = 'Restart';
    startBtn.disabled = true;
    
    addToPattern();
    showPattern();
}

function addToPattern() {
    pattern.push(Math.floor(Math.random() * 4));
}

function showPattern() {
    let i = 0;
    const interval = setInterval(() => {
        if (i >= pattern.length) {
            clearInterval(interval);
            playerPattern = [];
            return;
        }
        lightButton(pattern[i]);
        i++;
    }, 600);
}

function lightButton(index) {
    const btn = buttons[index];
    btn.style.opacity = '0.5';
    setTimeout(() => {
        btn.style.opacity = '1';
    }, 300);
}

function handleClick(index) {
    if (!isPlaying) return;
    
    lightButton(index);
    playerPattern.push(index);
    
    if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1]) {
        gameOver();
        return;
    }
    
    if (playerPattern.length === pattern.length) {
        level++;
        startBtn.textContent = `Level ${level}`;
        setTimeout(() => {
            addToPattern();
            showPattern();
        }, 1000);
    }
}

function gameOver() {
    isPlaying = false;
    startBtn.textContent = `Score: ${level - 1}`;
    startBtn.disabled = false;
}