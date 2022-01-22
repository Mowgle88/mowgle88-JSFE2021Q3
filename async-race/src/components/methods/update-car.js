import { callApi } from './call-api';

const updateCar = async (integer, name, color) => {
  try {
    const method = 'PUT';
    const url = `/garage/${integer}`;
    const body = { name, color };
    const response = await callApi(method, url, body);
    const dataCar = response.data;
    console.log(dataCar);
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};

export const updCar = () => {
  const inputColor = document.querySelector('.input-update-color');
  const inputName = document.querySelector('.input-update-text');
  const updateBtn = document.querySelector('.update-btn');
  window.addEventListener('click', (e) => {
    const el = e.target;
    if (el.className.includes('select-btn')) {
      const regexp = new RegExp(/\d/gm);
      const n = el.id.match(regexp).join('');
      inputName.removeAttribute('disabled');
      inputColor.removeAttribute('disabled');
      updateBtn.removeAttribute('disabled');

      updateBtn.addEventListener('click', () => {
        updateCar(n, inputName.value, inputColor.value);
        inputColor.setAttribute('disabled', '');
        updateBtn.setAttribute('disabled', '');
        inputName.setAttribute('disabled', '');
      });
    }
  });
};
