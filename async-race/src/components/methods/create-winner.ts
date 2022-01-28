import { callApi } from './call-api';
// import { startAllCars } from './animation';
// import { renderPage } from './page-rendering';

export const createWinner = async (id: number, wins: number, time: number) => {
  try {
    const method = 'POST';
    const url = '/winners';
    const body = { id, wins, time };
    const res = await callApi(method, url, body);
    return res;
  } catch (error) {
    console.log(error);
    return
  }
};

// const addWinner = async () => {
//   const res = await startAllCars();
//   console.log(res);
// };
