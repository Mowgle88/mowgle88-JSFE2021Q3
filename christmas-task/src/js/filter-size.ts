import container from './card-container';

// const shapeButton = document.querySelectorAll('.shape-button');
const littlebtn: HTMLInputElement = document.querySelector('#little') as HTMLInputElement;
const mediumbtn: HTMLInputElement = document.querySelector('#medium') as HTMLInputElement;
const bigbtn: HTMLInputElement = document.querySelector('#big') as HTMLInputElement;

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

export { littlebtn, mediumbtn, bigbtn, isSize };

type Size = 'little' | 'medium' | 'big';

function chooseSize(size: Size) {
  const card = container.querySelectorAll('.card');

  if (isSize[size] === true) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.add(`hide`);
      }
      if (el.getAttribute('data-size') === sizes[size]) {
        el.classList.add(`card-size-${size}`);
        if (!el.classList.contains('isFilter')) {
          el.classList.add('isFilter');
          el.classList.remove(`hide`);
        }
      }
    });
    isSize[size] = false;
  } else {
    card.forEach((el) => {
      if (el.getAttribute('data-size') === sizes[size]) {
        el.classList.remove(`card-size-${size}`);
        el.classList.remove('isFilter');
        el.classList.add(`hide`);
      }
    });
    isSize[size] = true;
  }

  if (Object.values(isSize).every((e) => e === true)) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.remove(`hide`);
      }
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
