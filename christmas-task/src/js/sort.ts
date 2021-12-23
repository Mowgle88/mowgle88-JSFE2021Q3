import container from './card-container';

let sel: NodeListOf<HTMLInputElement> = document.querySelectorAll('.sort-select');

function insertAfter(elem: Node, refElem: Element) {
  return (refElem.parentNode as ParentNode).insertBefore(elem, refElem.nextSibling);
}

// сортировать по названию по возрастанию
function sortNameMax() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (<string>(container.children[i] as HTMLDivElement).getAttribute('data-name') > <string>(container.children[j] as HTMLDivElement).getAttribute('data-name')) {
        let replacedNode = container.replaceChild(<Element >container.children[j], <Element >container.children[i]);
        insertAfter(replacedNode, <Element>container.children[i]);
      }
    }
  }
}

// сортировать по названию по убыванию
function sortNameMin() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (<string>(container.children[i] as HTMLDivElement).getAttribute('data-name') < (<string>(container.children[j] as HTMLDivElement).getAttribute('data-name'))) {
        let replacedNode = container.replaceChild(<Element >container.children[j], <Element >container.children[i]);
        insertAfter(replacedNode, <Element>container.children[i]);
      }
    }
  }
}

// сортировать по количеству по возрастанию
function sortCountMax() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (+<string>(container.children[i] as HTMLDivElement).getAttribute('data-count') > +<string>(container.children[j] as HTMLDivElement).getAttribute('data-count')) {
        let replacedNode = container.replaceChild(<Element >container.children[j], <Element >container.children[i]);
        insertAfter(replacedNode, <Element>container.children[i]);
      }
    }
  }
}

// сортировать по количеству по убыванию
function sortCountMin() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (+<string>(container.children[i] as HTMLDivElement).getAttribute('data-count') < +<string>(container.children[j] as HTMLDivElement).getAttribute('data-count')) {
        let replacedNode = container.replaceChild(<Element >container.children[j], <Element >container.children[i]);
        insertAfter(replacedNode, <Element>container.children[i]);
      }
    }
  }
}

sel.forEach((el) => {
  el.addEventListener('change', () => {
    if ((sel[0] as HTMLInputElement).value === 'sort-name-max') {
      sortNameMax();
    } else if ((sel[0] as HTMLInputElement).value === 'sort-name-min') {
      sortNameMin();
    } else if ((sel[0] as HTMLInputElement).value === 'sort-count-max') {
      sortCountMax();
    } else if ((sel[0] as HTMLInputElement).value === 'sort-count-min') {
      sortCountMin();
    }
  });
});
