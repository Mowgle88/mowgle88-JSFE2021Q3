import data from './data';

const favorites = document.querySelector('.favorites-container');

function addFavorites(el, ind) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('favorites-card');
  div.setAttribute(`data-num`, `${ind}`);

  function createImg(number) {
    const img = document.createElement('img');
    img.classList.add('favorites-card-img');
    img.setAttribute('draggable', 'true');
    img.id = `${number}`;
    img.src = `./assets/toys/${el.num}.webp`;
    img.alt = `${el.name}`;
    div.append(img);
  }

  for (let i = 1; i <= el.count; i++) {
    createImg(i);
  }

  const p = document.createElement('p');
  p.classList.add('favorites-count');
  p.textContent = `${el.count}`;
  div.append(p);

  favorites.append(div);
}

for (let i = 1; i <= 20; i++) {
  addFavorites(data[i], i);
}

export { favorites, addFavorites };
