import { createCar } from './create-car';
import { modelsCars } from '../../models-cars';
import { brandsCars } from '../../brands-cars';
import { renderPage } from './page-rendering';
import { setBtnAtrubute, flipPage } from './next-and-prev-page';

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8);
};

const randomName = (brands: string[], models: string[]) => {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${brand}-${model}`;
};

const randomValue = () => {
  const arrayModelCar = Array(100)
    .fill('')
    .map(() => randomName(brandsCars, modelsCars));
  const arrayColorCar = Array(100)
    .fill('')
    .map(() => randomColor());
  const arrayValue = arrayModelCar.map((el, i) => [el, arrayColorCar[i]]);
  return arrayValue;
};

export const addRandomCar = async () => {
  const nextBtn: HTMLButtonElement = document.querySelector('.next-btn-garage') as HTMLButtonElement;
  const garagePageTitle: HTMLElement = document.querySelector('.garage-page-title') as HTMLElement;
  const text: string = garagePageTitle.textContent as string;
  const number: string = (<string[]>text.match(new RegExp(/# \d*/gm))).join('').slice(2);
  const value = randomValue();
  for await (const item of value) {
    createCar(<string>item[0], <string>item[1]);
  }
  await renderPage(+number);
  await setBtnAtrubute('garage');
  await flipPage('garage');
  nextBtn.removeAttribute('disabled');
  nextBtn.classList.add('blue-btn');
};
