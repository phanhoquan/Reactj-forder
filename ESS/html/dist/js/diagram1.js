(function ($) {

	$(function () {});

	$(window).load(function () {

		var $_body = $('body').width();

		// flow chart
		$('#flow-chart').each(function () {
			var chart = AmCharts.makeChart("flow-chart", {
				"type": "serial",
				"theme": "light", //테마 
				"marginRight": 5,
				"fontFamily": "Noto Sans KR",

				//  범례
				"legend": {
					"equalWidths": false,
					"periodValueText": "total: [[value.sum]]",
					"position": "absolute",
					"valueAlign": "left",
					"align": "right",
					"fontSize": 12,
					"spacing": -30,
					"maxColumns": "right",
					"right": -60,
					"top": 0,
					"useMarkerColorForLabels": true,
					"useMarkerColorForValues": true,
					"markerType": "circle",

					"data": [{
							title: "발전량",
							color: "#d8b206",
						}, {
							title: "충전량",
							color: "#99b199",
						},
						{
							title: "방전량",
							color: "#c68b8b",
						},

					]
				},
				//데이터 영역
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
					"방전량": 6700,
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
					"방전량": 6800,
				}, ],
				//y축
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
				//그래프 영역 조절
				"graphs": [
					//충전량 그래프 설정 영역
					{
						//발전량
						"balloonText": "발전량 : <b>[[value]]</b>", // 글로
						//"lineAlpha": 1,  // 선 두께
						"lineColor": "#d8b206", //선색
						"title": "발전량",
						"valueField": "발전량",
						"type": "smoothedLine", //Smooth 설정
						"lineThickness": 5
					},

					//방전량 그래프 설정 영역
					{
						//충전량
						"balloonText": "충전량 : <b>[[value]]</b>", // 글로
						"lineAlpha": 1,
						"lineColor": "#99b199", //선색
						"title": "충전량",
						"valueField": "충전량",
						"lineThickness": 5,
						"type": "smoothedLine" //Smooth 설정
					},
					{
						//방전량
						"balloonText": "방전량 : <b>[[value]]</b>", // 글로
						//"lineAlpha": 1,  // 선 두께
						"lineColor": "#c68b8b", //선색
						"title": "방전량",
						"valueField": "방전량",
						"type": "smoothedLine", //Smooth 설정
						"lineThickness": 5
					},

				],
				"color": "rgba(255, 255, 255, 0.5)",
				"plotAreaBorderAlpha": 0,
				"marginTop": 70,
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

		//width arrow Line
		var $_widthParameter = $(".integrated-chart .box-content .parameter__content"),
			$_widthPower = $(".box-content__power"),

			$_widthSunlight = $(".box-content__sunlight"),
			$_widthparSunlight = $(".box-content__sunlight .parameter--sunlight"),

			$_widthEss = $(".box-content__ess"),
			$_widthparEss = $(".box-content__ess .parameter--ess"),

			//line 1
			$_arrowLine01W = $(".main-page .integrated-chart .box-content .parameter--sunlight .arrowLine01 .arrowLineWrap"),
			$_arrowLine01L = $(".main-page .integrated-chart .box-content .parameter--sunlight .arrowLine01"),

			//line 2
			$_arrowLine02W = $(".main-page .integrated-chart .box-content .parameter--sunlight .arrowLine02 .arrowLineWrap"),
			$_arrowLine02L = $(".main-page .integrated-chart .box-content .parameter--sunlight .arrowLine02"),

			//line 3
			$_arrowLine03W = $(".main-page .integrated-chart .box-content .parameter--ess .arrowLine03 .arrowLineWrap"),
			$_arrowLine03L = $(".main-page .integrated-chart .box-content .parameter--ess .arrowLine03"),

			//line 4
			$_arrowLine04W = $(".main-page .integrated-chart .box-content .parameter--ess .arrowLine04 .arrowLineWrap"),
			$_arrowLine04L = $(".main-page .integrated-chart .box-content .parameter--ess .arrowLine04"),

			//line 5
			$_arrowLine05W = $(".main-page .integrated-chart .box-content .parameter--ess .arrowLine05 .arrowLineWrap"),
			$_arrowLine05L = $(".main-page .integrated-chart .box-content .parameter--ess .arrowLine05");

		var paddingLeft1 = (($_widthSunlight.width() - $_widthparSunlight.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 7.5;
		var paddingLeft2 = ((($_widthEss.width() - $_widthparEss.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 10.5) + $_widthParameter.outerWidth() + 14;

		var paddingRight1 = (($_widthEss.width() - $_widthparEss.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 7.5;
		var paddingRight2 = ((($_widthSunlight.width() - $_widthSunlight.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 10.5) + $_widthParameter.outerWidth() + 36;

		//Main arrow line
		$_arrowLine01W.width($_widthParameter.outerWidth() + 10.5);
		$_arrowLine01L.css("left", paddingLeft1);

		if ($_body < 1599) {
			paddingRight2 = ((($_widthSunlight.width() - $_widthSunlight.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 10.5) + $_widthParameter.outerWidth() + 28;
			$_arrowLine02W.width(($_widthPower.outerWidth() / 2) + ($_widthParameter.outerWidth() / 2) + 24);
			$_arrowLine02L.css("left", paddingRight2);
		} else {
			$_arrowLine02W.width(($_widthPower.outerWidth() / 2) + ($_widthParameter.outerWidth() / 2) + 24);
			$_arrowLine02L.css("left", paddingRight2);
		}

		$_arrowLine03W.width(($_widthparEss.outerWidth() - paddingRight1 + ($_widthPower.outerWidth() / 2) + 5.5));
		$_arrowLine03L.css("right", paddingRight1);

		$_arrowLine04W.width($_widthParameter.outerWidth() + 10.5);
		$_arrowLine04L.css("right", paddingRight1);

		$_arrowLine05W.width(($_widthPower.outerWidth() / 2) + ($_widthParameter.outerWidth() / 2) + 21);
		$_arrowLine05L.css("right", paddingLeft2);

		$(window).resize(function () {

			var paddingLeft1 = (($_widthSunlight.width() - $_widthparSunlight.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 7.5;
			var paddingLeft2 = ((($_widthEss.width() - $_widthparEss.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 10.5) + $_widthParameter.outerWidth() + 14;

			var paddingRight1 = (($_widthEss.width() - $_widthparEss.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 7.5;
			var paddingRight2 = ((($_widthSunlight.width() - $_widthSunlight.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 10.5) + $_widthParameter.outerWidth() + 36;

			//Main arrow line
			$_arrowLine01W.width($_widthParameter.outerWidth() + 10.5);
			$_arrowLine01L.css("left", paddingLeft1);

			if ($_body < 1599) {
				paddingRight2 = ((($_widthSunlight.width() - $_widthSunlight.width()) / 2) + ($_widthParameter.outerWidth() / 2) - 10.5) + $_widthParameter.outerWidth() + 28;
				$_arrowLine02W.width(($_widthPower.outerWidth() / 2) + ($_widthParameter.outerWidth() / 2) + 24);
				$_arrowLine02L.css("left", paddingRight2);
			} else {
				$_arrowLine02W.width(($_widthPower.outerWidth() / 2) + ($_widthParameter.outerWidth() / 2) + 24);
				$_arrowLine02L.css("left", paddingRight2);
			}

			$_arrowLine03W.width(($_widthparEss.outerWidth() - paddingRight1 + ($_widthPower.outerWidth() / 2) + 5.5));
			$_arrowLine03L.css("right", paddingRight1);

			$_arrowLine04W.width($_widthParameter.outerWidth() + 10.5);
			$_arrowLine04L.css("right", paddingRight1);

			$_arrowLine05W.width(($_widthPower.outerWidth() / 2) + ($_widthParameter.outerWidth() / 2) + 21);
			$_arrowLine05L.css("right", paddingLeft2);
		});

	});

})(jQuery);