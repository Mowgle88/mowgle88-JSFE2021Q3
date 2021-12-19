import container from './card-container';

const shapeButton = document.querySelectorAll('.shape-button');
const ballbtn = document.querySelector('.ball');
const bellbtn = document.querySelector('.bell');
const conebtn = document.querySelector('.cone');
const snowflakebtn = document.querySelector('.snowflake');
const toybtn = document.querySelector('.toy');

const shapes = {
  ball: 'шар',
  bell: 'колокольчик',
  cone: 'шишка',
  snowflake: 'снежинка',
  toy: 'фигурка',
};

const isShape = {
  ball: true,
  bell: true,
  cone: true,
  snowflake: true,
  toy: true,
};

function chooseShape(shape) {
  const card = container.querySelectorAll('.card');
  const cardShape = container.querySelectorAll(`.card[data-shape = ${shapes[shape]}]`);

  if (isShape[shape] === true) {
    card.forEach((el) => {
      el.classList.add(`hide`);
    });
    cardShape.forEach((el) => {
      el.classList.add(`card-shape-${shape}`);
    });
    isShape[shape] = false;
  } else {
    card.forEach((el) => {
      el.classList.remove(`card-shape-${shape}`);
    });
    isShape[shape] = true;
  }

  if (Object.values(isShape).every((e) => e === true)) {
    card.forEach((el) => {
      el.classList.remove(`hide`);
    });
  }
}

shapeButton.forEach((el) => {
  el.addEventListener('click', () => {
    if (el === ballbtn) {
      chooseShape('ball');
    } else if (el === bellbtn) {
      chooseShape('bell');
    } else if (el === conebtn) {
      chooseShape('cone');
    } else if (el === snowflakebtn) {
      chooseShape('snowflake');
    } else if (el === toybtn) {
      chooseShape('toy');
    }
    el.classList.toggle('shape-active');
  });
});
