import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

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
  } else {
    selectCountLeft.value = Math.round(value);
  }
});

selectCountLeft.addEventListener('change', function () {
  sliderCount.noUiSlider.set([this.value, null]);
});

selectCountRight.addEventListener('change', function () {
  sliderCount.noUiSlider.set([null, this.value]);
});

// input-select-year=====================================================

let selectYeartLeft = document.getElementById('input-select-year-left');
let selectYearRight = document.getElementById('input-select-year-right');

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
  } else {
    selectYeartLeft.value = Math.round(value);
  }
});

selectYeartLeft.addEventListener('change', function () {
  sliderYear.noUiSlider.set([this.value, null]);
});

selectYearRight.addEventListener('change', function () {
  sliderYear.noUiSlider.set([null, this.value]);
});
