import { callApi } from './call-api';
import { renderPage } from './page-rendering';

const updateCar = async (integer, name, color) => {
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

export const updCar = async () => {
  window.addEventListener('click', async (e) => {
    const inputColor = document.querySelector('.input-update-color');
    const inputName = document.querySelector('.input-update-text');
    const updateBtn = document.querySelector('.update-btn');
    const el = e.target;
    if (el.className.includes('select-btn')) {
      const garagePageTitle = document.querySelector('.garage-page-title');
      const text = garagePageTitle.textContent;
      const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
      const regexp = new RegExp(/\d/gm);
      const n = el.id.match(regexp).join('');
      const carBrand = document.querySelector(`#car-brand-${n}`);
      inputName.removeAttribute('disabled');
      inputColor.removeAttribute('disabled');
      updateBtn.removeAttribute('disabled');
      updateBtn.classList.add('blue-btn');
      carBrand.classList.add('car-brand-update');

      updateBtn.addEventListener('click', async () => {
        await updateCar(n, inputName.value, inputColor.value);
        inputColor.setAttribute('disabled', '');
        updateBtn.setAttribute('disabled', '');
        inputName.setAttribute('disabled', '');
        updateBtn.classList.remove('blue-btn');
        carBrand.classList.remove('car-brand-update');
        renderPage(number);
      });
    }
  });
};
