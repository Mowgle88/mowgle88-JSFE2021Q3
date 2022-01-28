import { callApi } from './call-api';
import { renderPage } from './page-rendering';
import { setBtnAtrubute, flipPage } from './next-and-prev-page';

const updateCar = async (integer: number, name: string, color: string) => {
  try {
    const method = 'PUT';
    const url = `/garage/${integer}`;
    const body = { name, color };
    const response = await callApi(method, url, body);
    const dataCar = response.data;
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};

export const updCar = async (el: HTMLElement) => {
  const inputColor: HTMLInputElement = document.querySelector('.input-update-color') as HTMLInputElement;
  const inputName: HTMLInputElement = document.querySelector('.input-update-text') as HTMLInputElement;
  const updateBtn: HTMLButtonElement = document.querySelector('.update-btn') as HTMLButtonElement;
  const garagePageTitle: HTMLElement = document.querySelector('.garage-page-title') as HTMLElement;
  const text: string = garagePageTitle.textContent as string;
  const number = (<string[]>text.match(new RegExp(/# \d*/gm))).join('').slice(2);
  const regexp = new RegExp(/\d/gm);
  const n = (<string[]>el.id.match(regexp)).join('');
  const carBrand: HTMLElement = document.querySelector(`#car-brand-${n}`) as HTMLElement;
  inputName.removeAttribute('disabled');
  inputColor.removeAttribute('disabled');
  updateBtn.removeAttribute('disabled');
  updateBtn.classList.add('blue-btn');
  carBrand.classList.add('car-brand-update');
  updateBtn.addEventListener('click', async () => {
    await updateCar(+n, inputName.value, inputColor.value);
    inputColor.setAttribute('disabled', '');
    updateBtn.setAttribute('disabled', '');
    inputName.setAttribute('disabled', '');
    updateBtn.classList.remove('blue-btn');
    carBrand.classList.remove('car-brand-update');
    await renderPage(+number);
    await setBtnAtrubute('garage');
    await flipPage('garage');
  });
};
