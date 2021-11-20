const picture = document.querySelector('.categories-container');

let i = [0,10,20,30,40,50,60,70,80,90,100,110];

function addImg(i) {
    const div = document.createElement('div');
	div.classList.add('img-cards');
    div.id = `${i/10}`;
    picture.append(div);

    const divText = document.createElement('div');
	divText.classList.add('img-text');
    divText.textContent = "Partian   5/10";
    div.append(divText);

	const img = document.createElement('img');
	img.classList.add('img-small');
	img.src = `./img/${i}.webp`;
	img.alt = `img${i}`;
    div.append(img);
}

for (let j = 0; j < i.length; j++) {
	addImg(i[j]);
}


const images = document.querySelectorAll(".img-cards");

function debounce(f, ms = 50) {
    let callNow = false;
    return function () {
        if (callNow) return;
        f.apply(this, arguments);
        callNow = true;
        setTimeout(() => (callNow = false), ms);
    };
}

function checkSlide(e) {
    images.forEach(img => {
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

window.addEventListener("scroll", debounce(checkSlide));

// ==================================================================================

images.forEach(img => {
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
        const questionContainer = document.querySelector('.question-container');

        async function openQuestion() {
            let i = 1;
	        while(i >= 0) {
		        artistPage.style.opacity = i;
		        i -= 0.1;
	        }
	        setTimeout(function() {
		        artistPage.style.display = 'none';
		        questionsPage.style.display = 'block';
	        }, 1000)
	        let j = 0;
	        while(j <= 1) {
		        questionsPage.style.opacity = j;
		        j += 0.1;
	        }
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
                questionContainer.append(image);
            }

            for(let i = 0; i < 4; i++) {
                CreateOptions(num + i)
            } 

            openQuestion()
          }
          
          question(arrayImg[0])


        


      })
});




