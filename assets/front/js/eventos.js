$(document).ready(function(){


	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500)
	    return false;
	});

	/*$('.vermas').click(function(){
		$('.estudios-attr').addClass('active');
	});*/

	$('.contenedor, .portada').fadeIn('slow');

	$(".hide-menu").click(function(){
		$('.navbar-ex1-collapse').collapse('hide');
		console.log('llego');
	});

	

});
