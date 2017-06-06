// console.log('works');
var bgColor=document.querySelector('#bg-color');

function getRandom(min,max){
	console.log(Math.floor(Math.random()*(max-min))+min);
	return Math.floor(Math.random()*(max-min))+min;
}

function changeColor() {
	// console.log('click');
	bgColor.style.backgroundColor="#"+getRandom(100000,999999);
	
}

bgColor.addEventListener('click', changeColor);
