const selectDom = (className) => document.querySelector(className);

const navBar = selectDom('.nav_links');
const squareBtn = selectDom('.square_icon i');
const closeBtn = selectDom('.close i');
const nav = selectDom('.nav_bar');
squareBtn.addEventListener('click', () => {
	// alert('hello');
	navBar.classList.add('show');
	// navBar.style.right = '0';
});
closeBtn.addEventListener('click', () => {
	// alert('hello');
	navBar.classList.remove('show');
	// navBar.style.right = '0';
});

window.addEventListener('scroll', function () {
	console.log(this.scrollY);
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
