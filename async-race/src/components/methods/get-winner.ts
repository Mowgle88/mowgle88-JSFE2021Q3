import { callApi } from './call-api';

export const getWinner = async (integer: number) => {
  try {
    const method = 'GET';
    const url = `/winners/${integer}`;
    const response = await callApi(method, url);
    const dataCar = response.data;
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};
