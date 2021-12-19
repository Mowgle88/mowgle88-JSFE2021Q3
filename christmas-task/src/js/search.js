const search = document.querySelector('.search');
const cardTitle = document.querySelectorAll('.card-title');

function innerMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

search.oninput = function () {
  let val = this.value.trim();
  let valReg = new RegExp(val, 'gi');
  if (val != '') {
    search.style.backgroundImage = 'none';
    cardTitle.forEach((elem) => {
      if (!elem.parentNode.classList.contains(`hide`)) {
        if (elem.innerText.search(valReg) == -1) {
          elem.parentNode.classList.add(`hide-sort`);
          elem.innerHTML = elem.innerText;
        } else {
          elem.parentNode.classList.remove(`hide-sort`);
          let str = elem.innerText;
          elem.innerHTML = innerMark(str, elem.innerText.search(valReg), val.length);
        }
      }
    });
  } else {
    search.style.backgroundImage = 'url(../assets/svg/search.svg)';
    cardTitle.forEach((elem) => {
      if (!elem.parentNode.classList.contains(`hide`)) {
        elem.parentNode.classList.remove(`hide-sort`);
        elem.innerHTML = elem.innerText;
      }
    });
  }
};
