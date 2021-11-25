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
	img.src = `./assets/img/${i}.webp`;
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
	img.src = `./assets/img/${i}.webp`;
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
        console.log(`pictures - ${n*10}`);
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
                image.src = `./assets/img/${num}.webp`;
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
        console.log(`pictures - ${n*10}`);
        let arrayImg = [];
        let ind = 1;

        for(let i = n*10; i < (n*10 + 10); i++) {
            arrayImg.push(i)
        }
        // console.log(arrayImg);
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
            // let answerOptions = [];

            let arrayOfAuthors = [];
            for(let i = 0; i < data.length; i++) {
                arrayOfAuthors.push(data[i]["author"])
            }
            let uniqueArray = arrayOfAuthors.filter((item, pos) => arrayOfAuthors.indexOf(item) == pos)

            console.log(currentAuthor);
            // console.log(answerOptions[0]);

            questionPictures.textContent = `Кто написал эту картину?`;


            // questionPictures.textContent = `Какую картину написал ${currentAuthor}?`;

            function CreateOptions(num) {
                const div = document.createElement('div');
	            div.classList.add('answers-container');
                questionsContainer.append(div);
                
                const image = document.createElement('img');
                image.classList.add('question-img-2');
                image.src = `./assets/full/${num}full.webp`;
                image.alt = `${data[num]["author"]}`;
                div.append(image);

                const p = document.createElement('p');
                p.textContent = data[num]["name"];
                p.classList.add('picture-name');
                div.append(p);

                categories.forEach(el => {
                    el.classList.remove('categories-active')
                })
            }
            CreateOptions(num)

            const div = document.createElement('div');
	        div.classList.add('answers-container');
            questionsContainer.append(div);

            function createAnswerOptions() {
                let answerOptions = [];
                answerOptions.push(currentAuthor)
                for(let i = 0; i < 3; i++) {
                    const randomNumImages = Math.floor(Math.random() * uniqueArray.length);
                    currentAuthor = uniqueArray[randomNumImages];
                    answerOptions.push(currentAuthor)
                }
                for (let i = answerOptions.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [answerOptions[i], answerOptions[j]] = [answerOptions[j], answerOptions[i]];
                  }
                
                return answerOptions; 
            }
            let answers = createAnswerOptions();

            console.log(answers);

            function CreateAnswers(n) {
                for(let i = 0; i < n.length; i++) {
                    const divText = document.createElement('div');
	                divText.classList.add('answers');
                    divText.textContent = `${n[i]}`;
                    div.append(divText);
                }
            }

            CreateAnswers(answers)

            openQuestion()

            const answersBtn = document.querySelectorAll('.answers');
            const questionImg = document.querySelector('.question-img-2');
            const pictureName = document.querySelector('.picture-name');
            let tr = 0;

            answersBtn.forEach(el => {
                el.addEventListener('click', function(e) {
                    // console.log(arr)
                    
                    if(questionImg.alt === el.textContent) {
                        questionPictures.textContent = `Вы совершенно правы`;
                        questionImg.src = `./assets/2.jpg`;
                        el.style.border = '2px solid green'
                        pictureName.textContent = '';
                        tr++;
                    } else {
                        questionPictures.textContent = `Вы не правы`;
                        questionImg.src = `./assets/1.jpg`;
                        el.style.border = '2px solid red'
                        pictureName.textContent = '';
                    }

                    if(ind < arrayImg.length) {
                        setTimeout(() => {
                            answersBtn.forEach(item => {
                                el.style.border = '2px solid white'
                            })

                            questionPictures.textContent = `Кто написал эту картину?`;
                            questionImg.src = `./assets/full/${arrayImg[ind]}full.webp`;
                            questionImg.alt = `${data[arrayImg[ind]]["author"]}`;
                            pictureName.textContent = data[arrayImg[ind]]["name"];
                            currentAuthor = data[arrayImg[ind]]["author"];
                            answers = createAnswerOptions();
                            for(let j = 0; j < answers.length; j++) {
                                answersBtn[j].textContent = `${answers[j]}`;
                            }
                            ind++;
    
                        }, 1500)
                    } else {
                        questionPictures.textContent = `Ваш результат - ${tr} правильных ответов. Чтобы продолжить нажмите на home или categiries`;
                        questionImg.src = `./assets/3.jpg`;
                        tr = 0;
                    } 
                })
            })
        }
        question(arrayImg[0])
    })
});






