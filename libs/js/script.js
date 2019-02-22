$('.header .menu li a').on('click', function(){
	var classsname = $(this).attr("data-target");
	$('html').animate({
		scrollTop: $(classsname).offset().top
	}, 1000);
});

$('.slider').owlCarousel({
	items: 1,
	nav: true,
	loop: true,
	autoplay: true,
});

$(window).scroll(function() {
	var scroll_Height = window.pageYOffset;

	if (scroll_Height > 80) {
		jQuery('header').addClass('fixed-header');
	} else {
		jQuery('header').removeClass('fixed-header');
	}
});


$('.header #nav').on('show.bs.collapse', function(){
	$('.header .navbar').addClass('open');
});
$('.header #nav').on('hide.bs.collapse', function(){
	$('.header .navbar').removeClass('open');
});

let $btn = $('#topcontrol .btn-special');

$btn.on('click', function(){
	$('html').animate({
		scrollTop: 0
	}, 1000);
});


$(window).on('scroll', function(){
	if(scrollY > 800){
		$btn.fadeIn();
	}else{
		$btn.fadeOut();
	}
})