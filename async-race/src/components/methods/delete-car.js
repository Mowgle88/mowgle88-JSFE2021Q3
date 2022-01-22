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
      const n = el.id[el.id.length - 1];
      deleteCar(n);
    }
  });
};
