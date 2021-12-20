import container from './card-container';

const favouritebtn = document.querySelector('#favourite');

const isFavourite = {
  favourite: true,
};

export { favouritebtn, isFavourite };

function chooseFavourite() {
  const card = container.querySelectorAll('.card');

  if (isFavourite.favourite === true) {
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
    isFavourite.favourite = false;
  } else {
    card.forEach((el) => {
      el.classList.remove(`card-favorite`);
      el.classList.remove('isFilter');
      el.classList.remove(`hide`);
    });
    isFavourite.favourite = true;
  }
}

favouritebtn.addEventListener('click', () => {
  chooseFavourite();
});
