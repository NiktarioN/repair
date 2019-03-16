// Библиотека WOW

new WOW().init()

// Модальное окно

document.querySelector('#button-callback').addEventListener('click', function () {
	document.querySelector('#modal-callback').classList.add('modal_visible');
});
document.querySelector('.modal__close').addEventListener('click', function () {
	document.querySelector('#modal-callback').classList.remove('modal_visible');
});

// Слайдер

$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"></div>',
		prevArrow: '<div class="arrow arrow_left"></div>',
		swipe: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					swipe: true,
					arrows: false
				}
			}
		]
	});
});

// Маска для телефонов

$('.phone').mask('+7 (999) 999-99-99');

// Кнопка "Наверх"

var amountScrolled = 300;

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > amountScrolled) {
			$('#button-up').fadeIn();
		} else {
			$('#button-up').fadeOut();
		}
	});
});

$('#button-up').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 900);
	return false;
});
