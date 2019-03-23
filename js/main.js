// Библиотека WOW

const wow = new WOW({
	mobile: false,
});
wow.init();

// Модальное окно

$(document).ready(function() {
	const button = $('#button-callback');
	const modal = $('#modal-callback');
	const close = $('.modal__close');

	button.on('click', function(){
		modal.addClass('modal_visible');
		modal.fadeIn();
	});

	close.on('click', function(){
		modal.removeClass('modal_visible');
		modal.fadeOut();
	});
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