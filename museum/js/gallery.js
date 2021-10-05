const picture = document.querySelector('.picture-inner-container');

let i = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function addPuzzle(i) {
	const img = document.createElement('img');
	img.classList.add('galery-img');
	img.src = `assets/img/galery/galery${i}.jpg`;
	img.alt = `galery${i}`;
	picture.append(img);
}

shuffle(i)

i.map(el => `<img class="galery-img" src="assets/img/galery/galery${el}.jpg" alt="galery${el}">`);

for (let j = 0; j < i.length; j++) {
	addPuzzle(i[j]);
}