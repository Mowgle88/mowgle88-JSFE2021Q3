import { callApi } from './call-api';
import { winnerRow } from '../pages/winners-page/winner-row';
import { getCar } from './get-car';

// const getWinners = async (page, limit, sort, order) => {
const getWinners = async (page, limit) => {
  try {
    const method = 'GET';
    const url = `/winners?_page=${page}&_limit=${limit}`;
    // const url = `/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    const response = await callApi(method, url);
    const dataWinners = response.data;
    const countWinners = +response.headers['x-total-count'];
    // console.log(response);
    // console.log([dataWinners, countWinners]);
    return [dataWinners, countWinners];
  } catch (error) {
    console.log(error);
    return [null, 0];
  }
};

const getId = async (array) => {
  const newArray = array.map((el) => [el.id]);
  return newArray;
};

const getColor = async (array) => {
  const newAr = array.map((el) => {
    const car = getCar(el);
    return [car.color, car.name];
  });
  return Promise.all(newAr);
};

const addWinnerToRow = async (array) => {
  if (array === null) return [''];
  // const id = getId(array);
  const newAr = array.map((el) => {
    const car = getCar(el.id);
    el.color = car.color;
    el.name = car.name;
  });
  await Promise.all(newAr);
  console.log(newAr);

  const newArray = array.map((el) => {
    // const car = getCar(el.id);
    console.log(el.id);
    return winnerRow(`${el.id}`, `${el.time}`, `${el.wins}`);
  });
  console.log(newArray);

  return newArray;
};

const returnCarContent = async () => {
  const winners = await getWinners(1, 7);
  const idCar = await getId(winners[0]);
  // console.log(idCar);
  const n = await getColor(idCar);
  console.log(n);
  const winnersRow = await addWinnerToRow(winners[0]);
  console.log(winnersRow.join('\n'));
  return [winnersRow.join('\n'), winners[1]];
};

returnCarContent();

export { returnCarContent };
