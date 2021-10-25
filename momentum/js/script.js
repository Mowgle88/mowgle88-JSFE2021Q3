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

//настройки
const settings = document.querySelector(".settings-btn");
const setCont = document.querySelector('.settings-container');
const languages = setCont.querySelector('.language');
const apps = setCont.querySelector('.apps');

//список дел
const todo = document.querySelector(".todo");
const newTodo = document.querySelector(".new-todo");
const todoContainer = document.querySelector(".todo-container");

// Переменные
let randomNum;
let randomQuotes;
let isPlay = false;
let playNum = 0;
let lang = 'en';
let setTr = true;
let setApps = true;
let todoNumber = 0;
let addTodoNum = 0;

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
  if(city.value === '') {
    if(lang === 'en') {
      city.value = "Minsk";
    }
    if(lang === 'ru') {
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

function currentSet() {
  switch(lang) {
    case 'en':
      languages.textContent = 'Language';
      apps.textContent = 'Apps';
      break
    case 'ru':
      languages.textContent = 'Язык';
      apps.textContent = 'Приложения';
      break
  }
}

currentSet();

function choseLang() {
  const choseLang = document.createElement('div');
  choseLang.classList = 'chose-lang';
  setCont.append(choseLang)
  const ru = document.createElement('div');
  ru.classList = 'ru-lang';
  ru.textContent = 'ru';
  choseLang.append(ru);
  const en = document.createElement('div');
  en.classList = 'en-lang';
  en.textContent = 'en';
  choseLang.append(en);

  ru.addEventListener('click', function() {
    lang = 'ru';
    yorName.placeholder = "[Введите имя]"
    getQuotes();
    getWeather();
    currentTodo();
    currentSet();
  });

  en.addEventListener('click', function() {
    lang = 'en';
    yorName.placeholder = "[Enter name]"
    getQuotes();
    getWeather();
    currentTodo();
    currentSet();
  });

}

function closeLang() {
  const closeLang = setCont.querySelector('.chose-lang');
  closeLang.remove();
}


languages.addEventListener('click', function() {
  if (!setApps) {
    closeApps();
    setApps = true;
  } 
  if (setTr) {
    choseLang();
    setTr = false;
  } else {
    closeLang();
    setTr = true;
  }
}
);


function hideSettings() {
  setCont.classList.toggle('settings-active');
}

function choseApps() {
  const choseApps = document.createElement('div');
  choseApps.classList = 'chose-apps';
  setCont.append(choseApps)
  const player = document.createElement('div');
  player.classList = 'set-btn';
  const weather = document.createElement('div');
  weather.classList = 'set-btn';
  const quote = document.createElement('div');
  quote.classList = 'set-btn';
  const todo = document.createElement('div');
  todo.classList = 'set-btn';
  const time = document.createElement('div');
  time.classList = 'set-btn';
  const date = document.createElement('div');
  date.classList = 'set-btn';
  const greeting = document.createElement('div');
  greeting.classList = 'set-btn';
  
  switch(lang) {
    case 'en':
      player.textContent = 'Player';
      weather.textContent = 'Weather';
      quote.textContent = 'Quote';
      todo.textContent = 'Todo';
      time.textContent = 'Time';
      date.textContent = 'Date';
      greeting.textContent = 'Greeting';
      break
    case 'ru':
      player.textContent = 'Плеер';
      weather.textContent = 'Погода';
      quote.textContent = 'Цитата';
      todo.textContent = 'Дела';
      time.textContent = 'Время';
      date.textContent = 'Дата';
      greeting.textContent = 'Приветствие';
      choseApps.style = 'left: 172px';
      break
  }

  choseApps.append(player);
  choseApps.append(weather);
  choseApps.append(quote);
  choseApps.append(todo);
  choseApps.append(time);
  choseApps.append(date);
  choseApps.append(greeting);

  player.addEventListener('click', function hidePlayer() {
    document.querySelector('.player').classList.toggle('hide');
    player.classList.toggle('text-th');
    if (localStorage.getItem('player') == 'true') {
      localStorage.setItem('player', false);
    } else {
      localStorage.player = true;
    }
  });
  weather.addEventListener('click', function() {
    document.querySelector('.weather').classList.toggle('hide');
    weather.classList.toggle('text-th');
    if (localStorage.getItem('weather') == 'true') {
      localStorage.setItem('weather', false);
    } else {
      localStorage.weather = true;
    }
  });
  quote.addEventListener('click', function() {
    document.querySelector('.quote').classList.toggle('hide');
    document.querySelector('.change-quote').classList.toggle('hide');
    document.querySelector('.author').classList.toggle('hide');
    quote.classList.toggle('text-th');
    if (localStorage.getItem('quote') == 'true') {
      localStorage.setItem('quote', false);
    } else {
      localStorage.quote = true;
    }
  });
  todo.addEventListener('click', function() {
    document.querySelector('.todo-container').classList.toggle('hide');
    document.querySelector('.todo').classList.toggle('hide');
    todo.classList.toggle('text-th');
    if (localStorage.getItem('todo') == 'true') {
      localStorage.setItem('todo', false);
    } else {
      localStorage.todo = true;
    }
  });
  time.addEventListener('click', function() {
    document.querySelector('.time').classList.toggle('hide');
    time.classList.toggle('text-th');
    if (localStorage.getItem('time') == 'true') {
      localStorage.setItem('time', false);
    } else {
      localStorage.time = true;
    }
  });
  date.addEventListener('click', function() {
    document.querySelector('.date').classList.toggle('hide');
    date.classList.toggle('text-th');
    if (localStorage.getItem('date') == 'true') {
      localStorage.setItem('date', false);
    } else {
      localStorage.date = true;
    }
  });
  greeting.addEventListener('click', function() {
    document.querySelector('.greeting-container').classList.toggle('hide');
    greeting.classList.toggle('text-th');
    if (localStorage.getItem('greeting') == 'true') {
      localStorage.setItem('greeting', false);
    } else {
      localStorage.greeting = true;
    }
  });

  if (localStorage.getItem('player') == 'true') {
    player.classList.toggle('text-th');
  }
  if (localStorage.getItem('weather') == 'true') {
    weather.classList.toggle('text-th');
  }
  if (localStorage.getItem('quote') == 'true') {
    quote.classList.toggle('text-th');
  }
  if (localStorage.getItem('todo') == 'true') {
    todo.classList.toggle('text-th');
  }
  if (localStorage.getItem('time') == 'true') {
    time.classList.toggle('text-th');
  }
  if (localStorage.getItem('date') == 'true') {
    date.classList.toggle('text-th');
  }
  if (localStorage.getItem('greeting') == 'true') {
    greeting.classList.toggle('text-th');
  }
}

function closeApps() {
  const closeApps = setCont.querySelector('.chose-apps');
  closeApps.remove();
}

apps.addEventListener('click', function() {
  if (!setTr) {
    closeLang();
    setTr = true;
  } 
  if (setApps) {
    choseApps();
    setApps = false;
  } else {
    closeApps();
    setApps = true;
  }
}
);

function settingsActive() {
  settings.classList.toggle('settings-btn-active');
  hideSettings();
}

settings.addEventListener('click', function() {
  if (setApps !== true) {
    closeApps();
    setApps = true;
  } 

  if (setTr !== true) {
    closeLang();
    setTr = true;
  } 
  settingsActive();
});

function hideElements() {
  if (localStorage.getItem('player') == 'true') {
    document.querySelector('.player').classList.toggle('hide');
  }
  if (localStorage.getItem('weather') == 'true') {
    document.querySelector('.weather').classList.toggle('hide');
  }
  if (localStorage.getItem('quote') == 'true') {
    document.querySelector('.quote').classList.toggle('hide');
    document.querySelector('.author').classList.toggle('hide');
    document.querySelector('.change-quote').classList.toggle('hide');
  }
  if (localStorage.getItem('todo') == 'true') {
    document.querySelector('.todo').classList.toggle('hide');
    document.querySelector('.todo-container').classList.toggle('hide');
  }
  if (localStorage.getItem('time') == 'true') {
    document.querySelector('.time').classList.toggle('hide');
  }
  if (localStorage.getItem('date') == 'true') {
    document.querySelector('.date').classList.toggle('hide');
  }
  if (localStorage.getItem('greeting') == 'true') {
    document.querySelector('.greeting-container').classList.toggle('hide');
  }
}

hideElements();


//список дел================================================

const todoNothing = document.createElement('div');

function currentTodo() {
  switch(lang) {
    case 'en':
      todo.textContent = 'Todo';
      newTodo.textContent = 'New Todo';
      todoNothing.textContent = 'Nothing Todo!';
      break
    case 'ru':
      todo.textContent = 'Дела';
      newTodo.textContent = 'Новое Дело';
      todoNothing.textContent = 'Нету дел!'
      break
  }
}

currentTodo();

todoNothing.className = `todo-nothing`;
todoContainer.prepend(todoNothing);

function todoActive() {
  todo.classList.toggle('todo-active');
  todoContainer.classList.toggle('todo-cont-active');
}


function setNewTodo() {
  if(todoNumber !== 0) {
    if (localStorage.getItem(`todo-${todoNumber-1}`) == null) return;
  }
  if (todoNumber > 10) return;
  const todoOnDay = document.createElement('label');
  todoOnDay.classList = `todo-list todo-${todoNumber}`; 
  todoContainer.prepend(todoOnDay);
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.id = `${todoNumber}`;
  checkbox.classList = `checkbox checkbox-${todoNumber}`; 
  todoOnDay.prepend(checkbox);
  const todoInput = document.createElement('input');
  todoInput.type = 'text';
  todoInput.setAttribute("maxlength", 40);
  todoInput.value = localStorage.getItem(`todo-${todoNumber}`)
  todoInput.id = `${todoNumber}`;
  todoInput.classList = `todo-input todo-input-${todoNumber}`; 
  todoOnDay.append(todoInput);
  if (todoNumber == 0) document.querySelector(".todo-nothing").remove();
  todoNumber++
  Array.from(document.querySelectorAll('.todo-input'), function(el){
    el.onfocus = function(){
      el.addEventListener('change', () => {
        localStorage.setItem(`todo-${this.id}`, todoInput.value);
        document.querySelector(`.todo-input-${this.id}`).style= "border-bottom: none";
      })
    }
  })
  Array.from(document.querySelectorAll('.checkbox'), function(el){
    el.onfocus = function(){
      el.addEventListener('change', () => {
        document.querySelector(`.todo-input-${this.id}`).classList.toggle('text-th')});
    }
  })
}

function addTodo() {
  if (localStorage.getItem(`todo-${addTodoNum}`) !== null) {
    setNewTodo();
    document.querySelector(`.todo-input-${addTodoNum}`).style= "border-bottom: none";
    addTodoNum++;
    addTodo();
  } else return;

} 

addTodo();
newTodo.addEventListener('click', setNewTodo);
todo.addEventListener('click', todoActive);