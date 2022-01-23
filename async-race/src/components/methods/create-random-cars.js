import { createCar } from './create-car';
import { modelsCars } from '../../models-cars';
import { brandsCars } from '../../brands-cars';
import { renderPage } from './page-rendering';

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8);
};

const randomName = (brands, models) => {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${brand}-${model}`;
};

export const addRandomCar = () => {
  const generateBtn = document.querySelector('.generate-btn');

  const arrayModelCar = Array(100)
    .fill()
    .map(() => randomName(brandsCars, modelsCars));

  const arrayColorCar = Array(100)
    .fill()
    .map(() => randomColor());

  generateBtn.addEventListener('click', () => {
    arrayModelCar.forEach((el, i) => createCar(el, arrayColorCar[i]));
    renderPage(1);
  });
};
