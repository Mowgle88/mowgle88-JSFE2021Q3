const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nums = document.querySelectorAll('.numbertext');


let index = 0;

const activeSlide = n => {
  for(slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const activeNum = n => {
  for(num of nums) {
    num.classList.remove('active');
  }
  nums[n].classList.add('active');
}

const CurrentSlide = i => {
  activeSlide(i);
  activeDot(i);
  activeNum(i);
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    CurrentSlide(index);
  } else {
    index++;
    CurrentSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    CurrentSlide(index);
  } else {
    index--;
    CurrentSlide(index);
  }
}

dots.forEach((el, i) => {
  el.addEventListener('click', () => {
    index = i;
    CurrentSlide(index);
  })
})


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// setInterval(nextSlide, 2500)

console.log(`Не выполненные/не засчитанные пункты:

Форма покупки билетов
Форма покупки билетов
Форма покупки билетов
кастомного видеоплеера в секции Video
при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается
Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов

Частично выполненные пункты:

Секция Video
Секция Video
Секция Video

Выполненные пункты:

Блок header
Секция Welcome
Секция Visiting
Секция Explore
Секция Gallery
Секция Tickets
Секция Contacts
Блок footer
Блок header
Секция Welcome
Секция Visiting
Секция Explore
Секция Gallery
Секция Tickets
Секция Contacts
Блок footer
Блок header
Секция Welcome
Секция Visiting
Секция Explore
Секция Gallery
Секция Tickets
Секция Contacts
Блок footer
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом.
слайдера в секции Welcome
слайдера сравнения изображений в секции Explore
слайдера в секции Video
YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого
галереи изображений и изображений в ней
карты
при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку
ссылки в меню работают, обеспечивая плавную прокрутку по якорям
вёрстка меню соответствует макету на всех проверяемых разрешениях

Итого 130 балла`)