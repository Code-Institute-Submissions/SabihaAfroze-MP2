class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/memorygame.mp3');
        this.flipSound = new Audio('assets/audio/click.wav');
        this.matchSound = new Audio('assets/audio/match1.wav');
        this.winSound = new Audio('assets/audio/win.wav');
        this.timeOverSound = new Audio('assets/audio/timeover.wav.wav');
    }

    playMusic() {
        this.bgMusic.play();
    }

    pauseMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    }
