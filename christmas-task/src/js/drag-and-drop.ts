import { favorites } from './favorites-container';

favorites.addEventListener('mousedown', (event: MouseEvent) => {
  const mainZone: HTMLElement = document.querySelector('.main-container') as HTMLElement;
  let currentEl: HTMLElement = event.target as HTMLElement;
  let parent : EventTarget[] = event.composedPath() as EventTarget[];
  let p: ChildNode = (parent[1] as HTMLElement).lastChild as ChildNode;
  let value: number = +(p.textContent as string );

  function dragAndDrop() {
    let coordX: number;
    let coordY: number;

    currentEl.addEventListener('dragstart', (e: DragEvent) => {
      (e.dataTransfer as DataTransfer ).setData('txt/html', 'dragstart');
      coordX = e.offsetX;
      coordY = e.offsetY;
    });

    currentEl.addEventListener('dragend', (e: DragEvent) => {
      currentEl.style.position = 'absolute';
      currentEl.style.top = e.pageY - coordY + 'px';
      currentEl.style.left = e.pageX - coordX + 'px';
    });

    mainZone.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault();
    });

    mainZone.addEventListener('drop', () => {
      p.textContent = `${value - 1}`;
      mainZone.append(currentEl);
    });
  }
  dragAndDrop();
});
