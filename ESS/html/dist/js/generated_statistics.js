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

		// Generated Chart Statistics
		$('#generatedChartstatistics').each(function () {
			var chart = AmCharts.makeChart("generatedChartstatistics", {
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
							title: "발전량",
							color: "#d8b206"
						}, {
							title: "충전량",
							color: "#99b199"
						},
						{
							title: "방전량",
							color: "#c68b8b"
						}
					]
				},
				"dataProvider": [{
					"number": "0",
					"발전량": 4100,
					"충전량": 3500,
					"방전량": 4900,
				}, {
					"number": "1",
					"발전량": 2800,
					"충전량": 3700,
					"방전량": 6900,
				}, {
					"number": "2",
					"발전량": 4000,
					"충전량": 3050,
					"방전량": 5100,
				}, {
					"number": "3",
					"발전량": 4100,
					"충전량": 4500,
					"방전량": 5210,
				}, {
					"number": "4",
					"발전량": 3200,
					"충전량": 3300,
					"방전량": 4100,
				}, {
					"number": "5",
					"발전량": 2950,
					"충전량": 3800,
					"방전량": 6600,
				}, {
					"number": "6",
					"발전량": 2500,
					"충전량": 3100,
					"방전량": 6700,
				}, {
					"number": "7",
					"발전량": 3700,
					"충전량": 3700,
					"방전량": 4100,
				}, {
					"number": "8",
					"발전량": 3150,
					"충전량": 2900,
					"방전량": 6000,
				}, {
					"number": "9",
					"발전량": 3500,
					"충전량": 3100,
					"방전량": 6900,
				}, {
					"number": "10",
					"발전량": 1920,
					"충전량": 1050,
					"방전량": 6850,
				}, {
					"number": "11",
					"발전량": 3050,
					"충전량": 4050,
					"방전량": 6900,
				}, {
					"number": "12",
					"발전량": 3900,
					"충전량": 4300,
					"방전량": 6000,
				}, {
					"number": "13",
					"발전량": 3900,
					"충전량": 3900,
					"방전량": 4700,
				}, {
					"number": "14",
					"발전량": 5200,
					"충전량": 4200,
					"방전량": 6800,
				}, {
					"number": "15",
					"발전량": 3800,
					"충전량": 3500,
					"방전량": 6200,
				}, {
					"number": "16",
					"발전량": 4100,
					"충전량": 3950,
					"방전량": 6100,
				}, {
					"number": "17",
					"발전량": 4950,
					"충전량": 4050,
					"방전량": 3000,
				}, {
					"number": "18",
					"발전량": 5050,
					"충전량": 4400,
					"방전량": 1100,
				}, {
					"number": "19",
					"발전량": 4050,
					"충전량": 3850,
					"방전량": 1850,
				}, {
					"number": "20",
					"발전량": 4500,
					"충전량": 3950,
					"방전량": 1500,
				}, {
					"number": "21",
					"발전량": 5050,
					"충전량": 3850,
					"방전량": 4850,
				}, {
					"number": "22",
					"발전량": 4050,
					"충전량": 4200,
					"방전량": 6100,
				}, {
					"number": "23",
					"발전량": 5500,
					"충전량": 3500,
					"방전량": 6900,
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
						"balloonText": "발전량 : <b>[[value]]</b>",
						"lineColor": "#d8b206",
						"title": "발전량",
						"valueField": "발전량",
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