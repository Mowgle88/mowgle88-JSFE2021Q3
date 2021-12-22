const sound: Element = document.querySelector('.volume-button') as Element;
let isPlay: boolean = false;

const audio: HTMLAudioElement = new Audio();

function playAudio(): void {
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
