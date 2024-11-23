let currentSound = null;
let audio = new Audio();

function playSound(filename) {
  // If there's a sound already playing, stop it
  if (currentSound !== null) {
    audio.pause();
  }
  
  // Set the new sound source and play it
  audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
audio.play();
  currentSound = filename;
}

function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  currentSound = null;
}
