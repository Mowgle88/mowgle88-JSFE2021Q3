const containerArtists = document.querySelector('.categories-artists');
const containerPictures = document.querySelector('.categories-pictures');


let a = [0,10,20,30,40,50,60,70,80,90,100,110];
let p = [120,130,140,150,160,170,180,190,200,210,220,230];


function addImgArtists(i) {
    const div = document.createElement('div');
	div.classList.add('img-cards-artists');
    div.id = `${i/10}`;
    containerArtists.append(div);

    const divText = document.createElement('div');
	divText.classList.add('img-text');
    // divText.textContent = `Category ${i/10 + 1} <span>0/10</span>`;
    divText.innerHTML = `Category ${i/10 + 1} <span>0/10</span>`;
    div.append(divText);

	const img = document.createElement('img');
	img.classList.add('img-small');
	img.src = `./img/${i}.webp`;
	img.alt = `img${i}`;
    div.append(img);
}

function addImgPictures(i) {
    const div = document.createElement('div');
	div.classList.add('img-cards-pictures');
    div.id = `${i/10}`;
    containerPictures.append(div);

    const divText = document.createElement('div');
	divText.classList.add('img-text');
    // divText.textContent = `Category ${i/10 + 1} <span>0/10</span>`;
    divText.innerHTML = `Category ${i/10 + 1} <span>0/10</span>`;
    div.append(divText);

	const img = document.createElement('img');
	img.classList.add('img-small');
	img.src = `./img/${i}.webp`;
	img.alt = `img${i}`;
    div.append(img);
}

for (let j = 0; j < a.length; j++) {
	addImgArtists(a[j]);
}

for (let j = 0; j < p.length; j++) {
	addImgPictures(p[j]);
}


// const images = document.querySelectorAll(".img-cards");
const imagesArtists = document.querySelectorAll(".img-cards-artists");
const imagesPictures = document.querySelectorAll(".img-cards-pictures");


function debounce(f, ms = 50) {
    let callNow = false;
    return function () {
        if (callNow) return;
        f.apply(this, arguments);
        callNow = true;
        setTimeout(() => (callNow = false), ms);
    };
}

function checkSlideArtists(e) {
    imagesArtists.forEach(img => {
        const imgWhileOnScreen = img.getBoundingClientRect().y;
        const imgHeight = document.documentElement.clientHeight;
        if (imgWhileOnScreen < (imgHeight / 3) * 4 && imgWhileOnScreen > 0) {
            img.classList.add("img-active");
        }
        if (imgWhileOnScreen > imgHeight) {
            img.classList.remove("img-active");
        }
    });
}

function checkSlidePictures(e) {
    imagesPictures.forEach(img => {
        const imgWhileOnScreen = img.getBoundingClientRect().y;
        const imgHeight = document.documentElement.clientHeight;
        if (imgWhileOnScreen < (imgHeight / 3) * 4 && imgWhileOnScreen > 0) {
            img.classList.add("img-active");
        }
        if (imgWhileOnScreen > imgHeight) {
            img.classList.remove("img-active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlideArtists));
window.addEventListener("scroll", debounce(checkSlidePictures));

// ==================================================================================

imagesArtists.forEach(img => {
    img.addEventListener('click', function(e) {
        let n = e.path[1].id;
        console.log(`pictures - ${n}`);
        let arrayImg = [];
        for(let i = n*10; i < (n*10 + 10); i++) {
            arrayImg.push(i)
        }
        console.log(arrayImg);
        const questionsPage = document.querySelector('.question-about-artists');
        const questionArtist = document.querySelector('.question-artist');
        const questionsContainer = document.querySelector('.question-container-artists');

        async function openQuestion() {
            let i = 1;
	        let j = 0;

	        while(i >= 0) {
		        artistPage.style.opacity = i;
		        i -= 0.1;
	        }
	        setTimeout(function() {
		        artistPage.style.display = 'none';
		        questionsPage.style.display = 'block';
	        }, 500)
            setTimeout(function() {
		        while(j <= 1) {
                    questionsPage.style.opacity = j;
                    j += 0.1;
                }
	        }, 1000)
        }

        async function question(num) {    
            const images = './images.json';
            const res = await fetch(images);
            const data = await res.json(); 
            // const randomNumImages = Math.floor(Math.random() * data.length);
            // let imageNum = data[randomNumImages]["imageNum"];
            // let author = data[randomNumImages]["author"];
            let currentAuthor = data[num]["author"];

            console.log(currentAuthor);

            questionArtist.textContent = `Какую картину написал ${currentAuthor}?`;

            function CreateOptions(num) {
                const image = document.createElement('img');
                image.classList.add('question-img');
                image.src = `./img/${num}.webp`;
                image.alt = `img${num}`;
                questionsContainer.append(image);
                categories.forEach(el => {
                    el.classList.remove('categories-active')
                })
            }
            CreateOptions(num)

            for(let i = 0; i < 3; i++) {
                const randomNumImages = Math.floor(Math.random() * data.length);
                CreateOptions(randomNumImages)
            } 

            let categoriesActive = document.querySelectorAll(".question-img");
            categoriesActive.forEach(el => console.log(el))

            openQuestion()
          }

          question(arrayImg[0])


        //   for(let i = 0; i < arrayImg.length; i++) {
        //     question(arrayImg[i])
        //   }
 
      })
});

imagesPictures.forEach(img => {
    img.addEventListener('click', function(e) {
        let n = e.path[1].id;
        console.log(`pictures - ${n}`);
        let arrayImg = [];
        for(let i = n*10; i < (n*10 + 10); i++) {
            arrayImg.push(i)
        }
        console.log(arrayImg);

        const questionsPage = document.querySelector('.question-about-pictures');
        const questionPictures = document.querySelector('.question-pictures');
        const questionsContainer = document.querySelector('.question-container-pictures');

        async function openQuestion() {
            let i = 1;
	        let j = 0;

	        while(i >= 0) {
		        picturesPage.style.opacity = i;
		        i -= 0.1;
	        }
	        setTimeout(function() {
		        picturesPage.style.display = 'none';
		        questionsPage.style.display = 'block';
	        }, 500)
            setTimeout(function() {
		        while(j <= 1) {
                    questionsPage.style.opacity = j;
                    j += 0.1;
                }
	        }, 1000)
        }

        async function question(num) {    
            const images = './images.json';
            const res = await fetch(images);
            const data = await res.json(); 
            // const randomNumImages = Math.floor(Math.random() * data.length);
            // let imageNum = data[randomNumImages]["imageNum"];
            // let author = data[randomNumImages]["author"];
            let currentAuthor = data[num]["author"];

            console.log(currentAuthor);

            questionPictures.textContent = `Какую картину написал ${currentAuthor}?`;

            function CreateOptions(num) {
                const image = document.createElement('img');
                image.classList.add('question-img');
                image.src = `./img/${num}.webp`;
                image.alt = `img${num}`;
                questionsContainer.append(image);
                categories.forEach(el => {
                    el.classList.remove('categories-active')
                })
            }
            CreateOptions(num)

            for(let i = 0; i < 3; i++) {
                const randomNumImages = Math.floor(Math.random() * data.length);
                CreateOptions(randomNumImages)
            } 

            let categoriesActive = document.querySelectorAll(".question-img");
            categoriesActive.forEach(el => console.log(el))

            openQuestion()
          }

          question(arrayImg[0])


        //   for(let i = 0; i < arrayImg.length; i++) {
        //     question(arrayImg[i])
        //   }
 
      })
});




