import { callApi } from './call-api';

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
      const regexp = new RegExp(/\d/gm);
      const n = el.id.match(regexp).join('');
      deleteCar(n);
    }
  });
};
