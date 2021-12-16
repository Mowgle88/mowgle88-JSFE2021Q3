import container from './card-container';

const favouritebtn = document.querySelector('#favourite');

let isFavourite = true;

function chooseFavourite() {
  const allFavourite = container.querySelectorAll('.favorite');
  const dataName = container.querySelectorAll(`.favorite[data-favorite = 'true']`);
  console.log(dataName);

  if (isFavourite === true) {
    allFavourite.forEach((el) => {
      el.parentNode.parentNode.style.display = 'none';
    });
    dataName.forEach((el) => {
      el.parentNode.parentNode.style.display = 'block';
    });
    isFavourite = false;
  } else {
    allFavourite.forEach((el) => {
      el.parentNode.parentNode.style.display = 'block';
    });
    isFavourite = true;
  }
}

favouritebtn.addEventListener('click', () => {
  chooseFavourite();
});
