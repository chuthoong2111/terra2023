$('#myCarousel').carousel({
	interval: 3000,
});

// $('.txt-gradient').html(function(i, html) {
//    var chars = $.trim(html).split("");

//    return '<span>' + chars.join('</span><span>') + '</span>';
//  });
//  scroll



//   footer
$(function () {
	var accordionOpen = $('.first_depth p'),
		secondDepth = $('.second_depth');

	accordionOpen.on('click', function () {
		accordionOpen.closest('.first_depth').removeClass('on');
		$(this).closest('.first_depth').addClass('on');

	});
});

// disable scroll body
(function ($) {

	$('.navbar-toggler').on('click', () => {
		$('body').toggleClass('overlay-is-navbar-collapse');
	});

})(window.jQuery);
scroll header

$(window).scroll(function () {
	var sticky = $('.clearHeader'),
		scroll = $(window).scrollTop();
	if (scroll >= 60) {
		sticky.addClass('hideHeader');
		$('body').addClass('pt-body');
	} else {
		sticky.removeClass('hideHeader');
		$('body').removeClass('pt-body');
	}
});






if ($(window).width() > 1200) {
	$('.navbar .dropdown > a').click(function () {
		location.href = this.href;
	});
};
// $(document).ready(function() {
// 	$('ul.navbar-nav a[href="' + this.location.pathname + '"]').parent().addClass('active');
// 	$('.bg-top ul.list-inline a[href="' + this.location.pathname + '"]').parent().addClass('active');
// });

// number
// document.addEventListener("DOMContentLoaded", () => {
// 	function counter(id, start, end, duration) {
// 		let obj = document.getElementById(id),
// 			current = start,
// 			range = end - start,
// 			increment = end > start ? 1 : -1,
// 			step = Math.abs(Math.floor(duration / range)),
// 			timer = setInterval(() => {
// 				current += increment;
// 				obj.textContent = current;
// 				if (current == end) {
// 					clearInterval(timer);
// 				}
// 			}, step);
// 	}
// 	counter("count1", 0, 12, 3000);
// 	counter("count2", 0, 1462, 2000);
// 	counter("count3", 0, 1540, 2000);
// 	counter("count4", 0, 2431, 1000);
// });
$(function () {
	function isScrolledIntoView($elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function count($this) {
		var current = parseInt($this.html(), 10);
		if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
			$this.html(++current);
			$this.data("isCounting", true);
			setTimeout(function () {
				$this.data("isCounting", false);
				count($this);
			}, 10);
		}
	}

	$(".c-section4").each(function () {
		$(this).data('count', parseInt($(this).html(), 10));
		$(this).html('0');
		$(this).data("isCounting", false);
	});

	function startCount() {
		$(".c-section4").each(function () {
			count($(this));
		});
	};

	$(window).scroll(function () {
		startCount();
	});

	startCount();
});
// process bar
import circleProgress from 'simple-circle-progress';
var myEle = document.querySelectorAll("#canvas1, #canvas2, #canvas3, #canvas4");
if (myEle.length > 0) {
	circleProgress({
		canvas: document.getElementById('canvas1'),
		rate: 90,
		orbitStyle: '#f2f2f2',
		circleStyle: '#28c6dc'
	});
	circleProgress({
		canvas: document.getElementById('canvas2'),
		rate: 80,
		orbitStyle: '#f2f2f2',
		circleStyle: '#eec235'
	});
	circleProgress({
		canvas: document.getElementById('canvas3'),
		rate: 71,
		orbitStyle: '#f2f2f2',
		circleStyle: '#f48f44'
	});
	circleProgress({
		canvas: document.getElementById('canvas4'),
		rate: 81,
		orbitStyle: '#f2f2f2',
		circleStyle: '#a4d37a'
	});
}
// slideder
import Splide from '@splidejs/splide';
var myEle = document.querySelectorAll(".hightlight-tour");
if (myEle.length > 0) {
	new Splide('.hightlight-tour', {
		type: 'loop',
		gap: 30,
		rewind: true,
		perPage: 2,
		padding: {
			right: '0',
			left: '0',
		},
		focus: 'center',
		autoplay: true,
		breakpoints: {
			960: {
				gap: 15,
				perPage: 1,
				padding: {
					right: '3rem',
					left: '0',
				},
			},
			1440: {
				perPage: 1,
				padding: {
					right: '10rem',
					left: '10rem',
				},
			},
		}
	}).mount();
}
var dTour = document.querySelectorAll(".another-tour");
if (dTour.length > 0) {
	var options = {
		type: 'slide',
		rewind: true,
		padding: {
			right: '0',
			left: '0',
		},

		autoplay: true,
		breakpoints: {
			767: {
				gap: 15,
				perPage: 1,
				perMove: 1,
				padding: {
					right: '3rem',
					left: '0',
				},
			},
			1199: {
				gap: 15,
				perPage: 2,
				perMove: 2,
				padding: {
					right: '5rem',
					left: '0',
				},
			},
			1920: {
				gap: 30,
				perPage: 3,
				perMove: 3,
				padding: {
					right: '10rem',
					left: '0',
				},
				clones: 0,

				// destroy: true, // or 'completely'
			},
		}
	};
	new Splide('.another-tour', options).mount();
}
// navtabs
$('.nav-tabs a.nav-link').on('shown.bs.tab', function (e) {
	var href = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(href).offset().top - 75
	}, 'fast');
});

// modal
// $('.navbar-nav a.dropdown-item').on('click', function () {
// 	$('.navbar-collapse').collapse('hide');
// 	var href = $(this).attr('href');
// 	$('html, body').animate({
// 		scrollTop: $(href).offset().top - 75
// 	}, 'fast');
// });
////////////////////////////// map////////////////////
// $(function () {
// 	$('.one').each(function () {
// 		$(this).click(function (e) {
// 			var i = $(this).index();
// 			$('.content-map').hide();
// 			$('.content-map:eq(' + i + ')').show();
// 		});
// 	});
// });
// jQuery(function ($) {
// 	$('.card-header').each(function () {
// 		let $card_header = $(this);
// 		let $collapse_element = $card_header.next();
// 		$collapse_element.on('show.bs.collapse', function () {
// 			let $card_header_top = $card_header.offset().top - 100;
// 			let $visible_collapse = $('.collapse.show');
// 			if ($visible_collapse.length) {
// 				let $visible_collapse_top = $visible_collapse.offset().top;
// 				if ($visible_collapse_top < $card_header_top) {
// 					$card_header_top -= $visible_collapse.height();
// 				}
// 			}
// 			$([document.documentElement, document.body]).animate({
// 				scrollTop: $card_header_top
// 			}, 100);
// 		});
// 	});
// });

// add class firts text
// $(".whytext .card").each(function () {
// 	var s = $(this).find(".card-title").html().charAt(0)
// 	$(this).addClass('s.display-4.text-primary')
// })
// import imgaesGrid from './images-grid';
// $(function () {
// 	$('#gallery').imagesGrid({
// 		images: [
// 			'https://unsplash.it/660/440?image=875',
// 			'https://unsplash.it/660/990?image=874',
// 			'https://unsplash.it/660/440?image=872',
// 			'https://unsplash.it/750/500?image=868',
// 			'https://unsplash.it/660/990?image=839',
// 			'https://unsplash.it/660/455?image=838'
// 		],
// 		align: true,
// 		getViewAllText: function (imgsCount) {
// 			return 'View all';
// 		}
// 	});

// });
