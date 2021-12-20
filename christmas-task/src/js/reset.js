import container from './card-container';
import { colorButton, isColor } from './filter-color';
import { shapeButton, isShape } from './filter-shape';
import { littlebtn, mediumbtn, bigbtn, isSize } from './filter-size';
import { favouritebtn, isFavourite } from './filter-favourite';
import { sliderCount, sliderYear } from './range-slider';

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
  const card = container.querySelectorAll('.card');
  card.forEach((el) => {
    el.classList.remove(`card-color-white`);
    el.classList.remove(`card-color-yellow`);
    el.classList.remove(`card-color-red`);
    el.classList.remove(`card-color-blue`);
    el.classList.remove(`card-color-green`);
    el.classList.remove(`card-shape-ball`);
    el.classList.remove(`card-shape-bell`);
    el.classList.remove(`card-shape-cone`);
    el.classList.remove(`card-shape-snowflake`);
    el.classList.remove(`card-shape-toy`);
    el.classList.remove(`card-size-little`);
    el.classList.remove(`card-size-medium`);
    el.classList.remove(`card-size-big`);
    el.classList.remove(`card-favorite`);
    el.classList.remove(`hide`);
    el.classList.remove(`isFilter`);
  });

  isColor.white = true;
  isColor.yellow = true;
  isColor.red = true;
  isColor.blue = true;
  isColor.green = true;

  colorButton.forEach((el) => {
    el.classList.remove('white-active');
    el.classList.remove('yellow-active');
    el.classList.remove('red-active');
    el.classList.remove('blue-active');
    el.classList.remove('green-active');
  });

  shapeButton.forEach((el) => {
    el.classList.remove('shape-active');
  });

  isShape.ball = true;
  isShape.bell = true;
  isShape.cone = true;
  isShape.snowflake = true;
  isShape.toy = true;

  isSize.little = true;
  isSize.medium = true;
  isSize.big = true;
  isFavourite.favourite = true;

  littlebtn.checked = false;
  mediumbtn.checked = false;
  bigbtn.checked = false;
  favouritebtn.checked = false;

  sliderCount.noUiSlider.set([1, 12]);
  sliderYear.noUiSlider.set([1940, 2020]);
});
