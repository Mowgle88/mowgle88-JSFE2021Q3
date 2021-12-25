const decorate = document.querySelector('.decorate-container');

let i = [1, 2, 3, 4, 5, 6];

function addDecorate(ind) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('tree-decorate');

  const img = document.createElement('img');
  img.classList.add('tree-decorate-img');
  img.src = `./assets/tree/${ind}.webp`;
  img.alt = `${ind}`;
  div.append(img);

  decorate.append(div);
}

for (let j = 0; j < i.length; j++) {
  addDecorate(i[j]);
}
