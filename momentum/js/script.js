// находим эл-т с классом time и записываем его в переменную time
const time = document.querySelector('.time'); 
// находим эл-т с классом date и записываем его в переменную days
const days = document.querySelector('.date');
// находим эл-т с классом greeting и записываем его в переменную greet
const greet = document.querySelector(".greeting"); 
// Находим кнопки для слайдера
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");
let randomNum;
let randomQuotes;

// Погода
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

// цитаты
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');





const city = document.querySelector(".city"); 


const NMDE = ['night', 'morning', 'day', 'evening'];

// Показ времени
function showTime () {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate ();
    showGreeting();
    setTimeout(showTime, 1000);
};
showTime ();

// Показ даты, дня недели
function showDate () {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('en-US', options);
  days.textContent = currentDate;

  // const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // let month = MONTHS[date.getMonth()];

  // let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let dayOfWeek = week[date.getDay()];
  
  // days.textContent = dayOfWeek + ", " + date.getDate() + " " + month;
};

// Приветствие

function showGreeting() {
  const timeOfDay = getTimeOfDay();
//   const greetingText = `Good ${timeOfDay},`;
  const greetingText = "Good " + timeOfDay[0].toUpperCase() + timeOfDay.slice(1) + ",";
  greet.textContent = greetingText;
};

// Функция getTimeOfDay(), возвращающая время суток (morning, day, evening, night) в зависимости от текущего времени в часах

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  return NMDE[Math.floor(hours/6)]
}

// Пользователь может ввести своё имя
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

// Пояснения к коду:
// window - объект окна браузера, с ним связана загрузка и перезагрузка страницы

// addEventListener - метод, который отлавливает событие элемента и выполняет переданную функцию

// localStorage.setItem - метод сохраняющий данные в localStorage. Два параметра метода: имя значения, которое сохраняется и само значение, которое сохраняется

// localStorage.getItem - метод получающий данные из localStorage. Параметр метода - имя, под которым сохраняется значение.


// Слайдер изображений

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

// Изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана

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


// Виджет погоды

async function getWeather() {
  city.value = city.value || "Mogilev";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=3c15876c9f36799411c8ddd57f155ca9&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`
}

getWeather()

city.addEventListener("change", getWeather)


// Цитата дня


async function getQuotes() {  
  randomQuotes = getRandomNum(0, 100);
  // const quotes = 'data.json';
  const quotes = 'https://type.fit/api/quotes';
  const res = await fetch(quotes);
  const data = await res.json();
  console.log(randomQuotes);
  console.log(data[randomQuotes]);
  author.textContent = data[randomQuotes].author;
  quote.textContent = data[randomQuotes].text;
}

getQuotes();

changeQuote.addEventListener("click", getQuotes)

// Аудиоплеер

