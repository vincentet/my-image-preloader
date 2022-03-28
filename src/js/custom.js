var globalFunc = {
	init: function(){
		globalFunc.resize();
	},
	get_biggest: function(elements){
		//get all elements with class and get the biggest box
		var biggest_height = 0;
		for ( var i = 0; i < elements.length ; i++ ){
			var element_height = $(elements[i]).outerHeight();
			//compare the height, if bigger, assign to variable
			if(element_height > biggest_height ) biggest_height = element_height;
		}
		return biggest_height;
	},
	resize: function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();

		// STICKY FOOTER
		var headerHeight = $('header').outerHeight();
		var footerHeight = $('footer').outerHeight();
		var footerTop = (footerHeight) * -1;
		$('footer').css({marginTop: footerTop});
		$('#main-wrapper').css({paddingBottom: footerHeight});

		// for vertically middle content
		$('.bp-middle').each(function() {
			var bpMiddleHeight = $(this).outerHeight() / 2 * - 1;
			$(this).css({marginTop: bpMiddleHeight});
		});

		// for equalizer
		$('.classname').css({minHeight: 0});
		var ClassName = globalFunc.get_biggest($('.classname'));
		$('.classname').css({minHeight: ClassName});
	},
	touch: function(){
		if (Modernizr.touch) {
			$('html').addClass('bp-touch');
		}
	},

	parallaxImage: function(){
		//custom parallax scroll
		function runParallax(){
			var winTop = $(window).scrollTop();
			var parSpeed = winTop * 0.35;
			var parSpeed2 = winTop * 0.05;

			$('.header-banner .img-container').css({
				"top" : parSpeed+"px",
			});
			$('.header-banner .h-b-text').css({
				"top" : 50 + parSpeed2+"%",
			});
		}
		$(window).on('scroll', runParallax);
		runParallax();
	},

	clickToLayer: function(){
		var scrollables = $('html, body');

		function doScroll(event){
			var link = $(this).attr('href');
			var top = $(link).offset().top;
			event.preventDefault();

			scrollables.animate({
				scrollTop : top
			});
		};

		$('.scroll-to-layer').on('click', doScroll)
	}

};



$(window).resize(function() {
	globalFunc.init();
});

$(document).ready(function() {
	globalFunc.touch();
	globalFunc.init();
	globalFunc.parallaxImage();
	globalFunc.clickToLayer();
	console.log('DOM is ready');

});

$(window).on('load', function() {
	globalFunc.init();
	isLoaded = true;

	// var placeholder = $('.placeholder');

	// placeholder.each(function(){
	// 	var dataLargeImage = $(this).attr('data-large');
	// 	var imageLarge = $('<img src="'+dataLargeImage+'"/>').on('load', function(){
	// 		$(this).addClass('loaded').prev('.img-small').fadeOut(3000);
	// 	});
	// 	$(this).append(imageLarge);
	// });


});

// preloader once done
Pace.on('done', function(){
	// totally hide the preloader especially for IE
	setTimeout(function() {
		$('.pace-inactive').hide();
	}, 500);
	console.log('pace is done');
});

// window.onload = function() {
//
//   var placeholder = document.querySelector('.placeholder'),
//       small = placeholder.querySelector('.img-small')
//
//   // 1: load small image and show it
//   var img = new Image();
//   img.src = small.src;
//   img.onload = function () {
//    small.classList.add('loaded');
//   };
//
//   // 2: load large image
//   var imgLarge = new Image();
//   imgLarge.src = placeholder.dataset.large;
//   imgLarge.onload = function () {
//     imgLarge.classList.add('loaded');
//   };
//   placeholder.appendChild(imgLarge);
// }
