import { callApi } from './call-api';
import { renderPage } from './page-rendering';

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

export const delCar = () => {
  window.addEventListener('click', (e) => {
    const el = e.target;
    if (el.className.includes('remove-btn')) {
      const garagePageTitle = document.querySelector('.garage-page-title');
      const text = garagePageTitle.textContent;
      const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
      const regexp = new RegExp(/\d/gm);
      const n = el.id.match(regexp).join('');
      deleteCar(n);
      renderPage(number);
    }
  });
};
