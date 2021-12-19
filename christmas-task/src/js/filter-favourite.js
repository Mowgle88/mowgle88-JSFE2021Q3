import container from './card-container';

const favouritebtn = document.querySelector('#favourite');

let isFavourite = true;

function chooseFavourite() {
  const card = container.querySelectorAll('.card');
  const cardFavorite = container.querySelectorAll(`.card[data-favorite = 'true']`);

  if (isFavourite === true) {
    card.forEach((el) => {
      el.classList.add(`hide`);
    });
    cardFavorite.forEach((el) => {
      el.classList.add(`card-favorite`);
    });
    isFavourite = false;
  } else {
    card.forEach((el) => {
      el.classList.remove(`card-favorite`);
      el.classList.remove(`hide`);
    });
    isFavourite = true;
  }
}

favouritebtn.addEventListener('click', () => {
  chooseFavourite();
});
