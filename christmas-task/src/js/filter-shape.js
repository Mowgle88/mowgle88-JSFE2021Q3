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
  const allShapes = container.querySelectorAll('.shape');
  const dataName = container.querySelectorAll(`.shape[data-shape = ${shapes[shape]}]`);
  console.log(dataName);

  if (isShape[shape] === true) {
    allShapes.forEach((el) => {
      el.parentNode.parentNode.style.display = 'none';
    });
    dataName.forEach((el) => {
      el.parentNode.parentNode.style.display = 'block';
    });
    isShape[shape] = false;
  } else {
    allShapes.forEach((el) => {
      el.parentNode.parentNode.style.display = 'block';
    });
    isShape[shape] = true;
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
