import container from './card-container';

const favouritebtn = document.querySelector('#favourite');

let isFavourite = true;

function chooseFavourite() {
  const card = container.querySelectorAll('.card');
  const cardFavorite = container.querySelectorAll(`.card[data-favorite = 'true']`);
  // console.log(dataName);

  if (isFavourite === true) {
    card.forEach((el) => {
      el.style.display = 'none';
    });
    cardFavorite.forEach((el) => {
      el.style.display = 'block';
    });
    isFavourite = false;
  } else {
    card.forEach((el) => {
      el.style.display = 'block';
    });
    isFavourite = true;
  }
}

favouritebtn.addEventListener('click', () => {
  chooseFavourite();
});
