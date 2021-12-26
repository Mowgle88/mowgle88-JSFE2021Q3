const bgContainer = document.querySelector('.bg-container');
const mainContainer = document.querySelector('.main-container');

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addBg(ind) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('bg');
  if (ind === 1) {
    div.classList.add('bg-active');
  }
  div.setAttribute(`data-bg`, `${ind}`);
  div.style.backgroundImage = `url('./assets/bg/${ind}.webp')`;

  bgContainer.append(div);
}

i.forEach((n) => addBg(n));

// Менять фон

const bg = document.querySelectorAll('.bg');

function changeBg(event) {
  let target = event.target;
  let ind = target.getAttribute('data-bg');

  if (target.classList.contains('bg')) {
    bg.forEach((el) => {
      el.classList.remove('bg-active');
    });
    target.classList.add('bg-active');
    mainContainer.style.backgroundImage = `url('./assets/bg/${ind}.webp')`;
  }
}

bgContainer.addEventListener('click', (e) => {
  changeBg(e);
});
