const audioPlayer = document.getElementById('audio-player');

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});

document.querySelector('.stop').addEventListener('click', stopSound);

function playSound(sound) {
    audioPlayer.src = `sounds/${sound}.mp3`;
    audioPlayer.play();
}

function stopSound() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}
