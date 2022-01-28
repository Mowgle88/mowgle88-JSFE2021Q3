import { callApi } from './call-api';
import { renderPage } from './page-rendering';
import { setBtnAtrubute, flipPage } from './next-and-prev-page';

const createCar = async (name: string, color: string) => {
  try {
    const method = 'POST';
    const url = '/garage';
    const body = { name, color };
    const res = await callApi(method, url, body);
    return res;
  } catch (error) {
    console.log(error);
    return
  }
};

const addCar = async () => {
  const inputColor: HTMLInputElement = document.querySelector('.input-create-color') as HTMLInputElement;
  const inputName: HTMLInputElement = document.querySelector('.input-create-text') as HTMLInputElement;
  const nextBtn: HTMLButtonElement = document.querySelector('.next-btn-garage') as HTMLButtonElement;
  const garageTitle: HTMLElement = document.querySelector('.garage-title') as HTMLElement;
  const textTitle: string = garageTitle.textContent as string;
  const numberCars = (<string[]>textTitle.match(new RegExp(/\d*/gm))).join('');
  const garagePageTitle: HTMLElement = document.querySelector('.garage-page-title') as HTMLElement;
  const text: string = garagePageTitle.textContent as string;
  const number = (<string[]>text.match(new RegExp(/# \d*/gm))).join('').slice(2);
  (document.querySelector('.create-btn') as HTMLButtonElement).addEventListener('click', async () => {
    await createCar(inputName.value, inputColor.value);
    await renderPage(+number);
    await setBtnAtrubute('garage');
    await flipPage('garage');
    inputName.value = '';
    if (+numberCars % 7 === 0) {
      nextBtn.removeAttribute('disabled');
      nextBtn.classList.add('blue-btn');
    }
  });
};

export { createCar, addCar };
