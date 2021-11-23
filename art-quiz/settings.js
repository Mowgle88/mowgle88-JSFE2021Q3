// Volume control
let input = document.querySelector('.volume-range');
let output = document.querySelector('#volume');
let mute = document.querySelector('.mute');
let vol = document.querySelector('.volume');

let isVolume;
let circlePosition = 0;


if (localStorage.getItem('outputValue') === null) {
	localStorage.setItem('outputValue', output.value)
} else {
	output.value = localStorage.getItem('outputValue')
}

if (localStorage.getItem('inputValue') === null) {
	localStorage.setItem('inputValue', input.value)
} else {
	input.value = localStorage.getItem('inputValue')
}

if (localStorage.getItem('isVolume') === null) {
	localStorage.setItem('isVolume', true)
} else {
	isVolume = localStorage.getItem('isVolume')
}


function setLocalStorage() {
	localStorage.setItem('outputValue', output.value);
	localStorage.setItem('inputValue', input.value);
	localStorage.setItem('isVolume', isVolume);
}


function load() {
	if(output.value == 0) {
		mute.classList.add('mute-active');
    vol.classList.remove('volume-active');
	} else {
		mute.classList.remove('mute-active');
		vol.classList.add('volume-active');
	}
}
load();


let audio = new Audio();
audio.src = './assets/audio/Andy_Timmons-Cry_For_You.mp3';

function playAudio() {
	
	if(isVolume) {
		audio.play()
	} else {
		audio.pause()
	}
	audio.volume = input.value/100;
}
// window.addEventListener('beforeload', playAudio)
playAudio()

input.oninput = function () {
	isVolume = true;
	audio.volume = input.value/100;
	output.value = input.value;
	mute.classList.remove('mute-active');
	vol.classList.add('volume-active');
	playAudio()
};


mute.addEventListener('click', () => {
  if(isVolume) {
    isVolume = false;
    mute.classList.add('mute-active');
    vol.classList.remove('volume-active');
		output.value = 0;
		input.value = 0;
		audio.pause()
  }
})

vol.addEventListener('click', () => {
  if(!isVolume) {
    isVolume = true;
    vol.classList.add('volume-active');
    mute.classList.remove('mute-active');
		output.value = 35;
		input.value = 35;
		audio.play()
  }
})


// Turn on-off game time
let btnTime = document.querySelector('.btn-time');
let btnCircle = document.querySelector('.btn-circle');
let onTime = document.querySelector('.on-time');
let offTime = document.querySelector('.off-time');

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

function resetSettings() {
	output.value = 0;
	input.value = 0;
	isVolume = false;
	mute.classList.add('mute-active');
  vol.classList.remove('volume-active');
	audio.pause()
	setLocalStorage()
}


save.addEventListener('click', () => {
	if (!save.classList.contains('default-save-active') &&
	!def.classList.contains('default-save-active')) {
		save.classList.add('default-save-active')
	} else if (!save.classList.contains('default-save-active') &&
	def.classList.contains('default-save-active')){
		def.classList.remove('default-save-active')
		save.classList.add('default-save-active')
	}
	setLocalStorage()
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
	resetSettings()
})



