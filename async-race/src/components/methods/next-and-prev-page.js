import { renderPage } from './page-rendering';

let n = 1;

const nextListPage = async (page) => {
  const nextBtn = document.querySelector(`.next-btn-${page}`);
  const prevBtn = document.querySelector(`.prev-btn-${page}`);

  const quantity = document.querySelector(`.${page}-page-title`);
  const text = quantity.textContent;
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');
  // const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);

  const pageName = document.querySelector(`.${page}-title`);
  const textTitle = pageName.textContent;
  const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');

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
    if (n === +numberOfPages) {
      nextBtn.classList.remove('blue-btn');
      nextBtn.setAttribute('disabled', '');
    }
  });
};

const prevListPage = async (page) => {
  const nextBtn = document.querySelector(`.next-btn-${page}`);
  const prevBtn = document.querySelector(`.prev-btn-${page}`);

  const quantity = document.querySelector(`.${page}-page-title`);
  const text = quantity.textContent;
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  n = +number;

  prevBtn.addEventListener('click', async () => {
    n -= 1;

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

const nextList = async () => {
  const pageTitle = document.querySelector('.page-title');
  const textTitle = pageTitle.textContent;
  const pageName = textTitle.match(new RegExp(/[A-Za-z]/gm)).join('');

  if (pageName === 'Garage') {
    await nextListPage('garage');
  } else {
    await nextListPage('winners');
  }
};

const prevList = async () => {
  const pageTitle = document.querySelector('.page-title');
  const textTitle = pageTitle.textContent;
  const pageName = textTitle.match(new RegExp(/[A-Za-z]/gm)).join('');
  if (pageName === 'Garage') {
    await prevListPage('garage');
  } else {
    await prevListPage('winners');
  }
};

export { nextList, prevList };
