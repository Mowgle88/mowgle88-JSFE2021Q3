async function question() {    
  const images = './images.json';
  const res = await fetch(images);
  const data = await res.json(); 
  const randomNumImages = Math.floor(Math.random() * data.length);
  let imageNum = data[randomNumImages]["imageNum"]

  console.log(data[randomNumImages]["author"]);
  console.log(data[randomNumImages]["name"]);
  console.log(data[randomNumImages]["year"]);
  console.log(data[randomNumImages]["imageNum"]);

  const picture = document.querySelector('.div');
  function addPuzzle() {
    const img = document.createElement('img');
    const h = document.createElement('h1');
    const p = document.createElement('h2');
    h.textContent = data[randomNumImages]["author"];
    p.textContent = `${data[randomNumImages]["name"]}, ${data[randomNumImages]["year"]}`;
    img.src = `img/${imageNum}.webp`;
    img.alt = `${imageNum}`;
    picture.append(img);
    picture.append(h);
    picture.append(p);
  }
  addPuzzle()
}

question()

