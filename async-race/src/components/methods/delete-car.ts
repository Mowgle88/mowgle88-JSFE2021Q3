import { callApi } from './call-api';
import { renderPage } from './page-rendering';
import { setBtnAtrubute, flipPage } from './next-and-prev-page';

const deleteCar = async (integer: number) => {
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

export const delCar = async (el: HTMLElement) => {
  const garageTitle: HTMLElement = document.querySelector('.garage-title') as HTMLElement;
  const textTitle: string = garageTitle.textContent as string;
  const numberCars = (<string[]>textTitle.match(new RegExp(/\d*/gm))).join('');
  const garagePageTitle: HTMLElement = document.querySelector('.garage-page-title') as HTMLElement;
  const text: string = garagePageTitle.textContent as string;
  const number = (<string[]>text.match(new RegExp(/# \d*/gm))).join('').slice(2);
  const numberOfPages = (<string[]>text.match(new RegExp(/\d*$/gm))).join('');
  const regexp = new RegExp(/\d/gm);
  const n = (<string[]>el.id.match(regexp)).join('');

  if ((+numberCars - 1) % 7 === 0 && +numberOfPages === +number) {
    await deleteCar(+n);
    await renderPage(+number - 1);
    await setBtnAtrubute('garage');
    await flipPage('garage');
  } else {
    await deleteCar(+n);
    await renderPage(+number);
    await setBtnAtrubute('garage');
    await flipPage('garage');
  }
};
