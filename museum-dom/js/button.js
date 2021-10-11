const buttonAbove = document.querySelector(".button-above");

function moveAbove() {
    if (window.pageYOffset > document.documentElement.clientHeight) {
      buttonAbove.classList.add("but-active");
        return;
    }
    buttonAbove.classList.remove("but-active");
}

function debounceButton(f, ms = 50) {
    let isCooldown = false;
    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => (isCooldown = false), ms);
    };
}

function toTopMover() {
    scrollTo(0, 0);
}

window.addEventListener("scroll", debounceButton(moveAbove));
buttonAbove.addEventListener("click", toTopMover);