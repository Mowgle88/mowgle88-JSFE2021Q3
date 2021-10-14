const bigPlayButton = document.querySelector(".video__play");
const container = document.querySelector(".video-container");
const videoSpeedPlate = document.querySelector(".video-speed-plate");
const smallPlayButton = document.querySelector(".small-play");
const progressBar = document.querySelector(".range-rewind");
const volumeButton = document.querySelector(".volume-btn");
const volumeBar = document.querySelector(".range-volume");
const fullScreenButton = document.querySelector(".fullscreen-btn");

const video = document.querySelector(".video-vid");

const leftArrow = document.querySelector(".bullet-left");
const rightArrow = document.querySelector(".bullet-right");

let currentVideo = 0;
let isEnabledVideo = true;
let previousVolumeValue = 1;
let isEnabledSpeed = true;

function playVideo() {
  video.play();
  bigPlayButton.style.display = "none";
  smallPlayButton.style.backgroundImage = "url(./assets/svg/pause.svg)";
}

function pauseVideo() {
  video.pause();
  bigPlayButton.style.display = "";
  smallPlayButton.style.backgroundImage = "";
}

function stopVideo() {
  video.load();
  bigPlayButton.style.display = "";
  smallPlayButton.style.backgroundImage = "";
  video.currentTime = 0;
}

function volumeSwitch(e) {
  if (video.volume) {
      previousVolumeValue = video.volume;
      video.volume = 0;
      volumeBar.value = 0;
      volumeButton.style.backgroundImage =
          "url(./assets/svg/mute-on.svg)";
  } else {
      volumeButton.style.backgroundImage = "";
      video.volume = previousVolumeValue;
      volumeBar.value = previousVolumeValue * 100;
  }
}

function volumeMuteCheck() {
  if (video.volume == 0) {
      volumeButton.style.backgroundImage =
          "url(./assets/svg/Mute.svg)";
      return;
  }
  volumeButton.style.backgroundImage = "";
}

function volumeBarController(e) {
  video.volume = volumeBar.value / 100;
  sliderColorize(e);
}

function progressBarController(e) {
  video.currentTime = (video.duration * progressBar.value) / 100;
  sliderColorize(e);
}

function progressBarColorizer(e) {
  progressBar.value = (video.currentTime / video.duration) * 100;
}

function fullscreenInteractor(e) {
  if (!document.fullscreenElement) {
      container.requestFullscreen();
      fullScreenButton.style.backgroundImage =
          "url(./assets/svg/fullscreen_exit.svg)";
      video.style.height = "calc(100vh - 85px)";
      progressBar.style.width = "63%";
      volumeBar.style.width = "20%";
  } else {
      video.style.height = "";
      progressBar.style.width = "";
      volumeBar.style.width = "";
      document.exitFullscreen();
      fullScreenButton.style.backgroundImage = "";
  }
}

function fullscreenEsc(e) {
  if (!document.fullscreenElement) {
      video.style.height = "";
      progressBar.style.width = "";
      volumeBar.style.width = "";
      fullScreenButton.style.backgroundImage = "";
  }
}

function plateInteractor() {
  isEnabledSpeed = false;
  videoSpeedPlate.classList.toggle("active");
  videoSpeedPlate.innerHTML = video.playbackRate.toFixed(1) + "x";
  setTimeout(() => {
      videoSpeedPlate.classList.toggle("active");
      isEnabledSpeed = true;
  }, 300);
}

function videoSrcChangeUp() {
  stopVideo();
  currentVideo = (currentVideo + 1 + 5) % 5;
  video.src = `./assets/video/video${currentVideo}.mp4`;
  video.poster = `./assets/video/poster${currentVideo}.jpg`;
  progressBar.value = 0;
}

function videoSrcChangeDown() {
  stopVideo();
  if (currentVideo == 0) {
      currentVideo = 5;
  }
  currentVideo = currentVideo - 1;
  video.src = `./assets/video/video${currentVideo}.mp4`;
  video.poster = `./assets/video/poster${currentVideo}.jpg`;
}


// ==========================================================

// progressBar.addEventListener("input", sliderColorize);
// volumeBar.addEventListener("input", sliderColorize);

bigPlayButton.addEventListener("click", playVideo);

video.addEventListener("click", function () {
    if (video.paused) {
        playVideo();
    } else pauseVideo();
});

smallPlayButton.addEventListener("click", function () {
    if (video.paused) {
        playVideo();
    } else pauseVideo();
});

progressBar.addEventListener("input", progressBarController);
volumeBar.addEventListener("input", volumeBarController);
video.addEventListener("timeupdate", progressBarColorizer);
video.addEventListener("ended", stopVideo);

video.addEventListener("play", function () {
  volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeBar.value}%, #C4C4C4 ${volumeBar.value}%, #C4C4C4 100%)`;
});
volumeButton.addEventListener("click", volumeSwitch);
volumeBar.addEventListener("input", volumeMuteCheck);
fullScreenButton.addEventListener("click", fullscreenInteractor);
leftArrow.addEventListener("click", videoSrcChangeDown);
rightArrow.addEventListener("click", videoSrcChangeUp);








