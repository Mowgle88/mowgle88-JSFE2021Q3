const sound = document.querySelector('.volume-button');
let isPlay = false;

const audio = new Audio();

function playAudio() {
  if (!isPlay) {
    audio.src = './assets/audio/audio.mp3';
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    sound.classList.add('volume-button-active');
  } else {
    audio.pause();
    isPlay = false;
    sound.classList.remove('volume-button-active');
  }
}

sound.addEventListener('click', playAudio);
