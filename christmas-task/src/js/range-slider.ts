// import * as noUiSlider from 'nouislider';
// import { target, API } from 'nouislider';
import 'nouislider/dist/nouislider.css';

import noUiSlider from 'nouislider';
// import { target, API } from 'nouislider';

// import * as swal from 'sweetalert';
// import '../../node_modules/sweetalert/typings/core';

import container from './card-container';
// import sortCount from './sort-count-slider';

declare namespace noUiSlider {
  interface noUiSlider {
    on: (firstArgument: string, secondArgument: (values: string[], handle: number) => void) => void;
    set: (firstArgument: Array<number> | null) => void;
  }

  interface Instance extends HTMLElement {
      noUiSlider: noUiSlider
  }
}

// let sliderCount: noUiSlider.Instance = document.getElementById('slider-count') as noUiSlider.Instance;
// let sliderYear: noUiSlider.Instance = document.getElementById('slider-year') as noUiSlider.Instance;
let sliderCount: any = document.getElementById('slider-count') as noUiSlider.Instance;
let sliderYear: any = document.getElementById('slider-year') as noUiSlider.Instance;

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

let selectCountLeft: HTMLInputElement = document.getElementById('input-select-count-left') as HTMLInputElement;
let selectCountRight: HTMLInputElement = document.getElementById('input-select-count-right') as HTMLInputElement;

// Сортировать в диапозоне значений по количеству экземпляров
function sortCount() {
  const card: NodeListOf<HTMLDivElement> = container.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
  for (let i = 1; i < container.children.length; i++) {
    const child: HTMLDivElement = container.children[i] as HTMLDivElement;
    const newLocal =
      (<HTMLDivElement>child).classList.contains(`hide`) && !child?.classList.contains(`hide-sort-year`);
    if (
      (<HTMLDivElement>child).classList.contains(`hide`) ||
      (<HTMLDivElement>child).classList.contains(`hide-sort-year`) ||
      newLocal
    ) {
      if (
        +((<HTMLDivElement>child).getAttribute('data-count') as string) >= +selectCountLeft.value &&
        +((<HTMLDivElement>child).getAttribute('data-count') as string) <= +selectCountRight.value
      ) {
        (<HTMLDivElement>child).classList.remove(`hide-sort`);
        (<HTMLDivElement>child).classList.remove(`hide-sort-count`);
      } else {
        (<HTMLDivElement>child).classList.add(`hide-sort`);
        (<HTMLDivElement>child).classList.add(`hide-sort-count`);
      }
    }
  }
  let empty = Array.from(card).every(
    (item) =>
      item.classList.contains(`hide-sort-count`) ||
      item.classList.contains(`hide-sort-year`) ||
      item.classList.contains(`hide`)
  );
  if (empty) {
    alert('Извините, совпадений не обнаружено!');
    // swal('Блииин', 'Извините, совпадений не обнаружено!', 'error');
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

sliderCount.noUiSlider.on('update', function (values: string[], handle: number) {
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
  sliderCount.noUiSlider.set([+this.value, null]);
  sortCount();
});

selectCountRight.addEventListener('change', function () {
  sliderCount.noUiSlider.set([null, +this.value]);
  sortCount();
});

// input-select-year=====================================================

let selectYeartLeft: HTMLInputElement = document.getElementById('input-select-year-left') as HTMLInputElement;
let selectYearRight: HTMLInputElement = document.getElementById('input-select-year-right') as HTMLInputElement;

// Сортировать в диапозоне значений по году
function sortYear() {
  const card: NodeListOf<HTMLDivElement> = container.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
  for (let i = 1; i < container.children.length; i++) {
    const child: HTMLDivElement = container.children[i] as HTMLDivElement;
    const newLocal =
      (<HTMLDivElement>child).classList.contains(`hide`) && !child?.classList.contains(`hide-sort-count`);
    if (
      (<HTMLDivElement>child).classList.contains(`hide`) ||
      (<HTMLDivElement>child).classList.contains(`hide-sort-count`) ||
      newLocal
    ) {
      if (
        +((<HTMLDivElement>child).getAttribute('data-count') as string) >= +selectYeartLeft.value &&
        +((<HTMLDivElement>child).getAttribute('data-count') as string) <= +selectYearRight.value
      ) {
        (<HTMLDivElement>child).classList.remove(`hide-sort`);
        (<HTMLDivElement>child).classList.remove(`hide-sort-year`);
      } else {
        (<HTMLDivElement>child).classList.add(`hide-sort`);
        (<HTMLDivElement>child).classList.add(`hide-sort-year`);
      }
    }
  }
  let empty = Array.from(card).every(
    (item) =>
      item.classList.contains(`hide-sort-count`) ||
      item.classList.contains(`hide-sort-year`) ||
      item.classList.contains(`hide`)
  );
  if (empty) {
    alert('Извините, совпадений не обнаружено!');
    // swal('Блииин', 'Извините, совпадений не обнаружено!', 'error');
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

sliderYear.noUiSlider.on('update', function (values: string[], handle: number) {
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
  sliderYear.noUiSlider.set([+this.value, null]);
  sortYear();
});

selectYearRight.addEventListener('change', function () {
  sliderYear.noUiSlider.set([null, +this.value]);
  sortYear();
});

export { sliderCount, sliderYear };
