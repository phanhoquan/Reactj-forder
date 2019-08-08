(function ($) {

	$(function () {
		//Arrow Animate
		function autoArrow(item, speed) {
			var $item = $(item).find(".arrowLine_list");
			var lineSize = [];
			var linesspeed = [];
			var startBg = -50;
			var startBgTime = (15 / speed) * 3000;
			$item.find(">li").each(function () {
				lineSize.push($(this).width());
			});

			// alert(lineSize);
			var lineLen = $item.find(">li").length;
			for (i = 0; i < lineLen; i++) {
				linesspeed.push((lineSize[i] / speed) * 1000);
			}

			var sumTime = 0;
			for (i = 0; i < lineLen; i++) {
				sumTime += linesspeed[i];
			}
			if (lineLen < 2) {
				sumTime = sumTime * 2;
			}

			// alert("startBg"+ startBg);
			// alert("startBgTime"+ startBgTime);
			var arrowLoop = autoLoopArrow();

			function autoLoopArrow() {
				$item.find(".line--1").css({
					"backgroundPosition": parseFloat(startBg)
				}).animate({
					"backgroundPosition": parseFloat(lineSize[0]) + parseFloat(startBg)
				}, linesspeed[0], "linear", function () {
					$item.find(".line--1").css({
						"backgroundPosition": lineSize[0] + startBg
					}).animate({
						"backgroundPosition": lineSize[0]
					}, startBgTime, "linear", function () {
						$item.find(".line--1").css({
							"backgroundPosition": startBg
						});
					});
					if (lineLen >= 2) {
						$item.find(".line--2").css({
							"backgroundPosition": startBg
						}).animate({
							"backgroundPosition": lineSize[1] + startBg
						}, linesspeed[1], "linear", function () {
							$item.find(".line--2").css({
								"backgroundPosition": lineSize[1] + startBg
							}).animate({
								"backgroundPosition": lineSize[1]
							}, startBgTime, "linear", function () {
								$item.find(".line--2").css({
									"backgroundPosition": startBg
								});
							});
							if (lineLen >= 3) {
								$item.find(".line--3").css({
									"backgroundPosition": startBg
								}).animate({
									"backgroundPosition": lineSize[2] + startBg
								}, linesspeed[2], "linear", function () {
									$item.find(".line--3").css({
										"backgroundPosition": lineSize[2] + startBg
									}).animate({
										"backgroundPosition": lineSize[2]
									}, startBgTime, "linear", function () {
										$item.find(".line--3").css({
											"backgroundPosition": startBg
										});
									});
									if (lineLen >= 4) {
										$item.find(".line--4").css({
											"backgroundPosition": startBg
										}).animate({
											"backgroundPosition": lineSize[3] + startBg
										}, linesspeed[3], "linear", function () {
											$item.find(".line--4").css({
												"backgroundPosition": lineSize[3] + startBg
											}).animate({
												"backgroundPosition": lineSize[3]
											}, startBgTime, "linear", function () {
												$item.find(".line--4").css({
													"backgroundPosition": startBg
												});
											});
											if (lineLen >= 5) {
												$item.find(".line--5").css({
													"backgroundPosition": startBg
												}).animate({
													"backgroundPosition": lineSize[4] + startBg
												}, linesspeed[4], "linear", function () {
													$item.find(".line--5").css({
														"backgroundPosition": lineSize[4] + startBg
													}).animate({
														"backgroundPosition": lineSize[4]
													}, startBgTime, "linear", function () {
														$item.find(".line--5").css({
															"backgroundPosition": startBg
														});
													});
												});
											}
										});
									}
								});
							}
						});
					}
				});
			}
			// console.log(item + ":" + sumTime);
			arrowLoop = setInterval(autoLoopArrow, sumTime);
		}

		autoArrow("#arrowLine01", "100");
		autoArrow("#arrowLine02", "100");
		autoArrow("#arrowLine03", "100");
		autoArrow("#arrowLine04", "100");
		autoArrow("#arrowLine05", "100");
		autoArrow("#arrowLine06", "100");
		autoArrow("#arrowLine07", "100");
		autoArrow("#arrowLine08", "100");
		autoArrow("#arrowLine09", "100");
		autoArrow("#arrowLine10", "100");
		autoArrow("#arrowLine11", "100");
		autoArrow("#arrowLine12", "100");
		autoArrow("#arrowLine13", "100");
		autoArrow("#arrowLine14", "100");
		autoArrow("#arrowLine15", "100");
		autoArrow("#arrowLine16", "100");
		autoArrow("#arrowLine17", "100");
		autoArrow("#arrowLine18", "100");
		autoArrow("#arrowLine19", "100");
		autoArrow("#arrowLine20", "100");
		autoArrow("#arrowLine21", "100");
		autoArrow("#arrowLine22", "100");
		autoArrow("#arrowLine23", "100");
		autoArrow("#arrowLine24", "100");
		autoArrow("#arrowLine25", "100");
		autoArrow("#arrowLine26", "100");
		autoArrow("#arrowLine27", "100");
		autoArrow("#arrowLine28", "100");
		autoArrow("#arrowLine29", "100");
		autoArrow("#arrowLine30", "100");
		autoArrow("#arrowLine31", "100");
		autoArrow("#arrowLine32", "100");
		autoArrow("#arrowLine33", "100");
		autoArrow("#arrowLine34", "100");
		autoArrow("#arrowLine35", "100");
		autoArrow("#arrowLine36", "100");
		autoArrow("#arrowLine37", "100");
		autoArrow("#arrowLine38", "100"); 
		autoArrow("#arrowLine38", "100");
		autoArrow("#arrowLine39", "100");
		autoArrow("#arrowLine40", "100");
		autoArrow("#arrowLine41", "100");
		autoArrow("#arrowLine42", "100");
		autoArrow("#arrowLine43", "100");
		autoArrow("#arrowLine44", "100");
		autoArrow("#arrowLine45", "100");
		autoArrow("#arrowLine46", "100");
		autoArrow("#arrowLine47", "100");
		autoArrow("#arrowLine48", "100");
		autoArrow("#arrowLine49", "100");
		autoArrow("#arrowLine50", "100");
		autoArrow("#arrowLine51", "100");
		autoArrow("#arrowLine52", "100");
		autoArrow("#arrowLine53", "100");
		autoArrow("#arrowLine54", "100");
		autoArrow("#arrowLine55", "100");
		autoArrow("#arrowLine56", "100");
		autoArrow("#arrowLine57", "100");
		autoArrow("#arrowLine58", "100");
		autoArrow("#arrowLine59", "100");
		autoArrow("#arrowLine60", "100");
		autoArrow("#arrowLine61", "100");
		autoArrow("#arrowLine62", "100");
		autoArrow("#arrowLine63", "100");
		autoArrow("#arrowLine64", "100");
		autoArrow("#arrowLine65", "100");
		autoArrow("#arrowLine66", "100");
		autoArrow("#arrowLine67", "100");
		autoArrow("#arrowLine68", "100");
		autoArrow("#arrowLine69", "100");
		autoArrow("#arrowLine70", "100");
		autoArrow("#arrowLine71", "100");
		autoArrow("#arrowLine72", "100");
		autoArrow("#arrowLine73", "100");
		autoArrow("#arrowLine74", "100");
		autoArrow("#arrowLine75", "100");
		autoArrow("#arrowLine76", "100");
		autoArrow("#arrowLine77", "100");
		autoArrow("#arrowLine78", "100");
		autoArrow("#arrowLine79", "100");
		autoArrow("#arrowLine80", "100");
	});


	$(window).load(function () {});

})(jQuery);