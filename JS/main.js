$(document).ready(function(){
	var altura = $('.menu1').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu1').addClass('menu-fixed');
		} else {
			$('.menu1').removeClass('menu-fixed');
		}
	});

});
