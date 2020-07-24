//Make scroll magic controller
var controller = new ScrollMagic.Controller();

//The motto GSAP timeline
var mottoTween = gsap.timeline({repeat: 0, repeatDelay: 0});
mottoTween.from("#motto1", {opacity: 0,y: -100, duration: 0.5,offset:-0.5});
mottoTween.from("#motto2", {opacity: 0,y: 50, color:"black" ,duration: 0.5});
mottoTween.from("#motto3", {opacity: 0,y:50, color:"black", duration: 0.5});
mottoTween.from("#motto4", {opacity: 0,y: -100, duration: 0.5});
mottoTween.from("#motto5", {opacity: 0,y: 50, color:"black" ,duration: 0.5});
mottoTween.from("#motto6", {opacity: 0, duration: 0.3});
mottoTween.from("#motto7", {opacity: 0, duration: 0.3});
mottoTween.from("#motto8", {opacity: 0,y: 50, color:"black" ,duration: 0.5});
mottoTween.from("#motto9", {opacity: 0, duration: 0.5});
mottoTween.from("#motto10", {opacity: 0, duration: 0.5});
mottoTween.from("#motto11", {opacity: 0, duration: 0.5});
mottoTween.from("#motto12", {opacity: 0, duration: 0.5});

//the hideWelcome tween
var hideWelcomeTween = gsap.to(".welcome", {opacity:0,duration:0.5});
var hideArrowsTween = gsap.to(".helperWrapper", {opacity:0,duration:0.5});


var mottoScene = new ScrollMagic.Scene({
  	triggerElement: '.motto', // starting scene, when reaching this element
})
	.setTween(mottoTween)
	.addTo(controller);

var hideWelcomeScene = new ScrollMagic.Scene({
	triggerElement: '.motto', // starting scene, when reaching this element
})
	.setTween(hideWelcomeTween)
	.setTween(hideArrowsTween)
	.addTo(controller);

//GSAP ANIMATIONS BEGIN HERE
//gsap.from(".welcome",{duration:1,x: 150,opacity:0});

var navBtnTween1 = gsap.to(".bar1", {duration:0.4,x:0,y:10.5,rotation:"315_ccw",paused:true,reversed:true});
var navBtnTween2 = gsap.to(".bar2", {duration:0.4,opacity:0,paused:true,reversed:true});
var navBtnTween3 = gsap.to(".bar3", {duration:0.4,x:0,y:-10.5,rotation:"45_cw",paused:true,reversed:true});
var navLinkTween = gsap.to(".navLink", {duration:0.1,opacity:0});

//Custom code BEGIN HERE


let navToggled = false;
function navBtnClick() {
	navBtnTween1.reversed() ? navBtnTween1.play() : navBtnTween1.reverse();
	navBtnTween2.reversed() ? navBtnTween2.play() : navBtnTween2.reverse();
	navBtnTween3.reversed() ? navBtnTween3.play() : navBtnTween3.reverse();
	navLinkTween.reversed() ? navLinkTween.play() : navLinkTween.reverse();

	if (!navToggled){
		document.getElementById("navMenu").style.width = "100%";
		navToggled = true;
	}else{
		document.getElementById("navMenu").style.width = "0";
		navToggled = false;
	}

};

//Setup the background picture for the nationality section initially.
if ($(window).width() >= 769) {
	$(document).ready(function () {
		$(".nationalityContainer").css("height", $(".mottoBar").height());
	});
}
//Setup the background picture for the nationality section when window is resized.
$(window).resize(function() {
	if ($(window).width() >= 769) {
		$(document).ready(function () {
			$(".nationalityContainer").css("height", $(".mottoBar").height());
		});
	}
});

