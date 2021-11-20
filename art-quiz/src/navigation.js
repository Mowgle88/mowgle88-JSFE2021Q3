// close settings
let toHomeBtn = document.querySelector('.to-home-btn');
let closeSetting = document.querySelector('.close');
let settingsMenu = document.querySelector('.settings-menu');
let titlePage = document.querySelector('.title-page');
let settingsBtn = document.querySelector('.settings-btn');
let footer = document.querySelector('.footer');
let artistPage = document.querySelector('.artist-page');
let picturesPage = document.querySelector('.pictures-page');
let artistBtn = document.querySelector('.artistBtn');
let pictureBtn = document.querySelector('.pictureBtn');
let home = document.querySelector('.home');
let categories = document.querySelector('.categories');


settingsBtn.addEventListener('click', function(e) {
  console.log(e.path[2])
  let i = 1;
	let j = 0;

	while(i >= 0) {
		titlePage.style.opacity = i;
		i -= 0.1;
	}
	setTimeout(function() {
		titlePage.style.display = 'none';
		settingsMenu.style.display = 'block';
	}, 500)

	setTimeout(function() {
		while(j <= 1) {
			settingsMenu.style.opacity = j;
			j += 0.1;
		}
	}, 1000)
	
})


closeSetting.addEventListener('click', function() {
  let i = 1;
	let j = 0;

	while(i >= 0) {
		settingsMenu.style.opacity = i;
		i -= 0.1;
	}
	setTimeout(function() {
		settingsMenu.style.display = 'none';
  	titlePage.style.display = 'block';
	}, 500)

	setTimeout(function() {
		while(j <= 1) {
			titlePage.style.opacity = j;
			j += 0.1;
		}
	}, 1000)
	
});


artistBtn.addEventListener('click', function() {
  let i = 1;
	let j = 0;

	while(i >= 0) {
		titlePage.style.opacity = i;
		// footer.style.opacity = i;
		i -= 0.1;
	}
	setTimeout(function() {
		titlePage.style.display = 'none';
		artistPage.style.display = 'block';
    categories.classList.add('categories-active');
	}, 500) 

	setTimeout(function() {
		while(j <= 1) {
			artistPage.style.opacity = j;
			// footer.style.opacity = j;
			j += 0.1;
		}
	}, 1000) 
});


// pictureBtn.addEventListener('click', function() {
//   let i = 1;
// 	while(i >= 0) {
// 		titlePage.style.opacity = i;
// 		i -= 0.1;
// 	}
// 	setTimeout(function() {
// 		titlePage.style.display = 'none';
// 		picturesPage.style.display = 'block';
//     categories.classList.add('categories-active');
// 	}, 1000)
// 	let j = 0;
// 	while(j <= 1) {
// 		picturesPage.style.opacity = j;
// 		j += 0.1;
// 	}
// });


home.addEventListener('click', function() {
  let i = 1;
	let j = 0;

	while(i >= 0) {
		artistPage.style.opacity = i;
		i -= 0.1;
	}
	setTimeout(function() {
		artistPage.style.display = 'none';
		titlePage.style.display = 'block';
    artistBtn.classList.remove('artist-picture-active');
    categories.classList.remove('categories-active');
	}, 500)
	setTimeout(function() {
		while(j <= 1) {
			titlePage.style.opacity = j;
			j += 0.1;
		}
	}, 1000)
});



// settingsBtn.addEventListener('click', function() {
//   let i = 1;
// 	while(i >= 0) {
// 		artistPage.style.opacity = i;
// 		i -= 0.1;
// 	}
// 	setTimeout(function() {
// 		artistPage.style.display = 'none';
// 		settingsMenu.style.display = 'block';

// 	}, 1000)
// 	let j = 0;
// 	while(j <= 1) {
// 		settingsMenu.style.opacity = j;
// 		j += 0.1;
// 	}
// })



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