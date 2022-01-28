import { startStopCarsEngine } from './start-stop-cars-engine';
import { Parameters } from './interfaces';

const addAnimation = async (elem: HTMLElement, t: number, d: number) => {
  let start = Date.now();

  function draw(el: HTMLElement, timePassed: number) {
    el.style.left = timePassed / (t / d) + 'px';
  }

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= t) {
      clearInterval(timer);
      return;
    }
    draw(elem, timePassed);
  }, 20);
};

export const startCar = async (el: HTMLElement) => {
  const regexp = new RegExp(/\d/gm);
  const n = (<string[]>el.id.match(regexp)).join('');
  const car: HTMLElement = document.querySelector(`#car-${n}`) as HTMLElement;
  const startBt: HTMLButtonElement = document.querySelector(`#btn-start-${n}`) as HTMLButtonElement;
  const stopBt: HTMLButtonElement = document.querySelector(`#btn-stop-${n}`) as HTMLButtonElement;
  let values: (Response | Parameters)[] = await startStopCarsEngine(+n, 'started') as (Response | Parameters)[];
  console.log(values);
  let distance: number = (<Parameters>values[1]).distance as number;
  let velocity: number = (<Parameters>values[1]).velocity as number;
  let time = distance / velocity;
  let dist = (<HTMLElement>document.querySelector('.distance')).offsetWidth - 90;
  startBt.classList.remove('btn-start-active');
  startBt.setAttribute('disabled', '');
  stopBt.classList.add('btn-stop-active');
  await addAnimation(car, time, dist);
  startBt.removeAttribute('disabled');
  let drive = await startStopCarsEngine(+n, 'drive');
  console.log(drive);
};

export const startAllCars = async () => {
  const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.car') as NodeListOf<HTMLElement>;
  const resetBtn: HTMLButtonElement = document.querySelector('.reset-btn') as HTMLButtonElement;
  resetBtn.classList.remove('green-btn');
  resetBtn.setAttribute('disabled', '');
  const param: number[][] = [];
  const arrMap = Array.from(cars).map(async (car) => {
    const regexp = new RegExp(/\d/gm);
    const n = (<string[]>car.id.match(regexp)).join('');
    const startBt: HTMLButtonElement = document.querySelector(`#btn-start-${n}`) as HTMLButtonElement;
    const stopBt:HTMLButtonElement = document.querySelector(`#btn-stop-${n}`) as HTMLButtonElement;
    let values: (Response | Parameters)[] = await startStopCarsEngine(+n, 'started') as (Response | Parameters)[];
    let distance = (<Parameters>values[1]).distance;
    let velocity = (<Parameters>values[1]).velocity;
    let time = distance / velocity;
    param.push([+n, time]);
    let dist: number = (<HTMLElement>document.querySelector('.distance')).offsetWidth - 90;
    startBt.classList.remove('btn-start-active');
    stopBt.classList.add('btn-stop-active');
    const res = await addAnimation(car, time, dist);
    let drive = await startStopCarsEngine(+n, 'drive');
    return [res, drive];
  });
  await Promise.all(arrMap);
  resetBtn.removeAttribute('disabled');
  resetBtn.classList.add('green-btn');
  // console.log(param.sort((prev, next) => prev[1] - next[1]));
  return param;
};

export const returnCar = async (el: HTMLElement) => {
  const regexp = new RegExp(/\d/gm);
  const n = (<string[]>el.id.match(regexp)).join('');
  const car: HTMLElement = document.querySelector(`#car-${n}`) as HTMLElement;
  const startBt: HTMLButtonElement = document.querySelector(`#btn-start-${n}`) as HTMLButtonElement;
  const stopBt: HTMLButtonElement = document.querySelector(`#btn-stop-${n}`) as HTMLButtonElement;
  startBt.classList.add('btn-start-active');
  stopBt.classList.remove('btn-stop-active');
  car.style.left = 0 + 'px';
};

export const returnAllCars = async () => {
  const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.car') as NodeListOf<HTMLElement>;
  const arrMap = Array.from(cars).map(async (car) => {
    const regexp = new RegExp(/\d/gm);
    const n = (<string[]>car.id.match(regexp)).join('');
    const startBt: HTMLButtonElement = document.querySelector(`#btn-start-${n}`) as HTMLButtonElement;
    const stopBt: HTMLButtonElement = document.querySelector(`#btn-stop-${n}`) as HTMLButtonElement;
    startBt.classList.add('btn-start-active');
    stopBt.classList.remove('btn-stop-active');
    car.style.left = 0 + 'px';
  });
  await Promise.all(arrMap);
};
