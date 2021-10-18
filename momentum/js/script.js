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

const NMDE = ['Night', 'Morning', 'Day', 'Evening'];

// Вывод текстовых данных на страницу
// time.textContent = "Time"; 

// получаем только время
// let date = new Date();
// let currentTime = date.toLocaleTimeString();
// console.log(currentTime);


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
  // const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
  // const currentDate = date.toLocaleDateString('ru-Ru', options);

  // days.textContent = currentDate;

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let month = MONTHS[date.getMonth()];

  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayOfWeek = week[date.getDay()];
  
  days.textContent = dayOfWeek + ", " + date.getDate() + " " + month;
};

// Приветствие

// const date = new Date();
// const hours = date.getHours();
// console.log(hours);

function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = timeOfDay;
  greet.textContent = greetingText;

  // const date = new Date();
  // const hours = date.getHours();
  // let greetings = ['Доброй ночи, ', 'Доброе утро, ', 'Добрый день, ', 'Добрый вечер, '];
  // с 0 до 6 часов — ночь с 6 до 12 часов — утро с 12 до 18 часов — день с 18 до 24 часов — вечер   
  // greet.textContent = greetings[Math.floor(hours/6)];
};

// Функция getTimeOfDay(), возвращающая время суток (morning, day, evening, night) в зависимости от текущего времени в часах


function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if(hours >= 0 && hours < 6) {
      return `Good${NMDE[0]}, `;
  } else if(hours >= 6 && hours < 12) {
      return `Good ${NMDE[1]}, `;
  } else if(hours >= 12 && hours < 18) {
      return `Good ${NMDE[2]}, `;
  } else(hours >= 18 && hours < 0) 
      return `Good ${NMDE[3]}, `
}

// Введите имя
const yorName = document.querySelector(".name"); 

function setLocalStorage() {
    localStorage.setItem('name', yorName.value);
    }
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('name')) {
        yorName.value = localStorage.getItem('name');
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

// let r = String(getRandomNum(1, 20));
// console.log(r.padStart(2, '0'));
// console.log(getRandomNum(1, 20));


function setBg(){
  let timeOfDay = getTimeOfDay();
  let bgNum = " ";
  if(timeOfDay == 'Доброй ночи, ') {
      bgNum = String(getRandomNum(1, 5)).padStart(2, '0')
  } else if(timeOfDay == 'Доброе утро, ') {
      bgNum = String(getRandomNum(6, 10)).padStart(2, '0')
  } else if(timeOfDay == 'Добрый день, ') {
      bgNum = String(getRandomNum(11, 15)).padStart(2, '0')
  } else(timeOfDay == 'Добрый вечер, ') 
      bgNum = String(getRandomNum(16, 20)).padStart(2, '0')

  document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg')`;  
}
setBg()

// Изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана
// const slidePrev
// const slideNext


randomNum = getRandomNum(1, 20);

function getSlideNext() {
  
  if(randomNum >= 20) {
       randomNum = 1
  } else {
       randomNum++
  }
  document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${String(randomNum).padStart(2, '0')}.jpg')`; 
  
}


function getSlidePrev() {
  
  if(randomNum <= 1) {
      randomNum = 20
  } else {
      randomNum--
  }
  document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${String(randomNum).padStart(2, '0')}.jpg')`; 
}


slidePrev.addEventListener("click", getSlidePrev)

slideNext.addEventListener("click", getSlideNext)