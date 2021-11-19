const picture = document.querySelector('.categories-container');

let i = [0,10,20,30,40,50,60,70,80,90,100,110];

function addImg(i) {
    const div = document.createElement('div');
	div.classList.add('img-cards');
    picture.append(div);

    const divText = document.createElement('div');
	divText.classList.add('img-text');
    divText.textContent = "Partian   5/10";
    div.append(divText);

	const img = document.createElement('img');
	img.classList.add('img-small');
	img.src = `./img/${i}.webp`;
	img.alt = `img${i}`;
    div.append(img);
}

for (let j = 0; j < i.length; j++) {
	addImg(i[j]);
}


const images = document.querySelectorAll(".img-cards");

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
    images.forEach(img => {
        const imgWhileOnScreen = img.getBoundingClientRect().y;
        const imgHeight = document.documentElement.clientHeight;
        if (imgWhileOnScreen < (imgHeight / 3) * 4 && imgWhileOnScreen > 0) {
            img.classList.add("img-active");
        }
        if (imgWhileOnScreen > imgHeight) {
            img.classList.remove("img-active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));