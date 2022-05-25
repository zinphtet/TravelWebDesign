const selectDom = (className) => document.querySelector(className);

const navBar = selectDom('.nav_links');
const squareBtn = selectDom('.square_icon i');
const closeBtn = selectDom('.close i');
const nav = selectDom('.nav_bar');
squareBtn.addEventListener('click', () => {
	navBar.classList.add('show');
});
closeBtn.addEventListener('click', () => {
	navBar.classList.remove('show');
});

const nav_link = document.querySelectorAll('.nav_link');
const navLinks = Array.from(nav_link);
navLinks.forEach(function (link) {
	link.addEventListener('click', () => {
		navBar.classList.remove('show');
	});
});

window.addEventListener('scroll', function () {
	// console.log(this.scrollY);
	if (this.scrollY > 100) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
});

//swiper

let swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 32,
	coverflowEffect: {
		rotate: 0,
	},
});

// Control Video

const video = selectDom('.tour_video');
const videoControlBtn = selectDom('.video_control');

videoControlBtn.addEventListener('click', function () {
	if (this.classList.contains('ri-pause-line')) {
		video.pause();
		this.classList = 'video_control ri-play-line';
		return;
	}
	video.play();
	this.classList = 'video_control ri-pause-line';
});

video.addEventListener('ended', function () {
	videoControlBtn.classList = 'video_control ri-play-line';
});

// to home button display
const toHome = selectDom('.to_home_btn');
window.addEventListener('scroll', function () {
	if (this.scrollY > 300) {
		toHome.style.display = 'block';
	} else {
		toHome.style.display = 'none';
	}
});

//ark and Dark

const modeIcon = selectDom('.light_dark i');
const modeText = selectDom('.light_dark .mode_text');
const body = selectDom('body');
const imgs = document.querySelectorAll('.company img');
const companyImgs = Array.from(imgs);

modeIcon.addEventListener('click', function () {
	if (this.className === 'ri-moon-line') {
		this.className = 'ri-sun-line';
		modeText.textContent = 'Light Mode';
		body.classList.add('dark');

		companyImgs.forEach((img) => {
			img.style.filter = 'invert(100%)';
		});

		return;
	}
	this.className = 'ri-moon-line';
	body.classList.remove('dark');
	modeText.textContent = 'Dark Mode';
	companyImgs.forEach((img) => {
		img.style.filter = 'none';
	});
});
//

//Animate On Scroll

AOS.init({
	duration: 1200,
	once: true,
	offset: -50,
});
