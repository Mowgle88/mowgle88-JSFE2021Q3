const picture = document.querySelector('.picture-inner-container');
const img = document.createElement('img');

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function shuffle(arr) {
	for(let i = arr.length -1; i > 0 ; i--) {
		j = Math.floor(Math.random()*(i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]]
	}
}

img.classList.add('gallery-img')
img.src = `assets/img/galery/galery1.jpg`;
img.alt = `galery1`;
picture.append(img);



