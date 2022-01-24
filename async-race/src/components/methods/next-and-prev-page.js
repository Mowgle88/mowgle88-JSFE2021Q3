import { renderPage } from './page-rendering';

let n = 1;

const nextList = async () => {
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  const garageTitle = document.querySelector('.garage-title');
  const textTitle = garageTitle.textContent;
  const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');

  const garagePageTitle = document.querySelector('.garage-page-title');
  const text = garagePageTitle.textContent;
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  n = +number;

  if (+numberCars / 7 > +n) {
    nextBtn.removeAttribute('disabled');
    nextBtn.classList.add('blue-btn');
  } else {
    nextBtn.setAttribute('disabled', '');
    nextBtn.classList.remove('blue-btn');
  }

  nextBtn.addEventListener('click', async () => {
    prevBtn.removeAttribute('disabled');
    prevBtn.classList.add('blue-btn');
    n += 1;
    await renderPage(n);
    // console.log(n);
    // console.log(+numberOfPages);
    if (n === +numberOfPages) {
      nextBtn.classList.remove('blue-btn');
      nextBtn.setAttribute('disabled', '');
    }
  });
};

const prevList = async () => {
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const garagePageTitle = document.querySelector('.garage-page-title');
  const text = garagePageTitle.textContent;
  // const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  n = +number;

  prevBtn.addEventListener('click', async () => {
    n -= 1;
    // console.log(n);
    // console.log(+numberOfPages);
    await renderPage(n);
    if (n >= 1) {
      nextBtn.classList.add('blue-btn');
      nextBtn.removeAttribute('disabled', '');
    }
    if (n === 1) {
      prevBtn.classList.remove('blue-btn');
      prevBtn.setAttribute('disabled', '');
    }
  });
};

export { nextList, prevList };
