import { callApi } from './call-api';

export const getCars = async (page, limit) => {
  try {
    const method = 'GET';
    const url = `/garage?_page=${page}&_limit=${limit}`;
    const response = await callApi(method, url);
    const dataCars = response.data;
    const countCars = +response.headers['x-total-count'];
    // console.log([dataCars, countCars]);
    // console.log([dataCars]);
    // console.log([countCars]);
    return [dataCars, countCars];
  } catch (error) {
    console.log(error);
  }
};

// let cars = getCars(1, 7).then((obj) => obj);
// console.log(cars);
