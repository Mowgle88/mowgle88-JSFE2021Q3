import { returnCarContent } from './get-cars';
import { garageContent } from '../pages/garage-page/garage-content';

const createPage = async (text) => {
  document.querySelector('.pages').innerHTML = text;
};

export const renderPage = async (page) => {
  await returnCarContent(page).then((res) => {
    createPage(garageContent(res[0], res[1], res[2]));
  });
};
