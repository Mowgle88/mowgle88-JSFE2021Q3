import container from './card-container';

const favouritebtn = document.querySelector('#favourite');

let isFavourite = true;

function chooseFavourite() {
  const card = container.querySelectorAll('.card');
  // const cardFavorite = container.querySelectorAll(`.card[data-favorite = 'true']`);

  if (isFavourite === true) {
    card.forEach((el) => {
      if (!el.classList.contains('isFilter')) {
        el.classList.add(`hide`);
      }
      if (el.getAttribute('data-favorite') === 'true') {
        el.classList.add(`card-favorite`);
        if (!el.classList.contains('isFilter')) {
          el.classList.add('isFilter');
          el.classList.remove(`hide`);
        }
      }
    });
    // cardFavorite.forEach((el) => {
    //   el.classList.add(`card-favorite`);
    //   if (!el.classList.contains('isFilter')) {
    //     el.classList.add('isFilter');
    //     el.classList.remove(`hide`);
    //   }
    // });
    isFavourite = false;
  } else {
    card.forEach((el) => {
      el.classList.remove(`card-favorite`);
      el.classList.remove('isFilter');
      el.classList.remove(`hide`);
    });
    isFavourite = true;
  }
}

favouritebtn.addEventListener('click', () => {
  chooseFavourite();
});
