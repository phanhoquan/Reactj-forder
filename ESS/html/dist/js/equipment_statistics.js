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

		// Chart PCS
		$('#statisticsChartpcs').each(function () {
			var chart = AmCharts.makeChart("statisticsChartpcs", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
							title: "DC 전압",
							color: "#deae3d"
						},
						{
							title: "DC 전력",
							color: "#4cbfc4"
						}
					]
				},
				"dataProvider": [{
						"number": "0",
						"DC 전압": 4100,
						"DC 전력": 4900,
					}, {
						"number": "1",
						"DC 전압": 2800,
						"DC 전력": 6900,
					}, {
						"number": "2",
						"DC 전압": 4000,
						"DC 전력": 5100,
					}, {
						"number": "3",
						"DC 전압": 4100,
						"DC 전력": 5210,
					}, {
						"number": "4",
						"DC 전압": 3200,
						"DC 전력": 4100,
					}, {
						"number": "5",
						"DC 전압": 2950,
						"DC 전력": 6600,
					}, {
						"number": "6",
						"DC 전압": 2500,
						"DC 전력": 6700,
					}, {
						"number": "7",
						"DC 전압": 3700,
						"DC 전력": 4100,
					}, {
						"number": "8",
						"DC 전압": 3150,
						"DC 전력": 6000,
					}, {
						"number": "9",
						"DC 전압": 3500,
						"DC 전력": 6900,
					}, {
						"number": "10",
						"DC 전압": 1920,
						"DC 전력": 6850,
					}, {
						"number": "11",
						"DC 전압": 3050,
						"DC 전력": 6900,
					}, {
						"number": "12",
						"DC 전압": 3900,
						"DC 전력": 6000,
					}, {
						"number": "13",
						"DC 전압": 3900,
						"DC 전력": 4700,
					}, {
						"number": "14",
						"DC 전압": 5200,
						"DC 전력": 6800,
					}, {
						"number": "15",
						"DC 전압": 3800,
						"DC 전력": 6200,
					}, {
						"number": "16",
						"DC 전압": 4100,
						"DC 전력": 6100,
					}, {
						"number": "17",
						"DC 전압": 4950,
						"DC 전력": 3000,
					}, {
						"number": "18",
						"DC 전압": 5050,
						"DC 전력": 1100,
					}, {
						"number": "19",
						"DC 전압": 4050,
						"DC 전력": 1850,
					}, {
						"number": "20",
						"DC 전압": 4500,
						"DC 전력": 1500,
					}, {
						"number": "21",
						"DC 전압": 5050,
						"DC 전력": 4850,
					}, {
						"number": "22",
						"DC 전압": 4050,
						"DC 전력": 6100,
					}, {
						"number": "23",
						"DC 전압": 5500,
						"DC 전력": 6900,
					},
					{
						"number": "24",
						"DC 전압": 5500,
						"DC 전력": 6900,
					},
				],
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
						"balloonText": "DC 전압 : <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "DC 전압",
						"valueField": "DC 전압",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "DC 전력 : <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "DC 전력",
						"valueField": "DC 전력",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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

		// Chart BMS
		$('#statisticsChartbms').each(function () {
			var chart = AmCharts.makeChart("statisticsChartbms", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
						title: "SOC",
						color: "#4cbfc4"
					}]
				},
				"dataProvider": [{
						"number": "0",
						"SOC": 4100,
					}, {
						"number": "1",
						"SOC": 2800,
					}, {
						"number": "2",
						"SOC": 4000,
					}, {
						"number": "3",
						"SOC": 4100,
					}, {
						"number": "4",
						"SOC": 3200,
					}, {
						"number": "5",
						"SOC": 2950,
					}, {
						"number": "6",
						"SOC": 2500,
					}, {
						"number": "7",
						"SOC": 3700,
					}, {
						"number": "8",
						"SOC": 3150,
					}, {
						"number": "9",
						"SOC": 3500,
					}, {
						"number": "10",
						"SOC": 1920,
					}, {
						"number": "11",
						"SOC": 3050,
					}, {
						"number": "12",
						"SOC": 3900,
					}, {
						"number": "13",
						"SOC": 3900,
					}, {
						"number": "14",
						"SOC": 5200,
					}, {
						"number": "15",
						"SOC": 3800,
					}, {
						"number": "16",
						"SOC": 4100,
					}, {
						"number": "17",
						"SOC": 4950,
					}, {
						"number": "18",
						"SOC": 5050,
					}, {
						"number": "19",
						"SOC": 4050,
					}, {
						"number": "20",
						"SOC": 4500,
					}, {
						"number": "21",
						"DC 전압": 5050,
						"DC 전력": 4850,
					}, {
						"number": "22",
						"SOC": 4050,
					}, {
						"number": "23",
						"SOC": 5500,
					},
					{
						"number": "24",
						"SOC": 5500,
					},
				],
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
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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

		// Chart Rack
		$('#statisticsChartrack').each(function () {
			var chart = AmCharts.makeChart("statisticsChartrack", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
							title: "SOC",
							color: "#4cbfc4"
						},
						{
							title: "SOH",
							color: "#deae3d"
						},

					]
				},
				"dataProvider": [{
						"number": "0",
						"SOC": 4100,
						"SOH": 4900,
					}, {
						"number": "1",
						"SOC": 2800,
						"SOH": 6900,
					}, {
						"number": "2",
						"SOC": 4000,
						"SOH": 5100,
					}, {
						"number": "3",
						"SOC": 4100,
						"SOH": 5210,
					}, {
						"number": "4",
						"SOC": 3200,
						"SOH": 4100,
					}, {
						"number": "5",
						"SOC": 2950,
						"SOH": 6600,
					}, {
						"number": "6",
						"SOC": 2500,
						"SOH": 6700,
					}, {
						"number": "7",
						"SOC": 3700,
						"SOH": 4100,
					}, {
						"number": "8",
						"SOC": 3150,
						"SOH": 6000,
					}, {
						"number": "9",
						"SOC": 3500,
						"SOH": 6900,
					}, {
						"number": "10",
						"SOC": 1920,
						"SOH": 6850,
					}, {
						"number": "11",
						"SOC": 3050,
						"SOH": 6900,
					}, {
						"number": "12",
						"SOC": 3900,
						"SOH": 6000,
					}, {
						"number": "13",
						"SOC": 3900,
						"SOH": 4700,
					}, {
						"number": "14",
						"SOC": 5200,
						"SOH": 6800,
					}, {
						"number": "15",
						"SOC": 3800,
						"SOH": 6200,
					}, {
						"number": "16",
						"SOC": 4100,
						"SOH": 6100,
					}, {
						"number": "17",
						"SOC": 4950,
						"SOH": 3000,
					}, {
						"number": "18",
						"SOC": 5050,
						"SOH": 1100,
					}, {
						"number": "19",
						"SOC": 4050,
						"SOH": 1850,
					}, {
						"number": "20",
						"SOC": 4500,
						"SOH": 1500,
					}, {
						"number": "21",
						"SOC": 5050,
						"SOH": 4850,
					}, {
						"number": "22",
						"SOC": 4050,
						"SOH": 6100,
					}, {
						"number": "23",
						"SOC": 5500,
						"SOH": 6900,
					},
					{
						"number": "24",
						"SOC": 5500,
						"SOH": 6900,
					},
				],
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
						"balloonText": "SOC : <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "SOC",
						"valueField": "SOC",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "SOH : <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "SOH",
						"valueField": "SOH",
						"type": "smoothedLine",
						"lineThickness": 5
					},
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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

		// Chart THS
		$('#statisticsChartths').each(function () {
			var chart = AmCharts.makeChart("statisticsChartths", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
							title: "온도",
							color: "#4cbfc4"
						},
						{
							title: "습도",
							color: "#deae3d"
						}
					]
				},
				"dataProvider": [{
						"number": "0",
						"온도": 4100,
						"습도": 4900,
					}, {
						"number": "1",
						"온도": 2800,
						"습도": 6900,
					}, {
						"number": "2",
						"온도": 4000,
						"습도": 5100,
					}, {
						"number": "3",
						"온도": 4100,
						"습도": 5210,
					}, {
						"number": "4",
						"온도": 3200,
						"습도": 4100,
					}, {
						"number": "5",
						"온도": 2950,
						"습도": 6600,
					}, {
						"number": "6",
						"온도": 2500,
						"습도": 6700,
					}, {
						"number": "7",
						"온도": 3700,
						"습도": 4100,
					}, {
						"number": "8",
						"온도": 3150,
						"습도": 6000,
					}, {
						"number": "9",
						"온도": 3500,
						"습도": 6900,
					}, {
						"number": "10",
						"온도": 1920,
						"습도": 6850,
					}, {
						"number": "11",
						"온도": 3050,
						"습도": 6900,
					}, {
						"number": "12",
						"온도": 3900,
						"습도": 6000,
					}, {
						"number": "13",
						"온도": 3900,
						"습도": 4700,
					}, {
						"number": "14",
						"온도": 5200,
						"습도": 6800,
					}, {
						"number": "15",
						"온도": 3800,
						"습도": 6200,
					}, {
						"number": "16",
						"온도": 4100,
						"습도": 6100,
					}, {
						"number": "17",
						"온도": 4950,
						"습도": 3000,
					}, {
						"number": "18",
						"온도": 5050,
						"습도": 1100,
					}, {
						"number": "19",
						"온도": 4050,
						"습도": 1850,
					}, {
						"number": "20",
						"온도": 4500,
						"습도": 1500,
					}, {
						"number": "21",
						"온도": 5050,
						"습도": 4850,
					}, {
						"number": "22",
						"온도": 4050,
						"습도": 6100,
					}, {
						"number": "23",
						"온도": 5500,
						"습도": 6900,
					},
					{
						"number": "24",
						"온도": 5500,
						"습도": 6900,
					},
				],
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
						"balloonText": "습도 : <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "습도",
						"valueField": "습도",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "온도 : <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "온도",
						"valueField": "온도",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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

		// Chart PV
		$('#statisticsChartpv').each(function () {
			var chart = AmCharts.makeChart("statisticsChartpv", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
							title: "모듈 온도",
							color: "#deae3d"
						},
						{
							title: "외기 온도",
							color: "#4cbfc4"
						}
					]
				},
				"dataProvider": [{
						"number": "0",
						"모듈 온도": 4100,
						"외기 온도": 4900,
					}, {
						"number": "1",
						"모듈 온도": 2800,
						"외기 온도": 6900,
					}, {
						"number": "2",
						"모듈 온도": 4000,
						"외기 온도": 5100,
					}, {
						"number": "3",
						"모듈 온도": 4100,
						"외기 온도": 5210,
					}, {
						"number": "4",
						"모듈 온도": 3200,
						"외기 온도": 4100,
					}, {
						"number": "5",
						"모듈 온도": 2950,
						"외기 온도": 6600,
					}, {
						"number": "6",
						"모듈 온도": 2500,
						"외기 온도": 6700,
					}, {
						"number": "7",
						"모듈 온도": 3700,
						"외기 온도": 4100,
					}, {
						"number": "8",
						"모듈 온도": 3150,
						"외기 온도": 6000,
					}, {
						"number": "9",
						"모듈 온도": 3500,
						"외기 온도": 6900,
					}, {
						"number": "10",
						"모듈 온도": 1920,
						"외기 온도": 6850,
					}, {
						"number": "11",
						"모듈 온도": 3050,
						"외기 온도": 6900,
					}, {
						"number": "12",
						"모듈 온도": 3900,
						"외기 온도": 6000,
					}, {
						"number": "13",
						"모듈 온도": 3900,
						"외기 온도": 4700,
					}, {
						"number": "14",
						"모듈 온도": 5200,
						"외기 온도": 6800,
					}, {
						"number": "15",
						"모듈 온도": 3800,
						"외기 온도": 6200,
					}, {
						"number": "16",
						"모듈 온도": 4100,
						"외기 온도": 6100,
					}, {
						"number": "17",
						"모듈 온도": 4950,
						"외기 온도": 3000,
					}, {
						"number": "18",
						"모듈 온도": 5050,
						"외기 온도": 1100,
					}, {
						"number": "19",
						"모듈 온도": 4050,
						"외기 온도": 1850,
					}, {
						"number": "20",
						"모듈 온도": 4500,
						"외기 온도": 1500,
					}, {
						"number": "21",
						"모듈 온도": 5050,
						"외기 온도": 4850,
					}, {
						"number": "22",
						"모듈 온도": 4050,
						"외기 온도": 6100,
					}, {
						"number": "23",
						"모듈 온도": 5500,
						"외기 온도": 6900,
					},
					{
						"number": "24",
						"모듈 온도": 5500,
						"외기 온도": 6900,
					},
				],
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
						"balloonText": "모듈 온도 : <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "모듈 온도",
						"valueField": "모듈 온도",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "외기 온도 : <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "외기 온도",
						"valueField": "외기 온도",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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

		// Chart VCB
		$('#statisticsChartvcb').each(function () {
			var chart = AmCharts.makeChart("statisticsChartvcb", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
							title: "SOC",
							color: "#4cbfc4"
						},
						{
							title: "SOH",
							color: "#deae3d"
						},

					]
				},
				"dataProvider": [{
						"number": "0",
						"SOC": 4100,
						"SOH": 4900,
					}, {
						"number": "1",
						"SOC": 2800,
						"SOH": 6900,
					}, {
						"number": "2",
						"SOC": 4000,
						"SOH": 5100,
					}, {
						"number": "3",
						"SOC": 4100,
						"SOH": 5210,
					}, {
						"number": "4",
						"SOC": 3200,
						"SOH": 4100,
					}, {
						"number": "5",
						"SOC": 2950,
						"SOH": 6600,
					}, {
						"number": "6",
						"SOC": 2500,
						"SOH": 6700,
					}, {
						"number": "7",
						"SOC": 3700,
						"SOH": 4100,
					}, {
						"number": "8",
						"SOC": 3150,
						"SOH": 6000,
					}, {
						"number": "9",
						"SOC": 3500,
						"SOH": 6900,
					}, {
						"number": "10",
						"SOC": 1920,
						"SOH": 6850,
					}, {
						"number": "11",
						"SOC": 3050,
						"SOH": 6900,
					}, {
						"number": "12",
						"SOC": 3900,
						"SOH": 6000,
					}, {
						"number": "13",
						"SOC": 3900,
						"SOH": 4700,
					}, {
						"number": "14",
						"SOC": 5200,
						"SOH": 6800,
					}, {
						"number": "15",
						"SOC": 3800,
						"SOH": 6200,
					}, {
						"number": "16",
						"SOC": 4100,
						"SOH": 6100,
					}, {
						"number": "17",
						"SOC": 4950,
						"SOH": 3000,
					}, {
						"number": "18",
						"SOC": 5050,
						"SOH": 1100,
					}, {
						"number": "19",
						"SOC": 4050,
						"SOH": 1850,
					}, {
						"number": "20",
						"SOC": 4500,
						"SOH": 1500,
					}, {
						"number": "21",
						"SOC": 5050,
						"SOH": 4850,
					}, {
						"number": "22",
						"SOC": 4050,
						"SOH": 6100,
					}, {
						"number": "23",
						"SOC": 5500,
						"SOH": 6900,
					},
					{
						"number": "24",
						"SOC": 5500,
						"SOH": 6900,
					},
				],
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
						"balloonText": "SOC : <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "SOC",
						"valueField": "SOC",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "SOH : <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "SOH",
						"valueField": "SOH",
						"type": "smoothedLine",
						"lineThickness": 5
					},
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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

		// Chart ACB
		$('#statisticsChartacb').each(function () {
			var chart = AmCharts.makeChart("statisticsChartacb", {
				"type": "serial",
				"theme": "light",
				"marginRight": 30,
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
							title: "역률",
							color: "#4cbfc4"
						},
						{
							title: "주파수",
							color: "#deae3d"
						}
					]
				},
				"dataProvider": [{
						"number": "0",
						"역률": 4100,
						"주파수": 4900,
					}, {
						"number": "1",
						"역률": 2800,
						"주파수": 6900,
					}, {
						"number": "2",
						"역률": 4000,
						"주파수": 5100,
					}, {
						"number": "3",
						"역률": 4100,
						"주파수": 5210,
					}, {
						"number": "4",
						"역률": 3200,
						"주파수": 4100,
					}, {
						"number": "5",
						"역률": 2950,
						"주파수": 6600,
					}, {
						"number": "6",
						"역률": 2500,
						"주파수": 6700,
					}, {
						"number": "7",
						"역률": 3700,
						"주파수": 4100,
					}, {
						"number": "8",
						"역률": 3150,
						"주파수": 6000,
					}, {
						"number": "9",
						"역률": 3500,
						"주파수": 6900,
					}, {
						"number": "10",
						"역률": 1920,
						"주파수": 6850,
					}, {
						"number": "11",
						"역률": 3050,
						"주파수": 6900,
					}, {
						"number": "12",
						"역률": 3900,
						"주파수": 6000,
					}, {
						"number": "13",
						"역률": 3900,
						"주파수": 4700,
					}, {
						"number": "14",
						"역률": 5200,
						"주파수": 6800,
					}, {
						"number": "15",
						"역률": 3800,
						"주파수": 6200,
					}, {
						"number": "16",
						"역률": 4100,
						"주파수": 6100,
					}, {
						"number": "17",
						"역률": 4950,
						"주파수": 3000,
					}, {
						"number": "18",
						"역률": 5050,
						"주파수": 1100,
					}, {
						"number": "19",
						"역률": 4050,
						"주파수": 1850,
					}, {
						"number": "20",
						"역률": 4500,
						"주파수": 1500,
					}, {
						"number": "21",
						"역률": 5050,
						"주파수": 4850,
					}, {
						"number": "22",
						"역률": 4050,
						"주파수": 6100,
					}, {
						"number": "23",
						"역률": 5500,
						"주파수": 6900,
					},
					{
						"number": "24",
						"역률": 5500,
						"주파수": 6900,
					},
				],
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
						"balloonText": "주파수 : <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "주파수",
						"valueField": "주파수",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "역률 : <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "역률",
						"valueField": "역률",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 80,
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