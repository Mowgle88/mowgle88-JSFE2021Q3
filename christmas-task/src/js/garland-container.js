const garlandContainer = document.querySelector('.garland-container');

let i = [1, 2, 3];

function addGarland(ind) {
  const div = document.createElement('div');
  div.classList.add('garland');
  div.setAttribute(`data-garland`, `${ind}`);
  div.style.backgroundImage = `url('./assets/garland/Garland_${ind}.webp')`;

  garlandContainer.append(div);
}

for (let j = 0; j < i.length; j++) {
  addGarland(i[j]);
}
