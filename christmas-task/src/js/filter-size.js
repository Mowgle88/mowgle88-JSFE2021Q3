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
  const allSize = container.querySelectorAll('.size');
  const dataName = container.querySelectorAll(`.size[data-size = ${sizes[size]}]`);
  console.log(dataName);

  if (isSize[size] === true) {
    allSize.forEach((el) => {
      el.parentNode.parentNode.style.display = 'none';
    });
    dataName.forEach((el) => {
      el.parentNode.parentNode.style.display = 'block';
    });
    isSize[size] = false;
  } else {
    allSize.forEach((el) => {
      el.parentNode.parentNode.style.display = 'block';
    });
    isSize[size] = true;
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
