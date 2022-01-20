// import { cars } from './get-cars';
import { getCars } from './get-cars';
import { createCarContent } from '../pages/garage-page/car-container-content';
// import { garageContent } from '../pages/garage-page/garage-content';

const addCarToContainer = (array) => {
  // console.log(array);
  // console.log(array[0]);
  const newArr = array.map((el) => createCarContent(`${el.id}`, `${el.color}`, `${el.name}`));
  // console.log(newArr.join('\n'));
  return newArr;
};

const returnCarContent = async () => {
  const cars = await getCars(1, 7);
  // console.log(cars[1]);
  const carsContainer = addCarToContainer(cars[0]);
  // const string = await carsContainer.join('\n');
  // console.log(carsContainer.join('\n'));
  return [carsContainer.join('\n'), cars[1]];
};

export { returnCarContent };

// returnCarContent().then((resolve) => garageContent(resolve));
