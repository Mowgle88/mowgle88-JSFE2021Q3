import { callApi } from './call-api';

export const startStopCarsEngine = async (integer: number, status: string) => {
  try {
    const method = 'PATCH';
    const url = `/engine?id=${integer}&status=${status}`;
    const res = await callApi(method, url);
    return [res, res.data];
  } catch (error) {
    console.log(error);
    return
  }
};
