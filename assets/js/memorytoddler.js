class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/memorygame.mp3');
        this.flipSound = new Audio('assets/audio/click.wav');
        this.matchSound = new Audio('assets/audio/match1.wav');
        this.winSound = new Audio('assets/audio/win.wav');
        this.timeOverSound = new Audio('assets/audio/timeover.wav');
    }

    playMusic() {
        this.bgMusic.play();
    }

    pauseMusic(){
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

    if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
