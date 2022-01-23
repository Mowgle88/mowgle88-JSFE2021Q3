import { callApi } from './call-api';
import { createCarContent } from '../pages/garage-page/car-container-content';

const getCars = async (page, limit = 7) => {
  try {
    const method = 'GET';
    const url = `/garage?_page=${page}&_limit=${limit}`;
    const response = await callApi(method, url);
    const dataCars = response.data;
    const countCars = +response.headers['x-total-count'];
    return [dataCars, countCars];
  } catch (error) {
    console.log(error);
    return [null, 0];
  }
};

const addCarToContainer = async (array) => {
  if (array === null) return [''];
  const newArr = array.map((el) => createCarContent(`${el.id}`, `${el.color}`, `${el.name}`));
  return newArr;
};

const returnCarContent = async (num) => {
  const cars = await getCars(num);
  if (cars[0] === null) return ['', cars[1], num];
  const carsContainer = addCarToContainer(cars[0]);
  return [carsContainer.join('\n'), cars[1], num];
};

export { returnCarContent };
