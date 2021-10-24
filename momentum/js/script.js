import playList from './playList.js';
import greetingTranslation from './greetingTranslation.js';

// находим эл-т с классом time и записываем его в переменную time
const time = document.querySelector('.time'); 
// находим эл-т с классом date и записываем его в переменную days
const days = document.querySelector('.date');
// находим эл-т с классом greeting и записываем его в переменную greet
const greet = document.querySelector(".greeting"); 
const NMDE = ['night', 'morning', 'day', 'evening'];
// Находим кнопки для слайдера
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");

// Переменные
let randomNum;
let randomQuotes;
let isPlay = false;
let playNum = 0;
let lang;

// Погода
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector(".city"); 
const weatherError = document.querySelector('.weather-error');

// цитаты
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

// аудиоплеер
const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');


// Показ времени=========================================
function showTime () {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate ('en-US');
    showGreeting('en-US');
    setTimeout(showTime, 1000);
};

showTime ();

// Показ даты, дня недели==================================
function showDate (l) {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  // const currentDate = date.toLocaleDateString('en-US', options);
  const currentDate = date.toLocaleDateString(l, options);
  days.textContent = currentDate;
};

// Приветствие===============================================

function showGreeting(l) {
  // const timeOfDay = getTimeOfDay();
//   const greetingText = `Good ${timeOfDay},`;
  // const greetingText = "Good " + timeOfDay[0].toUpperCase() + timeOfDay.slice(1) + ",";
  greet.textContent = greetingTranslation[l];
};


function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  return NMDE[Math.floor(hours/6)]
}

// Пользователь может ввести своё имя===========================
const yorName = document.querySelector(".name"); 

function setLocalStorage() {
    localStorage.setItem('name', yorName.value);
    localStorage.setItem('city', city.value);
    }
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('name')) {
        yorName.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
  }

}
window.addEventListener('load', getLocalStorage)


// Слайдер изображений========================================

// Рондомное число от min до max
function getRandomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

randomNum = getRandomNum(1, 20);

function setBg(){
  const timeOfDay = getTimeOfDay();
  const bgNum = String(randomNum).padStart(2, '0');;
  // console.log(bgNum);
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/Mowgle88/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.webp`; 
  img.onload = () => {      
    document.body.style.backgroundImage = `url('${img.src}')`; 
  };  
}

setBg()

function getSlideNext() {
  if(randomNum >= 20) {
       randomNum = 1
  } else {
       randomNum++
  }
  setBg()
}

function getSlidePrev() {
  if(randomNum <= 1) {
      randomNum = 20
  } else {
      randomNum--
  }
  setBg()
}

slidePrev.addEventListener("click", getSlidePrev)
slideNext.addEventListener("click", getSlideNext)


// Виджет погоды============================================

async function getWeather() {
  city.value = city.value || "Minsk";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=3c15876c9f36799411c8ddd57f155ca9&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  
  if(data.cod === "404") {
    weatherError.textContent = "Error. City not found";
    weatherIcon.style.display = "none"
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
  } else {
    weatherIcon.style.display = "block";
    weatherError.textContent = "";
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
  }
}

getWeather()

city.addEventListener("change", getWeather)


// Цитата дня================================================


async function getQuotes() {
  // const quotes = 'https://type.fit/api/quotes';
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  randomQuotes = getRandomNum(0, data.length-1);
  console.log(randomQuotes);
  console.log(data[randomQuotes]);
  author.textContent = data[randomQuotes].author;
  quote.textContent = data[randomQuotes].text;
}

getQuotes();

changeQuote.addEventListener("click", getQuotes)

// Аудиоплеер================================================
const length = document.querySelector(".length");
const track = document.querySelector(".track");
length.textContent = "00:00";
track.textContent = playList[0].title;



const audio = new Audio();

function playAudio() {

  if(!isPlay) {

    length.textContent = playList[playNum].duration;
    track.textContent = playList[playNum].title;
    // playList.classList.add('item-active');

    playListContainer.childNodes[playNum].style.color = '#C5B358';
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    toggleBtn();
    
    // changeColor()
  } else {

    length.textContent = "00:00"
    // track.textContent = "";

    playListContainer.childNodes[playNum].style.color = '#fff';
    audio.pause();
    isPlay = false;
    toggleBtn();
    // changeColor()
  }
}

function toggleBtn() {
  play.classList.toggle('pause');
}

// function changeColor() {
//   let li = document.querySelector('.play-item');
//   li.classList.toggle('play-item-active');
// }

function getAudioNext() {
  let n = playList.length - 1;
  if(isPlay) {
    if(playNum >= n) {
      playNum = 0
    } else {
         playNum++
    }
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    if(playNum === 0) {
      playListContainer.childNodes[n].style.color = '#fff';
    } else {
      playListContainer.childNodes[playNum-1].style.color = '#fff';
    }
    playListContainer.childNodes[playNum].style.color = '#C5B358';

    length.textContent = playList[playNum].duration;
    track.textContent = playList[playNum].title;
  }
}

function getAudioPrev() {
  let n = playList.length - 1;
  if(isPlay) {
    if(playNum <= 0) {
      playNum = n;
    } else {
      playNum--
    }
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    if(playNum === n) {
      playListContainer.childNodes[0].style.color = '#fff';
    } else {
      playListContainer.childNodes[playNum+1].style.color = '#fff';
    }
    playListContainer.childNodes[playNum].style.color = '#C5B358';

    length.textContent = playList[playNum].duration;
    track.textContent = playList[playNum].title;

  }
}

play.addEventListener('click', playAudio);
// play.addEventListener('click', move);

playPrev.addEventListener("click", getAudioPrev)
playNext.addEventListener("click", getAudioNext)

// playList

function createPlayList(i) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  playListContainer.append(li)
}

// for(let i = 0; i < playList.length; i++) {
//   createPlayList(i)
// }

playList.forEach((el,i) => {
  createPlayList(i)
})

console.log(playListContainer.childNodes)
console.log(playList)

// Продвинутый плеер=============================

const timeline = document.querySelector(".timeline");
const progressBar = document.querySelector(".progress");
const volumeSlider = document.querySelector(".player-controls .volume-slider");

// Шкала времени
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

// Ползунок громкости
document.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  document.querySelector(".player-controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

// Кнопка volume-mute
document.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = document.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

// Процент звука и время обновления
setInterval(() => {
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  document.querySelector(".audioTime .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

// Время отображения в цифрах
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// перевод приложения

// const date = new Date();
// console.log(date.toLocaleString());

