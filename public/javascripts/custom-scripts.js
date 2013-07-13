$(document).ready(function() {
	$('.tab-menuitem').click(function() {
		// if ($('body').scrollTop() != 562) {
		// alert($('body').scrollTop() + ' ' + $(".main-content-container").scrollTop());

		$('body').animate({
			scrollTop : $(".main-content-container").offset().top - 60
		}, 1000);
		// }
	});

	$('.back-to-top').click(function() {
		$('body').animate({
			scrollTop : 0
		}, 1000);
	});

});

