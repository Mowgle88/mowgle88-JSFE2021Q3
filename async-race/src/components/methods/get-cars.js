import { callApi } from './call-api';

const getCars = async (page, limit) => {
  try {
    const method = 'GET';
    const url = `/garage?_page=${page}&_limit=${limit}`;
    const response = await callApi(method, url);
    // const dataCars = response.data;
    // const countCars = +response.headers['x-total-count'];
    // console.log(typeof countCars);
    return response;
  } catch (error) {
    console.log(error);
  }
};

getCars(1, 7);
