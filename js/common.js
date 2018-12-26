$(function() {

	$('.hamburger').click(function(){
		$('.nav').css('height', '100%');
		$('.nav').css('display', 'block');
		$('.closebtn').css('display', 'block');
		$(this).addClass('is-active');
	});
	$('.closebtn').click(function(){
		$('.nav').css('height', '0%');
		$('.hamburger').removeClass('is-active');
		$('.closebtn').css('display', 'none');
	});

	$(".s-comand-carousel").owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});
/*
	$(".s-portf-content-text li").click(function() {
		$(".s-portf-content-text a").removeClass("active").eq($(this).index()).addClass("active");
		//$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
*/
});



