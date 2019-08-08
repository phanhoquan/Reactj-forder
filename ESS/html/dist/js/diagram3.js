(function ($) {

	$(function () {});

	$(window).load(function () {


		/*** System 2case page line ***/
		var $_wSysParameterL = $(".system-page .integrated-chart .box-content .parameter--sunlight .parameter__content"),
			$_wSysParameterR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content"),
			$_wSysParameterTR = $(".system-page .integrated-chart .box-content .parameter--ess .parameter__content.col-TR"),
			$_wSysPower = $(".system-page .integrated-chart .box-content__power"),

			$_wSysSunlight = $(".system-page .integrated-chart .box-content__sunlight"),
			$_wSysparSunlight = $(".system-page .box-content__sunlight .parameter--sunlight"),

			$_wSysEss = $(".system-page .integrated-chart .box-content__ess"),
			$_wSysparEss = $(".system-page .box-content__ess .parameter--ess"),

			/*** Arrow Line Sunlight ***/
			//line 2
			$_arrowSys2caseLine02W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine02 .flowLineWrap"),
			$_arrowSys2caseLine02L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine02"),

			//line 3
			$_arrowSys2caseLine03W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine03 .flowLineWrap"),
			$_arrowSys2caseLine03L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine03"),

			//line 4
			$_arrowSys2caseLine04W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine04 .flowLineWrap"),
			$_arrowSys2caseLine04L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine04"),

			//line 11
			$_arrowSys2caseLine11W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine11 .flowLineWrap"),
			$_arrowSys2caseLine11L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine11"),

			//line 12
			$_arrowSys2caseLine12W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine12 .flowLineWrap"),
			$_arrowSys2caseLine12L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine12"),

			//line 13
			$_arrowSys2caseLine13W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine13 .flowLineWrap"),
			$_arrowSys2caseLine13L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine13"),

			//line 14
			$_arrowSys2caseLine14W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine14 .flowLineWrap"),
			$_arrowSys2caseLine14L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine14"),

			//line 17
			$_arrowSys2caseLine17W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine17 .flowLineWrap"),
			$_arrowSys2caseLine17L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine17"),

			//line 18
			$_arrowSys2caseLine18W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine18 .flowLineWrap"),
			$_arrowSys2caseLine18L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine18"),

			//line 19
			$_arrowSys2caseLine19W = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine19 .flowLineWrap"),
			$_arrowSys2caseLine19L = $(".system-page.case-2 .integrated-chart .box-content .parameter--sunlight .flowLine19"),

			//vertical line 05, 15, 25, 35, 45, 55, 65, 75, 85
			$_arrowSys2caseLine05L = $('.system-page.case-2 .integrated-chart .box-content .parameter--sunlight--line'),

			/*** Arrow Line ESS ***/
			//line 6
			$_arrowSys2caseLine06L = $('.system-page.case-2 .integrated-chart .box-content .parameter--ess--line'),

			//line 7
			$_arrowSys2caseLine07W = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine07 .flowLineWrap"),
			$_arrowSys2caseLine07L = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine07"),

			//line 8
			$_arrowSys2caseLine08W = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine08 .flowLineWrap"),
			$_arrowSys2caseLine08L = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine08"),

			//line 9
			$_arrowSys2caseLine09W = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine09 .flowLineWrap"),
			$_arrowSys2caseLine09L = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine09"),

			//line 10
			$_arrowSys2caseLine10W = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine10 .flowLineWrap"),
			$_arrowSys2caseLine10L = $(".system-page.case-2 .integrated-chart .box-content .parameter--ess .flowLine10");

		var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
		var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
		var padSysTR = ($_wSysPower.outerWidth() / 2) + 44;

		var paddingLine05L = padSysLeft + (($_wSysParameterL.outerWidth() * 2) - padSysLeft + 10.5) + 10;
		var paddingLine06R = padSysRight + (($_wSysParameterR.outerWidth() * 3) - padSysRight) + 10;

		/*** System 2case arrow line ***/

		// Set Arrow Line Sunlight
		$_arrowSys2caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
		$_arrowSys2caseLine02L.css("left", padSysLeft);

		$_arrowSys2caseLine03W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine03L.css("left", padSysLeft);

		$_arrowSys2caseLine04W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine04L.css("left", padSysLeft);

		$_arrowSys2caseLine11W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine11L.css("left", padSysLeft);

		$_arrowSys2caseLine11W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine11L.css("left", padSysLeft);

		$_arrowSys2caseLine12W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine12L.css("left", padSysLeft);

		$_arrowSys2caseLine13W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine13L.css("left", padSysLeft);

		$_arrowSys2caseLine14W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine14L.css("left", padSysLeft);

		$_arrowSys2caseLine17W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine17L.css("left", padSysLeft);

		$_arrowSys2caseLine18W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine18L.css("left", padSysLeft);

		$_arrowSys2caseLine19W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
		$_arrowSys2caseLine19L.css("left", padSysLeft);

		$_arrowSys2caseLine05L.css("left", paddingLine05L);

		$_arrowSys2caseLine06L.css("right", paddingLine06R);

		$_arrowSys2caseLine07W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys2caseLine07L.css("right", padSysRight);

		$_arrowSys2caseLine08W.width($_wSysParameterR.outerWidth() + $_wSysParameterTR.outerWidth() + ($_wSysPower.outerWidth() / 2) + 35.5);
		$_arrowSys2caseLine08L.css("left", -padSysTR);

		$_arrowSys2caseLine09W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys2caseLine09L.css("right", padSysRight);

		$_arrowSys2caseLine10W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
		$_arrowSys2caseLine10L.css("right", padSysRight);

		$(window).resize(function () {

			var padSysLeft = (($_wSysparSunlight.outerWidth() - $_wSysparSunlight.width()) / 2) + ($_wSysParameterL.outerWidth() / 2) - 21;
			var padSysRight = (($_wSysEss.width() - $_wSysparEss.width()) / 2) + ($_wSysParameterR.outerWidth() / 2) - 21;
			var padSysTR = ($_wSysPower.outerWidth() / 2) + 43.5;

			var paddingLine05L = padSysLeft + (($_wSysParameterL.outerWidth() * 2) - padSysLeft + 10.5) + 10;
			var paddingLine06R = padSysRight + (($_wSysParameterR.outerWidth() * 3) - padSysRight) + 10;

			/*** System 2case arrow line ***/

			// Set Arrow Line Sunlight
			$_arrowSys2caseLine02W.width($_wSysSunlight.outerWidth() - padSysLeft - ($_wSysPower.outerWidth() / 2) - 35);
			$_arrowSys2caseLine02L.css("left", padSysLeft);

			$_arrowSys2caseLine03W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine03L.css("left", padSysLeft);

			$_arrowSys2caseLine04W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine04L.css("left", padSysLeft);

			$_arrowSys2caseLine11W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine11L.css("left", padSysLeft);

			$_arrowSys2caseLine11W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine11L.css("left", padSysLeft);

			$_arrowSys2caseLine12W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine12L.css("left", padSysLeft);

			$_arrowSys2caseLine13W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine13L.css("left", padSysLeft);

			$_arrowSys2caseLine14W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine14L.css("left", padSysLeft);

			$_arrowSys2caseLine17W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine17L.css("left", padSysLeft);

			$_arrowSys2caseLine18W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine18L.css("left", padSysLeft);

			$_arrowSys2caseLine19W.width(($_wSysParameterL.outerWidth() * 2) - padSysLeft + 21);
			$_arrowSys2caseLine19L.css("left", padSysLeft);

			$_arrowSys2caseLine05L.css("left", paddingLine05L);

			$_arrowSys2caseLine06L.css("right", paddingLine06R);

			$_arrowSys2caseLine07W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys2caseLine07L.css("right", padSysRight);

			$_arrowSys2caseLine08W.width($_wSysParameterR.outerWidth() + $_wSysParameterTR.outerWidth() + ($_wSysPower.outerWidth() / 2) + 35.5);
			$_arrowSys2caseLine08L.css("left", -padSysTR);

			$_arrowSys2caseLine09W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys2caseLine09L.css("right", padSysRight);

			$_arrowSys2caseLine10W.width(($_wSysParameterR.outerWidth() * 3) - padSysRight + 10.5);
			$_arrowSys2caseLine10L.css("right", padSysRight);
		});

	});

})(jQuery);