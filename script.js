"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'yellow') {
		document.body.style.color = 'green';
	} else {
		document.body.style.color = 'yellow';
	}
}