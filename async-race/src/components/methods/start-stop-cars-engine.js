import { callApi } from './call-api';
// import { renderPage } from './page-rendering';

export const startStopCarsEngine = async (integer, status) => {
  try {
    const method = 'PATCH';
    const url = `/engine?id=${integer}&status=${status}`;
    const res = await callApi(method, url);
    // console.log(res.data);
    return [res, res.data];
  } catch (error) {
    console.log(error);
    console.log(res);
  }
};
