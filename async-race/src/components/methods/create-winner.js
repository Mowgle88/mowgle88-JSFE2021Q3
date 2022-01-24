import { callApi } from './call-api';
// import { renderPage } from './page-rendering';

export const createWinner = async (id, wins, time) => {
  try {
    const method = 'POST';
    const url = '/winners';
    const body = { id, wins, time };
    const res = await callApi(method, url, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
