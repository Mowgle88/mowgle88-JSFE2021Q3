import container from './card-container';

const shapeButton: NodeListOf<Element> = document.querySelectorAll('.shape-button') as NodeListOf<Element>;
const ballbtn: Element = document.querySelector('.ball') as Element;
const bellbtn: Element = document.querySelector('.bell') as Element;
const conebtn: Element = document.querySelector('.cone') as Element;
const snowflakebtn: Element = document.querySelector('.snowflake') as Element;
const toybtn: Element = document.querySelector('.toy') as Element;

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

export { shapeButton, isShape };

type Shapes = 'ball' | 'bell' | 'cone' | 'snowflake' | 'toy';

function chooseShape(shape: Shapes) {
  const card: NodeListOf<Element> = container.querySelectorAll('.card') as NodeListOf<Element>;

  if (isShape[shape] === true) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.add(`hide`);
      }
      if (el.getAttribute('data-shape') === shapes[shape]) {
        el.classList.add(`card-shape-${shape}`);
        if (!el.classList.contains('isFilter')) {
          el.classList.add('isFilter');
          el.classList.remove(`hide`);
        }
      }
    });
    isShape[shape] = false;
  } else {
    card.forEach((el) => {
      if (el.getAttribute('data-shape') === shapes[shape]) {
        el.classList.remove(`card-shape-${shape}`);
        el.classList.remove('isFilter');
        el.classList.add(`hide`);
      }
    });
    isShape[shape] = true;
  }

  if (Object.values(isShape).every((e) => e === true)) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.remove(`hide`);
      }
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
