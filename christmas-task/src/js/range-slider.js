import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import container from './card-container';
// import sortCount from './sort-count-slider';

let sliderCount = document.getElementById('slider-count');
let sliderYear = document.getElementById('slider-year');

noUiSlider.create(sliderCount, {
  start: [1, 12],
  connect: true,
  range: {
    min: 1,
    max: 12,
  },
});

noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  step: 10,
  connect: true,
  range: {
    min: 1940,
    max: 2020,
  },
});

// input-select-count=====================================================

let selectCountLeft = document.getElementById('input-select-count-left');
let selectCountRight = document.getElementById('input-select-count-right');

// Сортировать в диапозоне значений по количеству экземпляров
function sortCount() {
  for (let i = 1; i < container.children.length; i++) {
    if (!container.children[i].classList.contains(`hide`)) {
      if (
        +container.children[i].getAttribute('data-count') >= +selectCountLeft.value &&
        +container.children[i].getAttribute('data-count') <= +selectCountRight.value
      ) {
        container.children[i].classList.remove(`hide-sort`);
      } else {
        container.children[i].classList.add(`hide-sort`);
      }
    }
  }
}

// Append the option elements
for (let i = 1; i <= 12; i++) {
  let option = document.createElement('option');
  option.text = i;
  option.value = i;

  selectCountLeft.appendChild(option);
}

for (let i = 12; i >= 1; i--) {
  let option = document.createElement('option');
  option.text = i;
  option.value = i;

  selectCountRight.appendChild(option);
}

sliderCount.noUiSlider.on('update', function (values, handle) {
  let value = values[handle];

  if (handle) {
    selectCountRight.value = Math.round(value);
    sortCount();
  } else {
    selectCountLeft.value = Math.round(value);
    sortCount();
    // console.log(selectCountLeft.value);
  }
});

selectCountLeft.addEventListener('change', function () {
  sliderCount.noUiSlider.set([this.value, null]);
  sortCount();
  // console.log(typeof selectCountLeft.value);
});

selectCountRight.addEventListener('change', function () {
  sliderCount.noUiSlider.set([null, this.value]);
  sortCount();
});

// input-select-year=====================================================

let selectYeartLeft = document.getElementById('input-select-year-left');
let selectYearRight = document.getElementById('input-select-year-right');

// Сортировать в диапозоне значений по году
function sortYear() {
  for (let i = 1; i < container.children.length; i++) {
    if (!container.children[i].classList.contains(`hide`)) {
      if (
        +container.children[i].getAttribute('data-year') >= +selectYeartLeft.value &&
        +container.children[i].getAttribute('data-year') <= +selectYearRight.value
      ) {
        container.children[i].classList.remove(`hide-sort`);
      } else {
        container.children[i].classList.add(`hide-sort`);
      }
    }
  }
}

// Append the option elements
for (let i = 1940; i <= 2020; i += 10) {
  let option = document.createElement('option');
  option.text = i;
  option.value = i;

  selectYeartLeft.appendChild(option);
}

for (let i = 2020; i >= 1940; i -= 10) {
  let option = document.createElement('option');
  option.text = i;
  option.value = i;

  selectYearRight.appendChild(option);
}

sliderYear.noUiSlider.on('update', function (values, handle) {
  let value = values[handle];

  if (handle) {
    selectYearRight.value = Math.round(value);
    sortYear();
  } else {
    selectYeartLeft.value = Math.round(value);
    sortYear();
  }
});

selectYeartLeft.addEventListener('change', function () {
  sliderYear.noUiSlider.set([this.value, null]);
  sortYear();
});

selectYearRight.addEventListener('change', function () {
  sliderYear.noUiSlider.set([null, this.value]);
  sortYear();
});

export { sliderCount, sliderYear };
