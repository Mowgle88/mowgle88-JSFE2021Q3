// import { cars } from './get-cars';
import { getCars } from './get-cars';
import { createCarContant } from '../pages/garage-page/car-container-content';

const addCarToContainer = async (array) => {
  // console.log(array);
  // console.log(array[0]);
  const newArr = array.map((el) => createCarContant(`${el.id}`, `${el.color}`, `${el.name}`));
  // console.log(newArr.join('\n'));
  return Promise.all(newArr);
};

const returnCarContent = async () => {
  const cars = await getCars(1, 7);
  // console.log(cars);
  const carsContainer = await addCarToContainer(cars[0]);
  // const string = await carsContainer.join('\n');
  console.log(carsContainer.join('\n'));
  return carsContainer.join('\n');
};

export let carContainer = returnCarContent().then((resolve) => resolve);

// export let carContainer = getCars(1, 7)
//   .then((carrs) => addCarToContainer(carrs[0]))
//   .then((str) => {
//     console.log(str);
//     return str.join('\n');
//   });
console.log(carContainer);
