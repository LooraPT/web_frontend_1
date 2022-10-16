let i = 0;
let a = 1;
let b = 2;
let c = 3;
let d = 4;
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.slider__people img');
const buttonPrev = document.querySelector('.btn__prew');
const buttonNext = document.querySelector('.btn__next');
const itemLenght = items.length;
const art1 = './assets/images/peopleWorker/2.png'
const art2 = './assets/images/peopleWorker/3.png'
const art3 = './assets/images/peopleWorker/1.png'
const art4 = './assets/images/peopleWorker/4.png'
const art5 = './assets/images/peopleWorker/5.png'


const images = [art1, art2, art3, art4, art5];

wrapper.innerHTML = `<div class="slider__people"> <img class = "slider__imges" 
					src=${images[i]}> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[i+1]}> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[i+2]}> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[i+3]}> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[i+4]}> </div>` 




buttonNext.onclick = () => {
	
	if (i < images.length - 1){
		i++;
	} else {
		i = 0
	};

	if (a < images.length - 1){
		a++;
	} else {
		a = 0
	};

	if (b < images.length - 1){
		b++;
	} else {
		b = 0
	};

	if (c < images.length - 1){
		c++;
	} else {
		c = 0
	};

	if (d < images.length - 1){
		d++;
	} else {
		d = 0
	};



	wrapper.innerHTML = `<div class="slider__people"> <img class = "slider__imges" 
					src=${images[i]} width = "45"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[a]} width = "45"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[b]} width = "70"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[c]} width = "45"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[d]} width = "45"> </div>`
};

buttonPrev.onclick = () => {
	if (i > 0){
		i--
	} else {
		i = images.length-1
	}

	if (a > 0){
		a--;
	} else {
		a = images.length-1
	};

	if (b > 0 ){
		b--;
	} else {
		b = images.length-1
	};

	if (c > 0){
		c--;
	} else {
		c = images.length-1
	};

	if (d > 0){
		d--;
	} else {
		d = images.length-1
	};

	wrapper.innerHTML = `<div class="slider__people"> <img class = "slider__imges" 
					src=${images[i]} width = "45"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[a]} width = "45"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[b]} width = "70"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[c]} width = "45"> </div> <div class="slider__people"> <img class = "slider__imges" 
					src=${images[d]} width = "45"> </div>`
};