import { startStopCarsEngine } from './start-stop-cars-engine';

const addAnimation = (elem, t, d) => {
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

export const startCar = async () => {
  window.addEventListener('click', async (e) => {
    const el = e.target;
    if (el.className.includes('btn-start')) {
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
      stopBt.classList.add('btn-stop-active');

      addAnimation(car, time, dist);

      // let stoped = await startStopCarsEngine(n, 'drive');
    }
  });
};

export const startAllCars = async () => {
  window.addEventListener('click', async (e) => {
    const el = e.target;
    if (el.className.includes('race-btn')) {
      const cars = document.querySelectorAll('.car');
      for await (const car of cars) {
        const regexp = new RegExp(/\d/gm);
        const n = car.id.match(regexp).join('');
        const startBt = document.querySelector(`#btn-start-${n}`);
        const stopBt = document.querySelector(`#btn-stop-${n}`);

        let values = await startStopCarsEngine(n, 'started');
        let distance = values[1].distance;
        let velocity = values[1].velocity;
        let time = distance / velocity;
        let dist = document.querySelector('.distance').offsetWidth - 90;

        startBt.classList.remove('btn-start-active');
        stopBt.classList.add('btn-stop-active');

        addAnimation(car, time, dist);

        // let stoped = await startStopCarsEngine(n, 'drive');
      }
    }
  });
};
