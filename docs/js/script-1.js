/**
 * script.js
 *
 * Tous les scripts JS perso
 */

(function($) {
	
	
})(jQuery)

jQuery(document).ready(function($){

	if ($('body').width() > 800) {

		$('#menuliste_5487191_1 a').on('mouseenter', function () {
			$('div.slide').each(function () {
				$(this).fadeOut('fast');
				$(this).css({'opacity': '0 !important'});
			});
			$('#slide1').fadeIn('fast');
			$('#slide1').css({'opacity': '1 !important'});
		});
		$('#menuliste_5487191_2 a').on('mouseenter', function () {
			$('div.slide').each(function () {
				$(this).fadeOut('fast');
				$(this).css({'opacity': '0 !important'});
			});
			$('#slide2').fadeIn('fast');
			$('#slide2').css({'opacity': '1 !important'});
		});
		$('#menuliste_5487191_3 a').on('mouseenter', function () {
			$('div.slide').each(function () {
				$(this).fadeOut('fast');
				$(this).css({'opacity': '0 !important'});
			});
			$('#slide3').fadeIn('fast');
			$('#slide3').css({'opacity': '1 !important'});
		});
		$('#menuliste_5487191_4 a').on('mouseenter', function () {
			$('div.slide').each(function () {
				$(this).fadeOut('fast');
				$(this).css({'opacity': '0 !important'});
			});
			$('#slide4').fadeIn('fast');
			$('#slide4').css({'opacity': '1 !important'});
		});
	
	}
	
});