import { startStopCarsEngine } from './start-stop-cars-engine';

const addAnimation = async (elem, t, d) => {
  let start = Date.now();

  function draw(el, timePassed) {
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

export const startCar = async (el) => {
  const regexp = new RegExp(/\d/gm);
  const n = el.id.match(regexp).join('');
  const car = document.querySelector(`#car-${n}`);
  const startBt = document.querySelector(`#btn-start-${n}`);
  const stopBt = document.querySelector(`#btn-stop-${n}`);
  let values = await startStopCarsEngine(n, 'started');
  let distance = values[1].distance;
  let velocity = values[1].velocity;
  let time = distance / velocity;
  let dist = document.querySelector('.distance').offsetWidth - 90;
  startBt.classList.remove('btn-start-active');
  startBt.setAttribute('disabled', '');
  stopBt.classList.add('btn-stop-active');
  await addAnimation(car, time, dist);
  startBt.removeAttribute('disabled');
  let drive = await startStopCarsEngine(n, 'drive');
  console.log(drive);
};

export const startAllCars = async () => {
  const cars = document.querySelectorAll('.car');
  const resetBtn = document.querySelector('.reset-btn');
  resetBtn.classList.remove('green-btn');
  resetBtn.setAttribute('disabled', '');
  const param = [];
  const arrMap = Array.from(cars).map(async (car) => {
    const regexp = new RegExp(/\d/gm);
    const n = car.id.match(regexp).join('');
    const startBt = document.querySelector(`#btn-start-${n}`);
    const stopBt = document.querySelector(`#btn-stop-${n}`);
    let values = await startStopCarsEngine(n, 'started');
    let distance = values[1].distance;
    let velocity = values[1].velocity;
    let time = distance / velocity;
    param.push([n, time]);
    let dist = document.querySelector('.distance').offsetWidth - 90;
    startBt.classList.remove('btn-start-active');
    stopBt.classList.add('btn-stop-active');
    const res = await addAnimation(car, time, dist);
    let drive = await startStopCarsEngine(n, 'drive');
    return [res, drive];
  });
  await Promise.all(arrMap);
  resetBtn.removeAttribute('disabled');
  resetBtn.classList.add('green-btn');
  // console.log(param.sort((prev, next) => prev[1] - next[1]));
  return param;
};

export const returnCar = async (el) => {
  const regexp = new RegExp(/\d/gm);
  const n = el.id.match(regexp).join('');
  const car = document.querySelector(`#car-${n}`);
  const startBt = document.querySelector(`#btn-start-${n}`);
  const stopBt = document.querySelector(`#btn-stop-${n}`);
  startBt.classList.add('btn-start-active');
  stopBt.classList.remove('btn-stop-active');
  car.style.left = 0 + 'px';
};

export const returnAllCars = async () => {
  const cars = document.querySelectorAll('.car');
  const arrMap = Array.from(cars).map(async (car) => {
    const regexp = new RegExp(/\d/gm);
    const n = car.id.match(regexp).join('');
    const startBt = document.querySelector(`#btn-start-${n}`);
    const stopBt = document.querySelector(`#btn-stop-${n}`);
    startBt.classList.add('btn-start-active');
    stopBt.classList.remove('btn-stop-active');
    car.style.left = 0 + 'px';
  });
  await Promise.all(arrMap);
};
