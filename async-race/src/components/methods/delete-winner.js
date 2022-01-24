import { callApi } from './call-api';

export const deleteWinner = async (integer) => {
  try {
    const method = 'DELETE';
    const url = `/winners/${integer}`;
    const response = await callApi(method, url);
    const dataCar = response.data;
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};
