
function fadeOut(fadeTarget) {
	var target = document.getElementById(fadeTarget);
	target.classList.remove("fade-in");
	target.classList.add("fade-out");
}

function fadeIn(fadeTarget) {
	var target = document.getElementById(fadeTarget);
	target.classList.remove("fade-out");
	target.classList.add("fade-in");
}


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
	document.getElementById(buttonId).innerHTML=buttonValue;
}

function fiftyZero(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("zero-fifty");
	target.classList.remove("hundred-fifty");
	target.classList.remove("fifty-hundred");
	target.classList.remove("fifty-zero-fast");
	target.classList.remove("fifty-hundred-fast");
	target.classList.add("fifty-zero");
}

function fiftyZeroFast(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("fifty-zero");
	target.classList.add("fifty-zero-fast");
}

function zeroFifty(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("fifty-zero");
	target.classList.remove("hundred-fifty");
	target.classList.remove("fifty-hundred");
	target.classList.remove("fifty-zero-fast");
	target.classList.remove("fifty-hundred-fast");
	target.classList.add("zero-fifty");
}

function hundredFifty(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("zero-fifty");
	target.classList.remove("fifty-zero");
	target.classList.remove("fifty-hundred");
	target.classList.remove("fifty-zero-fast");
	target.classList.remove("fifty-hundred-fast");
	target.classList.add("hundred-fifty");
}

function fiftyHundred(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("zero-fifty");
	target.classList.remove("hundred-fifty");
	target.classList.remove("fifty-zero");
	target.classList.remove("fifty-zero-fast");
	target.classList.remove("fifty-hundred-fast");
	target.classList.add("fifty-hundred");
}

function fiftyHundredFast(slider) {
	var target = document.getElementById(slider);
	target.classList.remove("fifty-hundred");
	target.classList.add("fifty-hundred-fast");
}

function slideUp(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-down");
	target.classList.remove("slide-up-fast");
	target.classList.add("slide-up");
}

function slideUpFast(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-up");
	target.classList.add("slide-up-fast");
}

function slideDown(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-up");
	target.classList.remove("slide-up-fast");
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
		fadeOut('main-banner');
	} else {
		hundredFifty('main-left-slider');
		zeroFifty('main-right-slider');
		buttonChange('right-button','grow');
		hundredFifty('header-left-slider');
		zeroFifty('header-right-slider');
		slideDown('left-button');
		document.getElementById('main-left-content').style.display = "none";
		document.getElementById('main-banner').style.opacity = "0";
		fadeIn('main-banner');
	}
}

function leftMiddle() {
	hundredFifty('main-left-slider');
	zeroFifty('main-right-slider');
	buttonChange('right-button','grow');
	hundredFifty('header-left-slider');
	zeroFifty('header-right-slider');
	slideDown('left-button');
	document.getElementById('main-left-content').style.display = "none";
	document.getElementById('main-banner').style.opacity = "0";
	fadeIn('main-banner');
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
		fadeOut('main-banner');
	} else {
		hundredFifty('main-right-slider');
		zeroFifty('main-left-slider');
		buttonChange('left-button','grow');
		hundredFifty('header-right-slider');
		zeroFifty('header-left-slider');
		slideDown('right-button');
		document.getElementById('main-right-content').style.display = "none";
		document.getElementById('main-banner').style.opacity = "0";
		fadeIn('main-banner');
	}
}

function stayRight() {
		fiftyZeroFast('main-left-slider');
		fiftyHundredFast('main-right-slider');
		buttonChange('left-button','shrink');
		fiftyZeroFast('header-left-slider');
		fiftyHundredFast('header-right-slider');
		slideUpFast('right-button');
		document.getElementById('main-right-content').style.display = "inline-block";
		document.getElementById('main-banner').style.opacity = "0";
}

function popLeft() {
	slideRight();
	setTimeout(move,500);
	function move() {
		document.getElementById("left-modal-trigger").click();
	}
	document.getElementById('main-banner').style.opacity = "0";
}

function popRight() {
	slideLeft();
	setTimeout(move,500);
	function move() {
		document.getElementById("right-modal-trigger").click();
	}
	document.getElementById('main-banner').style.opacity = "0";
}

function storyFill(id,title,author,text) {
	var hiddenTarget = document.getElementById('storyfillhidden');
	var visibleTarget1 = document.getElementById('storyfillvisible1');
	var visibleTarget2 = document.getElementById('storyfillvisible2');
	var visibleTarget3 = document.getElementById('storyfillvisible3');
	hiddenTarget.setAttribute('value',id);
	visibleTarget1.innerHTML = title;
	visibleTarget2.innerHTML = 'By ' + author;
	visibleTarget3.innerHTML = text;
}

function clickOther(clickTarget) {
	document.getElementById(clickTarget).click();
}

function gradeDisplay() {
	var slider = document.getElementById('gradeslider');
	var output = document.getElementById('gradevalue');
	output.innerHTML = slider.value;
	slider.oninput = function() {
		output.innerHTML = this.value;
	}
}

function showTempBoxLeft() {
	var target = document.getElementById('tempboxleft')
	target.classList.remove("hidden");
	target.classList.add("store-story");
}

function showTempBoxRight() {
	var target = document.getElementById('tempboxright')
	target.classList.remove("hidden");
	target.classList.add("send-feedback");
}








