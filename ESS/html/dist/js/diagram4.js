(function ($) {

	$(function () {});

	$(window).load(function () {

		/*** System 3case page line ***/
		var $_wSysParameterL = $(".system-page .integrated-chart .box-content .parameter--sunlight .parameter__content"),
			$_wSysParameterR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content"),
			$_wSysParameterTR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content.col-TR"),
			$_wSysPower = $(".system-page .integrated-chart .box-content__power"),

			$_wSysSunlight = $(".system-page .integrated-chart .box-content__sunlight"),
			$_wSysparSunlight = $(".system-page .box-content__sunlight .parameter--sunlight"),

			$_wSysEss = $(".system-page .integrated-chart .box-content__ess"),
			$_wSysparEss = $(".system-page .box-content__ess .parameter--ess"),

			//line 2
			$_arrowSys3caseLine02W = $(".system-page.case-3 .integrated-chart .box-content .parameter--sunlight .flowLine02 .flowLineWrap"),
			$_arrowSys3caseLine02L = $(".system-page.case-3 .integrated-chart .box-content .parameter--sunlight .flowLine02"),

			//line 3
			$_arrowSys3caseLine03W = $(".system-page.case-3 .integrated-chart .box-content .parameter--sunlight .flowLine03 .flowLineWrap"),
			$_arrowSys3caseLine03L = $(".system-page.case-3 .integrated-chart .box-content .parameter--sunlight .flowLine03"),

			//line 4
			$_arrowSys3caseLine04W = $(".system-page.case-3 .integrated-chart .box-content .parameter--sunlight .flowLine04 .flowLineWrap"),
			$_arrowSys3caseLine04L = $(".system-page.case-3 .integrated-chart .box-content .parameter--sunlight .flowLine04"),

			//line 5
			$_arrowSys3caseLine05L = $('.system-page.case-3 .integrated-chart .box-content .parameter--sunlight--line'),

			// //line 6
			$_arrowSys3caseLine06L = $('.system-page.case-3 .integrated-chart .box-content .parameter--ess--line'),

			//line 7
			$_arrowSys3caseLine07W = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine07 .flowLineWrap"),
			$_arrowSys3caseLine07L = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine07"),

			//line 8
			$_arrowSys3caseLine08W = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine08 .flowLineWrap"),
			$_arrowSys3caseLine08L = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine08"),

			//line 9
			$_arrowSys3caseLine09W = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine09 .flowLineWrap"),
			$_arrowSys3caseLine09L = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine09"),

			//line 10
			$_arrowSys3caseLine10W = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine10 .flowLineWrap"),
			$_arrowSys3caseLine10L = $(".system-page.case-3 .integrated-chart .box-content .parameter--ess .flowLine10");

		var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
		var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
		var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

		var padding3caseLine05L = padSysLeft + $_wSysParameterL.outerWidth() - padSysLeft + 5.5;
		var padding3caseLine06L = padSysRight + (($_wSysParameterR.outerWidth() * 2) - padSysRight) + 2;

		//System 3case arrow line
		$_arrowSys3caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys3caseLine02L.css("left", padSysLeft);

		$_arrowSys3caseLine03W.width($_wSysParameterL.outerWidth() - padSysLeft + 5.5);
		$_arrowSys3caseLine03L.css("left", padSysLeft);

		$_arrowSys3caseLine04W.width($_wSysParameterL.outerWidth() - padSysLeft + 5.5);
		$_arrowSys3caseLine04L.css("left", padSysLeft);

		$_arrowSys3caseLine05L.css("left", padding3caseLine05L);

		$_arrowSys3caseLine06L.css("right", padding3caseLine06L);

		$_arrowSys3caseLine07W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 1);
		$_arrowSys3caseLine07L.css("right", padSysRight);

		$_arrowSys3caseLine08W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 44);
		$_arrowSys3caseLine08L.css("left", -padSysTR);

		$_arrowSys3caseLine09W.width(($_wSysParameterR.outerWidth() * 2) - padSysRight + 2);
		$_arrowSys3caseLine09L.css("right", padSysRight);

		$_arrowSys3caseLine10W.width(($_wSysParameterR.outerWidth() * 2) - padSysRight + 2);
		$_arrowSys3caseLine10L.css("right", padSysRight);

		$(window).resize(function () {

			var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
			var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
			var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

			var padding3caseLine05L = padSysLeft + $_wSysParameterL.outerWidth() - padSysLeft + 5.5;
			var padding3caseLine06L = padSysRight + (($_wSysParameterR.outerWidth() * 2) - padSysRight) + 2;

			//System 3case arrow line
			$_arrowSys3caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys3caseLine02L.css("left", padSysLeft);

			$_arrowSys3caseLine03W.width($_wSysParameterL.outerWidth() - padSysLeft + 5.5);
			$_arrowSys3caseLine03L.css("left", padSysLeft);

			$_arrowSys3caseLine04W.width($_wSysParameterL.outerWidth() - padSysLeft + 5.5);
			$_arrowSys3caseLine04L.css("left", padSysLeft);

			$_arrowSys3caseLine05L.css("left", padding3caseLine05L);

			$_arrowSys3caseLine06L.css("right", padding3caseLine06L);

			$_arrowSys3caseLine07W.width(($_wSysParameterR.outerWidth() * 3) + (($_wSysParameterTR.outerWidth() - 70) / 2) - padSysRight + 1);
			$_arrowSys3caseLine07L.css("right", padSysRight);

			$_arrowSys3caseLine08W.width($_wSysParameterR.outerWidth() + (($_wSysParameterTR.outerWidth() - 70) / 2) + ($_wSysPower.outerWidth() / 2) + 44);
			$_arrowSys3caseLine08L.css("left", -padSysTR);

			$_arrowSys3caseLine09W.width(($_wSysParameterR.outerWidth() * 2) - padSysRight + 2);
			$_arrowSys3caseLine09L.css("right", padSysRight);

			$_arrowSys3caseLine10W.width(($_wSysParameterR.outerWidth() * 2) - padSysRight + 2);
			$_arrowSys3caseLine10L.css("right", padSysRight);

		});

	});

})(jQuery);