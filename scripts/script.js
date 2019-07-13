(function() {
	$(window).scroll(function() {

	var $sideNav = $('.side-navigation');

	var scroll = $(this).scrollTop();

	var vh = $(this).height();
	
	if(scroll > vh / 3) {
		$sideNav.addClass('seen');
	} else {
		$sideNav.removeClass('seen');
	}

	var $welcomeSection = $('.welcome-section').height(),
		$aboutSection = $('.about-section').height(),
		$blogSection = $('.blog-section').height(),
		$photoSection = $('.photo-section').height(),
		$contactsSection = $('.contacts-section').height();

	var $sideNavItem = $('.side-navigation__item');

	if(scroll > $welcomeSection / 2) {
		$sideNavItem.eq(1).addClass('active').siblings().removeClass('active');
		$sideNavItem.css({
			"border-color": "white"
		});
		$(".side-navigation__item.active").css({
			"background-color": "white"
		})
	} if(scroll > $aboutSection + $welcomeSection - 100) {
		$sideNavItem.eq(2).addClass('active').siblings().removeClass('active');
		$sideNavItem.css({
			"border-color": "#68238e"
		});
	} if(scroll >$blogSection + $aboutSection + $welcomeSection - 100) {
		$sideNavItem.eq(3).addClass('active').siblings().removeClass('active');
	} if(scroll > $photoSection + $blogSection + $aboutSection + $welcomeSection - 200) {
		$sideNavItem.eq(4).addClass('active').siblings().removeClass('active');
	}

});

})();

(function() {
	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.mobile-navigation').toggleClass('is-open');
	});
})();

(function() {
	var $slides = $('ul.slides li');
	var $slidesNavItem = $('ul.slides-navigation li');

	var current = 1;
	var length = $slides.length;

	var interval = setInterval(function() {

		if($slides.eq(current).hasClass('active')) {
			current++;
		} else {
			$slides.eq(current).addClass('active').siblings().removeClass('active');
			$slidesNavItem.eq(current).addClass('active').siblings().removeClass('active');
			current++; 
		}

		if(current === length) {
			current = 0;
		}
	}, 5000);

	$slidesNavItem.on('click', function() {
		clearInterval(interval);
		current = $(this).index();

		$slides.eq(current).addClass('active').siblings().removeClass('active');
		$slidesNavItem.eq(current).addClass('active').siblings().removeClass('active');
	});

})();

(function() {
	console.log($('.about-section').height());
	console.log($('.blog-section').height());
})();


//Site Navigation - scrolling 

(function() {

	var $htmlBody = $('html, body');

	$('.home-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.welcome-section').offset().top
		}, 'slow');
	});

	$('.about-link, .show-me').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.about-section').offset().top
		}, 'slow');
	});	

	$('.news-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.blog-section').offset().top
		}, 'slow');
	});

	$('.photos-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.photo-section').offset().top
		}, 'slow');
	});

	$('.contacts-link').on('click', function(e) {
		e.preventDefault();
		$htmlBody.animate({
			scrollTop: $('.contacts-section').offset().top
		}, 'slow');
	});

	$('.mobile-navigation').find('li').on('click', function() {
		$(this).closest('ul').removeClass('is-open');
	});
})();


//Blog-news section menu

(function() {

	var $entry = $('.entries-holder');

	$('.js-blog-section-nav__item').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$entry.eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
})();


//Image viewer

(function() {
	var $bodyOverlay = $('.body-overlay'),
		$imageViewer = $('.image-viewer'),
		selectedImgIndex,
		$imgLength = $(".photos-wrapper--general .photo-view").length,
		$currentImage = $('.current-image');

	$('.photo-view').on('click', function() {
		$this = $(this);
		selectedImgIndex = $this.index();
		$bodyOverlay.add($imageViewer).fadeIn("fast", function() {
			$currentImage.attr("src", $this.attr("src"));
		});
	});

	$('.left-controller').on('click', function() {
		$currentImage.attr("src", $('.photo-view').eq(selectedImgIndex - 1)[0].src);
		selectedImgIndex--;
		if(selectedImgIndex === 0) {
			selectedImgIndex = $imgLength - 1;
		}
	});

	$('.right-controller').add($currentImage).on('click', function() {
		$currentImage.attr("src", $('.photo-view').eq(selectedImgIndex + 1)[0].src);
		selectedImgIndex++;
		if(selectedImgIndex === $imgLength - 1) {
			selectedImgIndex = 0;
		}
	});

	$('.close-btn').add($bodyOverlay).on('click', function() {
		$bodyOverlay.add($imageViewer).fadeOut("fast");
		$currentImage.attr("src", "");
	});
})();

(function() {
	$('.js-schedule-nav-item').on("click", function(e) {
		e.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');

		$("."+$(this).data("table")).addClass("active").siblings("table").removeClass("active");
	});
})();