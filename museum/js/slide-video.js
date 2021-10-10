
var swiper = new Swiper(".mySwiper", {
  loop: true,
  freeMode: false,
  // spaceBetween: 10,
  navigation: {
    nextEl: ".video-slider-right",
    prevEl: ".video-slider-right",
  },
  thumbs: {
    swiper: swiper2,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 41,
  loop: true,

  // loopedSlides: 3,
  // loopAdditionalSlides: 1,
  // loopPreventsSlide: true,

  
  freeMode: false,
  watchSlidesProgress: true,

  slidesPerGroup: 1,
  // loopFillGroupWithBlank: true,

  pagination: {
    el: ".video-slider-dots-items",
    clickable: true,
  },
  navigation: {
    nextEl: ".video-slider-right",
    prevEl: ".video-slider-left",
  },
  thumbs: {
    swiper: swiper,
  },

});