import { callApi } from './call-api';
import { renderPage } from './page-rendering';

const createCar = async (name, color) => {
  try {
    const method = 'POST';
    const url = '/garage';
    const body = { name, color };
    const res = await callApi(method, url, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addCar = async () => {
  const inputColor = document.querySelector('.input-create-color');
  const inputName = document.querySelector('.input-create-text');
  const nextBtn = document.querySelector('.next-btn-garage');
  const garageTitle = document.querySelector('.garage-title');
  const textTitle = garageTitle.textContent;
  const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');
  const garagePageTitle = document.querySelector('.garage-page-title');
  const text = garagePageTitle.textContent;
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  document.querySelector('.create-btn').addEventListener('click', async () => {
    await createCar(inputName.value, inputColor.value);
    renderPage(number);
    inputName.value = '';
    if (numberCars % 7 === 0) {
      nextBtn.removeAttribute('disabled');
      nextBtn.classList.add('blue-btn');
    }
  });
};

export { createCar, addCar };
