// Маска для телефонов
$('.phone').mask('+7 (999) 999-99-99');

// Библиотека WOW
const wow = new WOW({
	mobile: false,
});
wow.init();

// Модальное окно
$(document).ready(function () {
	const button = $('#button-callback');
	const modal = $('#modal-callback');
	const close = $('.modal__close');

	button.on('click', function () {
		modal.addClass('modal_visible');
		modal.fadeIn();
	});

	close.on('click', function () {
		modal.removeClass('modal_visible');
		modal.fadeOut();
	});

	// Слайдер
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="arrow arrow_right"></div>',
		prevArrow: '<div class="arrow arrow_left"></div>',
		swipe: false,
		responsive: [{
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

	// Magnific Popup
	$('.guarantee-block__img_mgp').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeOnBgClick: false,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', 
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 400
		}
	});

	// Кнопка "Наверх"
	const amountScrolled = 300;
	$(window).scroll(function () {
		if ($(this).scrollTop() > amountScrolled) {
			$('#button-up').fadeIn();
		} else {
			$('#button-up').fadeOut();
		}
	});
	$('#button-up').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 900);
		return false;
	});
});