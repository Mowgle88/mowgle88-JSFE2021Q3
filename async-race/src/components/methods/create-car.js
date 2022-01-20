import { callApi } from './call-api';

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

export const addCar = () => {
  const inputColor = document.querySelector('.input-color');
  const inputName = document.querySelector('.input-text');
  document.querySelector('.create-btn').addEventListener('click', () => {
    createCar(inputName.value, inputColor.value);
  });
};
