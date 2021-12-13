import data from './data';
const container = document.querySelector('.card-container');

const disription = ['count', 'year', 'shape', 'color', 'size', 'favorite'];
const string = ['Количество:', 'Год покупки:', 'Форма игрушки:', 'Цвет игрушки:', 'Размер игрушки:', 'Любиая:'];

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

  function createEl(descript, str) {
    const p = document.createElement('p');
    p.className = `${descript}`;
    if (i[descript] === false) {
      p.textContent = `${str} нет`;
    } else if (i[descript] === true) {
      p.textContent = `${str} да`;
    } else if (descript === 'year') {
      p.textContent = `${str} ${i[descript]} год`;
    } else {
      p.textContent = `${str} ${i[descript]}`;
    }
    cardInfo.append(p);
  }

  disription.forEach((item, index) => createEl(item, string[index]));

  container.append(div);
}

data.forEach((el) => addCard(el));
