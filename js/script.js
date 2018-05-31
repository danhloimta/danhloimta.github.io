$(document).ready(function(){
	
	new WOW().init();
	
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
    
    $('#nav li a').click(function(event) {
    	$('.about, .resume').removeClass('trai');
    	$('.resume').removeClass('phai');
    	$('.contactme').removeClass('xuong');
    	return false;
    });

    $('#nav li:nth-child(2) a').click(function(event) {
    	$('.about').toggleClass('trai');
    	return false;
    });

    $('#nav li:nth-child(3) a').click(function(event) {
     	$('.resume').toggleClass('phai');

    	var elem  = $("#html");   
		var width = 1;
		var html  = setInterval(frame, 40);
		var css   = setInterval(frame2,40);
		var js   = setInterval(frame3,40);
		var php   = setInterval(frame4,40);
		
		function frame() {
		    if (width >= 90) {
		      clearInterval(html);
		    } else {
		      width++; 
		      elem.css('width', width + '%');
		    }
		  }
		 function frame2(){
		 	 if (width >= 85) {
		      clearInterval(css);
		    } else {
		      width++; 
		      $("#css").css('width', width + '%');
		    }
		 }
		 function frame3(){
		 	 if (width >= 50) {
		      clearInterval(js);
		    } else {
		      width++; 
		      $("#js").css('width', width + '%');
		    }
		 }
		 function frame4(){
		 	 if (width >= 45) {
		      clearInterval(php);
		    } else {
		      width++; 
		      $("#php").css('width', width + '%');
		    }
		 }
    	return false;
    });

    $('#nav li:nth-child(5) a').click(function(event) {
    	$('.contactme').toggleClass('xuong');
    	return false;
    });
   
   $('#nav li a').click(function(event) {
   		$('#nav li a').removeClass('active');
   		$(this).addClass('active');
   });
   

});