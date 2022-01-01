const navigation: HTMLElement = document.querySelector('.nav') as HTMLElement;
const navLinks: NodeListOf<Element> = document.querySelectorAll('.nav-link') as NodeListOf<Element>;

const homeButton: HTMLElement = document.querySelector('.button-home-page') as HTMLElement;
const homepage: HTMLElement = document.querySelector('.home-page') as HTMLElement;
const toysPage: HTMLElement = document.querySelector('.toy-page') as HTMLElement;
const treesPage: HTMLElement = document.querySelector('.tree-page') as HTMLElement;

function changePages(event: MouseEvent): void {
  let target: HTMLElement = event.target as HTMLElement;

  if (target.classList.contains('nav-link')) {
    navLinks.forEach((el) => {
      el.classList.remove('nav-link-active');
    });
    target.classList.add('nav-link-active');
    if (target.classList.contains('logo')) {
      homepage.style.display = 'flex';
      toysPage.style.display = 'none';
      treesPage.style.display = 'none';
    } else if (target.classList.contains('сhristmas-decorations-page')) {
      toysPage.style.display = 'flex';
      homepage.style.display = 'none';
      treesPage.style.display = 'none';
    } else if (target.classList.contains('tree-decorations-page')) {
      treesPage.style.display = 'flex';
      toysPage.style.display = 'none';
      homepage.style.display = 'none';
    }
  }
}

navigation.addEventListener('click', (e) => {
  changePages(e);
});

homeButton.addEventListener('click', () => {
  toysPage.style.display = 'flex';
  homepage.style.display = 'none';
  treesPage.style.display = 'none';
  (document.querySelector('.сhristmas-decorations-page') as HTMLElement).classList.add('nav-link-active');
  (document.querySelector('.logo') as HTMLElement).classList.remove('nav-link-active');
});
