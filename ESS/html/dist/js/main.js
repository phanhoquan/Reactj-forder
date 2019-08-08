(function ($) {
	$(function () {});

	$(window).load(function () {

		var $_adminBar = $('#wpadminbar'),
			$_body = $('body'),
			$_wrapper = $('#wrapper'),
			$_window = $(this),
			isHomePage = $_body.hasClass('home'),
			bodyInitTop = ($_adminBar.length > 0) ? $_adminBar.outerHeight() : 0,

			$bat = document.querySelector("#bat-skills"),
			currentScrollTop = 0;

		function init() {
			disableClick();
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

		function scrollToPosition(pos, second) {
			$('html, body').animate({
				scrollTop: pos
			}, second * 1000);
		}

		function setRateElement(objects, x, y) {
			var w = x || 5;
			var h = y || 3;
			// objects.height(objects.width() * h / w);
			objects.each(function () {
				$(this).height($(this).outerWidth() * h / w);
			});
		}

		function getRateElement() {
			setRateElement($(".imgResize-5-4"), 5, 4);
			setRateElement($(".imgResize-8-5"), 8, 5);
			setRateElement($(".imgResize-23-8"), 23, 8);
		}
		getRateElement();

		//Popup Alert Logout
		$("#alert_detail").fancybox({

			toolbar: false,
			smallBtn: true,
			iframe: {
				preload: false
			},
			btnTpl: {
				smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
					"</button>"
			},
			afterShow: function () {
				getRateElement();
			}
		});

		/**event notification */
		$("#event-notification").fancybox({

			toolbar: false,
			smallBtn: true,
			iframe: {
				preload: false
			},
			btnTpl: {
				smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
					"</button>"
			},
			autoFocus: false,
			afterShow: function () {
				getRateElement();
			}
		});

		// Dialog Popup
		dialog = $("#form-edit_info_detail_popup").dialog({
			autoOpen: false,
			modal: true,
			resizeable: true,
			buttons: {
				수정: function () {
					dialog.dialog("close");
				},
			},
			close: function () {
				form[0].reset();
			},

		});
		$("#edit_info_detail_popup").click(function () {
			$("#wrapper").addClass("blur");
		});
		form = dialog.find("form").on("submit", function (event) {
			event.preventDefault();
		});

		$("#cancel_dialog").on("click", function () {
			dialog.dialog("close");
		});

		$("#close_form-edit_info").on("click", function () {
			dialog.dialog("close");
		});

		$("#edit_info_detail_popup").on("click", function () {
			dialog.dialog("open");
		});

		$('#form-edit_info_detail_popup').on('dialogclose', function () {
			$("#wrapper").removeClass("blur");
		});

		// Tooltip
		$(".popupBtn").each(function () {

			$(".popupBtn").mouseover(function () {
				$(this).siblings('.mode_popupbox').show();
			});
			$(".popupBtn").mouseleave(function () {
				$(this).siblings('.mode_popupbox').hide();
			});
		});

		// Back To Top
		$('#return-to-top').click(function () { // When arrow is clicked
			$('body,html').animate({
				scrollTop: 0 // Scroll to top of body
			}, 500);
		});

		// ===== Resize ==== 
		$(window).resize(function () {

			function getRateElement() {
				setRateElement($('.imgResize-5-4'), 5, 4);
				setRateElement($('.imgResize-8-5'), 8, 5);
				setRateElement($('.imgResize-23-8'), 23, 8);
			}
			getRateElement();

		});

		// ===== Scroll to Top ==== 
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
				$('#return-to-top').fadeIn(200); // Fade in the arrow
			} else {
				$('#return-to-top').fadeOut(200); // Else fade out the arrow
			}
		});

	});

})(jQuery);