;(function($){
	'use strict';

	var win = window,
		doc = document;

	jQuery(doc).ready(function(){
		
		oconnor_content_update();
	
		// Main navigation:
		jQuery('.main-nav__list').superfish({
			hoverClass:    'main-nav__list-visible',
			delay:         300,
			animation:     {opacity: 'show'},
			animationOut:  {opacity: 'hide'}
		});

		jQuery('.main-nav__btn').on('click', function() {
			jQuery(this).toggleClass('open');
			if(jQuery('.main-nav__list').hasClass('open')) {
				jQuery('.main-nav__list').removeClass('open');
			} else {
				jQuery('.main-nav__list').addClass('open');
			}
		});

		// Header sticky:
		if (jQuery('.header-content').size() > 0) {
			jQuery('.header-content').sticky({
				topSpacing: 0,
				zIndex: 300
			});
		}

		// Search:
		jQuery('.search-icon-btn').on('click', function(e) {
			e.preventDefault();
			jQuery(this).toggleClass('open');
			if(jQuery('.search-block__dropdown').hasClass('open')) {
				jQuery('.search-block__dropdown').removeClass('open');
			} else {
				jQuery('.search-block__dropdown').addClass('open');
			}
		});

		// Slider type 1:
		if (jQuery('.blog-slider-01').size() > 0) {
			jQuery('.blog-slider-01').each(function() {
				jQuery(this).nivoSlider({
					directionNav: true,
					controlNav: false,
					effect:'fade',
					pauseTime:4000,
					slices: 1
				});
			});
		}

		// Appoinment popup:
		if (jQuery('.appointment-box-wrapp').size() > 0) {
			jQuery('.available-appoinment-btn').leanModal({
				top : 200, 
				closeButton: '.appointment-popup-close' 
			});
		}

		// Counter:
		var counter_module = jQuery('.shortcode-counter');
		if (counter_module.size() > 0) {
			if (jQuery(win).width() > 760) {
				counter_module.each(function() {
					if (jQuery(this).offset().top < jQuery(win).height()) {
						if (!jQuery(this).hasClass('done')) {
							var set_count = jQuery(this).find('.stat-count').attr('data-count');
							jQuery(this).find('.stat-temp').stop().animate({
								width: set_count
							}, {
								duration: 3000,
								step: function(now) {
									var data = Math.floor(now);
									jQuery(this).parents('.counter-wrapper').find('.stat-count').html(data);
								}
							});
							jQuery(this).addClass('done');
							jQuery(this).find('.stat-count');
						}
					} else {
						jQuery(this).waypoint(function() {
							if (!jQuery(this).hasClass('done')) {
								var set_count = jQuery(this).find('.stat-count').attr('data-count');
								jQuery(this).find('.stat-temp').stop().animate({
									width: set_count
								}, {
									duration: 3000,
									step: function(now) {
										var data = Math.floor(now);
										jQuery(this).parents('.counter-wrapper').find('.stat-count').html(data);
									}
								});
								jQuery(this).addClass('done');
								jQuery(this).find('.stat-count');
							}
						}, {
							offset: 'bottom-in-view'
						});
					}
				});
			} else {
				counter_module.each(function() {
					var set_count = jQuery(this).find('.stat-count').attr('data-count');
						jQuery(this).find('.stat-temp').animate({
							width: set_count
						}, {
							duration: 3000,
							step: function(now) {
								var data = Math.floor(now);
								jQuery(this).parents('.counter-wrapper').find('.stat-count').html(data);
							}
						});
					jQuery(this).find('.stat-count');
				}, {
					offset: 'bottom-in-view'
				});
			}
		}

		// Skills:
		if (jQuery('.shortcode_skills').size() > 0) {
			if (jQuery(win).width() > 760) {
				jQuery('.module_skills').waypoint(function() {
					jQuery('.skill_div').each(function() {
						var set_width = jQuery(this).attr('data-percent');
						jQuery(this).stop().animate({'width': set_width}, 1500);
					});
				}, {offset: '99.99%'});
			} else {
				jQuery('.skill_div').each(function() {
					jQuery('.skill_div').each(function() {
						var set_width = jQuery(this).attr('data-percent');
						jQuery(this).stop().animate({'width': set_width}, 1000);
					});
				});
			}
		}

		// Gallery type 1:
		if (jQuery('.gallery-wrapp').size() > 0) {
		
			// init Isotope:
			var $galleryGrid = jQuery('.gallery-01').isotope({
				itemSelector: '.gallery-01__item',
				layoutMode: 'fitRows'
			});
			
			// layout Isotope after each image loads:
			$galleryGrid.imagesLoaded().progress(function() {
				$galleryGrid.isotope('layout');
			});  
			
			// Filter items on button click:
			jQuery('.gallery-01-filters').on( 'click', '.gallery-01-btn', function() {
				var filterValue = jQuery(this).attr('data-filter');
				$galleryGrid.isotope({ filter: filterValue });
			});
			
			// Change is-checked class on buttons:
			jQuery('.gallery-01-btn-wrapp').each( function(i, buttonGroup) {
				var $buttonGroup = jQuery(buttonGroup);
				$buttonGroup.on( 'click', '.gallery-01-btn', function(e) {
					e.preventDefault();
					$buttonGroup.find('.is-checked').removeClass('is-checked');
					jQuery( this ).addClass('is-checked');
				});
			});
		}

		// Video background:
		var video_bg_tag = jQuery('.video-bg');
		if (video_bg_tag.size() > 0) {
			video_bg_tag.each(function () {
				if (jQuery(this).children().length == 0) {
					jQuery(this).parent().hide();
				}
			});
			jQuery('.play-video').on('click', function(ev) {
				video_bg_tag.each(function() {
					jQuery(this).find('.video-frame').attr('src', jQuery(this).find('.play-video').attr('data-video-url'));
				});
				video_bg_tag.removeClass('show_video_now');
				jQuery(this).parent().find(".video-frame")[0].src += "&autoplay=1";
				ev.preventDefault();
				oconnor_video_background();
				jQuery(this).parent('.video-bg').addClass('show_video_now');
			});
		}

		// Audio player:
		if(jQuery('.music-post').size() > 0) {
			var mediaElements = document.querySelectorAll('audio');
			for (var i = 0, total = mediaElements.length; i < total; i++) {
				var features = ['playpause', 'progress', 'volume'];
				// To demonstrate the use of Chromecast with audio
				if (mediaElements[i].tagName === 'AUDIO') {
					features.push('chromecast');
				}
				new MediaElementPlayer(mediaElements[i], {
					// This is needed to make Jump Forward to work correctly
					pluginPath: 'https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.5/',
					shimScriptAccess: 'always',
					autoRewind: false,
					features: features,
					currentMessage: 'Now playing:'
				});
			}
		}
		
		// Back to Top:
		jQuery(win).on('scroll', function() {
			if (jQuery(win).scrollTop() > 0) {
				jQuery('.back2top').fadeIn();
			} else {
				jQuery('.back2top').fadeOut();
			}
			var bottom_pad = parseInt(jQuery('.footer_wrapper').height())+parseInt(jQuery('.footer_wrapper').attr('data-pad-top'))+parseInt(jQuery('.footer_wrapper').attr('data-pad-bottom')) + 30;
			if (jQuery(win).scrollTop() > jQuery(doc).height() - jQuery(win).height() - bottom_pad) {
				jQuery('.back2top').css({'bottom': bottom_pad+'px'});
			} else {
				jQuery('.back2top').css({'bottom': '30px'});
			}
		});
		jQuery('.back2top').on('click', function() {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});

		// Contact form
		if (jQuery('.contact_form').size() > 0) {
			jQuery("#ajax-contact-form").on("submit", function () {
				var str = $(this).serialize();
				var result = '';
				$.ajax({
					type: "POST",
					url: "contact_form/contact_process.php",
					data: str,
					success: function (msg) {
						// Message Sent - Show the 'Thank You' message and hide the form
						if (msg == 'OK') {
							console.log("message has been sent to ")
							result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
							jQuery("#fields").hide();
						} else {
							result = msg;
						}
						jQuery('#note').html(result);
					}
				});
				return false;
			});
		}

		setTimeout("gt3_menu_line();", 50);

		//Blank Anchors
		jQuery('a[href="#"]').on('click', function (e) {
			e.preventDefault();
		});

		// Testimonials Rotators
		if (jQuery('.testimonials_rotators').length) {
			jQuery('.testimonials_rotators').slick({
				dots: true,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 2,
				slidesToScroll: 2,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}

		if (jQuery('.testimonial_rotator').length) {
			jQuery('.testimonial_rotator').slick({
				dots: true,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}

		// GT3 Popup Video
		gt3_popup_video();

		jQuery('body').addClass('page-loaded');

	});

	jQuery(win).resize(function(){
		
		// Video BG:
		oconnor_content_update();
		
		// Video BG:
		oconnor_video_background();
		setTimeout("oconnor_video_background();", 1000);
		
	});

	jQuery(win).load(function() {});

}(jQuery));

// Menu line:
function gt3_menu_line(){
	var menu = jQuery('.main-nav__list');
	if (menu.length) {
		menu.each(function(){
			var menu = jQuery(this);
			var current = '';
			menu.append('<span class="menu_item_line"></span>');
			var menu_item = menu.find('> .menu-item');
			var currentItem = menu.find('> .current-menu-item');
			var currentItemParent = menu.find('> .current-menu-ancestor');
			var line = menu.find('.menu_item_line');
			if (currentItem.length || currentItemParent.length) {
				current = currentItem.length ? currentItem : (currentItemParent.length ? currentItemParent : '');
				line.css({width: current.find('>a').outerWidth()});
				line.css({left: current.find('>a').offset().left - menu.offset().left});
			}
			menu_item.mouseenter(function(){
				line.css({width: jQuery(this).find('> a').outerWidth()});
				line.css({left: jQuery(this).find('> a').offset().left - jQuery(this).parent().offset().left});
			});
			menu.mouseleave(function(){
				if (current.length) {
					line.css({width: current.find('> a').outerWidth()});
					line.css({left: current.find('> a').offset().left - menu.offset().left});
				} else {
					line.css({width:'0'});
					line.css({left:'100%'});
				}
			});
		})
	}
}

// Video background
function oconnor_video_background() {
	jQuery('.video-bg').each(function () {
		jQuery(this).find('iframe').css({'height': jQuery(this).height() + 'px'});
	});
}
function oconnor_content_update() {
	var frame16_10_tag = jQuery('.frame16x10');
	if (frame16_10_tag.size() > 0) {
		oconnor_iframe16x10(frame16_10_tag);
	}
}
function oconnor_iframe16x10(frame_class) {
	frame_class.each(function() {
		jQuery(this).height((jQuery(this).width() / 16) * 10.5);
	});
}

function gt3_popup_video() {
	var swipebox = jQuery('.swipebox-video, .swipebox');
	if (swipebox.length) {
		swipebox.swipebox({
			useCSS: true, // false will force the use of jQuery for animations
			useSVG: true, // false to force the use of png for buttons
			initialIndexOnArray: 0, // which image index to init when a array is passed
			hideCloseButtonOnMobile: false, // true will hide the close button on mobile devices
			removeBarsOnMobile: true, // false will show top bar on mobile devices
			hideBarsDelay: 3000, // delay before hiding bars on desktop
			videoMaxWidth: 1140,
			autoplayVideos: false,
			beforeOpen: function () {}, // called before opening
			afterOpen: null, // called after opening
			afterClose: function () {}, // called after closing
			loopAtEnd: false // true will return to the first image after the last image is reached
		});
	}
}