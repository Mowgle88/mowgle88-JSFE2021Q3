function debounce(func, wait = 30, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const galeryImages = document.querySelectorAll('.galery-img');

function checkSlide(e) {
  galeryImages.forEach(galeryImages => {

    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - galeryImages.height / 2;

    // bottom of the image
    const imageBottom = galeryImages.offsetTop + galeryImages.height;
    const isHalfShown = slideInAt > galeryImages.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    // If an image is half shown and present in current scroll view
    // then show the image using slide in animation, else hide it
    // if (isHalfShown && isNotScrolledPast) {
    //   galeryImages.classList.add('galery-active');
    // } else {
    //   galeryImages.classList.remove('galery-active');
    // }

    if (isHalfShown && isNotScrolledPast) {
      galeryImages.classList.add('galery-active');
    } 
  });
}

window.addEventListener('scroll', debounce(checkSlide));
