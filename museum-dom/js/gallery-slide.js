const galleryImages = document.querySelectorAll(".galery-img");

function debounce(f, ms = 50) {
    let callNow = false;
    return function () {
        if (callNow) return;
        f.apply(this, arguments);
        callNow = true;
        setTimeout(() => (callNow = false), ms);
    };
}

function checkSlide(e) {
  galleryImages.forEach(img => {
        const imgWhileOnScreen = img.getBoundingClientRect().y;
        const imgHeight = document.documentElement.clientHeight;
        if (imgWhileOnScreen < (imgHeight / 3) * 4 && imgWhileOnScreen > 0) {
            img.classList.add("galery-active");
        }
        if (imgWhileOnScreen > imgHeight) {
            img.classList.remove("galery-active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));