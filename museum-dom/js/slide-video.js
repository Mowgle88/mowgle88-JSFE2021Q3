if (document.documentElement.clientWidth < 950) {

  // var swiper = new Swiper(".mySwiper", {
  //   loop: true,
  //   freeMode: false,
  //   navigation: {
  //     nextEl: ".video-slider-right",
  //     prevEl: ".video-slider-left",
  //   },
  //   thumbs: {
  //     swiper: swiper2,
  //   },
  // });
  
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
    // thumbs: {
    //   swiper: swiper,
    // },
  
  });

} else {

  // var swiper = new Swiper(".mySwiper", {
  //   loop: true,
  //   freeMode: false,
  //   navigation: {
  //     nextEl: ".video-slider-right",
  //     prevEl: ".video-slider-left",
  //   },
  //   thumbs: {
  //     swiper: swiper2,
  //   },
  // });
  
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
    // thumbs: {
    //   swiper: swiper,
    // },
  
  });

}

function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video-button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();




