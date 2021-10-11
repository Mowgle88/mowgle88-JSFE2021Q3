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

