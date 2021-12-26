import Swal from 'sweetalert2';

import data from './data';

import { favorites, addFavorites } from './favorites-container';

const card = document.querySelectorAll('.card');
const select = document.querySelector('.select');
const span = document.querySelector('.select span');
let count = 0;
let num = [];

function addToFavorites(elem) {
  let ind = elem.getAttribute('data-num');

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

function deleteElem() {
  favorites.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('container-header');
  div.textContent = 'Игрушки';
  favorites.append(div);
}

card.forEach((el) => {
  el.addEventListener('click', () => {
    addToFavorites(el);
    deleteElem();
    num.forEach((i) => {
      addFavorites(data[i], i);
    });
  });
});
