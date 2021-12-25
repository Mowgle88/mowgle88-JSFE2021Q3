const bgContainer = document.querySelector('.bg-container');

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addBg(ind) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('bg');
  div.setAttribute(`data-bg`, `${ind}`);
  div.style.backgroundImage = `url('./assets/bg/${ind}.webp')`;

  bgContainer.append(div);
}

for (let j = 0; j < i.length; j++) {
  addBg(i[j]);
}
