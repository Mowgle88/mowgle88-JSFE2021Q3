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

const addCar = () => {
  const inputColor = document.querySelector('.input-create-color');
  const inputName = document.querySelector('.input-create-text');
  document.querySelector('.create-btn').addEventListener('click', () => {
    createCar(inputName.value, inputColor.value);
    renderPage(1);
    inputName.value = '';
  });
};

export { createCar, addCar };
