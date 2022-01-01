const garlands: HTMLElement = document.querySelector('.garland-container') as HTMLElement;

let iG: number[] = [1, 2, 3];

function addGarlands(ind: number): void {
  const div = document.createElement('div');
  div.classList.add('garland');
  div.setAttribute(`data-garland`, `${ind}`);
  div.style.backgroundImage = `url('./assets/garland/Garland_${ind}.webp')`;

  garlands.append(div);
}

iG.forEach((n) => addGarlands(n));
