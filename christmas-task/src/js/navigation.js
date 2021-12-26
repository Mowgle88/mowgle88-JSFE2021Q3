const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

const homePage = document.querySelector('.home-page');
const toyPage = document.querySelector('.toy-page');
const treePage = document.querySelector('.tree-page');

function changePage(event) {
  let target = event.target;

  if (target.classList.contains('nav-link')) {
    navLink.forEach((el) => {
      el.classList.remove('nav-link-active');
    });
    target.classList.add('nav-link-active');
    if (target.classList.contains('logo')) {
      homePage.style.display = 'flex';
      toyPage.style.display = 'none';
      treePage.style.display = 'none';
    } else if (target.classList.contains('сhristmas-decorations-page')) {
      toyPage.style.display = 'flex';
      homePage.style.display = 'none';
      treePage.style.display = 'none';
    } else if (target.classList.contains('tree-decorations-page')) {
      treePage.style.display = 'flex';
      toyPage.style.display = 'none';
      homePage.style.display = 'none';
    }
  }
}

nav.addEventListener('click', (e) => {
  changePage(e);
});
