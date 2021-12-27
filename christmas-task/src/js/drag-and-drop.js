import { favorites } from './favorites-container';

favorites.addEventListener('mousedown', (event) => {
  const mainContainer = document.querySelector('.main-container');
  let currentEl = event.target;
  let parent = event.path[1];
  let p = parent.lastChild;
  let value = +p.textContent;

  function dragAndDrop() {
    let coordX;
    let coordY;
    // let shiftX = event.clientX - currentEl.getBoundingClientRect().left;
    // let shiftY = event.clientY - currentEl.getBoundingClientRect().top;

    currentEl.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('txt/html', 'dragstart');
      coordX = e.offsetX;
      coordY = e.offsetY;
    });

    currentEl.addEventListener('dragend', (e) => {
      currentEl.style.position = 'absolute';
      currentEl.style.top = e.pageY - coordY + 'px';
      currentEl.style.left = e.pageX - coordX + 'px';
    });

    mainContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    mainContainer.addEventListener('drop', () => {
      p.textContent = `${value - 1}`;
      mainContainer.append(currentEl);
    });
  }
  dragAndDrop();
});
