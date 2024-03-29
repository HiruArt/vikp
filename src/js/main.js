$(document).ready(function(){

  // checking browser for WEBP
  // hasWebP().then(function () {
  //   $('.webp-img').each(function () {
  //     var webp = $(this).data('webp');
  //     $(this).attr('data-blazy', webp);
  //   });
  // }, function () {
  //   $('.webp-img').each(function () {
  //     var img = $(this).data('img');
  //     $(this).attr('data-blazy',  img );
  //   });
  // });

	// var bLazy = new Blazy({
	// 	src: 'data-blazy'
	// });

	AOS.init({
		duration: 500
	});

	/*validation start*/

	$('form .submit-btn').click(function (e) {
		e.preventDefault();

		if($(this).closest('form').find('input[type="tel"]').length != 0) {
			var inputTel = $(this).closest('form').find('input[type="tel"]');
			if (inputTel.val().indexOf('_') === -1 && inputTel.val() != 0) {
				$(inputTel).closest('.site-input').addClass('correct');
				$(inputTel).closest('.site-input').removeClass('error-field');
			} else {
				$(inputTel).closest('.site-input').removeClass('correct');
				$(inputTel).closest('.site-input').addClass('error-field');
			}
		}

		if($(this).closest('form').find('input[type="email"]')) {
			var reg = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

			var input = $(this).closest('form').find('input[type="email"]');
			var email = $(this).closest('form').find('input[type="email"]').length > 0
				? $(this).closest('form').find('input[type="email"]')
				: false;


			if (email.val() == "" && email !== false) {
				email.closest('.site-input').addClass('error-field');

			} else {
				if (reg.test(email.val()) == false) {
					email.closest('.site-input').addClass('error-field');

				} else {
					email.closest('.site-input').removeClass('error-field');
					$(this.closest('form')).addClass('active');
				}
			}
		}

		$(this).closest('form').find('input[data-valid="name"]').each(function () {
			if($(this).val() === ''){
				$(this).closest('.site-input').addClass('error-field');
				$(this).closest('.site-input').removeClass('correct');
			} else {
				$(this).closest('.site-input').addClass('correct');
				$(this).closest('.site-input').removeClass('error-field');
			}
		});
	});

	var phoneMask = $('input[type="tel"]');
	$(phoneMask).inputmask('+380 (99) 999 99 99');

	/*validation end*/

	/*menu function*/
	$('#menu-btn').click(function(){
		$('.nav__menu-btn--hide, .nav__menu-btn--show').toggleClass('active');
		$('#page').toggleClass('open');
		$('.nav__side-menu-list').removeClass('hide-side-menu');

		if($('#page').hasClass('open')){
			$('.nav__side-menu-1, .nav__side-menu-2').removeClass('active');
		}
	});

	$('.nav__side-menu-link').click(function (e){
		if($(this).hasClass('parent')){
			e.preventDefault();
		}
		$(this).siblings('.nav__side-menu-1').addClass('active');
	});

	$('.nav__side-menu-1-link').click(function (e){
		if($(this).hasClass('parent')){
			e.preventDefault();
		}
		$(this).siblings('.nav__side-menu-2').addClass('active');
	});

	$('.nav__side-menu-1-bar-link').click(function(e){
		$(this).closest('.nav__side-menu-1').removeClass('active');
		$('.nav__side-menu-list').removeClass('hide-side-menu');
	});

	$('.nav__side-menu-2-bar-link').click(function(e){
		$(this).closest('.nav__side-menu-2').removeClass('active');
	});

	$(document).on('click', '.nav__search-btn-i', function () {
		if($('#page').hasClass('open') === false){
			$('#menu-btn').click();
		}
		$('.nav__side-menu-list').removeClass('hide-side-menu');
		$('.nav__side-menu-1, .nav__side-menu-2').removeClass('active');
		$('input.search-form__input').focus();
	});

	$('.nav__menu-link.parent').click(function(e){
		e.preventDefault();
		var sideMenuId = $(this).attr('data-side-menu-id');

		if($('#page').hasClass('open') === false){

			$('#menu-btn').click();
		}
		if(sideMenuId == 0)
			$('.nav__side-menu-list').removeClass('hide-side-menu');
		else
			$('.nav__side-menu-list').addClass('hide-side-menu');

		$('.nav__side-menu-1').removeClass('active');
		$('.nav__side-menu-item[data-side-menu='+ sideMenuId +']').find('.nav__side-menu-1').addClass('active');
	});
	/*menu function end*/

	/*sliders star*/
	$('#big-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true
	});

	$('#our-products-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true,
		asNavFor: '#our-products-slider-menu',
		swipe: false
	});
	$('#our-products-slider-menu').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#our-products-slider',
		dots: false,
		arrows: false,
		vertical: true,
		focusOnSelect: true,
		infinite: true,
		responsive: [

			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 5,
					infinite: true,
					focusOnSelect: true,
					vertical: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					vertical: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					vertical: false,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2,
					vertical: false,
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					vertical: false,
				}
			},
		]
	});

	$('#our-work-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		infinite: true,
		responsive: [

			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				}
			},
		]

	});

	$('#news-item-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	});


	$('#recomended-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		customPaging: function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dot">'+ (i+1) +'/'+ slider.$slides.length + '</a>';
		},
		responsive: [

			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	// $('#more-news-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '#last-news-slider',
	// 	swipe: false
	// });

	$('#last-news-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// asNavFor: '#more-news-slider',
		dots: true,
		customPaging: function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return '<a class="dot">'+ (i+1) +'/'+ slider.$slides.length + '</a>';
		},
		arrows: true,
		focusOnSelect: true,
	});



	function changeImgNews(){
		$('.more-news__img-i').fadeOut();
		setTimeout(function () {
			var lastNewImg = $('#last-news-slider .slick-current .last-news__img').attr('data-news-img');
			$('.more-news__img-i').css('background-image', 'url(' + lastNewImg + ')');
			$('.more-news__img-i').fadeIn("slow");
		}, 400);
	}

	changeImgNews();

	$('#last-news-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setTimeout(function(){
			changeImgNews();
		},100);
	});


	// $('#type-slider').slick({
	// 	slidesToShow: 6,
	// 	slidesToScroll: 6,
	// 	dots: false,
	// 	arrows: true,
	// 	focusOnSelect: true,
	// 	infinite: false,
	// 	accessibility: false,
	// 	centerPadding: '0'
	// });

	var mySwiper = new Swiper ('#type-slider', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			550: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 6,
			},
		}
	});


	var mySwiper = new Swiper ('#winow-slider', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			550: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 6,
			},
		}
	});


	$('.type-block__item:eq(0)').addClass('active');
	var firstTypeImg = $('#type-slider .type-block__item.active').attr('data-type-img');

	$('.type-block-big-slider__img').css('opacity', '0');

	setTimeout(function () {
		$('.type-block-big-slider__img').css('background', 'url("' + firstTypeImg +'")');
	}, 100);

	setTimeout(function () {
		$('.type-block-big-slider__img').css('opacity', '1');
	}, 500);


	$(document).on('click', '#type-slider .type-block__item', function(e){
		$('.type-block__item').removeClass('active');
		$(this).addClass('active');
		var bigTypeImg = $(this).attr('data-type-img');

		$('.type-block-big-slider__img').css('opacity', '0');

		setTimeout(function () {
			$('.type-block-big-slider__img').css('background', 'url("' + bigTypeImg +'")');
		}, 100);

		setTimeout(function () {
			$('.type-block-big-slider__img').css('opacity', '1');
		}, 500);

	});

	/*sliders end*/

	/*popups start*/
		$(document).on('click', 'a[data-modal-class]', function (e) {
			var dataModalId = $(this).attr('data-modal-class');
			console.log(dataModalId);
			$('.popup.' + dataModalId + '').addClass('open');
		});

	$(document).on('click', '.popup__close', function (e) {
			$('.popup ').removeClass('open');
		});

		$(document).on('click', '.popup', function (e) {
			console.log(e.target.classList[0]);
			if(e.target.classList[0] == "popup__body") {
				$('.popup ').removeClass('open');
			}
		});
	/*popups end*/

	$(document).on('click', 'a[data-wtb-tab]', function(e){
		var dataWtbTab = $(this).attr('data-wtb-tab');
		$('a[data-wtb-tab]').removeClass('active');
		$(this).addClass('active');
		$('[data-wtb-content]').removeClass('active');
		$('[data-wtb-content="'+ dataWtbTab +'"]').addClass('active');
	});


	$('.site-input input').change(function(e){
		if($(this).val().length !== 0){
			$(this).siblings('label').addClass('show');
		} else {
			$(this).siblings('label').removeClass('show');
		}
	});

	$('#our-work-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		gallery: {
			enabled: true
		},
		disableOn: 0,
	});

	$('.seo-content__more-btn').click(function (e) {
		$(this).closest('.seo-content').addClass('show');
	});


	$('.footer__subtitle').click(function (e) {
		if($(this).closest('.footer__column').hasClass('active')){
			$('.footer__column').removeClass('active');
		} else {
			$('.footer__column').removeClass('active');
			$(this).closest('.footer__column').addClass('active');
		}
	});


	$('.revolution-right__tab').click(function () {
		$('.revolution-right__tab').removeClass('active');
		$(this).addClass('active');

		$('.revolution-right__content-i').removeClass('active');
		$('.revolution-right__content-i').eq($(this).index()).addClass('active');



	});

	$('.window-slider__img').click(function () {
		$('.window-slider__img').removeClass('active');
		$(this).addClass('active');
		console.log($(this).data('type-img'));
		var img = $(this).data('type-img');

		$('.window-color__img-i').css('opacity', '0');

		setTimeout(function () {
			$('.window-color__img-i').css('background', 'url("' + img +'")');
		}, 100);

		setTimeout(function () {
			$('.window-color__img-i').css('opacity', '1');
		}, 500);


		var img2 = $(this).find('img').attr('src');
		$('.window-slider__bottom').css('background', 'url("' + img2 +'")');

		var name = $(this).attr('data-name');
		$('.window-slider__bottom-t').html(name);

		var num = $(this).attr('data-num');
		$('.window-slider__bottom-c').html(num);
	});

	$('.window-popup__accord-title').click(function () {
		$('.window-popup__accord-i').removeClass('active');
		$(this).parent().toggleClass('active');
	});

	var vidWinFlag = true;
	var numCounFlag = true;
	var scrollItem = 200;

	if($(document).width() < 992){
		scrollItem = 0;
	}

	var target = $('.revolution').length > 0 ? $('.revolution') : false;
	var targetPos = target !== false ? target.offset().top : 0;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;

	var target2 = $('#about-num-count').length > 0 ? $('#about-num-count') : false;
	var targetPos2 = target2 !== false ? target2.offset().top : 0;
	var scrollToElem2 = targetPos2 - winHeight;

	$(window).scroll(function(){
		var winScrollTop = $(this).scrollTop();

		if(winScrollTop > scrollToElem + 200 && $('#video-window').length > 0 && vidWinFlag){
			vidWinFlag = false;

		}

		if(winScrollTop > scrollToElem2 + 200 && $('#about-num-count').length > 0 && numCounFlag){
			console.log(numCounFlag);
			$('.about-numbers__num').each(function () {
				var $this = $(this);
				jQuery({Counter: 0}).animate({Counter: $this.text()}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});

			numCounFlag = false;
		}
	});


	$('.show-video').click(function () {
		$('#video-window').get(0).play()
	})

	AOS.init();

	$('.mfp-iframe').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	/*address and map*/

	$( "#sity" ).selectmenu();

	$('.address-block__office-item').addClass('active');
	$('#sity').on('selectmenuchange', function(){
		choiceAddress();
	});

	$('.address-block__office-name').click(function(e){
		var office = $(this).closest('.address-block__office-item').attr('data-office-id');
		/*check office id from array pin*/
		markers.forEach(function (itemMarker) {
			itemMarker.setAnimation(null);
		});
		pin.forEach(function (item, index) {
			if (item[4] == office) {
				map.setZoom(16);
				map.setCenter({lat: item[1], lng: item[2]});
				markers[index].setAnimation(google.maps.Animation.BOUNCE);
			}
		});
	});


	/*address and map end*/

});

function choiceAddress() {
	var sity = $("#sity option:selected").val();
	$('.address-block__office-item').removeClass('active');
	$('.address-block__office-item[data-address="' + sity + '"]').addClass('active');

	if(sity == 'all'){
		$('.address-block__office-item').addClass('active');
		map.setZoom(6);
		map.setCenter({lat: 49.500474, lng:30.299340});
	} else {
		sityPin.forEach(function (item) {
			if (item[0] == sity) {
				map.setZoom(10);
				map.setCenter({lat: item[1][0], lng: item[1][1]});
			}
		});
	}

}

var sityPin = [
	[
		['kiev'],[ 50.446689, 30.522743]
	],
	[
		['lviv'],[ 49.816547, 24.069165]
	],
	[
		['khmelnytskyi'],[ 49.423717, 26.9922643,]
	]
];

var pin = [
	['Офіційний салон м.Київ 1', 50.447527, 30.421337, 1, 'id1'],
	['Офіційний салон м.Київ 2', 50.416227, 30.459294, 2, 'id2'],
	['Офіційний салон м.Львів 1', 49.861669, 24.028715, 1, 'id3'],
	['Офіційний салон м.Львів 2', 49.816547, 24.069165, 2, 'id4'],
	['Офіційний салон м.Львів 3', 49.784003, 24.066924, 3, 'id5'],
	['Офіційний салон м.Львів 3', 49.423717, 26.9922643, 1, 'id6']
];

var actualSity = pin;

var map = '';
function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		// center: {lat: sityPin[0][1][0], lng: sityPin[0][1][1]}
		center: {lat: 49.500474, lng:30.299340}
	});

	setMarkers(map);
}
var markers = [];
function setMarkers(map) {

	var image = {
		url: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Marker-Outside-Chartreuse-icon.png',
	};


	for (var i = 0; i < actualSity.length; i++) {
		var sity = actualSity[i];
		var marker = new google.maps.Marker({
			position: {lat: sity[1], lng: sity[2]},
			map: map,
			draggable: true,
			icon: image,
			title: sity[0],
			zIndex: sity[3],
			animation: false
		});
		markers.push(marker);

	}
	markers.forEach(function (el, i) {

		var info = new google.maps.InfoWindow({
			content: '<h3>' + actualSity[i][0] + '</h3>'
		});

		el.addListener("click", function(){
			info.open(map, el);
			map.setZoom(16);
			map.setCenter(markers[i].getPosition());
			markers.forEach(function (itemMarker) {
				itemMarker.setAnimation(null);
			});
			markers[i].setAnimation(google.maps.Animation.BOUNCE);
		});

	});

}





















//script fro webp img and background
// var hasWebP = (function () {
//   // some small (2x1 px) test images for each feature
//   var images = {
//     basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
//     lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
//   };
//
//   return function (feature) {
//     var deferred = $.Deferred();
//
//     $("<img>").on("load", function () {
//       // the images should have these dimensions
//       if (this.width === 2 && this.height === 1) {
//         deferred.resolve();
//       } else {
//         deferred.reject();
//       }
//     }).on("error", function () {
//       deferred.reject();
//     }).attr("src", images[feature || "basic"]);
//
//     return deferred.promise();
//   }
// })();






