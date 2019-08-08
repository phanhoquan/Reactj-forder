(function ($) {

	$(function () {});

	$(window).load(function () {

		/*** System 1case page line ***/
		var $_wSysParameterL = $(".system-page .integrated-chart .box-content .parameter--sunlight .parameter__content"),
			$_wSysParameterR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content"),
			$_wSysParameterTR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content.col-TR"),
			$_wSysPower = $(".system-page .integrated-chart .box-content__power"),

			$_wSysSunlight = $(".system-page .integrated-chart .box-content__sunlight"),
			$_wSysparSunlight = $(".system-page .box-content__sunlight .parameter--sunlight"),

			$_wSysEss = $(".system-page .integrated-chart .box-content__ess"),
			$_wSysparEss = $(".system-page .box-content__ess .parameter--ess"),

			//line 2
			$_arrowSys1caseLine02W = $(".system-page.case-1 .integrated-chart .box-content .parameter--sunlight .flowLine02 .flowLineWrap"),
			$_arrowSys1caseLine02L = $(".system-page.case-1 .integrated-chart .box-content .parameter--sunlight .flowLine02"),

			//line 3
			$_arrowSys1caseLine03W = $(".system-page.case-1 .integrated-chart .box-content .parameter--sunlight .flowLine03 .flowLineWrap"),
			$_arrowSys1caseLine03L = $(".system-page.case-1 .integrated-chart .box-content .parameter--sunlight .flowLine03"),

			//line 4
			$_arrowSys1caseLine04W = $(".system-page.case-1 .integrated-chart .box-content .parameter--sunlight .flowLine04 .flowLineWrap"),
			$_arrowSys1caseLine04L = $(".system-page.case-1 .integrated-chart .box-content .parameter--sunlight .flowLine04"),

			//line 7
			$_arrowSys1caseLine07W = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine07 .flowLineWrap"),
			$_arrowSys1caseLine07L = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine07"),

			//line 8
			$_arrowSys1caseLine08W = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine08 .flowLineWrap"),
			$_arrowSys1caseLine08L = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine08"),

			//line 9
			$_arrowSys1caseLine09W = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine09 .flowLineWrap"),
			$_arrowSys1caseLine09L = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine09"),

			//line 10
			$_arrowSys1caseLine10W = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine10 .flowLineWrap"),
			$_arrowSys1caseLine10L = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine10"),

			//line 11
			$_arrowSys1caseLine11W = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine11 .flowLineWrap"),
			$_arrowSys1caseLine11L = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine11"),

			//line 13
			$_arrowSys1caseLine13W = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine13 .flowLineWrap"),
			$_arrowSys1caseLine13L = $(".system-page.case-1 .integrated-chart .box-content .parameter--ess .flowLine13");


		var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
		var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
		var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

		//System 1case arrow line
		$_arrowSys1caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys1caseLine02L.css("left", padSysLeft);

		$_arrowSys1caseLine03W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys1caseLine03L.css("left", padSysLeft);

		$_arrowSys1caseLine04W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys1caseLine04L.css("left", padSysLeft);

		$_arrowSys1caseLine07W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 13);
		$_arrowSys1caseLine07L.css("right", padSysRight);

		$_arrowSys1caseLine08W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 32);
		$_arrowSys1caseLine08L.css("left", -padSysTR);

		$_arrowSys1caseLine09W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 13);
		$_arrowSys1caseLine09L.css("right", padSysRight);

		$_arrowSys1caseLine10W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 13);
		$_arrowSys1caseLine10L.css("right", padSysRight);

		$_arrowSys1caseLine11W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 32);
		$_arrowSys1caseLine11L.css("left", -padSysTR);

		$_arrowSys1caseLine13W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 32);
		$_arrowSys1caseLine13L.css("left", -padSysTR);

		$(window).resize(function () {

			var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
			var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
			var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

			//System 1case arrow line
			$_arrowSys1caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys1caseLine02L.css("left", padSysLeft);

			$_arrowSys1caseLine03W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys1caseLine03L.css("left", padSysLeft);

			$_arrowSys1caseLine04W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys1caseLine04L.css("left", padSysLeft);

			$_arrowSys1caseLine07W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 13);
			$_arrowSys1caseLine07L.css("right", padSysRight);

			$_arrowSys1caseLine08W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 32);
			$_arrowSys1caseLine08L.css("left", -padSysTR);

			$_arrowSys1caseLine09W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 13);
			$_arrowSys1caseLine09L.css("right", padSysRight);

			$_arrowSys1caseLine10W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 13);
			$_arrowSys1caseLine10L.css("right", padSysRight);

			$_arrowSys1caseLine11W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 32);
			$_arrowSys1caseLine11L.css("left", -padSysTR);

			$_arrowSys1caseLine13W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 32);
			$_arrowSys1caseLine13L.css("left", -padSysTR);

		});

	});

})(jQuery);