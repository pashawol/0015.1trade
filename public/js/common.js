"use strict";

function setFixedNav() {
	let topNav = document.querySelector('.top-nav  ');
	if (!topNav) return;
	window.scrollY > 0 ? topNav.classList.add('fixed') : topNav.classList.remove('fixed');
}

function eventHandler() {
	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();
	}, {
		passive: true
	});
	window.addEventListener('resize', () => {
		whenResize();
	}, {
		passive: true
	});
	whenResize();
	let videoBlockPlay = document.querySelectorAll(".video-item__video");
	videoBlockPlay.forEach(el => {
		el.addEventListener('click', () => {
			el.classList.add("play-video");
			el.innerHTML = el.dataset.video;
		});
	});



	
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }