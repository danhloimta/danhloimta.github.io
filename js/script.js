$(document).ready(function(){
	
	
    $('.owl-carousel').owlCarousel({
			loop: true,
			nav: false,
			items:1,
			autoplay:true,
			dots: false,
			autoplayHoverPause: false,
			animateOut: 'zoomOut',
			animateIn: 'zoomIn',
			autoplayTimeout: 3000
		});
    $('#nav li:nth-child(2) a').click(function(event) {
    	$('.about').toggleClass('trai');
    	return false;
    });
   
    });