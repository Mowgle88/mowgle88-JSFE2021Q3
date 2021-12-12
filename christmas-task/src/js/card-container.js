import data from './data';
const container = document.querySelector('.card-container');

function addCard(i) {
  const div = document.createElement('div');
  div.classList.add('card');

  const h = document.createElement('h4');
  h.classList.add('card-title');
  h.textContent = `${i.name}`;
  div.append(h);

  const img = document.createElement('img');
  img.classList.add('card-img');
  img.src = `../assets/toys/${i.num}.webp`;
  img.alt = `toy${i}`;
  div.append(img);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  div.append(cardInfo);

  const pCount = document.createElement('p');
  pCount.classList.add('count');
  pCount.textContent = `Количество: ${i.count}`;
  cardInfo.append(pCount);

  const pYear = document.createElement('p');
  pYear.classList.add('year');
  pYear.textContent = `Год покупки: ${i.year} год`;
  cardInfo.append(pYear);

  const pShape = document.createElement('p');
  pShape.classList.add('shape');
  pShape.textContent = `Форма игрушки: ${i.shape}`;
  cardInfo.append(pShape);

  const pColor = document.createElement('p');
  pColor.classList.add('color');
  pColor.textContent = `Цвет игрушки: ${i.color}`;
  cardInfo.append(pColor);

  const pSize = document.createElement('p');
  pSize.classList.add('size');
  pSize.textContent = `Размер игрушки: ${i.size}`;
  cardInfo.append(pSize);

  const pFavorite = document.createElement('p');
  pFavorite.classList.add('favorite');
  pFavorite.textContent = `Любиая: ${i.favorite}`;

  cardInfo.append(pFavorite);

  container.append(div);
}

// data.forEach(el => addCard(data[j]))

for (let j = 0; j < data.length; j++) {
  addCard(data[j]);
}
