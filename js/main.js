jQuery(document).ready(function($) {
	// ************************
	// ------------------------ MENU
	// ************************

	// MENU HAMBURGUER
	$('.navigation-toggle').click(function(){
		$(this).toggleClass('active');
		$('.menu-overlay').toggleClass('open');
		$('.main-menu').toggleClass('visible');
	});

	// MAIN MENU
	$('.main-menu ul li a').on('click', '', function(){
		$('.navigation-toggle').toggleClass('active');
		$('.menu-overlay').toggleClass('open');
		$('.main-menu').toggleClass('visible');
		console.log('funfa');
	});

	// ************************
	// ------------------------ SETA PRO TOPO
	// ************************

	// $('a[href^="#"]').click(function(e){
	// 	// $('html , body').animate({ scrollTop : 0 }, 800);
	// 	$('html , body').animate({ scrollTop : $(this.hash).offset().top }, 800);
	// 	e.preventDefault;
	// 	// return false;
	// });


	// ************************
	// ------------------------ HOME
	// ************************

	// EFEITO PARALLAX DOS OBJETOS
	$(window).scroll(function(e){
		parallax();
	});

	function parallax(){
		var scrolled = $(window).scrollTop();
		$('#logo').css('margin-top',(scrolled*0.35)+'px');
		$('#destaque').css('opacity',(scrolled*0.001));
	}

	$(document).foundation();
});