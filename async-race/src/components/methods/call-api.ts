import axios, { Method } from 'axios';
import { Car } from './interfaces';

export const callApi = async (method: Method, url: string, body?: Car) => {
  // const baseUrl: string = 'http://localhost:3000';
  const baseUrl: string = 'https://rocky-badlands-93860.herokuapp.com';
  const res = await axios({
    method,
    url: `${baseUrl}${url}`,
    data: body,
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
};
