// close settings
let toHomeBtn = document.querySelector('.to-home-btn');
let settingsBtns = document.querySelectorAll('.settings-btn');
let closeSetting = document.querySelectorAll('.close');

let titlePage = document.querySelector('.title-page');
let artistPage = document.querySelector('.artist-page');
let picturesPage = document.querySelector('.pictures-page');
let settingsMenu = document.querySelector('.settings-menu');
let questionsArtists = document.querySelector('.question-about-artists');
let questionsPictures = document.querySelector('.question-about-pictures');

let whatPage = '';

let artistBtn = document.querySelector('.artistBtn');
let pictureBtn = document.querySelector('.pictureBtn');

let home = document.querySelectorAll('.home');
let categories = document.querySelectorAll('.categories');



settingsBtns.forEach(item => {
	item.addEventListener('click', function(e) {
		console.log(item.parentElement.className === 'title-page')
		console.log(e.path[2])
		let i = 1;
		let j = 0;
	
		while(i >= 0) {
			if(item.parentElement.className === 'title-page') {
				titlePage.style.opacity = i;
				whatPage = 'title-page';
			} else if(item.parentElement.className === 'artist-page') {
				artistPage.style.opacity = i;
				whatPage = 'artist-page';
			} else {
				picturesPage.style.opacity = i;
				whatPage = 'pictures-page';
			}
			i -= 0.1;
		}
		setTimeout(function() {
			if(item.parentElement.className === 'title-page') {
				titlePage.style.display = 'none';
			} else if(item.parentElement.className === 'artist-page') {
				artistPage.style.display = 'none';
			} else {
				picturesPage.style.display = 'none';
			}
			settingsMenu.style.display = 'block';
		}, 500)
	
		setTimeout(function() {
			while(j <= 1) {
				settingsMenu.style.opacity = j;
				j += 0.1;
			}
		}, 1000)
	})
})


closeSetting.forEach(item => {
	item.addEventListener('click', function(e) {
	console.log(e.target)

		let i = 1;
		let j = 0;
	
		while(i >= 0) {
			settingsMenu.style.opacity = i;
			i -= 0.1;
		}
		setTimeout(function() {
			settingsMenu.style.display = 'none';
			if(whatPage === 'title-page') {
				titlePage.style.display = 'block';
			} else if(whatPage === 'artist-page') {
				artistPage.style.display = 'block';
			} else {
				picturesPage.style.display = 'block';
			}
		}, 500)
	
		setTimeout(function() {
			while(j <= 1) {
				if(whatPage === 'title-page') {
					titlePage.style.opacity = j;
				} else if(whatPage === 'artist-page') {
					artistPage.style.opacity = j;
				} else {
					picturesPage.style.opacity = j;
				}
				j += 0.1;
			}
		}, 1000)
		
	})
})


artistBtn.addEventListener('click', function() {
  let i = 1;
	let j = 0;

	while(i >= 0) {
		titlePage.style.opacity = i;
		i -= 0.1;
	}
	setTimeout(function() {
		titlePage.style.display = 'none';
		artistPage.style.display = 'block';
    categories.forEach(el => el.classList.add('categories-active'))
	}, 500) 

	setTimeout(function() {
		while(j <= 1) {
			artistPage.style.opacity = j;
			j += 0.1;
		}
	}, 1000) 
});


pictureBtn.addEventListener('click', function() {
  let i = 1;
	while(i >= 0) {
		titlePage.style.opacity = i;
		i -= 0.1;
	}
	setTimeout(function() {
		titlePage.style.display = 'none';
		picturesPage.style.display = 'block';
		categories.forEach(e => e.classList.add('categories-active'));
	}, 1000)
	let j = 0;
	while(j <= 1) {
		picturesPage.style.opacity = j;
		j += 0.1;
	}
});


home.forEach(item => {
	item.addEventListener('click', function(e) {
		// console.log(e.target.className === 'home home-bt')
		let i = 1;
		let j = 0;
	
		while(i >= 0) {
			artistPage.style.opacity = i;
			picturesPage.style.opacity = i;
			questionsArtists.style.opacity = i;
			questionsPictures.style.opacity = i;
			i -= 0.1;
		}
		setTimeout(function() {
			artistPage.style.display = 'none';
			picturesPage.style.display = 'none';
			questionsArtists.style.display = 'none';
			questionsPictures.style.display = 'none';

			titlePage.style.display = 'block';
			artistBtn.classList.remove('artist-picture-active');
			pictureBtn.classList.remove('artist-picture-active');
			categories.forEach(e => e.classList.remove('categories-active'));
		}, 500)
		setTimeout(function() {
			while(j <= 1) {
				titlePage.style.opacity = j;
				j += 0.1;
			}
			document.querySelectorAll('.question-img').forEach(e => e.remove());
		}, 1000)

		
	})
})

categories.forEach(item => {
	item.addEventListener('click', function(e) {
		// console.log(e.target.className === 'home home-bt')
		let i = 1;
		let j = 0;

		categories.forEach(el => el.classList.add('categories-active'))
		while(i >= 0) {
			questionsArtists.style.opacity = i;
			questionsPictures.style.opacity = i;
			i -= 0.1;
		}
		setTimeout(function() {
			questionsArtists.style.display = 'none';
			questionsPictures.style.display = 'none';

			artistPage.style.display = 'block';
			
		}, 500)
		setTimeout(function() {
			while(j <= 1) {
				artistPage.style.opacity = j;
				j += 0.1;
			}
			document.querySelectorAll('.question-img').forEach(e => e.remove());
		}, 1000)
	})
})




// =========================================================

artistBtn.addEventListener('click', () => {
	if (!artistBtn.classList.contains('artist-picture-active') &&
	!pictureBtn.classList.contains('artist-picture-active')) {
		artistBtn.classList.add('artist-picture-active')
	} else if (!artistBtn.classList.contains('artist-picture-active') &&
	pictureBtn.classList.contains('artist-picture-active')){
		pictureBtn.classList.remove('artist-picture-active')
		artistBtn.classList.add('artist-picture-active')
	}
})

pictureBtn.addEventListener('click', () => {
	if (!artistBtn.classList.contains('artist-picture-active') &&
	!pictureBtn.classList.contains('artist-picture-active')) {
		pictureBtn.classList.add('artist-picture-active')
	} else if (artistBtn.classList.contains('artist-picture-active') &&
	!pictureBtn.classList.contains('artist-picture-active')){
		pictureBtn.classList.add('artist-picture-active')
		artistBtn.classList.remove('artist-picture-active')
	}
})