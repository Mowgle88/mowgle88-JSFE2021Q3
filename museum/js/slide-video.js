if (document.documentElement.clientWidth < 950) {

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    freeMode: false,
    navigation: {
      nextEl: ".video-slider-right",
      prevEl: ".video-slider-left",
    },
    thumbs: {
      swiper: swiper2,
    },
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 20,
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

} else {

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    freeMode: false,
    navigation: {
      nextEl: ".video-slider-right",
      prevEl: ".video-slider-left",
    },
    thumbs: {
      swiper: swiper2,
    },
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 42,
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

}


// window.addEventListener("resize", function() {
//   if( window.innerWidth <= 950 ){
//     console.log("Resource conscious resize callback!");
//     swiper.slidesPerView = 2;
//   }
// });




