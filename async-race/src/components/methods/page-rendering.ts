import { returnCarContent } from './get-cars';
import { garageContent } from '../pages/garage-page/garage-content';

const createPage = async (text: string) => {
  (<HTMLElement>document.querySelector('.pages')).innerHTML = text;
};

export const renderPage = async (page: number) => {
  await returnCarContent(page).then((res) => {
    createPage(garageContent((res[0]) as string, `${res[1]}`, res[2] as number));
  });
};
