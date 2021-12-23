// import * as swal from 'sweetalert';

const search: HTMLInputElement = document.querySelector('.search') as HTMLInputElement;
const cardTitle: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-title');

function innerMark(string: string, pos: number, len: number) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

search.oninput = function (e) {
  // let val = this.value.trim();
  let val: string = search.value.trim();
  let valReg: RegExp = new RegExp(val, 'gi');
  if (val != '') {
    search.style.backgroundImage = 'none';
    cardTitle.forEach((elem) => {
      if (
        !(elem.parentNode as HTMLDivElement).classList.contains(`hide-sort-count`) ||
        !(elem.parentNode as HTMLDivElement).classList.contains(`hide-sort-year`) ||
        !(elem.parentNode as HTMLDivElement).classList.contains(`hide`)
      ) {
        if (elem.innerText.search(valReg) == -1) {
          (elem.parentNode as HTMLDivElement).classList.add(`hide-sort`);
          elem.classList.add(`hide-title`);
          elem.innerHTML = elem.innerText;
        } else {
          (elem.parentNode as HTMLDivElement).classList.remove(`hide-sort`);
          elem.classList.remove(`hide-title`);
          let str = elem.innerText;
          elem.innerHTML = innerMark(str, elem.innerText.search(valReg), val.length);
          console.log(e);
        }
      }
    });
    let bool: boolean = Array.from(cardTitle).every((item) => item.classList.contains(`hide-title`));
    if (bool) {
      // swal('Блииин', 'Извините, совпадений не обнаружено!', 'error');
    }
  } else {
    search.style.backgroundImage = 'url(./assets/svg/search.svg)';
    cardTitle.forEach((elem) => {
      if (!(elem.parentNode as HTMLDivElement).classList.contains(`hide`)) {
        (elem.parentNode as HTMLDivElement).classList.remove(`hide-sort`);
        elem.innerHTML = elem.innerText;
      }
    });
  }
};
