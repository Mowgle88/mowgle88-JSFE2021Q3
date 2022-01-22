export const nextList = () => {
  const nextBtn = document.querySelector('.next-btn');
  const garagePageTitle = document.querySelector('.garage-page-title');

  const text = garagePageTitle.textContent;
  const numberOfPages = text.match(new RegExp(/\d*$/gm)).join('');

  if (+numberOfPages > 1) {
    nextBtn.removeAttribute('disabled');
    nextBtn.classList.add('blue-btn');
  }
  // nextBtn.addEventListener('click', () => {

  // });
};
