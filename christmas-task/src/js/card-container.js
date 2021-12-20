import data from './data';

import * as swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// const swal = _swal;
// const swal: SweetAlert = _swal as any;

const container = document.querySelector('.card-container');

const disription = ['count', 'year', 'shape', 'color', 'size', 'favorite'];
const string = ['Количество:', 'Год покупки:', 'Форма игрушки:', 'Цвет игрушки:', 'Размер игрушки:', 'Любиая:'];

export function addCard(el, ind) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.setAttribute(`data-num`, ind);
  div.setAttribute(`data-name`, el.name);
  div.setAttribute(`data-count`, el.count);
  div.setAttribute(`data-year`, el.year);
  div.setAttribute(`data-shape`, el.shape);
  div.setAttribute(`data-color`, el.color);
  div.setAttribute(`data-size`, el.size);
  div.setAttribute(`data-favorite`, el.favorite);

  const h = document.createElement('h4');
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

  function createEl(descript, str) {
    const p = document.createElement('p');
    p.className = `${descript}`;
    // p.setAttribute(`data-${descript}`, el[descript]);
    if (el[descript] === false) {
      p.textContent = `${str} нет`;
    } else if (el[descript] === true) {
      p.textContent = `${str} да`;
    } else if (descript === 'year') {
      p.textContent = `${str} ${el[descript]} год`;
    } else {
      p.textContent = `${str} ${el[descript]}`;
    }
    cardInfo.append(p);
  }

  disription.forEach((item, index) => createEl(item, string[index]));

  container.append(div);
}

data.forEach((el, i) => addCard(el, i));

export default container;

// Добавление игрушек в избранное
const card = document.querySelectorAll('.card');
const select = document.querySelector('.select span');
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
      select.textContent = count;
    } else {
      if (el.classList.contains('card-active')) {
        el.classList.toggle('card-active');
        count--;
      } else {
        swal('Блиин', 'Извините, все слоты заполнены!', 'error');
      }
      select.textContent = count;
    }
  });
});
