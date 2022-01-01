import Swal from 'sweetalert2';

import data from './data';

import {ITData} from './data';

import { favorites, addFavorites } from './favorites-container';

const cards: NodeListOf<Element> = document.querySelectorAll('.card') as NodeListOf<Element>;
const select: HTMLElement = document.querySelector('.select') as HTMLElement;
const span: HTMLElement = document.querySelector('.select span') as HTMLElement;
let count = 0;
let num: Array<string> = [];

function addToFavorites(elem: Element) {
  let ind: string = elem.getAttribute('data-num') as string;

  if (count < 20) {
    elem.classList.toggle('card-active');
    if (elem.classList.contains('card-active')) {
      num.push(ind);
      count++;
    } else {
      count--;
      num = num.filter((item) => item !== ind);
    }
    span.textContent = `${count}`;
    select.classList.add('select-active');
  } else {
    if (elem.classList.contains('card-active')) {
      elem.classList.toggle('card-active');
      count--;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Блииин...',
        text: 'Извините, Все слоты заняты!',
      });
    }
    span.textContent = `${count}`;
  }
  if (span.textContent == '0') {
    select.classList.remove('select-active');
  }
}

export function deleteElem() {
  favorites.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('container-header');
  div.textContent = 'Игрушки';
  favorites.append(div);
}

cards.forEach((el) => {
  el.addEventListener('click', () => {
    addToFavorites(el);
    deleteElem();
    num.forEach((i) => {
      addFavorites(<ITData>data[+i], +i);
    });
  });
});
