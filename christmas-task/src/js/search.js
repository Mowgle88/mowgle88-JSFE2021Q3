import * as swal from 'sweetalert';

const search = document.querySelector('.search');
const cardTitle = document.querySelectorAll('.card-title');

function innerMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

search.oninput = function (e) {
  let val = this.value.trim();
  let valReg = new RegExp(val, 'gi');
  if (val != '') {
    search.style.backgroundImage = 'none';
    cardTitle.forEach((elem) => {
      if (
        !elem.parentNode.classList.contains(`hide-sort-count`) ||
        !elem.parentNode.classList.contains(`hide-sort-year`) ||
        !elem.parentNode.classList.contains(`hide`)
      ) {
        if (elem.innerText.search(valReg) == -1) {
          elem.parentNode.classList.add(`hide-sort`);
          elem.classList.add(`hide-title`);
          elem.innerHTML = elem.innerText;
        } else {
          elem.parentNode.classList.remove(`hide-sort`);
          elem.classList.remove(`hide-title`);
          let str = elem.innerText;
          elem.innerHTML = innerMark(str, elem.innerText.search(valReg), val.length);
          console.log(e);
        }
      }
    });
    let bool = Array.from(cardTitle).every((item) => item.classList.contains(`hide-title`));
    if (bool) {
      swal('Блииин', 'Извините, совпадений не обнаружено!', 'error');
    }
  } else {
    search.style.backgroundImage = 'url(./assets/svg/search.svg)';
    cardTitle.forEach((elem) => {
      if (!elem.parentNode.classList.contains(`hide`)) {
        elem.parentNode.classList.remove(`hide-sort`);
        elem.innerHTML = elem.innerText;
      }
    });
  }
};
