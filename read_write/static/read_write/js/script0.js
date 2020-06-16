
function buttonChange(buttonId,growDirection) {
	if (buttonId == "left-button") {
		if (growDirection == "grow") {
			var buttonValue = "Receive Feedback";
		} else {
			var buttonValue = ">>";
		}
	} else {
		if (growDirection == "grow") {
			var buttonValue = "Give Feedback";
		} else {
			var buttonValue = "<<";
		}
	}
	var test = document.getElementById(buttonId).innerHTML=buttonValue;
}

function fiftyZero(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("zero-fifty");
	target.classList.remove("hundred-fifty");
	target.classList.remove("fifty-hundred");
	target.classList.add("fifty-zero");
}

function zeroFifty(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("fifty-zero");
	target.classList.remove("hundred-fifty");
	target.classList.remove("fifty-hundred");
	target.classList.add("zero-fifty");
}

function hundredFifty(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("zero-fifty");
	target.classList.remove("fifty-zero");
	target.classList.remove("fifty-hundred");
	target.classList.add("hundred-fifty");
}

function fiftyHundred(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("zero-fifty");
	target.classList.remove("hundred-fifty");
	target.classList.remove("fifty-zero");
	target.classList.add("fifty-hundred");
}

function slideUp(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-down");
	target.classList.add("slide-up");
}

function slideDown(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-up");
	target.classList.add("slide-down");
}

function slideLeft() {
	var buttonValue = document.getElementById("right-button").innerHTML;
	if (buttonValue == "Give Feedback") {
		fiftyZero('main-left-slider');
		fiftyHundred('main-right-slider');
		buttonChange('left-button','shrink');
		fiftyZero('header-left-slider');
		fiftyHundred('header-right-slider');
		slideUp('right-button');
		document.getElementById('main-right-content').style.display = "inline-block";
	} else {
		hundredFifty('main-left-slider');
		zeroFifty('main-right-slider');
		buttonChange('right-button','grow');
		hundredFifty('header-left-slider');
		zeroFifty('header-right-slider');
		slideDown('left-button');
		document.getElementById('main-left-content').style.display = "none";
	}
}

function slideLeftStay() {
	hundredFifty('main-left-slider');
	zeroFifty('main-right-slider');
	buttonChange('right-button','grow');
	hundredFifty('header-left-slider');
	zeroFifty('header-right-slider');
	slideDown('left-button');
	document.getElementById('main-left-content').style.display = "none";
}

function slideRight() {
	var buttonValue = document.getElementById("left-button").innerHTML;
	if (buttonValue == "Receive Feedback") {
		fiftyZero('main-right-slider');
		fiftyHundred('main-left-slider');
		buttonChange('right-button','shrink');
		fiftyZero('header-right-slider');
		fiftyHundred('header-left-slider');
		slideUp('left-button');
		document.getElementById('main-left-content').style.display = "inline-block";
	} else {
		hundredFifty('main-right-slider');
		zeroFifty('main-left-slider');
		buttonChange('left-button','grow');
		hundredFifty('header-right-slider');
		zeroFifty('header-left-slider');
		slideDown('right-button');
		document.getElementById('main-right-content').style.display = "none";
	}
}

function slideRightStay() {
	hundredFifty('main-right-slider');
	zeroFifty('main-left-slider');
	buttonChange('left-button','grow');
	hundredFifty('header-right-slider');
	zeroFifty('header-left-slider');
	slideDown('right-button');
	document.getElementById('main-right-content').style.display = "none";
}
