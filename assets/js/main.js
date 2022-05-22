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
