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
  const allColor = container.querySelectorAll('.color');
  const dataName = container.querySelectorAll(`.color[data-color = ${colors[color]}]`);

  if (isColor[color] === true) {
    allColor.forEach((el) => {
      // el.parentNode.parentNode.style.display = 'none';
      el.parentNode.parentNode.classList.add(`hide-color`);
    });
    dataName.forEach((el) => {
      // el.parentNode.parentNode.style.display = 'block';
      el.parentNode.parentNode.classList.add(`card-color-${color}`);
    });
    isColor[color] = false;
  } else {
    allColor.forEach((el) => {
      // el.parentNode.parentNode.style.display = 'block';
      el.parentNode.parentNode.classList.remove(`card-color-${color}`);
    });
    isColor[color] = true;
  }

  if (Object.values(isColor).every((e) => e === true)) {
    allColor.forEach((el) => {
      // el.parentNode.parentNode.style.display = 'block';
      el.parentNode.parentNode.classList.remove(`hide-color`);
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
