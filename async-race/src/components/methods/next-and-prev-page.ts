import { renderPage } from './page-rendering';

let n: number = localStorage.getItem('garagePage') == null ? 1 : +(<string>localStorage.getItem('garagePage'));

const setBtnAtrubute = async (page: string) => {
  const nextBtn: HTMLButtonElement = document.querySelector(`.next-btn-${page}`) as HTMLButtonElement;
  const prevBtn: HTMLButtonElement = document.querySelector(`.prev-btn-${page}`) as HTMLButtonElement;

  const quantity: HTMLElement = document.querySelector(`.${page}-page-title`) as HTMLElement;
  const text: string = quantity.textContent as string;
  const number: string = (<string[]>text.match(new RegExp(/# \d*/gm))).join('').slice(2);

  const pageName: HTMLElement = document.querySelector(`.${page}-title`) as HTMLElement;
  const textTitle: string = pageName.textContent as string;
  const numberCars = (<string[]>textTitle.match(new RegExp(/\d*/gm))).join('');

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

const flipPage = async (page: string) => {
  const nextBtn: HTMLElement = document.querySelector(`.next-btn-${page}`) as HTMLElement;
  const prevBtn: HTMLElement = document.querySelector(`.prev-btn-${page}`) as HTMLElement;
  const quantity: HTMLElement = document.querySelector(`.${page}-page-title`) as HTMLElement;
  const text: string = quantity.textContent as string;
  const numberOfPages = (<string[]>text.match(new RegExp(/\d*$/gm))).join('');

  await setBtnAtrubute(page);

  nextBtn.addEventListener('click', async () => {
    n += 1;
    localStorage.setItem('garagePage', `${n}`);
    await renderPage(n);
    await flipPage(page);

    if (n === +numberOfPages) {
      nextBtn.classList.remove('blue-btn');
      nextBtn.setAttribute('disabled', '');
    }
  });

  prevBtn.addEventListener('click', async () => {
    n -= 1;
    localStorage.setItem('garagePage', `${n}`);
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
