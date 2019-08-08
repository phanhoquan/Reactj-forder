(function ($) {

	$(function () {
		//Arrow Animate
		function autoArrow(item, speed) {
			var $item = $(item).find(".arrowLine_list");
			var lineSize = [];
			var linesspeed = [];
			var startBg = -50;
			var startBgTime = 15 / speed * 3000;
			$item.find(">li").each(function () {
				lineSize.push($(this).width());
			});

			// alert(lineSize);
			var lineLen = $item.find(">li").length;
			for (i = 0; i < lineLen; i++) {
				linesspeed.push(lineSize[i] / speed * 1000);
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
	});

	$(window).load(function () {

		setTimeout(function () {
			//width arrow Line
			var $_widthfirst = $(".main-content .integrated-chart .box-content .parameter__content:eq(0)"),
			    $_widthpvi = $(".main-content .integrated-chart .box-content .parameter__content:eq(1)"),
			    $_widthtr = $(".main-content .integrated-chart .box-content .parameter__content:eq(2)"),
			    $_widthlast = $(".main-content .integrated-chart .box-content .parameter__content:eq(3)"),


			//line 1
			$_arrowLine01W = $(".main-content .integrated-chart .box-content .parameter--sunlight .arrowLine01 .arrowLineWrap"),
			    $_arrowLine01L = $(".main-content .integrated-chart .box-content .parameter--sunlight .arrowLine01");
			var paddingLeft = $_widthfirst.outerWidth() / 2;

			//Main arrow line
			$_arrowLine01W.width($_widthfirst.outerWidth() / 2 + $_widthpvi.outerWidth() + $_widthtr.outerWidth() + ($_widthlast.outerWidth() - $_widthlast.width() / 2) + 54);
			$_arrowLine01L.css("left", paddingLeft);
		}, 100);

		var resizeTimeout;
		$(window).resize(function () {

			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(function () {
				//width arrow Line
				var $_widthfirst = $(".main-content .integrated-chart .box-content .parameter__content:eq(0)"),
				    $_widthpvi = $(".main-content .integrated-chart .box-content .parameter__content:eq(1)"),
				    $_widthtr = $(".main-content .integrated-chart .box-content .parameter__content:eq(2)"),
				    $_widthlast = $(".main-content .integrated-chart .box-content .parameter__content:eq(3)"),


				//line 1
				$_arrowLine01W = $(".main-content .integrated-chart .box-content .parameter--sunlight .arrowLine01 .arrowLineWrap"),
				    $_arrowLine01L = $(".main-content .integrated-chart .box-content .parameter--sunlight .arrowLine01");
				var paddingLeft = $_widthfirst.outerWidth() / 2;

				//Main arrow line
				$_arrowLine01W.width($_widthfirst.outerWidth() / 2 + $_widthpvi.outerWidth() + $_widthtr.outerWidth() + ($_widthlast.outerWidth() - $_widthlast.width() / 2) + 54);
				$_arrowLine01L.css("left", paddingLeft);
			}, 10);
		});
	});
})(jQuery);
(function ($) {

	$(function () {});

	$(window).load(function () {
		$(".child.active").css("background-color", "#f68315");

		var $_adminBar = $('#wpadminbar'),
		    $_body = $('body'),
		    $_wrapper = $('#wrapper'),
		    $_window = $(this),
		    isHomePage = $_body.hasClass('home'),
		    bodyInitTop = $_adminBar.length > 0 ? $_adminBar.outerHeight() : 0,
		    currentScrollTop = 0;

		function init() {
			disableClick();
			contactFormHook();
		}
		init();

		function isIe() {
			var pattern = /Trident\/[0-9]+\.[0-9]+/;

			return pattern.test(navigator.userAgent);
		}

		function isEdge() {
			var pattern = /Edge\/[0-9]+\.[0-9]+/;

			return pattern.test(navigator.userAgent);
		}

		function disableClick() {
			$('.noclick').on('click', function () {
				return false;
			});
		}

		function contactFormHook() {
			if ($('.wpcf7').length < 1) return false;

			var wpcf7Elm = document.querySelector('.wpcf7');

			wpcf7Elm.addEventListener('wpcf7invalid', function (event) {
				$('.wpcf7 .wpcf7-not-valid').eq(0).focus();
			}, false);
		}

		function scrollToPosition(pos, second) {
			$('html, body').animate({
				scrollTop: pos
			}, second * 1000);
		}

		$(".btn-logout a").click(function () {
			$(".btn-logout a").removeClass("active");
			$(this).addClass('active');
		});

		$(".nav>ul>li.child").click(function (e) {
			e.stopPropagation();
			var tab = true;
			if ($(this).hasClass("active")) {
				tab = true;
			} else {
				tab = false;
			}
			$(".nav ul li.child").removeClass("active");
			if (tab) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

		$(".dropdown-menu>li.grandChild").click(function (e) {
			e.stopPropagation();
			$(".dropdown-menu>li.grandChild").css("background-color", "#f68315");
			$(".nav ul li.child").css({
				"background-color": "#f68315"
			});
			$(".dropdown-menu>li.grandChild").removeClass('active');
			$(this).addClass('active');
			$(this).css("background-color", "#bf6910");
		});

		var eventstatus = $('.page-index').outerWidth() - $('.banner-menu').outerWidth();
		$(".event-status").css("width", eventstatus);

		var eventstatus = $('.page-index').outerWidth() - $('.banner-menu').outerWidth();
		$(".event-status").css("width", eventstatus);

		var mainwrap = $('.page-index').outerWidth() - $('.banner-menu').outerWidth() - 1;
		$(".main-wrap").css("width", mainwrap);

		var maincontent = mainwrap - $('.navbar-left').outerWidth();
		$(".main-content").css("width", maincontent);

		// Create chart instance
		$(".custome-datatable").DataTable({
			responsive: true,
			autoWidth: true,
			searching: false, // Enable / disable Search
			lengthChange: true, //Enable / disable paging display length
			ordering: false, //Enable / disable order
			info: false, // Enable / disabl info
			pagingType: "full_numbers",
			sLengthMenu: "Show _MENU_",
			language: {
				sLengthMenu: "_MENU_개씩 보기",
				aria: {
					paginate: {
						first: 'First',
						previous: 'Previous',
						next: 'Next',
						last: 'Last'
					}
				},
				paginate: {
					first: '«',
					previous: '‹',
					next: '›',
					last: '»'
				}
			}
		});

		// nice scroll 
		$(".nicescroll").niceScroll();
		$(window).resize(function () {
			var eventstatus = $('.page-index').outerWidth() - $('.banner-menu').outerWidth();
			$(".event-status").css("width", eventstatus);
			// Resize
			var mainwrap = $('.page-index').outerWidth() - $('.banner-menu').outerWidth() - 1;
			$(".main-wrap").css("width", mainwrap);
			var maincontent = mainwrap - $('.navbar-left').outerWidth();
			$(".main-content").css("width", maincontent);
		});
	});
})(jQuery);