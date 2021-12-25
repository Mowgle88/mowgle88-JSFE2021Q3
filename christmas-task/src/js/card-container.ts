import data from './data';

import {ITData} from './data';

import Swal from 'sweetalert2'

const container: HTMLDivElement  = document.querySelector('.card-container') as HTMLDivElement;

const disription: string[] = ['count', 'year', 'shape', 'color', 'size', 'favorite'];
const string: string[] = ['Количество:', 'Год покупки:', 'Форма игрушки:', 'Цвет игрушки:', 'Размер игрушки:', 'Любиая:'];

export function addCard(el: ITData, ind: number) {
  const div: HTMLDivElement = document.createElement('div');
  div.classList.add('card');
  div.setAttribute(`data-num`, `${ind}`);
  div.setAttribute(`data-name`, el.name);
  div.setAttribute(`data-count`, el.count);
  div.setAttribute(`data-year`, el.year);
  div.setAttribute(`data-shape`, el.shape);
  div.setAttribute(`data-color`, el.color);
  div.setAttribute(`data-size`, el.size);
  div.setAttribute(`data-favorite`, `${el.favorite}`);

  const h: HTMLHeadingElement = document.createElement('h4');
  h.classList.add('card-title');
  h.textContent = `${el.name}`;
  div.append(h);

  const img: HTMLImageElement = document.createElement('img');
  img.classList.add('card-img');
  img.src = `./assets/toys/${el.num}.webp`;
  img.alt = `${el.name}`;
  div.append(img);

  const cardInfo: HTMLDivElement = document.createElement('div');
  cardInfo.classList.add('card-info');
  div.append(cardInfo);

  type Disription = 'count' | 'year' | 'shape' | 'color' | 'size' | 'favorite';

  function createEl(descript: Disription, str: string) {
    const p = document.createElement('p');
    p.className = `${descript}`;
    if ((el[descript]) === false) {
      p.textContent = `${str} нет`;
    } else if ((el[descript]) === true) {
      p.textContent = `${str} да`;
    } else if (`${descript}` === 'year') {
      p.textContent = `${str} ${el.year} год`;
    } else {
      p.textContent = `${str} ${el[descript]}`;
    }
    cardInfo.append(p);
  }

  disription.forEach((item, index) => createEl(item as Disription, string[index] as string));

  container.append(div);
}

data.forEach((el, i) => addCard(el, i));

export default container;

// Добавление игрушек в избранное
const card: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');
const select: HTMLElement  = document.querySelector('.select span') as HTMLElement;
let count = 0;

card.forEach((el) => {
  el.addEventListener('click', () => {
    if (count < 20) {
      el.classList.toggle('card-active');
      if (el.classList.contains('card-active')) {
        count++;
      } else {
        count--;
      }
      select.textContent = `${count}`;
    } else {
      if (el.classList.contains('card-active')) {
        el.classList.toggle('card-active');
        count--;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Блииин...',
          text: 'Извините, совпадений не обнаружено!',
        })
      }
      select.textContent = `${count}`;
    }
  });
});
