(function ($) {
	$(function () {});

	$(window).load(function () {

		//  Checked All
		$('.checked').on('click', function () {
			if (this.checked) {
				$('.checkbox').each(function () {
					this.checked = true;
				});
			} else {
				$('.checkbox').each(function () {
					this.checked = false;
				});
			}
		});

		$('.checkbox').on('click', function () {
			if ($('.checkbox:checked').length == $('.checkbox').length) {
				$('.checked').prop('checked', true);
			} else {
				$('.checked').prop('checked', false);
			}
		});

		$('.check-all').on('click', function () {
			$('.check-box').each(function () {
				this.checked = true;
			});
		});
		$('.check-off').on('click', function () {
			$('.check-box').each(function () {
				this.checked = false;
			});
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

		$('#managementChartsetting').each(function () {
			AmCharts.useUTC = true;
			var chart = AmCharts.makeChart("managementChartsetting", {
				"type": "gantt",
				"theme": "light",
				"marginTop": 30,
				"period": "hh",
				"dataDateFormat": "YYYY-MM-DD",
				"balloonDateFormat": "JJ:NN",
				"backgroundColor": "#23282d",
				"borderColor": "#49515c",
				"legendBorderAlpha": "0",
				"columnWidth": 0.5,
				"fontFamily": "Noto Sans KR",
				"plotAreaBorderAlpha": 1,
				"plotAreaBorderColor": "#3f5c7f",
				"pathToImages": "http://cdn.amcharts.com/lib/3/images/",
				"valueAxis": {
					"type": "date",
					"minorGridEnabled": true,
					"autoGridCount": true,
					"tickLength": 1,
					"position": "left",
					"gridColor": "#3f5c7f",
					"gridAlpha": 1,
					"fontSize": 13,
					"tickLength": 0,
					"minimum": 1,
					"maximum": 24,
					"labelFrequency": 1,
					"axisAlpha": 0,
					"minorGridEnabled": true,
					"minorGridAlpha": 0,
					"centerRotatedLabels": true,
					"labelFrequency": 3,
					"showOnAxis": true,
				},
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"position": "absolute",
					"valueAlign": "left",
					"align": "right",
					"fontSize": 15,
					"spacing": -30,
					"maxColumns": "right",
					"right": -75,
					"top": -45,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",
					"data": [{
						"title": "충전",
						"color": "#99b199"
					}, {
						"title": "방전",
						"color": "#c68b8b"
					}]
				},
				"categoryAxis": {
					"axisAlpha": 1,
					"axisColor": "#3f5c7f",
					"gridAlpha": 1,
					"gridColor": "#3f5c7f",
					"minHorizontalGap": 100,
					"gridPosition": "start",
					"centerLabels": true,
					"centerRotatedLabels": true,
					"fillAlphas": 1,
					"bulletBorderAlpha": 1,
					"bulletBorderThickness": 2,
					"gridPosition": "start",
					// "tickPosition": "start",
					"guides": [{
						"category": "PCS1",
						"toCategory": "PCS2",
						"toCategory": "PCS3",
						"toCategory": "...",
						"toCategory": "PCS18",
						"toCategory": "PCS19",
						"toCategory": "PCS20",
						"LineAlpha": 0.5,
						"expand": true,
						"label": "월",
						"position": "left",
						"tickLength": 80,
						"fillAlpha": 0.8,
						"fillColor": "#1e252c",
						"lineAlpha": 1,
						"lineColor": "#1e252c",
					}, {
						"category": " PCS1",
						"toCategory": " PCS2",
						"toCategory": " PCS3",
						"toCategory": " ...",
						"toCategory": " PCS18",
						"toCategory": " PCS19",
						"toCategory": " PCS20",
						"LineAlpha": 0.5,
						"expand": true,
						"label": "화",
						"position": "left",
						"tickLength": 80,
						"fillAlpha": 0.8,
						"fillColor": "#1e252c",
					}, ]
				},
				"brightnessStep": 10,
				"graph": {
					"fillAlphas": 1,
					"labelText": "[[customDescription]]", // 텍스트 넣기
					"balloonText": "<b>[[task]]</b>: [[open]] [[value]]",
				},
				"rotate": true,
				"categoryField": "category",
				"segmentsField": "segments",
				"colorField": "color",
				"startDate": "2019-01-01",
				"startField": "start",
				"endField": "end",
				"durationField": "duration",
				"dataProvider": [{
						"category": "PCS1",
						"segments": [{
							"start": 3,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 14,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#c68b8b",
							"task": "방전"
						}]
					},
					{
						"category": "PCS2",
						"segments": [{
							"start": 2,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 15,
							"duration": 5,
							"customDescription": "2,000KW",

							"color": "#c68b8b",
							"task": "방전"
						}]
					},
					{
						"category": "PCS3",
						"segments": [{
							"start": 3,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 16,
							"duration": 5,
							"customDescription": "2,000KW",

							"color": "#c68b8b",
							"task": "방전"
						}]
					},

					{
						"category": "...",

					},

					{
						"category": "PCS18",
						"segments": [{
							"start": 2,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 15,
							"duration": 5,
							"customDescription": "2,000KW",

							"color": "#c68b8b",
							"task": "방전"
						}]
					},

					{
						"category": "PCS19",
						"segments": [{
							"start": 2,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 14,
							"duration": 5,
							"customDescription": "2,000KW",

							"color": "#c68b8b",
							"task": "방전"
						}]
					},

					{
						"category": "PCS20",
						"segments": [{
							"start": 2,
							"duration": 5,
							"customDescription": "2,000KW",
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 14,
							"duration": 5,
							"customDescription": "2,000KW",

							"color": "#c68b8b",
							"task": "방전"
						}]
					},

					//화
					{
						"category": " PCS1",
						"segments": [{
							"start": 2,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#99b199",
							"task": "충전",

						}, {
							"start": 14,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#c68b8b",
							"task": "방전"
						}]
					}, {
						"category": " PCS2",
						"segments": [{
							"start": 2,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 15,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#c68b8b",
							"task": "방전"
						}]
					},
					{
						"category": " PCS3",
						"segments": [{
							"start": 3,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 16,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#c68b8b",
							"task": "방전"
						}]
					},
					{
						"category": " ...",

					},
					{
						"category": " PCS18",
						"segments": [{
							"start": 2,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 15,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#c68b8b",
							"task": "방전"
						}]
					},
					{
						"category": " PCS19",
						"segments": [{
							"start": 2,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 14,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#c68b8b",
							"task": "방전"
						}]
					},
					{
						"category": " PCS20",
						"segments": [{
							"start": 2,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#99b199",
							"task": "충전"
						}, {
							"start": 14,
							"customDescription": "2,000KW",
							"duration": 5,
							"color": "#c68b8b",
							"task": "방전"
						}]
					},
				],
				"chartScrollbar": {
					"updateOnReleaseOnly": true,
					"backgroundAlpha": 1,
					"backgroundColor": "#22262b",
					"dragIcon": "dragIconRoundSmallBlack",
					"scrollbarHeight": 8,
					"offset": 20,
					"dragIconHeight": 12,
					"dragIconWidth": 12,
					"selectedGraphLineAlpha": 1,
					"selectedGraphLineColor": "#fff",
				},
				"chartCursor": {
					"cursorColor": "#22262b",
					"valueBalloonsEnabled": false,
					"cursorAlpha": 1,
					"valueLineAlpha": 0.5,
					"valueLineBalloonEnabled": true,
					"valueLineEnabled": true,
					"zoomable": false,
					"valueZoomable": true,

				},
				"export": {
					"enabled": true
				},
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