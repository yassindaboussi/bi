/*
Author       : Dreamguys
Template Name: Dreams Rent - Bootstrap Template
Version      : 1.0
*/

(function($) {
	"use strict";
	
	var $slimScrolls = $('.slimscroll');
	var $wrapper = $('.main-wrapper');
	
	// Sidebar
	
	if($(window).width() <= 991) {
		var Sidemenu = function() {
			this.$menuItem = $('.main-nav a');
		};

		function init() {
			var $this = Sidemenu;
			$('.main-nav a').on('click', function(e) {
				if($(this).parent().hasClass('has-submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('submenu')) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('submenu');
					$(this).next('ul').slideDown(350);
					$(this).addClass('submenu');
				} else if($(this).hasClass('submenu')) {
					$(this).removeClass('submenu');
					$(this).next('ul').slideUp(350);
				}
			});
		}

	// Sidebar Initiate
	
	init();
	}

	// Mobile menu sidebar overlay
	
	$('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});	
	
	$(document).on('click', '.sidebar-overlay', function() {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	$(document).on('click', '#menu_close', function() {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});

	// Select 2
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	if ($('.category-select').length > 0) {
		$(".category-select").select2({
			placeholder: "Choose Category",
			allowClear: false
		});
	}
	
	if ($('.loc-select').length > 0) {
		$(".loc-select").select2({
			placeholder: "Choose Location",
			allowClear: false
		});
	}
	
	if ($('.region select').length > 0) {
		$(".region select").select2({
			placeholder: "Region",
			allowClear: false
		});
	}
		
	// Fade in Scroll 
	
	if($('.main-wrapper .aos').length>0){
		AOS.init({
			duration:1200,
			once:true
		});
	}
	
	// Datepicker	

	if ($.fn.datetimepicker) {
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	} else {
		console.error('Datetimepicker plugin is not available.');
	}
	

	// Timepicker

	if ($.fn.datetimepicker) {
		$('.timepicker').datetimepicker({
			format: "hh:mm:ss",
			icons: {
				up: "fa fa-angle-up",
				down: "fa fa-angle-down",
				next: 'fa fa-angle-right',
				previous: 'fa fa-angle-left'
			}
		});
	} else {
		console.error('Timepicker plugin is not available.');
	}
	

	
	// Scroll Down
	
	$('.price-down').on('click', function() {
		$('html, body').animate({ scrollTop: $("#price").offset().top - 85}, 150); 
	});
	
	//Stick Sidebar
	
	if ($(window).width() > 767) {
		if($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
			  // Settings
			  additionalMarginTop: 30
			});
		}
	}
	
    //Range Slider
	
	if($('.input-range').length > 0) {
		$(".input-range").ionRangeSlider({
			type: "single",
			grid: true,
			min: 0,
			max: 100,
			from: 50,
			to: 100       
		});
	}
	
	$('.input-range').on('input', function () {
        $('.demo span').html(this.value);
    });
	
	//Show Filter
	
	$(".btn.filterbtn").on('click', function() {
		  $(".showfilter").toggleClass("filter-open");
	});		
	
	// Password Eye

	$('.toggle-password').on('click', function() {
		$(this).toggleClass("feather-eye");
		var input = $(".pass-input");
		if (input.attr("type") === "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});


	$('.toggle-password-two').on('click', function() {
		$(this).toggleClass("feather-eye");
		var input = $(".pass-input-two");
		if (input.attr("type") === "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	if($('.toggle-password-three').length > 0) {
		$(document).on('click', '.toggle-password-three', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-input-three");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}

	if($('.toggle-password-four').length > 0) {
		$(document).on('click', '.toggle-password-four', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-input-four");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}

	if($('.toggle-password-five').length > 0) {
		$(document).on('click', '.toggle-password-five', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-input-five");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}

	if($('.toggle-password-six').length > 0) {
		$(document).on('click', '.toggle-password-six', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-input-six");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	
	// Most Popular Cartypes Slider

	if($('.popular-cartype-slider').length > 0) {
		$('.popular-cartype-slider').owlCarousel({
			loop:true,
			margin:24,
			nav:true,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				
				550:{
					items:1
				},
				700:{
					items:3
				},
				1000:{
					items:4
				},
				1200:{
					items:5
				}
			}
		})
	}

	// Recommended Car Rental Deals
	
	if($('.rental-deal-slider').length > 0) {
		$('.rental-deal-slider').owlCarousel({
			loop:true,
			margin:24,
			nav:true,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				
				550:{
					items:1
				},
				700:{
					items:2
				},
				1000:{
					items:3
				}
			}
		})
	}

	//What People Say Slider
	
	if($('.about-testimonials').length > 0) {
		$('.about-testimonials').owlCarousel({
			loop:true,
			margin:24,
			nav:false,
			dots: true,
			// autoplay:true,
			// smartSpeed: 2000,
			navText : ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				
				550:{
					items:1
				},
				700:{
					items:2
				},
				1000:{
					items:2
				}
			}
		})
	}

	// Slick Testimonial Two

	if ($('.detail-bigimg').length > 0) {
		$('.detail-bigimg').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.slider-nav-thumbnails'
		});
	}

	if ($('.slider-nav-thumbnails').length > 0) {
		$('.slider-nav-thumbnails').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.detail-bigimg',
			dots: false,
			arrows: false,
			centerMode: false,
			focusOnSelect: true

		});
	}	

	if($('.car-details-slider').length > 0 ){
		$('.car-details-slider').owlCarousel({
			items:4,
			margin:24,
			nav:true,
			dots:false,
			rtl: false,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				1170:{
					items:3,
					loop:true
				},
				1200:{
					items:3,
					loop:true
				}
			}
		});	
	}

	// Select Favourite
	
	$('.fav-icon').on('click', function() {
		$(this).toggleClass('selected');
	});

	// JQuery counterUp

	if($('.customer-count .counterUp').length > 0) {
		$('.customer-count .counterUp, h4 span').counterUp({
            delay: 15,
            time: 1500
        });
	}

	// Datatable

    if ($('.datatable').length > 0) {
		$('.datatable').DataTable({
			retrieve: true,
			lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
			language: {
				search: ' ',
				searchPlaceholder: "Search",
				info:  "Showing _START_ - _END_ of _TOTAL_ entries",
				"lengthMenu": "_MENU_",
				paginate: {
				  next: 'Next <i class="feather-arrow-right"></i>',
				  previous: '<i class="feather-arrow-left"></i> Prev'  
				}
			},
			"bLengthChange": true,
			"bInfo": false,
			"ordering": false,
			initComplete: (settings, json)=>{
                $('.dataTables_info').appendTo('#tableinfo');
                $('.dataTables_paginate').appendTo('#tablepage');
                $('.dataTables_length').appendTo('#tablelength');
                $('.dataTables_filter').appendTo('#tablefilter');
            },
		});
	} 
	
	// Otp Verfication

	$('.digit-group').find('input').each(function () {
		$(this).attr('maxlength', 1);
		$(this).on('keyup', function (e) {
			var parent = $($(this).parent());

			if (e.keyCode === 8 || e.keyCode === 37) {
				var prev = parent.find('input#' + $(this).data('previous'));

				if (prev.length) {
					$(prev).select();
				}
			} else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
				var next = parent.find('input#' + $(this).data('next'));

				if (next.length) {
					$(next).select();
				} else {
					if (parent.data('autosubmit')) {
						parent.submit();
					}
				}
			}
		});
	});

	$('.digit-group input').on('keyup', function () {
		var self = $(this);
		if (self.val() != '') {
			self.addClass('active');
		} else {
			self.removeClass('active');
		}
	});

	// Tooltip

	if($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}

	// Rent Types

	if ($('.rent-types').length > 0) {
		$(".rent-types").on('change', function(){ 
	        if( $(this).is(":checked")) { 
				$('.rent-radio').removeClass('active');
				$(this).closest('.rent-radio').addClass('active');
	        }
			else {
				$('.rent-radio').removeClass('active');
			}
	    });
	}

	// Chat

	var chatAppTarget = $('.chat-window');
	(function () {
		if ($(window).width() > 991)
			chatAppTarget.removeClass('chat-slide');

		$(document).on("click", ".chat-window .chat-users-list a.open-chat", function () {
			if ($(window).width() <= 991) {
				chatAppTarget.addClass('chat-slide');
			}
			return false;
		});
		$(document).on("click", "#back_user_list", function () {
			if ($(window).width() <= 991) {
				chatAppTarget.removeClass('chat-slide');
			}
			return false;
		});
	})();

})(jQuery);



	