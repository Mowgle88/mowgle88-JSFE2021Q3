import container from './card-container';

const colorButton = document.querySelectorAll('.color-button');
const whitebtn = document.querySelector('.white-button');
const yellowbtn = document.querySelector('.yellow-button');
const redbtn = document.querySelector('.red-button');
const bluebtn = document.querySelector('.blue-button');
const greenbtn = document.querySelector('.green-button');

const colors = {
  white: 'белый',
  yellow: 'желтый',
  red: 'красный',
  blue: 'синий',
  green: 'зелёный',
};

const isColor = {
  white: true,
  yellow: true,
  red: true,
  blue: true,
  green: true,
};

function chooseСolor(color) {
  const card = container.querySelectorAll('.card');
  const cardColor = container.querySelectorAll(`.card[data-color = ${colors[color]}]`);

  if (isColor[color] === true) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.add(`hide`);
      }
    });
    cardColor.forEach((el) => {
      el.classList.add(`card-color-${color}`);
      if (!el.classList.contains('isFilter')) {
        el.classList.add('isFilter');
        el.classList.remove(`hide`);
      }
    });
    isColor[color] = false;
  } else {
    cardColor.forEach((el) => {
      el.classList.remove(`card-color-${color}`);
      el.classList.remove('isFilter');
      el.classList.add(`hide`);
    });
    isColor[color] = true;
  }

  if (Object.values(isColor).every((e) => e === true)) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.remove(`hide`);
      }
    });
  }
}

colorButton.forEach((el) => {
  el.addEventListener('click', () => {
    if (el === whitebtn) {
      chooseСolor('white');
      el.classList.toggle('white-active');
    } else if (el === yellowbtn) {
      chooseСolor('yellow');
      el.classList.toggle('yellow-active');
    } else if (el === redbtn) {
      chooseСolor('red');
      el.classList.toggle('red-active');
    } else if (el === bluebtn) {
      chooseСolor('blue');
      el.classList.toggle('blue-active');
    } else if (el === greenbtn) {
      chooseСolor('green');
      el.classList.toggle('green-active');
    }
  });
});
