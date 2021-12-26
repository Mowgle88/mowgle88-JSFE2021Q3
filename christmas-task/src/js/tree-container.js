const treeContainer = document.querySelector('.tree-container');
const mainTree = document.querySelector('.main-tree');

let i = [1, 2, 3, 4, 5, 6];

function addTree(ind) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('tree');
  if (ind === 1) {
    div.classList.add('tree-active');
  }
  div.setAttribute(`data-tree`, `${ind}`);
  div.style.backgroundImage = `url('./assets/tree/${ind}.webp')`;

  treeContainer.append(div);
}

i.forEach((n) => addTree(n));

// Менять елочку

const tree = document.querySelectorAll('.tree');

function changeTree(event) {
  console.log(event);
  let target = event.target;
  let ind = target.getAttribute('data-tree');

  if (target.classList.contains('tree')) {
    tree.forEach((el) => {
      el.classList.remove('tree-active');
    });
    target.classList.add('tree-active');
    mainTree.src = `./assets/tree/${ind}.webp`;
    mainTree.alt = `${ind}`;
  }
}
// changeTree(tree[3]);

treeContainer.addEventListener('click', (e) => {
  changeTree(e);
});

export { mainTree, tree };
