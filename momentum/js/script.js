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

// Погода
const weather = document.querySelector('.weather');
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
const player = document.querySelector('.player');
const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

// настройки 

const langElement = document.querySelector(".langElement"); 
const playerElement = document.querySelector(".playerElement"); 
const weatherElement = document.querySelector(".weatherElement"); 
const timeElement = document.querySelector(".timeElement"); 
const dateElement = document.querySelector(".dateElement"); 
const greetingElement = document.querySelector(".greetingElement"); 
const quoteElement = document.querySelector(".quoteElement"); 
const todoElement = document.querySelector(".todoElement"); 
const ruLang = document.querySelector(".ru-lang"); 
const enLang = document.querySelector(".en-lang"); 

// Переменные
let randomNum;
let randomQuotes;
let isPlay = false;
let playNum = 0;
if (localStorage.getItem('Language') == null) {localStorage.setItem('Language', 'en');}

let lang = localStorage.getItem('Language');
// let todoNumber = 0;
// let addTodoNum = 0;

// Показ времени=========================================
function showTime () {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate (lang);
    showGreeting(lang);
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
const greeting = document.querySelector('.greeting-container');
const quoteContainer = document.querySelector('.quote-container');



function setLocalStorage() {
    localStorage.setItem('name', yorName.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('player', player.style.opacity);
    localStorage.setItem('weather', weather.style.opacity);
    localStorage.setItem('time', time.style.opacity);
    localStorage.setItem('date', days.style.opacity);
    localStorage.setItem('greeting', greeting.style.opacity);
    localStorage.setItem('quote', quoteContainer.style.opacity);
}

window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('name')) {
        yorName.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('player')) {
      player.style.opacity = localStorage.getItem('player');
    }
    if (localStorage.getItem('weather')) {
      weather.style.opacity = localStorage.getItem('weather');
    }
    if (localStorage.getItem('time')) {
      time.style.opacity = localStorage.getItem('time');
    }
    if (localStorage.getItem('date')) {
      days.style.opacity = localStorage.getItem('date');
    }
    if (localStorage.getItem('greeting')) {
      greeting.style.opacity = localStorage.getItem('greeting');
    }
    if (localStorage.getItem('quote')) {
      quoteContainer.style.opacity = localStorage.getItem('quote');
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
  if(lang === 'en') {
    if(city.value === ''|| "Минск") {
      city.value = "Minsk";
    }
  }
  if(lang === 'ru') {
    if(city.value === '' || "Minsk") {
      city.value = "Минск";
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=3c15876c9f36799411c8ddd57f155ca9&units=metric`;
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
    if(lang === 'en') {
      wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    }
    if(lang === 'ru') {
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
    }
    
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
  if(lang === 'en') {
    author.textContent = data[randomQuotes].author;
    quote.textContent = data[randomQuotes].text;
  }
  if(lang === 'ru') {
    author.textContent = data[randomQuotes].автор;
    quote.textContent = data[randomQuotes].текст;
  }
  
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
    
  } else {

    length.textContent = "00:00"
    playListContainer.childNodes[playNum].style.color = '#fff';
    audio.pause();
    isPlay = false;
    toggleBtn();
  }
}

function toggleBtn() {
  play.classList.toggle('pause');
}


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

// Процент время обновления
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


//настройки==================================================

// перевод приложения


function changeSettingsLang() {
  if(lang === 'en') {
    langElement.textContent = 'Language';
    playerElement.textContent = 'Player';
    weatherElement.textContent = 'Weather';
    timeElement.textContent = 'Time';
    dateElement.textContent = 'Date';
    greetingElement.textContent = 'Greeting';
    quoteElement.textContent = 'Quote';
    todoElement.textContent = 'Todo';
  } else {
    langElement.textContent = 'Язык';
    playerElement.textContent = 'Плеер';
    weatherElement.textContent = 'Погода';
    timeElement.textContent = 'Время';
    dateElement.textContent = 'Дата';
    greetingElement.textContent = 'Приветствие';
    quoteElement.textContent = 'Цитата';
    todoElement.textContent = 'Дела';
  }
}

changeSettingsLang()

ruLang.addEventListener('click', function() {
  localStorage.Language = 'ru';
  lang = localStorage.getItem('Language');
  yorName.placeholder = "[Введите имя]"
  getQuotes();
  getWeather();
  // currentTodo();
  changeSettingsLang();
});

enLang.addEventListener('click', function() {
  localStorage.Language = 'en';
  lang = localStorage.getItem('Language');
  yorName.placeholder = "[Enter name]"
  getQuotes();
  getWeather();
  // currentTodo();
  changeSettingsLang();
});


// скрыть элементы=================
let p = true;

playerElement.addEventListener('click', function() {
  if(p) {
    player.style.opacity = "0";
    playerElement.style.opacity = "0.5";
    p = false;
  } else {
    player.style.opacity = "1";
    playerElement.style.opacity = "0.8";
    p = true;
  }

  
});




let w = true;

weatherElement.addEventListener('click', function() {
  if(w) {
    weather.style.opacity = "0";
    weatherElement.style.opacity = "0.5";
    w = false;
  } else {
    weather.style.opacity = "1";
    weatherElement.style.opacity = "0.8";
    w = true;
  }

  
});


let t = true;

timeElement.addEventListener('click', function() {
  if(t) {
    time.style.opacity = "0";
    timeElement.style.opacity = "0.5";
    t = false;
  } else {
    time.style.opacity = "1";
    timeElement.style.opacity = "0.8";
    t = true;
  }

  
});


let d = true;

dateElement.addEventListener('click', function() {
  if(d) {
    days.style.opacity = "0";
    dateElement.style.opacity = "0.5";
    d = false;
  } else {
    days.style.opacity = "1";
    dateElement.style.opacity = "0.8";
    d = true;
  }
  
  
});


let g = true;

greetingElement.addEventListener('click', function() {
  if(g) {
    greeting.style.opacity = "0";
    greetingElement.style.opacity = "0.5";
    g = false;
  } else {
    greeting.style.opacity = "1";
    greetingElement.style.opacity = "0.8";
    g = true;
  }
  
});


let q = true; 

quoteElement.addEventListener('click', function() {
  if(q) {
    quoteContainer.style.opacity = "0";
    quoteElement.style.opacity = "0.5";
    q = false;
  } else {
    quoteContainer.style.opacity = "1";
    quoteElement.style.opacity = "0.8";
    q = true;
  }
  
});

