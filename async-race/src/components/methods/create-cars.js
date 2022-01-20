import { getCars } from './get-cars';
import { createCarContent } from '../pages/garage-page/car-container-content';

const addCarToContainer = (array) => {
  const newArr = array.map((el) => createCarContent(`${el.id}`, `${el.color}`, `${el.name}`));
  return newArr;
};

const returnCarContent = async () => {
  const cars = await getCars(1, 7);
  const carsContainer = addCarToContainer(cars[0]);
  return [carsContainer.join('\n'), cars[1]];
};

export { returnCarContent };
