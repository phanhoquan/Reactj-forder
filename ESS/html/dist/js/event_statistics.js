(function ($) {
	$(function () {});

	$(window).load(function () {

		// Calenda
		$.fn.datepicker.dates.en = {
			days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			daysShort: ["일", "월", "화", "수", "목", "금", "토"],
			daysMin: ["일", "월", "화", "수", "목", "금", "토"],
			months: ["일월", "이월", "삼월", "사월", "오월", "유월", "칠월", "팔월", "구월", "시월", "십일월", "십이월"],
			monthsShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			today: "Today",
			clear: "Clear",
			format: "yyyy.mm.dd",
			titleFormat: "yyyy MM",
			/* Leverages same syntax as 'format' */
			weekStart: 0
		};
		$('.date').datepicker({
			autoclose: true
		});
		$('.month').datepicker({
			format: "yyyy.mm",
			startView: "months",
			minViewMode: "months",
			autoclose: true
		});
		$('.yearly').datepicker({
			format: "yyyy",
			startView: "years",
			minViewMode: "years",
			autoclose: true,
		});
		$('.selectpicker').selectpicker();

		// search nav
		$("#hourly").click(function () {
			$("#day").show();
			$(".option").show();
			$("#month").hide();
			$(".clock").show();
			$("#month-start").hide();
			$("#month-end").hide();
			$("#year").hide();
			$("#year-start").hide();
			$("#year-end").hide();
		});
		$("#glance").click(function () {
			$("#month").show();
			$("#day").hide();
			$(".option").hide();
			$(".clock").hide();
			$("#month-start").hide();
			$("#month-end").hide();
			$("#year").hide();
			$("#year-start").hide();
			$("#year-end").hide();
		});
		$("#yearly").click(function () {
			$("#month").hide();
			$("#day").hide();
			$(".option").hide();
			$(".clock").hide();
			$("#month-start").hide();
			$("#month-end").hide();
			$("#year").hide();
			$("#year-start").show();
			$("#year-end").show();
		});
		$("#monthly").click(function () {
			$("#month").hide();
			$("#day").hide();
			$(".option").hide();
			$(".clock").hide();
			$("#month-start").hide();
			$("#month-end").hide();
			$("#year").show();
			$("#year-start").hide();
			$("#year-end").hide();
		});
		$("#quarterly").click(function () {
			$("#month").hide();
			$("#day").hide();
			$(".option").hide();
			$(".clock").hide();
			$("#month-start").show();
			$("#month-end").show();
			$("#year").hide();
			$("#year-start").hide();
			$("#year-end").hide();
		});

		// ===== Resize ==== 
		$(window).resize(function () {

		});

		// ===== Scroll to Top ==== 
		$(window).scroll(function () {

		});

	});

})(jQuery);