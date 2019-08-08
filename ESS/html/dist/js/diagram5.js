(function ($) {

	$(function () {});

	$(window).load(function () {

		var $_body = $('body').width();

		/*** System 4case page line ***/
		var $_wSysParameterL = $(".system-page .integrated-chart .box-content .parameter--sunlight .parameter__content"),
			$_wSysParameterR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content"),
			$_wSysParameterTR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content.col-TR"),
			$_wSysPower = $(".system-page .integrated-chart .box-content__power"),

			$_wSysSunlight = $(".system-page .integrated-chart .box-content__sunlight"),
			$_wSysparSunlight = $(".system-page .box-content__sunlight .parameter--sunlight"),

			$_wSysEss = $(".system-page .integrated-chart .box-content__ess"),
			$_wSysparEss = $(".system-page .box-content__ess .parameter--ess"),

			//line 2
			$_arrowSys4caseLine02W = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine02 .flowLineWrap"),
			$_arrowSys4caseLine02L = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine02"),

			//line 3
			$_arrowSys4caseLine03W = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine03 .flowLineWrap"),
			$_arrowSys4caseLine03L = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine03"),

			//line 4
			$_arrowSys4caseLine04W = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine04 .flowLineWrap"),
			$_arrowSys4caseLine04L = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine04"),

			//line 5
			$_arrowSys4caseLine05L = $('.system-page.case-4 .integrated-chart .box-content .parameter--sunlight--line'),

			//line 6
			$_arrowSys4caseLine06L = $('.system-page.case-4 .integrated-chart .box-content .parameter--ess--line'),

			//line 7
			$_arrowSys4caseLine07W = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine07 .flowLineWrap"),
			$_arrowSys4caseLine07L = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine07"),

			//line 8
			$_arrowSys4caseLine08W = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine08 .flowLineWrap"),
			$_arrowSys4caseLine08L = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine08"),

			//line 9
			$_arrowSys4caseLine09W = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine09 .flowLineWrap"),
			$_arrowSys4caseLine09L = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine09"),

			//line 10
			$_arrowSys4caseLine10W = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine10 .flowLineWrap"),
			$_arrowSys4caseLine10L = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine10"),

			//line 11
			$_arrowSys4caseLine11W = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine11 .flowLineWrap"),
			$_arrowSys4caseLine11L = $(".system-page.case-4 .integrated-chart .box-content .parameter--sunlight .flowLine11"),

			//line 13
			$_arrowSys4caseLine13W = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine13 .flowLineWrap"),
			$_arrowSys4caseLine13L = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine13"),

			//line 14
			$_arrowSys4caseLine14W = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine14 .flowLineWrap"),
			$_arrowSys4caseLine14L = $(".system-page.case-4 .integrated-chart .box-content .parameter--ess .flowLine14");

		var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
		var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
		var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

		var paddingLine05L = padSysLeft + (($_wSysParameterL.outerWidth() * 2) - padSysLeft + 10.5) + 10;
		var paddingLine06R = padSysRight + (($_wSysParameterR.outerWidth() * 3) - padSysRight) + 10;

		//System 4case arrow line
		$_arrowSys4caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys4caseLine02L.css("left", padSysLeft);

		$_arrowSys4caseLine03W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys4caseLine03L.css("left", padSysLeft);

		$_arrowSys4caseLine04W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys4caseLine04L.css("left", padSysLeft);

		$_arrowSys4caseLine05L.css("left", paddingLine05L);

		$_arrowSys4caseLine06L.css("right", paddingLine06R);

		$_arrowSys4caseLine07W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys4caseLine07L.css("right", padSysRight);

		$_arrowSys4caseLine08W.width($_wSysParameterR.outerWidth() + $_wSysParameterTR.outerWidth() + ($_wSysPower.outerWidth() / 2) + 35.5);
		$_arrowSys4caseLine08L.css("left", -padSysTR);

		$_arrowSys4caseLine09W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys4caseLine09L.css("right", padSysRight);

		$_arrowSys4caseLine10W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys4caseLine10L.css("right", padSysRight);

		$_arrowSys4caseLine11W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys4caseLine11L.css("left", padSysLeft);

		$_arrowSys4caseLine13W.width($_wSysParameterR.outerWidth() + $_wSysParameterTR.outerWidth() + ($_wSysPower.outerWidth() / 2) + 35.5);
		$_arrowSys4caseLine13L.css("left", -padSysTR);

		$_arrowSys4caseLine14W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys4caseLine14L.css("right", padSysRight);

		$(window).resize(function () {

			var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
			var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
			var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

			var paddingLine05L = padSysLeft + (($_wSysParameterL.outerWidth() * 2) - padSysLeft + 10.5) + 10;
			var paddingLine06R = padSysRight + (($_wSysParameterR.outerWidth() * 3) - padSysRight) + 10;

			//System 4case arrow line
			$_arrowSys4caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys4caseLine02L.css("left", padSysLeft);

			$_arrowSys4caseLine03W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys4caseLine03L.css("left", padSysLeft);

			$_arrowSys4caseLine04W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys4caseLine04L.css("left", padSysLeft);

			$_arrowSys4caseLine05L.css("left", paddingLine05L);

			$_arrowSys4caseLine06L.css("right", paddingLine06R);

			$_arrowSys4caseLine07W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys4caseLine07L.css("right", padSysRight);

			$_arrowSys4caseLine08W.width($_wSysParameterR.outerWidth() + $_wSysParameterTR.outerWidth() + ($_wSysPower.outerWidth() / 2) + 35.5);
			$_arrowSys4caseLine08L.css("left", -padSysTR);

			$_arrowSys4caseLine09W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys4caseLine09L.css("right", padSysRight);

			$_arrowSys4caseLine10W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys4caseLine10L.css("right", padSysRight);

			$_arrowSys4caseLine11W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys4caseLine11L.css("left", padSysLeft);

			$_arrowSys4caseLine13W.width($_wSysParameterR.outerWidth() + $_wSysParameterTR.outerWidth() + ($_wSysPower.outerWidth() / 2) + 35.5);
			$_arrowSys4caseLine13L.css("left", -padSysTR);

			$_arrowSys4caseLine14W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys4caseLine14L.css("right", padSysRight);

		});

	});

})(jQuery);