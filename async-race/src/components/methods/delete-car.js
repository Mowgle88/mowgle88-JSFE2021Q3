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

export const delCar = async (el) => {
  const nextBtn = document.querySelector('.next-btn-garage');
  const garageTitle = document.querySelector('.garage-title');
  const textTitle = garageTitle.textContent;
  const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');
  const garagePageTitle = document.querySelector('.garage-page-title');
  const text = garagePageTitle.textContent;
  const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');
  const regexp = new RegExp(/\d/gm);
  const n = el.id.match(regexp).join('');
  if ((+numberCars - 1) % 7 === 0 && +numberOfPages === +number) {
    await deleteCar(n);
    renderPage(+number - 1);
  } else {
    await deleteCar(n);
    renderPage(number);
  }
  if (+numberCars - 1 === 7) {
    nextBtn.classList.remove('blue-btn');
    nextBtn.setAttribute('disabled', '');
  }
};

// export const delCar = async () => {
//   const removeBtns = document.querySelectorAll('.remove-btn');
//   const nextBtn = document.querySelector('.next-btn-garage');
//   const garageTitle = document.querySelector('.garage-title');
//   const textTitle = garageTitle.textContent;
//   const numberCars = textTitle.match(new RegExp(/\d*/gm)).join('');

//   const garagePageTitle = document.querySelector('.garage-page-title');
//   const text = garagePageTitle.textContent;
//   const number = text.match(new RegExp(/# \d*/gm)).join('').slice(2);
//   const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');

//   for await (const el of removeBtns) {
//     el.addEventListener('click', async () => {
//       const regexp = new RegExp(/\d/gm);
//       const n = el.id.match(regexp).join('');

//       if ((+numberCars - 1) % 7 === 0 && +numberOfPages === +number) {
//         await deleteCar(n);
//         renderPage(+number - 1);
//       } else {
//         await deleteCar(n);
//         renderPage(number);
//       }
//       if (+numberCars - 1 === 7) {
//         nextBtn.classList.remove('blue-btn');
//         nextBtn.setAttribute('disabled', '');
//       }
//     });
//   }
// };
