console.log('hello nurse');

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs((slideIndex += n));
}

function mySwitch() {
	var element2 = document.body;
	element2.classList.toggle('dark');
	var cardElement = document.getElementByClassName(".card");
	cardElement.toggle('dark');
}


console.log('body.classList');

function myFunction() {
	var bodyElement = document.body;
	bodyElement.classList.toggle('dark');
	var cardElement = document.getElementById('.projects');
	cardElement.classList.toggle('dark');

}