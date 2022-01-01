import { favorites } from './favorites-container';

favorites.addEventListener('mousedown', (event) => {
  const mainZone = document.querySelector('.main-container');
  let currentEl = event.target;
  let parent = event.path[1];
  let p = parent.lastChild;
  let value = +p.textContent;

  function dragAndDrop() {
    let coordX;
    let coordY;

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

    mainZone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    mainZone.addEventListener('drop', () => {
      p.textContent = `${value - 1}`;
      mainZone.append(currentEl);
    });
  }
  dragAndDrop();
});
