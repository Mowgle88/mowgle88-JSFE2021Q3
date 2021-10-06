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

console.log(`Ваша оценка - 142 балла 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается 

2) Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов 

Частично выполненные пункты:
1) Секция Video 

2) Секция Video 

3) Секция Video 

4) слайдера сравнения изображений в секции Explore 

5) YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого 

Выполненные пункты:
1) Блок header 

2) Секция Welcome 

3) Секция Visiting 

4) Секция Explore 

5) Секция Gallery 

6) Секция Tickets 

7) Форма покупки билетов 

8) Секция Contacts 

9) Блок footer  

10) Блок header 

11) Секция Welcome 

12) Секция Visiting 

13) Секция Explore 

14) Секция Gallery 

15) Секция Tickets 

16) Форма покупки билетов 

17) Секция Contacts 

18) Блок footer  

19) Блок header 

20) Секция Welcome 

21) Секция Visiting 

22) Секция Explore 

23) Секция Gallery 

24) Секция Tickets 

25) Форма покупки билетов 

26) Секция Contacts 

27) Блок footer  

28) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки,  элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом. 

29) слайдера в секции Welcome 

30) кастомного видеоплеера в секции Video 

31) слайдера в секции Video 

32) галереи изображений и изображений в ней 

33) карты 

34) при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку 

35) ссылки в меню работают, обеспечивая плавную прокрутку по якорям 

36) вёрстка меню соответствует макету на всех проверяемых разрешениях 

`)