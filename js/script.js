$(document).ready(function(){
	
	$(window).scroll(function(event){
		var vitribody = $('html,body').scrollTop();
		if (vitribody >= 100) {
			 $('.menu').addClass('cuon');
		}
		else{
			$('.menu').removeClass('cuon');
		}
		if(vitribody >=1944){
			$('footer p').addClass('hienra');
		}
	});
    $('.menu ul li').click(function() {
    	var x = $(this).index()+1;
    	console.log(x); 
    });
    



    $('.menu ul li:nth-child(x) a').on('click', function(e){
     	$('html,body').animate({scrollTop: $('header').offset().top},400, 'easeOutExpo');
     	$('.menu ul li').removeClass('active');
     	$(this).addClass('active');
     	return false;
     });


	// $('.menu ul li:nth-child(2) a').on('click', function(e){
	//      	$('html,body').animate({scrollTop: $('.about').offset().top-100},400, 'easeOutExpo');
	//      	return false;
	//      });
	// $('.menu ul li:nth-child(3) a').on('click', function(e){
	//      	$('html,body').animate({scrollTop: $('.education').offset().top},400, 'easeOutExpo');
	//      	return false;
	//      });
	// $('.menu ul li:nth-child(4) a').on('click', function(e){
	//      	$('html,body').animate({scrollTop: 1899},400, 'easeOutExpo');
	//      	return false;
	//      });

	// $('i.fas.fa-angle-down').on('click', function () {
	// 	$('html,body').animate({scrollTop: 650},400, 'easeOutExpo');
	// })


	// TweenMax.staggerFrom($('ul.nav.main-menu li'), 0.8,{top:-150, opacity:0},0.4);

    });