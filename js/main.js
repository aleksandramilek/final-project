$(document).ready(function(){
	$('.nav-icon').on('click', function(){
		$('.site-nav ul').slideToggle();
	});
	$(window).on('resize', function(){
		var windowWidth = $(window).width();

		if ( windowWidth > 640 ) {
			$('.site-nav ul').show();
		} else {
			$('.site-nav ul').hide();
		}
	});
});