import 'nouislider/dist/nouislider.css';

import noUiSlider from 'nouislider';
import { target, API } from 'nouislider';

import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

import container from './card-container';

let sliderCount = document.getElementById('slider-count') as target;
let sliderYear = document.getElementById('slider-year') as target;

export const sliderC: API = noUiSlider.create(sliderCount, {
  start: [1, 12],
  connect: true,
  range: {
    min: 1,
    max: 12,
  },
});

export const sliderY: API = noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  step: 10,
  connect: true,
  range: {
    min: 1940,
    max: 2020,
  },
});

// input-select-count=====================================================

let selectCountLeft: HTMLInputElement = document.getElementById('input-select-count-left') as HTMLInputElement;
let selectCountRight: HTMLInputElement = document.getElementById('input-select-count-right') as HTMLInputElement;

// Сортировать в диапозоне значений по количеству экземпляров
function sortCount() {
  const card: NodeListOf<HTMLDivElement> = container.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;

  card.forEach((el) => {
    const newLocal =
      !el.classList.contains(`hide`) && !el.classList.contains(`hide-sort-year`);
    if (
      !el.classList.contains(`hide`) ||
      !el.classList.contains(`hide-sort-year`) ||
      newLocal
    ) {
      if (
        +(el.getAttribute('data-count') as string) >= +selectCountLeft.value &&
        +(el.getAttribute('data-count') as string) <= +selectCountRight.value
      ) {
        el.classList.remove(`hide-sort`);
        el.classList.remove(`hide-sort-count`);
      } else {
        el.classList.add(`hide-sort`);
        el.classList.add(`hide-sort-count`);
      }
    }
  })

  let empty = Array.from(card).every(
    (item) =>
      item.classList.contains(`hide-sort-count`) ||
      item.classList.contains(`hide-sort-year`) ||
      item.classList.contains(`hide`)
  );
  if (empty) {
    Swal.fire({
      icon: 'error',
      title: 'Блииин...',
      text: 'Извините, совпадений не обнаружено!',
    })
  }
}

// Append the option elements
for (let i = 1; i <= 12; i++) {
  let option: HTMLOptionElement = document.createElement('option') as HTMLOptionElement;
  option.text = `${i}`;
  option.value = `${i}`;

  selectCountLeft.appendChild(option);
}

for (let i = 12; i >= 1; i--) {
  let option: HTMLOptionElement = document.createElement('option') as HTMLOptionElement;
  option.text = `${i}`;
  option.value = `${i}`;

  selectCountRight.appendChild(option);
}

sliderCount.noUiSlider?.on('update', (values, handle) => {
  let value: string = values[handle] as string;

  if (handle) {
    selectCountRight.value = `${Math.round(+value)}`;
    sortCount();
  } else {
    selectCountLeft.value = `${Math.round(+value)}`;
    sortCount();
  }
});

selectCountLeft.addEventListener('change', function () {
  sliderCount.noUiSlider?.set([+this.value, `${null}`]);
  sortCount();
});

selectCountRight.addEventListener('change', function () {
  sliderCount.noUiSlider?.set([`${null}`, +this.value]);
  sortCount();
});

// input-select-year=====================================================

let selectYeartLeft: HTMLInputElement = document.getElementById('input-select-year-left') as HTMLInputElement;
let selectYearRight: HTMLInputElement = document.getElementById('input-select-year-right') as HTMLInputElement;

// Сортировать в диапозоне значений по году
function sortYear() {
  const card: NodeListOf<HTMLDivElement> = container.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
  card.forEach((el) => {
    const newLocal =
      !el.classList.contains(`hide`) && !el.classList.contains(`hide-sort-count`);
    if (
      !el.classList.contains(`hide`) ||
      !el.classList.contains(`hide-sort-count`) ||
      newLocal
    ) {
      if (
        +(el.getAttribute('data-year') as string) >= +selectYeartLeft.value &&
        +(el.getAttribute('data-year') as string) <= +selectYearRight.value
      ) {
        el.classList.remove(`hide-sort`);
        el.classList.remove(`hide-sort-year`);
      } else {
        el.classList.add(`hide-sort`);
        el.classList.add(`hide-sort-year`);
      }
    }
  })

  let empty = Array.from(card).every(
    (item) =>
      item.classList.contains(`hide-sort-count`) ||
      item.classList.contains(`hide-sort-year`) ||
      item.classList.contains(`hide`)
  );
  if (empty) {
    Swal.fire({
      icon: 'error',
      title: 'Блииин...',
      text: 'Извините, совпадений не обнаружено!',
    })
  }
}

// Append the option elements
for (let i = 1940; i <= 2020; i += 10) {
  let option: HTMLOptionElement = document.createElement('option') as HTMLOptionElement;
  option.text = `${i}`;
  option.value = `${i}`;

  selectYeartLeft.appendChild(option);
}

for (let i = 2020; i >= 1940; i -= 10) {
  let option: HTMLOptionElement = document.createElement('option') as HTMLOptionElement;
  option.text = `${i}`;
  option.value = `${i}`;

  selectYearRight.appendChild(option);
}

sliderYear.noUiSlider?.on('update', function (values, handle) {
  let value: string = values[handle] as string;

  if (handle) {
    selectYearRight.value = `${Math.round(+value)}`;
    sortYear();
  } else {
    selectYeartLeft.value = `${Math.round(+value)}`;
    sortYear();
  }
});

selectYeartLeft.addEventListener('change', function () {
  sliderYear.noUiSlider?.set([+this.value, `${null}`]);
  sortYear();
});

selectYearRight.addEventListener('change', function () {
  sliderYear.noUiSlider?.set([`${null}`, +this.value]);
  sortYear();
});

export { sliderCount, sliderYear };
