import { callApi } from './call-api';

const getCar = async (integer) => {
  try {
    const method = 'GET';
    const url = `/garage/${integer}`;
    const response = await callApi(method, url);
    const dataCar = response.data;
    return dataCar;
  } catch (error) {
    console.log(error);
  }
};

getCar(1);
