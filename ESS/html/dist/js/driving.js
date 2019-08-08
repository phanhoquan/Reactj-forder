(function ($) {
	$(function () {
		$.fn.ProgressBar = function () {
			return this.each(function () {
				var $this = $(this),
					percent = $this.data('percent'),
					width = 0,
					start = 0;
				var i = setInterval(function () {
					if (width >= percent) {
						$this.find('.state-progress-bar').css('width', width + '%');
					} else {
						width++;
						$this.find('.state-progress-bar').css('width', width + '%');
					}
					if (start <= percent * 2) {
						if (start % 2 == 0)
							$this.find('.progress-value').html(start / 2 + '%');
						start++;
					} else {
						clearInterval(i);
					}
				}, 1);
			});
		};
		/** End Skillbar */
	});

	$(window).load(function () {

		/*** Skillbar ***/
		$('.state-progress').each(function () {
			var $this = $(this);
			if (typeof $.fn.appear === 'function') {
				$this.appear(function () {
					$this.ProgressBar();
					$this.unbind('appear');
				}, {
					accX: 0,
					accY: 0,
					one: true
				});
			} else {
				$this.ProgressBar();
			}
		});

		$('.box-ellipse').each(function () {
			var number = $('.icon-ruler').data('value');
			var i_number = Number(number);
			$(this).find('.number').append(i_number);
			$(this).find('.number').prop('Counter', 0).animate({
				Counter: number,
			}, {
				duration: 3000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
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

		/**am chart gage page 04 */
		$('#amchart-gage').each(function () {
			var chart = AmCharts.makeChart("amchart-gage", {
				"theme": "light",
				"type": "gauge",
				"marginRight": -30,
				"marginBottom": -80,
				"marginLeft": -30,
				"color": "rgba(255, 255, 255, 0.6)",
				"fontSize": 13,
				"fontFamily": "Noto Sans KR",
				"axes": [{
					"topTextColor": "#99b199",
					"topTextFontSize": 25,
					"topTextYOffset": 65,
					"axisAlpha": 0,
					"bandAlpha": 0,
					"axisThickness": 0,
					"startValue": -400,
					"endValue": 400,
					"radius": "50%",
					"valueInterval": 200,
					"tickAlpha": 0,
					"startAngle": -90,
					"labelsEnabled": true,
					"endAngle": 90,
					"bandOutlineAlpha": 0,
					"showLastLabel": true,
					"showFirstLabel": true,
					"labelOffset": -15,
					"tickLength": -95,
				}],
				"arrows": [{
					"id": "gage-arrows",
					"alpha": 1,
					"innerRadius": "12",
					"nailRadius": 10,
					"radius": "170%",
					"startWidth": 20,
					"color": "#dedede",
					"value": 0,
					"nailBorderAlpha": 1,
					"nailBorderThickness": 12,
				}],
				"responsive": {
					"enabled": true,
					"addDefaultRules": false,
					"rules": [{
						"maxWidth": 336,
						"overrides": {
							"marginRight": -30,
							"marginBottom": -45,
							"marginLeft": -30,
							"axes": [{
								"inside": true,
								"topTextYOffset": 55,
								"topTextFontSize": 20,
								"labelsEnabled": true,
								"labelOffset": -8,
								"tickLength": -90,
								"axisAlpha": 0,
							}],
						}
					}],
				}
			});

			setInterval(randomValue, 2000);

			function randomValue() {
				var value = Math.round(Math.random() * 400);
				chart.arrows[0].setValue(value);
				chart.axes[0].setTopText(value + " Kwh");
				//chart.axes[0].bands[1].setEndValue(value);
			}
		}); /**end */

		//resize
		$(window).resize(function () {

		});
	});


})(jQuery);