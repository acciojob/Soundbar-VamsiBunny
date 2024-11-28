let currentSound = null;

function playSound(sound) {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    currentSound = new Audio(`sounds/${sound}.mp3`);
    currentSound.play();
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
}
