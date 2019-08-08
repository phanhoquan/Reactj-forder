(function ($) {

	$(function () {

	});

	$(window).load(function () {
		$(".child.active").css("background-color", "#f68315");

		var $_adminBar = $('#wpadminbar'),
			$_body = $('body'),
			$_wrapper = $('#wrapper'),
			$_window = $(this),
			isHomePage = $_body.hasClass('home'),
			bodyInitTop = ($_adminBar.length > 0) ? $_adminBar.outerHeight() : 0,
			currentScrollTop = 0;

		function init() {
			disableClick();
			contactFormHook();
		}
		init();

		function isIe() {
			var pattern = /Trident\/[0-9]+\.[0-9]+/;

			return pattern.test(navigator.userAgent);
		}

		function isEdge() {
			var pattern = /Edge\/[0-9]+\.[0-9]+/;

			return pattern.test(navigator.userAgent);
		}

		function disableClick() {
			$('.noclick').on('click', function () {
				return false;
			});
		}

		function contactFormHook() {
			if ($('.wpcf7').length < 1) return false;

			var wpcf7Elm = document.querySelector('.wpcf7');

			wpcf7Elm.addEventListener('wpcf7invalid', function (event) {
				$('.wpcf7 .wpcf7-not-valid').eq(0).focus();
			}, false);
		}

		function scrollToPosition(pos, second) {
			$('html, body').animate({
				scrollTop: pos
			}, second * 1000);
		}

		$(".btn-logout a").click(function () {
			$(".btn-logout a").removeClass("active");
			$(this).addClass('active');
		});

		$(".nav>ul>li.child").click(function (e) {
			e.stopPropagation();
			var tab = true;
			if ($(this).hasClass("active")) {
				tab = true;
			} else {
				tab = false;
			}
			$(".nav ul li.child").removeClass("active");
			if (tab) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});



		$(".dropdown-menu>li.grandChild").click(function (e) {
			e.stopPropagation();
			$(".dropdown-menu>li.grandChild").css("background-color", "#f68315");
			$(".nav ul li.child").css({
				"background-color": "#f68315",
			});
			$(".dropdown-menu>li.grandChild").removeClass('active');
			$(this).addClass('active');
			$(this).css("background-color", "#bf6910");

		});

		var eventstatus = $('.page-index').outerWidth() - $('.banner-menu').outerWidth();
		$(".event-status").css("width", eventstatus);

		var eventstatus = $('.page-index').outerWidth() - $('.banner-menu').outerWidth();
		$(".event-status").css("width", eventstatus);

		var mainwrap = $('.page-index').outerWidth() - $('.banner-menu').outerWidth() - 1;
		$(".main-wrap").css("width", mainwrap);

		var maincontent = mainwrap - $('.navbar-left').outerWidth();
		$(".main-content").css("width", maincontent);

		// Create chart instance
		$(".custome-datatable").DataTable({
			responsive: true,
			autoWidth: true,
			searching: false, // Enable / disable Search
			lengthChange: true, //Enable / disable paging display length
			ordering: false, //Enable / disable order
			info: false, // Enable / disabl info
			pagingType: "full_numbers",
			sLengthMenu: "Show _MENU_",
			language: {
				sLengthMenu: "_MENU_개씩 보기",
				aria: {
					paginate: {
						first: 'First',
						previous: 'Previous',
						next: 'Next',
						last: 'Last'
					}
				},
				paginate: {
					first: '«',
					previous: '‹',
					next: '›',
					last: '»'
				},
			}
		});

		// nice scroll 
		$(".nicescroll").niceScroll();
		$(window).resize(function () {
			var eventstatus = $('.page-index').outerWidth() - $('.banner-menu').outerWidth();
			$(".event-status").css("width", eventstatus);
			// Resize
			var mainwrap = $('.page-index').outerWidth() - $('.banner-menu').outerWidth() - 1;
			$(".main-wrap").css("width", mainwrap);
			var maincontent = mainwrap - $('.navbar-left').outerWidth();
			$(".main-content").css("width", maincontent);

		});

	});

})(jQuery);