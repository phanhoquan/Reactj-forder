(function ($) {
	$(function () {});

	$(window).load(function () {

		/* Box number satrt*/
		$('.number-stats').one('number').each(function () {
			var $this = $(this);
			$this.find('.stats-count').animate({
				'number': $this.data('number')
			}, {
				step: function (n) {
					var decimal = $this.data('decimal');
					var text = parseInt(n);
					if (decimal != 'none') {
						text = text.toLocaleString();
						text = text.replace(',', decimal);
					}
					$(this).text(text);
				},
				duration: $this.data('duration'),
				easing: 'linear'
			});
		});

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

		// Benefit Chart Statistics
		$('#benefitChartstatistics').each(function () {
			var chart = AmCharts.makeChart("benefitChartstatistics", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"position": "absolute",
					"valueAlign": "left",
					"align": "right",
					"fontSize": 15,
					"spacing": -30,
					"maxColumns": "right",
					"right": -85,
					"top": 10,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
							title: "PV발전량",
							color: "#e2c081"
						}, {
							title: "충전량",
							color: "#99b199"
						},
						{
							title: "방전량",
							color: "#c68b8b"
						},
						{
							title: "SMP단가",
							color: "#cb633a"
						},
						{
							title: "합계수익",
							color: "#d34647"
						}
					]
				},
				"dataProvider": [{
					"number": "0",
					"PV발전량": 4100,
					"충전량": 3500,
					"방전량": 4900,
					"SMP단가": 3200,
					"합계수익": 2800,
				}, {
					"number": "1",
					"PV발전량": 2800,
					"충전량": 3700,
					"방전량": 6900,
					"SMP단가": 3700,
					"합계수익": 3500,
				}, {
					"number": "2",
					"PV발전량": 4000,
					"충전량": 3050,
					"방전량": 5100,
					"SMP단가": 3200,
					"합계수익": 2800,
				}, {
					"number": "3",
					"PV발전량": 4100,
					"충전량": 4500,
					"방전량": 5210,
					"SMP단가": 4200,
					"합계수익": 3800,
				}, {
					"number": "4",
					"PV발전량": 3200,
					"충전량": 3300,
					"방전량": 4100,
					"SMP단가": 3800,
					"합계수익": 4800,
				}, {
					"number": "5",
					"PV발전량": 2950,
					"충전량": 3800,
					"방전량": 6600,
					"SMP단가": 5600,
					"합계수익": 4700,
				}, {
					"number": "6",
					"PV발전량": 2500,
					"충전량": 3100,
					"방전량": 6700,
					"SMP단가": 6000,
					"합계수익": 4800,
				}, {
					"number": "7",
					"PV발전량": 3700,
					"충전량": 3700,
					"방전량": 4100,
					"SMP단가": 5200,
					"합계수익": 5800,
				}, {
					"number": "8",
					"PV발전량": 3150,
					"충전량": 2900,
					"방전량": 6000,
					"SMP단가": 4600,
					"합계수익": 6200,
				}, {
					"number": "9",
					"PV발전량": 3500,
					"충전량": 3100,
					"방전량": 6900,
					"SMP단가": 4900,
					"합계수익": 5500,
				}, {
					"number": "10",
					"PV발전량": 1920,
					"충전량": 1050,
					"방전량": 6850,
					"SMP단가": 3200,
					"합계수익": 2800,
				}, {
					"number": "11",
					"PV발전량": 3050,
					"충전량": 4050,
					"방전량": 6900,
					"SMP단가": 4600,
					"합계수익": 6700,
				}, {
					"number": "12",
					"PV발전량": 3900,
					"충전량": 4300,
					"방전량": 6000,
				}, {
					"number": "13",
					"PV발전량": 3900,
					"충전량": 3900,
					"방전량": 4700,
					"SMP단가": 5200,
					"합계수익": 4800,
				}, {
					"number": "14",
					"PV발전량": 5200,
					"충전량": 4200,
					"방전량": 6800,
					"SMP단가": 6300,
					"합계수익": 5600,
				}, {
					"number": "15",
					"PV발전량": 3800,
					"충전량": 3500,
					"방전량": 6200,
					"SMP단가": 6700,
					"합계수익": 5800,
				}, {
					"number": "16",
					"PV발전량": 4100,
					"충전량": 3950,
					"방전량": 6100,
					"SMP단가": 3200,
					"합계수익": 2800,
				}, {
					"number": "17",
					"PV발전량": 4950,
					"충전량": 4050,
					"방전량": 3000,
					"SMP단가": 6200,
					"합계수익": 5800,
				}, {
					"number": "18",
					"PV발전량": 5050,
					"충전량": 4400,
					"방전량": 1100,
					"SMP단가": 4200,
					"합계수익": 5800,
				}, {
					"number": "19",
					"PV발전량": 4050,
					"충전량": 3850,
					"방전량": 1850,
					"SMP단가": 5200,
					"합계수익": 6800,
				}, {
					"number": "20",
					"PV발전량": 4500,
					"충전량": 3950,
					"방전량": 1500,
					"SMP단가": 4200,
					"합계수익": 6800,
				}, {
					"number": "21",
					"PV발전량": 5050,
					"충전량": 3850,
					"방전량": 4850,
					"SMP단가": 5200,
					"합계수익": 4800,
				}, {
					"number": "22",
					"PV발전량": 4050,
					"충전량": 4200,
					"방전량": 6100,
					"SMP단가": 6200,
					"합계수익": 5800,
				}, {
					"number": "23",
					"PV발전량": 5500,
					"충전량": 3500,
					"방전량": 6900,
					"SMP단가": 6200,
					"합계수익": 6800,
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 7000,
					"step": 1000,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
						"balloonText": "PV발전량 : <b>[[value]]</b>",
						"lineColor": "#e2c081",
						"title": "PV발전량",
						"valueField": "PV발전량",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "충전량 : <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#99b199",
						"title": "충전량",
						"valueField": "충전량",
						"lineThickness": 5,
						"type": "smoothedLine"
					},
					{
						"balloonText": "방전량 : <b>[[value]]</b>",
						"lineColor": "#c68b8b",
						"title": "방전량",
						"valueField": "방전량",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "SMP단가 : <b>[[value]]</b>",
						"lineColor": "#cb633a",
						"title": "SMP단가",
						"valueField": "SMP단가",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "합계수익 : <b>[[value]]</b>",
						"lineColor": "#d34647",
						"title": "합계수익",
						"valueField": "합계수익",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 85,
				"marginLeft": 0,
				"marginBottom": 0,
				"chartCursor": {
					"cursorAlpha": 0
				},
				"categoryField": "number",
				"categoryAxis": {
					"autoGridCount": true,
					"startOnAxis": true,
					"axisColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"gridColor": "#3f5c7f",
					"minHorizontalGap": 10,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// ===== Resize ==== 
		$(window).resize(function () {

		});

		// ===== Scroll to Top ==== 
		$(window).scroll(function () {

		});

	});

})(jQuery);