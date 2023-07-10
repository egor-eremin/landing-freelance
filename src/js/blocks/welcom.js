import Typed from 'typed.js';
(function printedText() {
	$('.welcom-block').viewportChecker({
		classToAdd: 'active',
		callbackFunction() {
			setTimeout(() => {
				let textTyped = new Typed('.typed-text', {
					strings: ['Удалённая работа<br> для <span class="red-text">web-разработчиков</span>'],
					typeSpeed: 50,
				});
			}, 300);
		},
	});
})();
(function goToForm() {
	$('.anchor-form').on('click', (e) => {
		e.preventDefault();
		let requestForm = $('.request').offset().top;

		$('body, html').animate({scrollTop: requestForm}, 300);
	});
})();
