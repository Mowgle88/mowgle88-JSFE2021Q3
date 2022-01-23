import { renderPage } from './page-rendering';

let n = 1;

const nextList = async () => {
  const nextBtn = document.querySelector('.next-btn');
  const garagePageTitle = document.querySelector('.garage-page-title');
  const prevBtn = document.querySelector('.prev-btn');

  const text = garagePageTitle.textContent;
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  n = +number;

  if (+numberOfPages > 1) {
    nextBtn.removeAttribute('disabled');
    nextBtn.classList.add('blue-btn');
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

const prevList = async () => {
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const garagePageTitle = document.querySelector('.garage-page-title');

  const text = garagePageTitle.textContent;
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  n = +number;

  prevBtn.addEventListener('click', async () => {
    n -= 1;
    await renderPage(n);
    if (n === +number) {
      nextBtn.classList.add('blue-btn');
      nextBtn.removeAttribute('disabled', '');
      prevBtn.classList.remove('blue-btn');
      prevBtn.setAttribute('disabled', '');
    }
  });
};

export { nextList, prevList };
