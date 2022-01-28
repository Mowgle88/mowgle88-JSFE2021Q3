import { callApi } from './call-api';
import { createCarContent } from '../pages/garage-page/car-container-content';
import { Car } from './interfaces';

const getCars = async (page: number, limit = 7) => {
  try {
    const method = 'GET';
    const url = `/garage?_page=${page}&_limit=${limit}`;
    const response = await callApi(method, url);
    const dataCars: Car = response.data;
    const countCars: number = +(response.headers['x-total-count'] as string);
    return [dataCars, countCars];
  } catch (error) {
    console.log(error);
    return [null, 0];
  }
};

const addCarToContainer = async (array: Car[]) => {
  if (array === null) return [''];
  const newArr = array.map((el) => createCarContent(`${el.id}`, `${el.color}`, `${el.name}`));
  return newArr;
};

const returnCarContent = async (num: number) : Promise<(string | number | string)[]> => {
  const cars: [Car[], number] = await getCars(num) as [Car[], number];
  if (cars[0] === null) return ['', cars[1], num];
  const carsContainer = await addCarToContainer(cars[0]);
  return [carsContainer.join('\n'), cars[1], num];
};

export { returnCarContent };
