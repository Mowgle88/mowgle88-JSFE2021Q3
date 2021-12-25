const treeContainer = document.querySelector('.tree-container');

let i = [1, 2, 3, 4, 5, 6];

function addTree(ind) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.classList.add('tree');
  div.setAttribute(`data-tree`, `${ind}`);
  div.style.backgroundImage = `url('./assets/tree/${ind}.webp')`;

  treeContainer.append(div);
}

for (let j = 0; j < i.length; j++) {
  addTree(i[j]);
}
