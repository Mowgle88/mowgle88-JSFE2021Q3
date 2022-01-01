import data from './data';
import { addFavorites } from './favorites-container';
import { deleteElem } from './select-toys';
import { mainTree, tree } from './tree-container';
import { mainContainer, bg } from './bg-container';

import {ITData} from './data';

const resetTreeBtn: HTMLButtonElement = document.querySelector('.reset-tree') as HTMLButtonElement;

resetTreeBtn.addEventListener('click', () => {
  deleteElem();
  for (let i = 1; i <= 20; i++) {
    addFavorites(<ITData>data[i], i);
  }

  tree.forEach((el) => {
    el.classList.remove('tree-active');
  });
  (tree[0] as Element).classList.add('tree-active');
  mainTree.src = `./assets/tree/1.webp`;
  mainTree.alt = `1`;

  bg.forEach((el) => {
    el.classList.remove('bg-active');
  });
  (bg[0]  as Element).classList.add('bg-active');
  mainContainer.style.backgroundImage = `url('./assets/bg/1.webp')`;
});
