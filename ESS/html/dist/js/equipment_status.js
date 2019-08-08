(function ($) {
	$(function () {});

	$(window).load(function () {

		//Custom Scroll
		$('.tab-option').each(function () {
			var $this = $(this);
			var hc = $this.find('.tab-scrollbar').height();
			$this.find('.list').mCustomScrollbar({
				theme: "dark-3",
				setHeight: hc,
			});
		});

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

		// Chart PCV 01
		$('#equipmentChartpcs01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartpcs01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "DC 전압",
						color: "#4cbfc4"
					}, {
						title: "DC 전력",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"DC 전압": 30,
					"DC 전력": 40
				}, {
					"number": "1:00",
					"DC 전압": 25,
					"DC 전력": 48
				}, {
					"number": "2:00",
					"DC 전압": 85,
					"DC 전력": 35
				}, {
					"number": "3:00",
					"DC 전압": 53,
					"DC 전력": 23
				}, {
					"number": "4:00",
					"DC 전압": 70,
					"DC 전력": 100
				}, {
					"number": "5:00",
					"DC 전압": 17,
					"DC 전력": 14
				}, {
					"number": "6:00",
					"DC 전압": 48,
					"DC 전력": 85
				}, {
					"number": "7:00",
					"DC 전압": 19,
					"DC 전력": 90
				}, {
					"number": "8:00",
					"DC 전압": 18,
					"DC 전력": 108
				}, {
					"number": "9:00",
					"DC 전압": 101,
					"DC 전력": 36
				}, {
					"number": "10:00",
					"DC 전압": 48,
					"DC 전력": 108
				}, {
					"number": "11:00",
					"DC 전압": 30,
					"DC 전력": 15
				}, {
					"number": "12:00",
					"DC 전압": 19,
					"DC 전력": 13
				}, {
					"number": "13:00",
					"DC 전압": 83,
					"DC 전력": 93
				}, {
					"number": "14:00",
					"DC 전압": 15,
					"DC 전력": 100
				}, {
					"number": "15:00",
					"DC 전압": 50,
					"DC 전력": 70
				}, {
					"number": "16:00",
					"DC 전압": 20,
					"DC 전력": 35
				}, {
					"number": "17:00",
					"DC 전압": 40,
					"DC 전력": 39
				}, {
					"number": "18:00",
					"DC 전압": 38,
					"DC 전력": 46
				}, {
					"number": "19:00",
					"DC 전압": 18,
					"DC 전력": 110
				}, {
					"number": "20:00",
					"DC 전압": 45,
					"DC 전력": 36
				}, {
					"number": "21:00",
					"DC 전압": 40,
					"DC 전력": 100
				}, {
					"number": "22:00",
					"DC 전압": 100,
					"DC 전력": 55
				}, {
					"number": "23:00",
					"DC 전압": 36,
					"DC 전력": 60
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"fontSize": 13,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
						"balloonText": "DC 전압: <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "DC 전압",
						"valueField": "DC 전압",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "DC 전력: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#deae3d",
						"title": "DC 전력",
						"valueField": "DC 전력",
						"lineThickness": 5,
						"type": "smoothedLine"
					}
				],
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart PCV 02
		$('#equipmentChartpcs02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartpcs02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "DC 전압",
						color: "#4cbfc4"
					}, {
						title: "DC 전력",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"DC 전압": 30,
					"DC 전력": 40
				}, {
					"number": "1:00",
					"DC 전압": 25,
					"DC 전력": 48
				}, {
					"number": "2:00",
					"DC 전압": 85,
					"DC 전력": 35
				}, {
					"number": "3:00",
					"DC 전압": 53,
					"DC 전력": 23
				}, {
					"number": "4:00",
					"DC 전압": 70,
					"DC 전력": 100
				}, {
					"number": "5:00",
					"DC 전압": 17,
					"DC 전력": 14
				}, {
					"number": "6:00",
					"DC 전압": 48,
					"DC 전력": 85
				}, {
					"number": "7:00",
					"DC 전압": 19,
					"DC 전력": 90
				}, {
					"number": "8:00",
					"DC 전압": 18,
					"DC 전력": 108
				}, {
					"number": "9:00",
					"DC 전압": 101,
					"DC 전력": 36
				}, {
					"number": "10:00",
					"DC 전압": 48,
					"DC 전력": 108
				}, {
					"number": "11:00",
					"DC 전압": 30,
					"DC 전력": 15
				}, {
					"number": "12:00",
					"DC 전압": 19,
					"DC 전력": 13
				}, {
					"number": "13:00",
					"DC 전압": 83,
					"DC 전력": 93
				}, {
					"number": "14:00",
					"DC 전압": 15,
					"DC 전력": 100
				}, {
					"number": "15:00",
					"DC 전압": 50,
					"DC 전력": 70
				}, {
					"number": "16:00",
					"DC 전압": 20,
					"DC 전력": 35
				}, {
					"number": "17:00",
					"DC 전압": 40,
					"DC 전력": 39
				}, {
					"number": "18:00",
					"DC 전압": 38,
					"DC 전력": 46
				}, {
					"number": "19:00",
					"DC 전압": 18,
					"DC 전력": 110
				}, {
					"number": "20:00",
					"DC 전압": 45,
					"DC 전력": 36
				}, {
					"number": "21:00",
					"DC 전압": 40,
					"DC 전력": 100
				}, {
					"number": "22:00",
					"DC 전압": 100,
					"DC 전력": 55
				}, {
					"number": "23:00",
					"DC 전압": 36,
					"DC 전력": 60
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"fontSize": 13,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
						"balloonText": "DC 전압: <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "DC 전압",
						"valueField": "DC 전압",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "DC 전력: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#deae3d",
						"title": "DC 전력",
						"valueField": "DC 전력",
						"lineThickness": 5,
						"type": "smoothedLine"
					}
				],
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BMS 01
		$('#equipmentChartbms01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartbms01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOH",
						color: "#4cbfc4"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 83
				}, {
					"number": "1:00",
					"SOH": 58
				}, {
					"number": "2:00",
					"SOH": 65
				}, {
					"number": "3:00",
					"SOH": 83
				}, {
					"number": "4:00",
					"SOH": 85
				}, {
					"number": "5:00",
					"SOH": 64
				}, {
					"number": "6:00",
					"SOH": 45
				}, {
					"number": "7:00",
					"SOH": 60
				}, {
					"number": "8:00",
					"SOH": 78
				}, {
					"number": "9:00",
					"SOH": 66
				}, {
					"number": "10:00",
					"SOH": 78
				}, {
					"number": "11:00",
					"SOH": 45
				}, {
					"number": "12:00",
					"SOH": 41
				}, {
					"number": "13:00",
					"SOH": 63
				}, {
					"number": "13:00",
					"SOH": 88
				}, {
					"number": "14:00",
					"SOH": 77
				}, {
					"number": "15:00",
					"SOH": 116
				}, {
					"number": "16:00",
					"SOH": 100
				}, {
					"number": "17:00",
					"SOH": 76
				}, {
					"number": "18:00",
					"SOH": 80
				}, {
					"number": "19:00",
					"SOH": 86
				}, {
					"number": "20:00",
					"SOH": 100
				}, {
					"number": "21:00",
					"SOH": 80
				}, {
					"number": "22:00",
					"SOH": 104
				}, {
					"number": "23:00",
					"SOH": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"fontSize": 13,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOH",
					"valueField": "SOH",
					"lineThickness": 5,
					"type": "smoothedLine"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BMS 02
		$('#equipmentChartbms02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartbms02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOH",
						color: "#4cbfc4"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 83
				}, {
					"number": "1:00",
					"SOH": 58
				}, {
					"number": "2:00",
					"SOH": 65
				}, {
					"number": "3:00",
					"SOH": 83
				}, {
					"number": "4:00",
					"SOH": 85
				}, {
					"number": "5:00",
					"SOH": 64
				}, {
					"number": "6:00",
					"SOH": 45
				}, {
					"number": "7:00",
					"SOH": 60
				}, {
					"number": "8:00",
					"SOH": 78
				}, {
					"number": "9:00",
					"SOH": 66
				}, {
					"number": "10:00",
					"SOH": 78
				}, {
					"number": "11:00",
					"SOH": 45
				}, {
					"number": "12:00",
					"SOH": 41
				}, {
					"number": "13:00",
					"SOH": 63
				}, {
					"number": "13:00",
					"SOH": 88
				}, {
					"number": "14:00",
					"SOH": 77
				}, {
					"number": "15:00",
					"SOH": 116
				}, {
					"number": "16:00",
					"SOH": 100
				}, {
					"number": "17:00",
					"SOH": 76
				}, {
					"number": "18:00",
					"SOH": 80
				}, {
					"number": "19:00",
					"SOH": 86
				}, {
					"number": "20:00",
					"SOH": 100
				}, {
					"number": "21:00",
					"SOH": 80
				}, {
					"number": "22:00",
					"SOH": 104
				}, {
					"number": "23:00",
					"SOH": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"fontSize": 13,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOH",
					"valueField": "SOH",
					"lineThickness": 5,
					"type": "smoothedLine"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BCP 01 Rack 01
		$('#equipmentChartBCPRack01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCPRack01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BCP 01 Rack 02
		$('#equipmentChartBCPRack02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCPRack02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BCP 01 Rack 03
		$('#equipmentChartBCPRack03').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCPRack03", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BCP 01 Rack 04
		$('#equipmentChartBCPRack04').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCPRack04", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BCP 02 Rack 01
		$('#equipmentChartBCP2Rack01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCP2Rack01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart BCP 02 Rack 02
		$('#equipmentChartBCP2Rack02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCP2Rack02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});
		
		// Chart BCP 02 Rack 03
		$('#equipmentChartBCP2Rack03').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCP2Rack03", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});
		
		// Chart BCP 02 Rack 04
		$('#equipmentChartBCP2Rack04').each(function () {
			var chart = AmCharts.makeChart("equipmentChartBCP2Rack04", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "SOC",
						color: "#4cbfc4"
					}, {
						title: "SOH",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"SOH": 70,
					"SOC": 83
				}, {
					"number": "1:00",
					"SOH": 78,
					"SOC": 58
				}, {
					"number": "2:00",
					"SOH": 63,
					"SOC": 83
				}, {
					"number": "3:00",
					"SOH": 70,
					"SOC": 85
				}, {
					"number": "4:00",
					"SOH": 77,
					"SOC": 64
				}, {
					"number": "5:00",
					"SOH": 78,
					"SOC": 45
				}, {
					"number": "6:00",
					"SOH": 79,
					"SOC": 60
				}, {
					"number": "7:00",
					"SOH": 68,
					"SOC": 78
				}, {
					"number": "8:00",
					"SOH": 71,
					"SOC": 66
				}, {
					"number": "9:00",
					"SOH": 78,
					"SOC": 78
				}, {
					"number": "10:00",
					"SOH": 60,
					"SOC": 45
				}, {
					"number": "11:00",
					"SOH": 59,
					"SOC": 41
				}, {
					"number": "12:00",
					"SOH": 63,
					"SOC": 63
				}, {
					"number": "13:00",
					"SOH": 65,
					"SOC": 88
				}, {
					"number": "14:00",
					"SOH": 65,
					"SOC": 77
				}, {
					"number": "15:00",
					"SOH": 80,
					"SOC": 116
				}, {
					"number": "16:00",
					"SOH": 90,
					"SOC": 100
				}, {
					"number": "17:00",
					"SOH": 88,
					"SOC": 76
				}, {
					"number": "18:00",
					"SOH": 78,
					"SOC": 80
				}, {
					"number": "19:00",
					"SOH": 90,
					"SOC": 86
				}, {
					"number": "20:00",
					"SOH": 80,
					"SOC": 100
				}, {
					"number": "21:00",
					"SOH": 70,
					"SOC": 80
				}, {
					"number": "22:00",
					"SOH": 83,
					"SOC": 104
				}, {
					"number": "23:00",
					"SOH": 84,
					"SOC": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"fontSize": 13,
					"gridCount": 20,
					"labelFrequency": 2,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"graphs": [{
					"balloonText": "SOC : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "SOC",
					"valueField": "SOC",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "SOH : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "SOH",
					"valueField": "SOH",
					"type": "smoothedLine",
					"lineThickness": 5
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 40,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart THS 01
		$('#equipmentChartths01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartths01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -40,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "온도",
						color: "#4cbfc4"
					}, {
						title: "습도",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"온도": 70,
					"습도": 83
				}, {
					"number": "1:00",
					"온도": 78,
					"습도": 58
				}, {
					"number": "2:00",
					"온도": 63,
					"습도": 83
				}, {
					"number": "3:00",
					"온도": 70,
					"습도": 85
				}, {
					"number": "4:00",
					"온도": 77,
					"습도": 64
				}, {
					"number": "5:00",
					"온도": 78,
					"습도": 45
				}, {
					"number": "6:00",
					"온도": 79,
					"습도": 60
				}, {
					"number": "7:00",
					"온도": 68,
					"습도": 78
				}, {
					"number": "8:00",
					"온도": 71,
					"습도": 66
				}, {
					"number": "9:00",
					"온도": 78,
					"습도": 78
				}, {
					"number": "10:00",
					"온도": 60,
					"습도": 45
				}, {
					"number": "11:00",
					"온도": 59,
					"습도": 41
				}, {
					"number": "12:00",
					"온도": 63,
					"습도": 63
				}, {
					"number": "13:00",
					"온도": 65,
					"습도": 88
				}, {
					"number": "14:00",
					"온도": 65,
					"습도": 77
				}, {
					"number": "15:00",
					"온도": 80,
					"습도": 116
				}, {
					"number": "16:00",
					"온도": 90,
					"습도": 100
				}, {
					"number": "17:00",
					"온도": 88,
					"습도": 76
				}, {
					"number": "18:00",
					"온도": 78,
					"습도": 80
				}, {
					"number": "19:00",
					"온도": 90,
					"습도": 86
				}, {
					"number": "20:00",
					"온도": 80,
					"습도": 100
				}, {
					"number": "21:00",
					"온도": 70,
					"습도": 80
				}, {
					"number": "22:00",
					"온도": 83,
					"습도": 104
				}, {
					"number": "23:00",
					"온도": 84,
					"습도": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"fontSize": 13,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
					"balloonText": "온도 : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "온도",
					"valueField": "온도",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "습도 : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "습도",
					"valueField": "습도",
					"type": "smoothedLine",
					"lineThickness": 5
				}],

				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});
		
		// Chart THS 02
		$('#equipmentChartths02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartths02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -40,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "온도",
						color: "#4cbfc4"
					}, {
						title: "습도",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"온도": 70,
					"습도": 83
				}, {
					"number": "1:00",
					"온도": 78,
					"습도": 58
				}, {
					"number": "2:00",
					"온도": 63,
					"습도": 83
				}, {
					"number": "3:00",
					"온도": 70,
					"습도": 85
				}, {
					"number": "4:00",
					"온도": 77,
					"습도": 64
				}, {
					"number": "5:00",
					"온도": 78,
					"습도": 45
				}, {
					"number": "6:00",
					"온도": 79,
					"습도": 60
				}, {
					"number": "7:00",
					"온도": 68,
					"습도": 78
				}, {
					"number": "8:00",
					"온도": 71,
					"습도": 66
				}, {
					"number": "9:00",
					"온도": 78,
					"습도": 78
				}, {
					"number": "10:00",
					"온도": 60,
					"습도": 45
				}, {
					"number": "11:00",
					"온도": 59,
					"습도": 41
				}, {
					"number": "12:00",
					"온도": 63,
					"습도": 63
				}, {
					"number": "13:00",
					"온도": 65,
					"습도": 88
				}, {
					"number": "14:00",
					"온도": 65,
					"습도": 77
				}, {
					"number": "15:00",
					"온도": 80,
					"습도": 116
				}, {
					"number": "16:00",
					"온도": 90,
					"습도": 100
				}, {
					"number": "17:00",
					"온도": 88,
					"습도": 76
				}, {
					"number": "18:00",
					"온도": 78,
					"습도": 80
				}, {
					"number": "19:00",
					"온도": 90,
					"습도": 86
				}, {
					"number": "20:00",
					"온도": 80,
					"습도": 100
				}, {
					"number": "21:00",
					"온도": 70,
					"습도": 80
				}, {
					"number": "22:00",
					"온도": 83,
					"습도": 104
				}, {
					"number": "23:00",
					"온도": 84,
					"습도": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"fontSize": 13,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
					"balloonText": "온도 : <b>[[value]]</b>",
					"lineAlpha": 1,
					"lineColor": "#4cbfc4",
					"title": "온도",
					"valueField": "온도",
					"lineThickness": 5,
					"type": "smoothedLine"
				}, {
					"balloonText": "습도 : <b>[[value]]</b>",
					"lineColor": "#deae3d",
					"title": "습도",
					"valueField": "습도",
					"type": "smoothedLine",
					"lineThickness": 5
				}],

				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart PV 01
		$('#equipmentChartpv01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartpv01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -40,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "모듈온도",
						color: "#4cbfc4"
					}, {
						title: "외기 온도",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"모듈온도": 70,
					"외기 온도": 83
				}, {
					"number": "1:00",
					"모듈온도": 78,
					"외기 온도": 58
				}, {
					"number": "2:00",
					"모듈온도": 63,
					"외기 온도": 83
				}, {
					"number": "3:00",
					"모듈온도": 70,
					"외기 온도": 85
				}, {
					"number": "4:00",
					"모듈온도": 77,
					"외기 온도": 64
				}, {
					"number": "5:00",
					"모듈온도": 78,
					"외기 온도": 45
				}, {
					"number": "6:00",
					"모듈온도": 79,
					"외기 온도": 60
				}, {
					"number": "7:00",
					"모듈온도": 68,
					"외기 온도": 78
				}, {
					"number": "8:00",
					"모듈온도": 71,
					"외기 온도": 66
				}, {
					"number": "9:00",
					"모듈온도": 78,
					"외기 온도": 78
				}, {
					"number": "10:00",
					"모듈온도": 60,
					"외기 온도": 45
				}, {
					"number": "11:00",
					"모듈온도": 59,
					"외기 온도": 41
				}, {
					"number": "12:00",
					"모듈온도": 63,
					"외기 온도": 63
				}, {
					"number": "13:00",
					"모듈온도": 65,
					"외기 온도": 88
				}, {
					"number": "14:00",
					"모듈온도": 65,
					"외기 온도": 77
				}, {
					"number": "15:00",
					"모듈온도": 80,
					"외기 온도": 116
				}, {
					"number": "16:00",
					"모듈온도": 90,
					"외기 온도": 100
				}, {
					"number": "17:00",
					"모듈온도": 88,
					"외기 온도": 76
				}, {
					"number": "18:00",
					"모듈온도": 78,
					"외기 온도": 80
				}, {
					"number": "19:00",
					"모듈온도": 90,
					"외기 온도": 86
				}, {
					"number": "20:00",
					"모듈온도": 80,
					"외기 온도": 100
				}, {
					"number": "21:00",
					"모듈온도": 70,
					"외기 온도": 80
				}, {
					"number": "22:00",
					"모듈온도": 83,
					"외기 온도": 104
				}, {
					"number": "23:00",
					"모듈온도": 84,
					"외기 온도": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"fontSize": 13,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
						"balloonText": "모듈온도: <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "모듈온도",
						"valueField": "모듈온도",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "외기 온도: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#deae3d",
						"title": "외기 온도",
						"valueField": "외기 온도",
						"lineThickness": 5,
						"type": "smoothedLine"
					}
				],

				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"fontSize": 13,
					"gridColor": "#3f5c7f",
					"minHorizontalGap": 10,
					"labelRotation": 90
				},
				"export": {
					"enabled": true
				}
			});
		});
		
		// Chart PV 02
		$('#equipmentChartpv02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartpv02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -40,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "모듈온도",
						color: "#4cbfc4"
					}, {
						title: "외기 온도",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"모듈온도": 70,
					"외기 온도": 83
				}, {
					"number": "1:00",
					"모듈온도": 78,
					"외기 온도": 58
				}, {
					"number": "2:00",
					"모듈온도": 63,
					"외기 온도": 83
				}, {
					"number": "3:00",
					"모듈온도": 70,
					"외기 온도": 85
				}, {
					"number": "4:00",
					"모듈온도": 77,
					"외기 온도": 64
				}, {
					"number": "5:00",
					"모듈온도": 78,
					"외기 온도": 45
				}, {
					"number": "6:00",
					"모듈온도": 79,
					"외기 온도": 60
				}, {
					"number": "7:00",
					"모듈온도": 68,
					"외기 온도": 78
				}, {
					"number": "8:00",
					"모듈온도": 71,
					"외기 온도": 66
				}, {
					"number": "9:00",
					"모듈온도": 78,
					"외기 온도": 78
				}, {
					"number": "10:00",
					"모듈온도": 60,
					"외기 온도": 45
				}, {
					"number": "11:00",
					"모듈온도": 59,
					"외기 온도": 41
				}, {
					"number": "12:00",
					"모듈온도": 63,
					"외기 온도": 63
				}, {
					"number": "13:00",
					"모듈온도": 65,
					"외기 온도": 88
				}, {
					"number": "14:00",
					"모듈온도": 65,
					"외기 온도": 77
				}, {
					"number": "15:00",
					"모듈온도": 80,
					"외기 온도": 116
				}, {
					"number": "16:00",
					"모듈온도": 90,
					"외기 온도": 100
				}, {
					"number": "17:00",
					"모듈온도": 88,
					"외기 온도": 76
				}, {
					"number": "18:00",
					"모듈온도": 78,
					"외기 온도": 80
				}, {
					"number": "19:00",
					"모듈온도": 90,
					"외기 온도": 86
				}, {
					"number": "20:00",
					"모듈온도": 80,
					"외기 온도": 100
				}, {
					"number": "21:00",
					"모듈온도": 70,
					"외기 온도": 80
				}, {
					"number": "22:00",
					"모듈온도": 83,
					"외기 온도": 104
				}, {
					"number": "23:00",
					"모듈온도": 84,
					"외기 온도": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"fontSize": 13,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
						"balloonText": "모듈온도: <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "모듈온도",
						"valueField": "모듈온도",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "외기 온도: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#deae3d",
						"title": "외기 온도",
						"valueField": "외기 온도",
						"lineThickness": 5,
						"type": "smoothedLine"
					}
				],

				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"fontSize": 13,
					"gridColor": "#3f5c7f",
					"minHorizontalGap": 10,
					"labelRotation": 90
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart VCB 01
		$('#equipmentChartvcb01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartvcb01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "전체 역방향 유효 전력",
						color: "#4cbfc4"
					}, {
						title: "전체 유효 전력 ",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"전체 역방향 유효 전력": 70,
					"전체 유효 전력": 83
				}, {
					"number": "1:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 58
				}, {
					"number": "2:00",
					"전체 역방향 유효 전력": 63,
					"전체 유효 전력": 83
				}, {
					"number": "3:00",
					"전체 역방향 유효 전력": 70,
					"전체 유효 전력": 85
				}, {
					"number": "4:00",
					"전체 역방향 유효 전력": 77,
					"전체 유효 전력": 64
				}, {
					"number": "5:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 45
				}, {
					"number": "6:00",
					"전체 역방향 유효 전력": 79,
					"전체 유효 전력": 60
				}, {
					"number": "7:00",
					"전체 역방향 유효 전력": 68,
					"전체 유효 전력": 78
				}, {
					"number": "8:00",
					"전체 역방향 유효 전력": 71,
					"전체 유효 전력": 66
				}, {
					"number": "9:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 78
				}, {
					"number": "10:00",
					"전체 역방향 유효 전력": 60,
					"전체 유효 전력": 45
				}, {
					"number": "11:00",
					"전체 역방향 유효 전력": 59,
					"전체 유효 전력": 41
				}, {
					"number": "12:00",
					"전체 역방향 유효 전력": 63,
					"전체 유효 전력": 63
				}, {
					"number": "13:00",
					"전체 역방향 유효 전력": 65,
					"전체 유효 전력": 88
				}, {
					"number": "14:00",
					"전체 역방향 유효 전력": 65,
					"전체 유효 전력": 77
				}, {
					"number": "15:00",
					"전체 역방향 유효 전력": 80,
					"전체 유효 전력": 116
				}, {
					"number": "16:00",
					"전체 역방향 유효 전력": 90,
					"전체 유효 전력": 100
				}, {
					"number": "17:00",
					"전체 역방향 유효 전력": 88,
					"전체 유효 전력": 76
				}, {
					"number": "18:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 80
				}, {
					"number": "19:00",
					"전체 역방향 유효 전력": 90,
					"전체 유효 전력": 86
				}, {
					"number": "20:00",
					"전체 역방향 유효 전력": 80,
					"전체 유효 전력": 100
				}, {
					"number": "21:00",
					"전체 역방향 유효 전력": 70,
					"전체 유효 전력": 80
				}, {
					"number": "22:00",
					"전체 역방향 유효 전력": 83,
					"전체 유효 전력": 104
				}, {
					"number": "23:00",
					"전체 역방향 유효 전력": 84,
					"전체 유효 전력": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"fontSize": 13,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [,
					{
						"balloonText": "전체 역방향 유효 전력: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#4cbfc4",
						"title": "전체 역방향 유효 전력",
						"valueField": "전체 역방향 유효 전력",
						"lineThickness": 5,
						"type": "smoothedLine"
					}, {
						"balloonText": "전체 유효 전력: <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "전체 유효 전력",
						"valueField": "전체 유효 전력",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});
		 
		// Chart VCB 02
		$('#equipmentChartvcb02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartvcb02", {
				"type": "serial",
				"theme": "light",
				"fontFamily": "Noto Sans KR",
				"marginRight": 10,
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "전체 역방향 유효 전력",
						color: "#4cbfc4"
					}, {
						title: "전체 유효 전력 ",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"전체 역방향 유효 전력": 70,
					"전체 유효 전력": 83
				}, {
					"number": "1:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 58
				}, {
					"number": "2:00",
					"전체 역방향 유효 전력": 63,
					"전체 유효 전력": 83
				}, {
					"number": "3:00",
					"전체 역방향 유효 전력": 70,
					"전체 유효 전력": 85
				}, {
					"number": "4:00",
					"전체 역방향 유효 전력": 77,
					"전체 유효 전력": 64
				}, {
					"number": "5:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 45
				}, {
					"number": "6:00",
					"전체 역방향 유효 전력": 79,
					"전체 유효 전력": 60
				}, {
					"number": "7:00",
					"전체 역방향 유효 전력": 68,
					"전체 유효 전력": 78
				}, {
					"number": "8:00",
					"전체 역방향 유효 전력": 71,
					"전체 유효 전력": 66
				}, {
					"number": "9:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 78
				}, {
					"number": "10:00",
					"전체 역방향 유효 전력": 60,
					"전체 유효 전력": 45
				}, {
					"number": "11:00",
					"전체 역방향 유효 전력": 59,
					"전체 유효 전력": 41
				}, {
					"number": "12:00",
					"전체 역방향 유효 전력": 63,
					"전체 유효 전력": 63
				}, {
					"number": "13:00",
					"전체 역방향 유효 전력": 65,
					"전체 유효 전력": 88
				}, {
					"number": "14:00",
					"전체 역방향 유효 전력": 65,
					"전체 유효 전력": 77
				}, {
					"number": "15:00",
					"전체 역방향 유효 전력": 80,
					"전체 유효 전력": 116
				}, {
					"number": "16:00",
					"전체 역방향 유효 전력": 90,
					"전체 유효 전력": 100
				}, {
					"number": "17:00",
					"전체 역방향 유효 전력": 88,
					"전체 유효 전력": 76
				}, {
					"number": "18:00",
					"전체 역방향 유효 전력": 78,
					"전체 유효 전력": 80
				}, {
					"number": "19:00",
					"전체 역방향 유효 전력": 90,
					"전체 유효 전력": 86
				}, {
					"number": "20:00",
					"전체 역방향 유효 전력": 80,
					"전체 유효 전력": 100
				}, {
					"number": "21:00",
					"전체 역방향 유효 전력": 70,
					"전체 유효 전력": 80
				}, {
					"number": "22:00",
					"전체 역방향 유효 전력": 83,
					"전체 유효 전력": 104
				}, {
					"number": "23:00",
					"전체 역방향 유효 전력": 84,
					"전체 유효 전력": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"axisAlpha": 0.4,
					"fontSize": 13,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [,
					{
						"balloonText": "전체 역방향 유효 전력: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#4cbfc4",
						"title": "전체 역방향 유효 전력",
						"valueField": "전체 역방향 유효 전력",
						"lineThickness": 5,
						"type": "smoothedLine"
					}, {
						"balloonText": "전체 유효 전력: <b>[[value]]</b>",
						"lineColor": "#deae3d",
						"title": "전체 유효 전력",
						"valueField": "전체 유효 전력",
						"type": "smoothedLine",
						"lineThickness": 5
					}
				],
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});

		// Chart ACB 01
		$('#equipmentChartacb01').each(function () {
			var chart = AmCharts.makeChart("equipmentChartacb01", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "전체 유효 전력 ",
						color: "#4cbfc4"
					}, {
						title: "전체 역방향 유효 전력",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"전체 유효 전력": 70,
					"전체 역방향 유효 전력": 83
				}, {
					"number": "1:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 58
				}, {
					"number": "2:00",
					"전체 유효 전력": 63,
					"전체 역방향 유효 전력": 83
				}, {
					"number": "3:00",
					"전체 유효 전력": 70,
					"전체 역방향 유효 전력": 85
				}, {
					"number": "4:00",
					"전체 유효 전력": 77,
					"전체 역방향 유효 전력": 64
				}, {
					"number": "5:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 45
				}, {
					"number": "6:00",
					"전체 유효 전력": 79,
					"전체 역방향 유효 전력": 60
				}, {
					"number": "7:00",
					"전체 유효 전력": 68,
					"전체 역방향 유효 전력": 78
				}, {
					"number": "8:00",
					"전체 유효 전력": 71,
					"전체 역방향 유효 전력": 66
				}, {
					"number": "9:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 78
				}, {
					"number": "10:00",
					"전체 유효 전력": 60,
					"전체 역방향 유효 전력": 45
				}, {
					"number": "11:00",
					"전체 유효 전력": 59,
					"전체 역방향 유효 전력": 41
				}, {
					"number": "12:00",
					"전체 유효 전력": 63,
					"전체 역방향 유효 전력": 63
				}, {
					"number": "13:00",
					"전체 유효 전력": 65,
					"전체 역방향 유효 전력": 88
				}, {
					"number": "14:00",
					"전체 유효 전력": 65,
					"전체 역방향 유효 전력": 77
				}, {
					"number": "15:00",
					"전체 유효 전력": 80,
					"전체 역방향 유효 전력": 116
				}, {
					"number": "16:00",
					"전체 유효 전력": 90,
					"전체 역방향 유효 전력": 100
				}, {
					"number": "17:00",
					"전체 유효 전력": 88,
					"전체 역방향 유효 전력": 76
				}, {
					"number": "18:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 80
				}, {
					"number": "19:00",
					"전체 유효 전력": 90,
					"전체 역방향 유효 전력": 86
				}, {
					"number": "20:00",
					"전체 유효 전력": 80,
					"전체 역방향 유효 전력": 100
				}, {
					"number": "21:00",
					"전체 유효 전력": 70,
					"전체 역방향 유효 전력": 80
				}, {
					"number": "22:00",
					"전체 유효 전력": 83,
					"전체 역방향 유효 전력": 104
				}, {
					"number": "23:00",
					"전체 유효 전력": 84,
					"전체 역방향 유효 전력": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"fontSize": 13,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
						"balloonText": "전체 유효 전력: <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "전체 유효 전력",
						"valueField": "전체 유효 전력",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "전체 역방향 유효 전력: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#deae3d",
						"title": "전체 역방향 유효 전력",
						"valueField": "전체 역방향 유효 전력",
						"lineThickness": 5,
						"type": "smoothedLine"
					}
				],
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
				},
				"export": {
					"enabled": true
				}
			});
		});
		
		// Chart ACB 01
		$('#equipmentChartacb02').each(function () {
			var chart = AmCharts.makeChart("equipmentChartacb02", {
				"type": "serial",
				"theme": "light",
				"marginRight": 10,
				"fontFamily": "Noto Sans KR",
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"align": "center",
					"fontSize": 15,
					"position": "absolute",
					"valueAlign": "center",
					"spacing": -35,
					"maxColumns": "right",
					"bottom": -50,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						title: "전체 유효 전력 ",
						color: "#4cbfc4"
					}, {
						title: "전체 역방향 유효 전력",
						color: "#deae3d"
					}]
				},
				"dataProvider": [{
					"number": "0:00",
					"전체 유효 전력": 70,
					"전체 역방향 유효 전력": 83
				}, {
					"number": "1:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 58
				}, {
					"number": "2:00",
					"전체 유효 전력": 63,
					"전체 역방향 유효 전력": 83
				}, {
					"number": "3:00",
					"전체 유효 전력": 70,
					"전체 역방향 유효 전력": 85
				}, {
					"number": "4:00",
					"전체 유효 전력": 77,
					"전체 역방향 유효 전력": 64
				}, {
					"number": "5:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 45
				}, {
					"number": "6:00",
					"전체 유효 전력": 79,
					"전체 역방향 유효 전력": 60
				}, {
					"number": "7:00",
					"전체 유효 전력": 68,
					"전체 역방향 유효 전력": 78
				}, {
					"number": "8:00",
					"전체 유효 전력": 71,
					"전체 역방향 유효 전력": 66
				}, {
					"number": "9:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 78
				}, {
					"number": "10:00",
					"전체 유효 전력": 60,
					"전체 역방향 유효 전력": 45
				}, {
					"number": "11:00",
					"전체 유효 전력": 59,
					"전체 역방향 유효 전력": 41
				}, {
					"number": "12:00",
					"전체 유효 전력": 63,
					"전체 역방향 유효 전력": 63
				}, {
					"number": "13:00",
					"전체 유효 전력": 65,
					"전체 역방향 유효 전력": 88
				}, {
					"number": "14:00",
					"전체 유효 전력": 65,
					"전체 역방향 유효 전력": 77
				}, {
					"number": "15:00",
					"전체 유효 전력": 80,
					"전체 역방향 유효 전력": 116
				}, {
					"number": "16:00",
					"전체 유효 전력": 90,
					"전체 역방향 유효 전력": 100
				}, {
					"number": "17:00",
					"전체 유효 전력": 88,
					"전체 역방향 유효 전력": 76
				}, {
					"number": "18:00",
					"전체 유효 전력": 78,
					"전체 역방향 유효 전력": 80
				}, {
					"number": "19:00",
					"전체 유효 전력": 90,
					"전체 역방향 유효 전력": 86
				}, {
					"number": "20:00",
					"전체 유효 전력": 80,
					"전체 역방향 유효 전력": 100
				}, {
					"number": "21:00",
					"전체 유효 전력": 70,
					"전체 역방향 유효 전력": 80
				}, {
					"number": "22:00",
					"전체 유효 전력": 83,
					"전체 역방향 유효 전력": 104
				}, {
					"number": "23:00",
					"전체 유효 전력": 84,
					"전체 역방향 유효 전력": 107
				}, ],
				"valueAxes": [{
					"minorGridEnabled": true,
					"autoGridCount": false,
					"position": "left",
					"tickLength": 0,
					"minimum": 0,
					"maximum": 120,
					"step": 20,
					"gridCount": 7,
					"labelFrequency": 1,
					"gridColor": "#3f5c7f",
					"gridAlpha": 0.4,
					"fontSize": 13,
					"axisAlpha": 0.4,
					"axisColor": "#3f5c7f"
				}],
				"color": "rgba(255, 255, 255, 0.5)",
				"graphs": [{
						"balloonText": "전체 유효 전력: <b>[[value]]</b>",
						"lineColor": "#4cbfc4",
						"title": "전체 유효 전력",
						"valueField": "전체 유효 전력",
						"type": "smoothedLine",
						"lineThickness": 5
					},
					{
						"balloonText": "전체 역방향 유효 전력: <b>[[value]]</b>",
						"lineAlpha": 1,
						"lineColor": "#deae3d",
						"title": "전체 역방향 유효 전력",
						"valueField": "전체 역방향 유효 전력",
						"lineThickness": 5,
						"type": "smoothedLine"
					}
				],
				"plotAreaBorderAlpha": 0,
				"marginTop": 40,
				"marginLeft": 0,
				"marginRight": 25,
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
					"labelRotation": 90,
					"fontSize": 13,
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