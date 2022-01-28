import { callApi } from './call-api';
import { winnerRow } from '../pages/winners-page/winner-row';
import { getCar } from './get-car';
import { Car } from './interfaces';

// const getWinners = async (page, limit, sort, order) => {
const getWinners = async (page: number, limit = 10) => {
  try {
    const method = 'GET';
    const url = `/winners?_page=${page}&_limit=${limit}`;
    // const url = `/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    const response = await callApi(method, url);
    const dataWinners = response.data;
    const countWinners: number = +(response.headers['x-total-count'] as string);
    console.log([dataWinners, countWinners]);
    return [dataWinners, countWinners];
  } catch (error) {
    console.log(error);
    return [null, 0];
  }
};

const addWinnerToRow = async (array: Car[]) => {
  if (array === null) return [''];
  const idCar = await array.map((el) => el.id);
  await Promise.all(idCar);

  const winnersArray = await (<number[]>idCar).map((el) => {
    const car = getCar(el);
    return car;
  });
  const winArr = await Promise.all(winnersArray);

  const contentArray = array.map((el, i) => {
    return winnerRow(`${el.id}`, `${el.time}`, `${el.wins}`, `${winArr[i].color}`, `${winArr[i].name}`, +`${i + 1}`);
  });
  return contentArray;
};

const returnWinnerContent = async (num: number) => {
  const winners = await getWinners(num);
  const winnersRow = await addWinnerToRow(winners[0]);
  return [winnersRow.join('\n'), winners[1], num];
};

export { returnWinnerContent };
