import { renderPage } from './page-rendering';

let n = localStorage.getItem('garagePage' == null) ? 1 : localStorage.getItem('garagePage');
// let m = localStorage.getItem('winnersPage' == null) ? 1 : localStorage.getItem('winnersPage');

const setBtnAtrubute = async (page) => {
  const nextBtn = document.querySelector(`.next-btn-${page}`);
  const prevBtn = document.querySelector(`.prev-btn-${page}`);

  const quantity = document.querySelector(`.${page}-page-title`);
  const text = quantity.textContent;
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);

  const pageName = document.querySelector(`.${page}-title`);
  const textTitle = pageName.textContent;
  const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');

  if (+numberCars / 7 > +number) {
    nextBtn.removeAttribute('disabled');
    nextBtn.classList.add('blue-btn');
  } else {
    nextBtn.setAttribute('disabled', '');
    nextBtn.classList.remove('blue-btn');
  }
  // n = +number;

  if (+number !== 1) {
    prevBtn.removeAttribute('disabled');
    prevBtn.classList.add('blue-btn');
  } else {
    prevBtn.setAttribute('disabled', '');
    prevBtn.classList.remove('blue-btn');
  }
};

const flipPage = async (page) => {
  const nextBtn = document.querySelector(`.next-btn-${page}`);
  const prevBtn = document.querySelector(`.prev-btn-${page}`);
  const quantity = document.querySelector(`.${page}-page-title`);
  const text = quantity.textContent;
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');

  await setBtnAtrubute(page);

  nextBtn.addEventListener('click', async () => {
    n += 1;
    localStorage.setItem('garagePage', n);
    await renderPage(n);
    await flipPage(page);

    if (n === +numberOfPages) {
      nextBtn.classList.remove('blue-btn');
      nextBtn.setAttribute('disabled', '');
    }
  });

  prevBtn.addEventListener('click', async () => {
    n -= 1;
    localStorage.setItem('garagePage', n);
    await renderPage(n);
    await flipPage(page);
    if (n >= 1) {
      nextBtn.classList.add('blue-btn');
      nextBtn.removeAttribute('disabled');
    }
    if (n === 1) {
      prevBtn.classList.remove('blue-btn');
      prevBtn.setAttribute('disabled', '');
    }
  });
};

export { setBtnAtrubute, flipPage };
