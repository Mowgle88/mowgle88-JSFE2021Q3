import { callApi } from './call-api';
import { renderPage } from './page-rendering';
import { setBtnAtrubute, flipPage } from './next-and-prev-page';

const deleteCar = async (integer) => {
  try {
    const method = 'DELETE';
    const url = `/garage/${integer}`;
    const response = await callApi(method, url);
    const dataCar = response.data;
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};

export const delCar = async (el) => {
  const garageTitle = document.querySelector('.garage-title');
  const textTitle = garageTitle.textContent;
  const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');
  const garagePageTitle = document.querySelector('.garage-page-title');
  const text = garagePageTitle.textContent;
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');
  const regexp = new RegExp(/\d/gm);
  const n = el.id.match(regexp).join('');

  if ((+numberCars - 1) % 7 === 0 && +numberOfPages === +number) {
    await deleteCar(n);
    await renderPage(+number - 1);
    await setBtnAtrubute('garage');
    await flipPage('garage');
  } else {
    await deleteCar(n);
    await renderPage(number);
    await setBtnAtrubute('garage');
    await flipPage('garage');
  }
};
