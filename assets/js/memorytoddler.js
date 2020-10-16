class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/memorygame.mp3');
        this.flipSound = new Audio('assets/audio/click.wav');
        this.matchSound = new Audio('assets/audio/match1.wav');
        this.winSound = new Audio('assets/audio/win.wav');
        this.timeOverSound = new Audio('assets/audio/timeover.wav');
        this.bgMusic.volume = 0.4;
        this.bgMusic.loop = true;
    }

    startMusic() {
        this.bgMusic.play();
    }

    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    win() {
        this.stopMusic();
        this.winSound.play();
    }
    timeOver() {
        this.stopMusic();
        this.timeOverSound.play();
    }

    }

    class MemoryToddler {
    constructor(totalTime, blocks) {
        this.blocksArray = blocks;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.blockToCheck = null;
        this.matchedBlocks = [];
        this.busy = true;
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleBlocks(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)
        this.hideBlocks();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);}
     else { ready();}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let blocks = Array.from(document.getElementsByClassName('block'));
    let game = new MemoryToddler(100, blocks);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    blocks.forEach(block => {
        block.addEventListener('click', () => {
            game.flipCard(block);
        });
    });
}
