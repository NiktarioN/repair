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
					swipe: true
				}
			}
		]
	});
});