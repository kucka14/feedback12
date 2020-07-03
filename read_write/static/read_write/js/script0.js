
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

function pickQuote(qArray) {
	var quoteBlock = qArray[Math.floor(Math.random() * qArray.length)];
	return quoteBlock;
}

function flipMessage(messageTop,messageMiddle,messageBottom,styleShift,styleColor,styleFont,styleWidth) {
	var targetStyle = document.getElementById('main-title-inner');
	var targetTop = document.getElementById('main-title-top');
	var targetMiddle = document.getElementById('main-title-middle');
	var targetBottom = document.getElementById('main-title-bottom');
	var targetButton = document.getElementById('main-title-button');
	targetStyle.style.left = styleShift;
	targetStyle.style.backgroundColor = styleColor;
	targetStyle.style.maxWidth = styleWidth;
	targetTop.style.color = styleFont;
	targetMiddle.style.color = styleFont;
	targetBottom.style.color = styleFont;
	targetStyle.style.borderColor = styleFont;
	targetButton.style.color = styleFont;
	targetTop.innerHTML = messageTop;
	targetMiddle.innerHTML = messageMiddle;
	targetBottom.innerHTML = messageBottom;
}

function flipCardColor() {
	var buttonUp1 = document.getElementById('right-button').classList.contains('slide-up');
	var buttonUp2 = document.getElementById('right-button').classList.contains('slide-up-fast');
	if (buttonUp1||buttonUp2) {
		if (document.getElementById('cardlitmus').style.color == 'white') {
			var all = document.getElementsByClassName('stbground');
			for (var i = 0; i < all.length; i++) {
			  all[i].style.backgroundColor = 'white';
			}
			var all = document.getElementsByClassName('sttext');
			for (var i = 0; i < all.length; i++) {
			  all[i].style.color = 'black';
			}
		} else if (document.getElementById('cardlitmus').style.color == 'black'){
			var all = document.getElementsByClassName('stbground');
			for (var i = 0; i < all.length; i++) {
			  all[i].style.backgroundColor = '#336699';
			}
			var all = document.getElementsByClassName('sttext');
			for (var i = 0; i < all.length; i++) {
			  all[i].style.color = 'white';
			}
		} else {
		}
	}
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
	document.getElementById(buttonId).innerHTML = buttonValue;
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
	document.getElementById("left-button").classList.remove("left-button");
	document.getElementById("right-button").classList.remove("right-button");
	target.classList.add("slide-up");
}

function slideUpFast(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-up");
	document.getElementById("left-button").classList.remove("left-button");
	document.getElementById("right-button").classList.remove("right-button");
	target.classList.add("slide-up-fast");
}

function slideDown(buttonId) {
	var target = document.getElementById(buttonId);
	target.classList.remove("slide-up");
	target.classList.remove("slide-up-fast");
	document.getElementById("left-button").classList.add("left-button");
	document.getElementById("right-button").classList.add("right-button");
	target.classList.add("slide-down");
}

function clickSlideML() {
	var target = document.getElementById("header-click");
	target.classList.remove("click-slide-lm");
	target.classList.remove("click-slide-mr");
	target.classList.remove("click-slide-rm");
	target.classList.add("click-slide-ml");
}

function clickSlideLM() {
	var target = document.getElementById("header-click");
	target.classList.remove("click-slide-ml");
	target.classList.remove("click-slide-mr");
	target.classList.remove("click-slide-rm");
	target.classList.add("click-slide-lm");
}

function clickSlideMR() {
	var target = document.getElementById("header-click");
	target.classList.remove("click-slide-lm");
	target.classList.remove("click-slide-ml");
	target.classList.remove("click-slide-rm");
	target.classList.add("click-slide-mr");
}

function clickSlideRM() {
	var target = document.getElementById("header-click");
	target.classList.remove("click-slide-lm");
	target.classList.remove("click-slide-ml");
	target.classList.remove("click-slide-mr");
	target.classList.add("click-slide-rm");
}

function slideLeft(mT,mM,mB) {
	var buttonValue = document.getElementById("right-button").innerHTML;
	if (buttonValue == "Give Feedback") {
		fiftyZero('main-left-slider');
		fiftyHundred('main-right-slider');
		buttonChange('left-button','shrink');
		fiftyZero('header-left-slider');
		fiftyHundred('header-right-slider');
		slideUp('right-button');
		clickSlideML()
		document.getElementById('main-right-content').style.display = "inline-block";
		fadeOut('main-banner');
	} else {
		hundredFifty('main-left-slider');
		zeroFifty('main-right-slider');
		buttonChange('right-button','grow');
		hundredFifty('header-left-slider');
		zeroFifty('header-right-slider');
		slideDown('left-button');
		clickSlideRM()
		document.getElementById('main-left-content').style.display = "none";
		flipMessage(mT,mM,mB,'0px','rgba(0,50,50,.25)','white','95vw');
		fadeIn('main-banner');
	}
}

function leftMiddle(mT,mM,mB) {
	hundredFifty('main-left-slider');
	zeroFifty('main-right-slider');
	buttonChange('right-button','grow');
	hundredFifty('header-left-slider');
	zeroFifty('header-right-slider');
	slideDown('left-button');
	clickSlideRM()
	document.getElementById('main-left-content').style.display = "inline-block";
	document.getElementById('main-banner').style.opacity = "0";
	flipMessage(mT,mM,mB,'0px','rgba(0,50,50,.25)','white','95vw');
	setTimeout(function(){fadeIn('main-banner');},1500);
}

function slideRight(qArray,mTm,mMm,mBm) {
	var buttonValue = document.getElementById("left-button").innerHTML;
	if (buttonValue == "Receive Feedback") {
		fiftyZero('main-right-slider');
		fiftyHundred('main-left-slider');
		buttonChange('right-button','shrink');
		fiftyZero('header-right-slider');
		fiftyHundred('header-left-slider');
		slideUp('left-button');
		clickSlideMR()
		document.getElementById('main-left-content').style.display = "inline-block";
		var quoteBlock = pickQuote(qArray);
		var line1 = quoteBlock[0];
		var line2 = quoteBlock[1];
		var line3 = quoteBlock[2];
		flipMessage(line1,line2,line3,'-50px','rgba(0,50,50,.25)','white','calc(95vw - 100px)');
		fadeIn('main-banner');
	} else {
		hundredFifty('main-right-slider');
		zeroFifty('main-left-slider');
		buttonChange('left-button','grow');
		hundredFifty('header-right-slider');
		zeroFifty('header-left-slider');
		slideDown('right-button');
		clickSlideLM()
		document.getElementById('main-right-content').style.display = "none";
		flipMessage(mTm,mMm,mBm,'0px','rgba(0,50,50,.25)','white','95vw');
		fadeIn('main-banner');
	}
}

function stayRight(mT,mM,mB) {
		fiftyZeroFast('main-left-slider');
		fiftyHundredFast('main-right-slider');
		buttonChange('left-button','shrink');
		fiftyZeroFast('header-left-slider');
		fiftyHundredFast('header-right-slider');
		slideUpFast('right-button');
		clickSlideML()
		document.getElementById('main-right-content').style.display = "inline-block";
		document.getElementById('main-banner').style.opacity = "0";
		flipMessage(mT,mM,mB,'50px','rgba(204,255,0,1)','black','calc(95vw - 100px)');
		setTimeout(function(){fadeIn('main-banner');},2000);
		setTimeout(function(){fadeOut('main-banner');},10000);
}

function popLeft() {
	slideRight('Error Submitting!','There was an error submitting your story.','You can still open the form and correct the error.','X','X','X');
	setTimeout(move,100);
	function move() {
		document.getElementById("left-modal-trigger").click();
	}
}

function popRight() {
	slideLeft('Error Submitting!','There was an error submitting your feedback.','You can still open the form and correct the error.');
	setTimeout(move,100);
	function move() {
		document.getElementById("right-modal-trigger").click();
	}
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








