
/* Custom JS */
const mobileNav = document.querySelector('.nav-mobile');
const navToggle = document.querySelector(".mobile-nav-toggle");
const toggleOpen = document.querySelector(".toggle-icon-open");
const toggleClose = document.querySelector(".toggle-icon-close");

navToggle.addEventListener('click', () => {
	const visibility = mobileNav.getAttribute('data-visible')

	if(visibility === "false") {
		mobileNav.setAttribute('data-visible', true)
		navToggle.setAttribute('aria-expanded', true)
		toggleOpen.classList.add('hidden')
		toggleClose.classList.remove('hidden')
	} else if (visibility === "true") {
		mobileNav.setAttribute('data-visible', false)
		navToggle.setAttribute('aria-expanded', false)
		toggleOpen.classList.remove('hidden')
		toggleClose.classList.add('hidden')
	}
});

function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
	
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


