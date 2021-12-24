import container from './card-container';

const colorButton: NodeListOf<Element> = document.querySelectorAll('.color-button') as NodeListOf<Element>;
const whitebtn: Element = document.querySelector('.white-button') as Element;
const yellowbtn: Element = document.querySelector('.yellow-button') as Element;
const redbtn: Element = document.querySelector('.red-button') as Element;
const bluebtn: Element = document.querySelector('.blue-button') as Element;
const greenbtn: Element = document.querySelector('.green-button') as Element;

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

export { colorButton, isColor };

type Colors = 'white' | 'yellow' | 'red' | 'blue' | 'green';

function chooseСolor(color: Colors) {
  const card: NodeListOf<Element> = container.querySelectorAll('.card');

  if (isColor[color] === true) {
    card.forEach((el: Element) => {
      // console.log(el.getAttribute('data-color'));
      if (!el.classList.contains('isFilter')) {
        el.classList.add(`hide`);
      }
      if (el.getAttribute('data-color') === colors[color]) {
        el.classList.add(`card-color-${color}`);
        if (!el.classList.contains('isFilter')) {
          el.classList.add('isFilter');
          el.classList.remove(`hide`);
        }
      }
    });
    isColor[color] = false;
  } else {
    card.forEach((el: Element) => {
      if (el.getAttribute('data-color') === colors[color]) {
        el.classList.remove(`card-color-${color}`);
        el.classList.remove('isFilter');
        el.classList.add(`hide`);
      }
    });
    isColor[color] = true;
  }

  if (Object.values(isColor).every((e) => e === true)) {
    card.forEach((el: Element) => {
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
