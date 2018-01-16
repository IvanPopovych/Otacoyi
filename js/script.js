$(document).ready(function(){


    $('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });


	$('.search').click(function(){
			$('.search-click').toggleClass('open');
			if($('.menu').is((':visible'))){
			    $('.menu').hide();
                $( ".cross" ).hide();
                $( ".hamburger" ).show();
            }
	});
	$('.search-click button').click( function(){
		$('.search-click').toggleClass('open');
	});

	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
        navText: ["<img src='img/slim-left.png'>","<img src='img/slim-right.png'>"],
        loop:true,
		autoplay: true
	});


	// menu mobile
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});

