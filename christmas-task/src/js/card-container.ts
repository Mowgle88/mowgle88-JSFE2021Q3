import data from './data';

import {ITData} from './data';

// import * as swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// const swal = _swal;
// const swal: SweetAlert = _swal as any;

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

  const img = document.createElement('img');
  img.classList.add('card-img');
  img.src = `./assets/toys/${el.num}.webp`;
  img.alt = `${el.name}`;
  div.append(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  div.append(cardInfo);

  function createEl(descript: string, str: string) {
    const p = document.createElement('p');
    p.className = `${descript}`;
    // p.setAttribute(`data-${descript}`, el[descript]);
    if (/*el[descript]*/el.favorite === false) {
      p.textContent = `${str} нет`;
    } else if (el.favorite === true) {
      p.textContent = `${str} да`;
    } else if (descript === 'year') {
      p.textContent = `${str} ${el.year} год`;
    } else {
      p.textContent = `${str} ${el.shape}`;//todo проверить значение
    }
    cardInfo.append(p);
  }

  disription.forEach((item, index) => createEl(item, string[index] as string));

  container.append(div);
}

data.forEach((el, i) => addCard(el, i));

export default container;

// Добавление игрушек в избранное
const card: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');
const select: HTMLElement  = document.querySelector('.select span') as HTMLElement;
let count = 0;

card.forEach((el: HTMLDivElement) => {
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
        // swal('Блиин', 'Извините, все слоты заполнены!', 'error');
      }
      select.textContent = `${count}`;
    }
  });
});
