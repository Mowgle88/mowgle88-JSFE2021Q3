// close settings

let toHomeBtn = document.querySelector('.to-home-btn');
let closeSetting = document.querySelector('.close');
let settingsMenu = document.querySelector('.settings-menu');
let titlePage = document.querySelector('.title-page');
let settingsBtn = document.querySelector('.settings-btn');


function openSet() {
  titlePage.style.display = 'none';
  settingsMenu.style.display = 'block';
}

settingsBtn.addEventListener('click', openSet)

function closeSet() {
  settingsMenu.style.display = 'none';
  titlePage.style.display = 'block';
}

closeSetting.addEventListener('click', closeSet);


// Volume control
let volumeRange = document.querySelector('.volume-range');
let volumeProgress = document.querySelector('.volume-progress');
let volumeCircle = document.querySelector('.volume-circle');
let mute = document.querySelector('.mute');
let volume = document.querySelector('.volume');
let isVolume = true;


let initLeft = volumeProgress.getBoundingClientRect().width * volumeRange.value / 100;
volumeCircle.style.left = initLeft - 5 + 'px';
// volumeCircle.addEventListener('mousedown', () => {

// })

mute.addEventListener('click', () => {
  if(isVolume) {
    isVolume = false;
    mute.classList.add('mute-active');
    volume.classList.remove('volume-active');
  }
})

volume.addEventListener('click', () => {
  if(!isVolume) {
    isVolume = true;
    volume.classList.add('volume-active');
    mute.classList.remove('mute-active');
  }
})


// Turn on-off game time
let btnTime = document.querySelector('.btn-time');
let btnCircle = document.querySelector('.btn-circle');
let onTime = document.querySelector('.on-time');
let offTime = document.querySelector('.off-time');
let circlePosition = 0;

btnTime.addEventListener('click', () => {
	if (circlePosition == 0) {
		circlePosition = 1;
    offTime.style.display = 'block';
	  onTime.style.display = 'none';
    btnTime.style.background = '#000';
    btnCircle.style.marginLeft = '0';
	} else {
		circlePosition = 0;
    onTime.style.display = 'block';
	  offTime.style.display = 'none';
    btnTime.style.background = '#FFBCA2';
    btnCircle.style.marginLeft = '57%';
	}
})

// Time for answer
let btnMinus = document.querySelector('.btn-minus');
let btnPlus = document.querySelector('.btn-plus');
let timeCount = document.querySelector('.time-count');

btnPlus.addEventListener('click', () => {
	timeCount.stepUp();
});
btnMinus.addEventListener('click', () => {
	timeCount.stepDown();
});

btnMinus.addEventListener('click', () => {
	btnMinus.style.background = '#FFBCA2';
	btnMinus.style.color = '#000';
  btnPlus.style.background = '#000';
	btnPlus.style.color = '#fff';
	timeCount.style.color = '#FFBCA2';
});

btnPlus.addEventListener('click', () => {
	btnPlus.style.background = '#FFBCA2';
	btnPlus.style.color = '#000';
  btnMinus.style.background = '#000';
	btnMinus.style.color = '#fff';
	timeCount.style.color = '#FFBCA2';
});

// Save-reset settings
let save = document.querySelector('.save');
let def = document.querySelector('.default');

save.addEventListener('click', () => {
	if (!save.classList.contains('default-save-active') &&
	!def.classList.contains('default-save-active')) {
		save.classList.add('default-save-active')
	} else if (!save.classList.contains('default-save-active') &&
	def.classList.contains('default-save-active')){
		def.classList.remove('default-save-active')
		save.classList.add('default-save-active')
	}
})

def.addEventListener('click', () => {
	if (!save.classList.contains('default-save-active') &&
	!def.classList.contains('default-save-active')) {
		def.classList.add('default-save-active')
	} else if (save.classList.contains('default-save-active') &&
	!def.classList.contains('default-save-active')){
		def.classList.add('default-save-active')
		save.classList.remove('default-save-active')
	}
})