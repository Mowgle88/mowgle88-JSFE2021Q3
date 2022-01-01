const bgContainer: HTMLElement = document.querySelector('.bg-container') as HTMLElement;
const mainContainer: HTMLElement = document.querySelector('.main-container') as HTMLElement;

let i: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addBg(ind: number): void {
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

const bg: NodeListOf<Element> = document.querySelectorAll('.bg') as  NodeListOf<Element>;

function changeBg(event: MouseEvent): void {
  console.log(event);
  let target: HTMLElement = event.target as HTMLElement;
  let ind: string = target.getAttribute('data-bg') as string;

  if (target.classList.contains('bg') ) {
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

export { mainContainer, bg };
