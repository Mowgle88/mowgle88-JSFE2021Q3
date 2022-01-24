import { callApi } from './call-api';

export const updateWinner = async (id, wins, time) => {
  try {
    const method = 'PUT';
    const url = `/winners/${id}`;
    const body = { wins, time };
    const response = await callApi(method, url, body);
    const dataCar = response.data;
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};
