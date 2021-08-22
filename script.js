let stars = document.getElementById('stars');
let mountains = document.getElementById('mountains');
let light = document.getElementById('light');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let header = document.getElementById('headerselector');


window.addEventListener('scroll', function(){
	let value = window.scrollY;
	stars.style.top = value * 0.5 + 'px';
	light.style.bottom = value * 0.5 + 'px';
	mountains.style.bottom = value * 1.0 + 'px';
	text.style.marginTop = value * 0.75 + 'px';
	text2.style.marginTop = value * 0.75 + 'px';
	header.style.bottom = value * 0.5 + 'px';
});
