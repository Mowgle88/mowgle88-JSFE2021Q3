export const startCar = () => {
  window.addEventListener('click', (e) => {
    const el = e.target;
    if (el.className.includes('btn-start')) {
      const regexp = new RegExp(/\d/gm);
      const n = el.id.match(regexp).join('');
      const car = document.querySelector(`#car-${n}`);
      const startBt = document.querySelector(`#btn-start-${n}`);
      const stopBt = document.querySelector(`#btn-stop-${n}`);

      console.log(startBt);
      startBt.classList.remove('btn-start-active');
      stopBt.classList.add('btn-stop-active');

      let start = Date.now();

      function draw(elem, timePassed) {
        elem.style.left = timePassed / 5 + 'px';
      }

      let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        if (timePassed >= 6000) {
          clearInterval(timer);
          return;
        }
        draw(car, timePassed);
      }, 20);
    }
  });
};
