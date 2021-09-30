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



// let slides = document.getElementsByClassName("mySlides");
// let dots = document.getElementsByClassName("dot");


// let slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {

//   if(n > slides.length) {
//     slideIndex = 1;
//   }
//   if(n < 1) {
//     slideIndex = slides.length;
//   }
//   for(let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for(let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }