(function () {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav');
	const close = document.querySelector('.header__nav-close');
	const menuLinks = document.querySelectorAll('.nav-list');
	const body = document.querySelector('body');
	burger.addEventListener('click', () => {
		nav.classList.add('header__nav-active');
		body.classList.add('lock');
	});

	close.addEventListener('click', () => {
		nav.classList.remove('header__nav-active');
		body.classList.remove('lock');
	});

	
    for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
            nav.classList.remove('header__nav-active');
            body.classList.remove('lock');
        });
    }
}());