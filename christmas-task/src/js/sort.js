import container from './card-container';

let sel = document.querySelectorAll('.sort-select');

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// сортировать по названию по возрастанию
function sortNameMax() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (container.children[i].getAttribute('data-name') > container.children[j].getAttribute('data-name')) {
        let replacedNode = container.replaceChild(container.children[j], container.children[i]);
        insertAfter(replacedNode, container.children[i]);
      }
    }
  }
}

// сортировать по названию по убыванию
function sortNameMin() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (container.children[i].getAttribute('data-name') < container.children[j].getAttribute('data-name')) {
        let replacedNode = container.replaceChild(container.children[j], container.children[i]);
        insertAfter(replacedNode, container.children[i]);
      }
    }
  }
}

// сортировать по количеству по возрастанию
function sortCountMax() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (+container.children[i].getAttribute('data-count') > +container.children[j].getAttribute('data-count')) {
        let replacedNode = container.replaceChild(container.children[j], container.children[i]);
        insertAfter(replacedNode, container.children[i]);
      }
    }
  }
}

// сортировать по количеству по убыванию
function sortCountMin() {
  for (let i = 1; i < container.children.length; i++) {
    for (let j = i; j < container.children.length; j++) {
      if (+container.children[i].getAttribute('data-count') < +container.children[j].getAttribute('data-count')) {
        let replacedNode = container.replaceChild(container.children[j], container.children[i]);
        insertAfter(replacedNode, container.children[i]);
      }
    }
  }
}

sel.forEach((el) => {
  el.addEventListener('change', () => {
    if (sel[0].value === 'sort-name-max') {
      sortNameMax();
    } else if (sel[0].value === 'sort-name-min') {
      sortNameMin();
    } else if (sel[0].value === 'sort-count-max') {
      sortCountMax();
    } else if (sel[0].value === 'sort-count-min') {
      sortCountMin();
    }
  });
});
