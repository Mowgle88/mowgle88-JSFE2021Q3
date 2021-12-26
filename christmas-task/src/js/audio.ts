const sound: NodeListOf<Element> = document.querySelectorAll('.volume-button') as NodeListOf<Element>;
let isPlay: boolean = false;

const audio: HTMLAudioElement = new Audio();

function playAudio(): void {
  if (!isPlay) {
    audio.src = './assets/audio/audio.mp3';
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    sound.forEach((el) => {
      el.classList.add('volume-button-active');
    })
  } else {
    audio.pause();
    isPlay = false;
    sound.forEach((el) => {
      el.classList.remove('volume-button-active');
    })
  }
}

sound.forEach((el) => {
  el.addEventListener('click', playAudio);
})
