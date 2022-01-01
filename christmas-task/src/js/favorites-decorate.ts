const decor: HTMLElement = document.querySelector('.decorate-container') as HTMLElement;

let iD: number[] = [1, 2, 3, 4, 5, 6];

function addDecor(ind: number) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('tree-decorate');

  const img = document.createElement('img');
  img.classList.add('tree-decorate-img');
  img.src = `./assets/tree/${ind}.webp`;
  img.alt = `${ind}`;
  div.append(img);

  decor.append(div);
}

iD.forEach((n) => addDecor(n));
