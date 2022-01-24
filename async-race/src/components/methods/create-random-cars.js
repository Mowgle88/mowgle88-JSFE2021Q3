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

const randomValue = () => {
  const arrayModelCar = Array(100)
    .fill()
    .map(() => randomName(brandsCars, modelsCars));
  const arrayColorCar = Array(100)
    .fill()
    .map(() => randomColor());
  const arrayValue = arrayModelCar.map((el, i) => [el, arrayColorCar[i]]);
  return arrayValue;
};

export const addRandomCar = async () => {
  window.addEventListener('click', async (e) => {
    const elem = e.target;
    if (elem.className.includes('generate-btn')) {
      const nextBtn = document.querySelector('.next-btn');
      const garagePageTitle = document.querySelector('.garage-page-title');
      const text = garagePageTitle.textContent;
      const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
      randomValue();
      const value = randomValue();

      elem.addEventListener('click', async () => {
        value.forEach((el) => createCar(el[0], el[1]));
        renderPage(number);
        nextBtn.removeAttribute('disabled');
        nextBtn.classList.add('blue-btn');
      });
    }
  });
};
