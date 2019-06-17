$(document).ready(function() {

	// sticky header when scroll down
	var $navigation = $('.navigation');
	var $sticky = $navigation.after($navigation.clone().addClass('sticky'));    // creat a sticky header

    $(window).on('scroll', function(){
        var $scrolltop = $(window).scrollTop();
        var body = $('body');
        body.toggleClass('scroll', ($scrolltop > 450));
        body.removeClass('menu-active');
        
        if ($scrolltop > 400) {
            $('#totop').fadeIn(400);
        } else {
            $('#totop').stop().fadeOut(200);
        }
    });
    

	// nav bar animation
	var $el, leftPos, newWidth;
	$(".main-nav").append("<li class='nav-bar'></li>");

	var $magicLine = $(".nav-bar");

	function position_apply() {
		$magicLine.width($(".current-item").width())
			.css("left", $(".current-item a").position().left)
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
	}

	position_apply();


	$(window).resize(function () {     	// to prevent the bug when window resizing
		position_apply();
	});


	$(".main-nav li").find("a").hover(
		function () {
			$el = $(this);
			leftPos = $el.position().left;
			newWidth = $el.parent().width();

			$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
			}, 300);
		},
		function () {
			$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
			});
		}
	);
	
    // smooth scrolling
    
    $('.main-nav li a[href^="#"]').on('click', function(e){
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top -40
            }, 800);
        }
    });
    
    $('.button a[href^="#"]').on('click', function(e){
        e.preventDefault();
        
        var target = $(this.hash);
        
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top -40
            }, 1200);
        }
    });
    
    $('.js--menu-trigger').on('click', function(){
        $('body').toggleClass('menu-active');
    });
	
	// slick slider setting
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: '<i class="ion-ios-arrow-back slider-ar prev-arrow"></i>',
		nextArrow: '<i class="ion-ios-arrow-forward slider-ar next-arrow"></i>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});
	
	// totop
    
    $('#totop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
	
	// lean modal setting
	$("#drop-msg").leanModal({
		top: 0,
		overlay: 0.8,
		closeButton: ".modal-close"
	});
    
    /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        $(this.element).addClass('animated zoomIn');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $(this.element).addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $(this.element).addClass('animated bounceInLeft');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $(this.element).addClass('animated pulse');
    }, {
        offset: '70%'
    });
    
});