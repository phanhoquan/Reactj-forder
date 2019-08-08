(function ($) {
		$(function () {
				// $.fn.ProgressBar = function () {
				// 	return this.each(function () {
				// 		var $this = $(this),
				// 			percent = $this.data('percent'),
				// 			width = 0,
				// 			start = 0;
				// 		var i = setInterval(function () {
				// 			if (width >= percent) {
				// 				$this.find('.state-progress-bar').css('width', width + '%');
				// 			} else {
				// 				width++;
				// 				$this.find('.state-progress-bar').css('width', width + '%');
				// 			}
				// 			if (start <= percent * 2) {
				// 				if (start % 2 == 0)
				// 					$this.find('.progress-value').html(start / 2 + '%');
				// 				start++;
				// 			} else {
				// 				clearInterval(i);
				// 			}
				// 		}, 1);
				// 	});
				// };
				/** End Skillbar */
		});

		$(window).load(function () {

				// var $_adminBar = $('#wpadminbar'),
				// 	$_body = $('body'),
				// 	$_wrapper = $('#wrapper'),
				// 	$_window = $(this),
				// 	isHomePage = $_body.hasClass('home'),
				// 	bodyInitTop = ($_adminBar.length > 0) ? $_adminBar.outerHeight() : 0,

				// 	$bat = document.querySelector("#bat-skills"),
				// 	currentScrollTop = 0;

				// function init() {
				// 	disableClick();
				// }
				// init();

				// function isIe() {
				// 	var pattern = /Trident\/[0-9]+\.[0-9]+/;

				// 	return pattern.test(navigator.userAgent);
				// }

				// function isEdge() {
				// 	var pattern = /Edge\/[0-9]+\.[0-9]+/;

				// 	return pattern.test(navigator.userAgent);
				// }

				// function disableClick() {
				// 	$('.noclick').on('click', function () {
				// 		return false;
				// 	});
				// }

				// function scrollToPosition(pos, second) {
				// 	$('html, body').animate({
				// 		scrollTop: pos
				// 	}, second * 1000);
				// }

				// function setRateElement(objects, x, y) {
				// 	var w = x || 5;
				// 	var h = y || 3;
				// 	// objects.height(objects.width() * h / w);
				// 	objects.each(function () {
				// 		$(this).height($(this).outerWidth() * h / w);
				// 	});
				// }

				// function getRateElement() {
				// 	setRateElement($(".imgResize-5-4"), 5, 4);
				// 	setRateElement($(".imgResize-8-5"), 8, 5);
				// 	setRateElement($(".imgResize-23-8"), 23, 8);
				// }
				// getRateElement();

				// //  Checked All
				// $('.checked').on('click', function () {
				// 	if (this.checked) {
				// 		$('.checkbox').each(function () {
				// 			this.checked = true;
				// 		});
				// 	} else {
				// 		$('.checkbox').each(function () {
				// 			this.checked = false;
				// 		});
				// 	}
				// });

				// $('.checkbox').on('click', function () {
				// 	if ($('.checkbox:checked').length == $('.checkbox').length) {
				// 		$('.checked').prop('checked', true);
				// 	} else {
				// 		$('.checked').prop('checked', false);
				// 	}
				// });

				// $('.check-all').on('click', function () {
				// 	$('.check-box').each(function () {
				// 		this.checked = true;
				// 	});
				// });
				// $('.check-off').on('click', function () {
				// 	$('.check-box').each(function () {
				// 		this.checked = false;
				// 	});
				// });

				// // Calenda
				// $.fn.datepicker.dates.en = {
				// 	days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
				// 	daysShort: ["일", "월", "화", "수", "목", "금", "토"],
				// 	daysMin: ["일", "월", "화", "수", "목", "금", "토"],
				// 	months: ["일월", "이월", "삼월", "사월", "오월", "유월", "칠월", "팔월", "구월", "시월", "십일월", "십이월"],
				// 	monthsShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
				// 	today: "Today",
				// 	clear: "Clear",
				// 	format: "yyyy.mm.dd",
				// 	titleFormat: "yyyy MM",
				// 	/* Leverages same syntax as 'format' */
				// 	weekStart: 0
				// };
				// $('.date').datepicker({
				// 	autoclose: true
				// });
				// $('.month').datepicker({
				// 	format: "yyyy.mm",
				// 	startView: "months",
				// 	minViewMode: "months",
				// 	autoclose: true
				// });
				// $('.yearly').datepicker({
				// 	format: "yyyy",
				// 	startView: "years",
				// 	minViewMode: "years",
				// 	autoclose: true,
				// });
				// $('.selectpicker').selectpicker();

				// //Popup Alert Logout
				// $("#alert_detail").fancybox({

				// 	toolbar: false,
				// 	smallBtn: true,
				// 	iframe: {
				// 		preload: false
				// 	},
				// 	btnTpl: {
				// 		smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
				// 			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
				// 			"</button>"
				// 	},
				// 	afterShow: function () {
				// 		getRateElement();
				// 	}
				// });


				// /**event notification */
				// $("#event-notification").fancybox({

				// 	toolbar: false,
				// 	smallBtn: true,
				// 	iframe: {
				// 		preload: false
				// 	},
				// 	btnTpl: {
				// 		smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
				// 			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
				// 			"</button>"
				// 	},
				// 	autoFocus: false,
				// 	afterShow: function () {
				// 		getRateElement();
				// 	}
				// });

				// // search nav
				// $("#hourly").click(function () {
				// 	$("#day").show();
				// 	$(".option").show();
				// 	$("#month").hide();
				// 	$(".clock").show();
				// 	$("#month-start").hide();
				// 	$("#month-end").hide();
				// 	$("#year").hide();
				// 	$("#year-start").hide();
				// 	$("#year-end").hide();
				// });
				// $("#glance").click(function () {
				// 	$("#month").show();
				// 	$("#day").hide();
				// 	$(".option").hide();
				// 	$(".clock").hide();
				// 	$("#month-start").hide();
				// 	$("#month-end").hide();
				// 	$("#year").hide();
				// 	$("#year-start").hide();
				// 	$("#year-end").hide();
				// });
				// $("#yearly").click(function () {
				// 	$("#month").hide();
				// 	$("#day").hide();
				// 	$(".option").hide();
				// 	$(".clock").hide();
				// 	$("#month-start").hide();
				// 	$("#month-end").hide();
				// 	$("#year").hide();
				// 	$("#year-start").show();
				// 	$("#year-end").show();
				// });
				// $("#monthly").click(function () {
				// 	$("#month").hide();
				// 	$("#day").hide();
				// 	$(".option").hide();
				// 	$(".clock").hide();
				// 	$("#month-start").hide();
				// 	$("#month-end").hide();
				// 	$("#year").show();
				// 	$("#year-start").hide();
				// 	$("#year-end").hide();
				// });
				// $("#quarterly").click(function () {
				// 	$("#month").hide();
				// 	$("#day").hide();
				// 	$(".option").hide();
				// 	$(".clock").hide();
				// 	$("#month-start").show();
				// 	$("#month-end").show();
				// 	$("#year").hide();
				// 	$("#year-start").hide();
				// 	$("#year-end").hide();
				// });
				// //resize
				// $(window).resize(function () {

				// 	function getRateElement() {
				// 		setRateElement($('.imgResize-5-4'), 5, 4);
				// 		setRateElement($('.imgResize-8-5'), 8, 5);
				// 		setRateElement($('.imgResize-23-8'), 23, 8);
				// 	}
				// 	getRateElement();

				// });

				// $(".popupBtn").each(function () {

				// 	$(".popupBtn").mouseover(function () {
				// 		$(this).siblings('.mode_popupbox').show();
				// 		console.log("in");
				// 	});
				// 	$(".popupBtn").mouseleave(function () {
				// 		$(this).siblings('.mode_popupbox').hide();
				// 		console.log("out");
				// 	});
				// });
		});

		// ProgressBar 05.현황
		$(document).ready(function () {
				/*** Skillbar ***/
				// $('.state-progress').each(function () {
				// 	var $this = $(this);
				// 	if (typeof $.fn.appear === 'function') {
				// 		$this.appear(function () {
				// 			$this.ProgressBar();
				// 			$this.unbind('appear');
				// 		}, {
				// 			accX: 0,
				// 			accY: 0,
				// 			one: true
				// 		});
				// 	} else {
				// 		$this.ProgressBar();
				// 	}
				// });

				// $('.tab-option').each(function () {
				// 	var $this = $(this);
				// 	var hc = $this.find('.tab-scrollbar').height();
				// 	$this.find('.list').mCustomScrollbar({
				// 		theme: "dark-3",
				// 		setHeight: hc,
				// 	});
				// });
				// $('.box-ellipse').each(function () {
				// 	var number = $('.icon-ruler').data('value');
				// 	var i_number = Number(number);
				// 	$(this).find('.number').append(i_number);
				// 	$(this).find('.number').prop('Counter', 0).animate({
				// 		Counter: number,
				// 	}, {
				// 		duration: 3000,
				// 		easing: 'swing',
				// 		step: function (now) {
				// 			$(this).text(Math.ceil(now));
				// 		}
				// 	});
				// });

				// /* Box number satrt*/
				// $('.number-stats').one('number').each(function () {
				// 	var $this = $(this);
				// 	$this.find('.stats-count').animate({
				// 		'number': $this.data('number')
				// 	}, {
				// 		step: function (n) {
				// 			var decimal = $this.data('decimal');
				// 			var text = parseInt(n);
				// 			if (decimal != 'none') {
				// 				text = text.toLocaleString();
				// 				text = text.replace(',', decimal);
				// 			}
				// 			$(this).text(text);
				// 		},
				// 		duration: $this.data('duration'),
				// 		easing: 'linear'
				// 	});
				// });
				// $('.table-pcs  ul li').click(function () {
				// 	$('.table-pcs ul li').removeClass('active');
				// 	$(this).addClass('active');
				// });
				// $('.table-bms  ul  li').click(function () {
				// 	$('.table-bms  ul li').removeClass('active');
				// 	$(this).addClass('active');
				// });
				// $('.box-pcs .box-left .box-item a ').click(function () {
				// 	$('.box-pcs .box-left .box-item a').removeClass('active');
				// 	$(this).addClass('active');
				// });
				// $('.box-pms .box-item a ').click(function () {
				// 	$('.box-pms .box-item a').removeClass('active');
				// 	$(this).addClass('active');
				// });
				// $('.box-group-btn .box-item a ').click(function () {
				// 	$('.box-group-btn .box-item a').removeClass('active');
				// 	$(this).addClass('active');
				// });
				// $('.box-group .box-item.setting').click(function () {
				// 	if ($(this).hasClass('active')) {
				// 		$(this).removeClass('active');
				// 	} else {
				// 		$(this).addClass('active');
				// 	}
				// });
				// $('.box-group .box-item.Shape').click(function () {
				// 	if ($(this).hasClass('active')) {
				// 		$(this).removeClass('active');
				// 	} else {
				// 		$(this).addClass('active');
				// 	}
				// });

				/**option pill-tab */
				// $("#pills-ALL-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-PCS-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-BMS-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-THS-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-PV-inverter-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-VCB-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-ACB-tab").click(function () {
				// 	$(".option-rack").hide();
				// 	$(".option-all").show();
				// });
				// $("#pills-rack-tab").click(function () {
				// 	$(".option-rack.none").removeClass("none");
				// 	$(".option-rack").show();
				// 	$(".option-all").hide();
				// });
				// $('#select2-single').each(function () {
				// 	$('#select2-single').select2();
				// })

				// // Tooltip
				// $('.tool').popover({
				// 	trigger: "hover",
				// 	html: true,
				// 	template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
				// });

				// // Dialog Popup
				// dialog = $("#form-edit_info_detail_popup").dialog({
				// 	autoOpen: false,
				// 	modal: true,
				// 	resizeable: true,
				// 	buttons: {
				// 		수정: function () {
				// 			dialog.dialog("close");
				// 		},
				// 	},
				// 	close: function () {
				// 		form[0].reset();
				// 	},

				// });

				// form = dialog.find("form").on("submit", function (event) {
				// 	event.preventDefault();
				// });

				// $("#cancel_dialog").on("click", function () {
				// 	dialog.dialog("close");
				// });

				// $("#close_form-edit_info").on("click", function () {
				// 	dialog.dialog("close");
				// });

				// $("#edit_info_detail_popup").on("click", function () {
				// 	dialog.dialog("open");
				// });

				// $('#form-edit_info_detail_popup').on('dialogclose', function () {
				// 	$("#wrapper").removeClass("blur");
				// });

				// // ===== Page 계통흐름도 Height line ====
				// var sunlightCount = 0;
				// $('.parameter--sunlight .parameter-row').each(function (e, i) {
				// 	sunlightCount += 1;
				// });
				// if (sunlightCount < 3) {
				// 	$('.parameter--sunlight .flowLine05 .flowLineWrap .arrowLine12').hide();
				// 	$('.parameter--sunlight--line--image .mt-bot').hide();
				// }

				// var essCount = 0;
				// $('.parameter--ess .parameter-row').each(function (e, i) {
				// 	essCount += 1;
				// });
				// if (essCount < 3) {
				// 	$('.parameter--ess .flowLine06 .flowLineWrap .arrowLine14').hide();
				// 	$('.parameter--ess--line--image .mt-bot').hide();
				// }

				// // ===== Scroll to Top ==== 
				// $(window).scroll(function () {
				// 	if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
				// 		$('#return-to-top').fadeIn(200); // Fade in the arrow
				// 	} else {
				// 		$('#return-to-top').fadeOut(200); // Else fade out the arrow
				// 	}
				// });
				// $('#return-to-top').click(function () { // When arrow is clicked
				// 	$('body,html').animate({
				// 		scrollTop: 0 // Scroll to top of body
				// 	}, 500);
				// });

				// $("#edit_info_detail_popup").click(function () {
				// 	$("#wrapper").addClass("blur");
				// });

		});
})(jQuery);