import container from './card-container';

// const shapeButton = document.querySelectorAll('.shape-button');
const littlebtn = document.querySelector('#little');
const mediumbtn = document.querySelector('#medium');
const bigbtn = document.querySelector('#big');

const sizes = {
  little: 'малый',
  medium: 'средний',
  big: 'большой',
};

const isSize = {
  little: true,
  medium: true,
  big: true,
};

function chooseSize(size) {
  const card = container.querySelectorAll('.card');
  const cardSize = container.querySelectorAll(`.card[data-size = ${sizes[size]}]`);

  if (isSize[size] === true) {
    card.forEach((el) => {
      el.classList.add(`hide`);
    });
    cardSize.forEach((el) => {
      el.classList.add(`card-size-${size}`);
    });
    isSize[size] = false;
  } else {
    card.forEach((el) => {
      el.classList.remove(`card-size-${size}`);
    });
    isSize[size] = true;
  }

  if (Object.values(isSize).every((e) => e === true)) {
    card.forEach((el) => {
      el.classList.remove(`hide`);
    });
  }
}

littlebtn.addEventListener('click', () => {
  chooseSize('little');
});

mediumbtn.addEventListener('click', () => {
  chooseSize('medium');
});

bigbtn.addEventListener('click', () => {
  chooseSize('big');
});
