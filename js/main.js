$(function () {
	$('.reviews__slider').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-prev"><img class="slider-img" src="images/prev.svg" alt=""></button>',
		nextArrow: '<button class="slick-next"><img class="slider-img" src="images/next.svg" alt=""></button>',
		slidesToShow: 3,
		slidesToScroll: 3,
		centralMode: true,

		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					variableWidth: false,
				}
			},
			{
				breakpoint: 710,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			}]

	});
	$(document).ready(function () {
		$('.question__item-title').click(function (event) {
			$(this).toggleClass('question__title-active').next().slideToggle(300);
		})
	})
	$('.menu__burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
		$(this).toggleClass("open");
	});
});


