(function( $ ) {
	$.fn.inputx = function() {
		return this.filter("[data-x-btn='true']").each(function() {
			var $input = $(this);
			$input.wrap("<div class='input-control'></div>")
			var $wrapper = $input.parent();
			$wrapper.append("<a href='#' class='btn-clear hide'><i class='glyphicon glyphicon-remove' tabindex='-1'></i></a>");
			var $btn = $wrapper.find(".btn-clear");
			// clear input when press x button
			$wrapper.delegate(".btn-clear", "click", function(){
				$input.val('').focus();
				$btn.addClass("hide");
				return false;
			});
			$input.keyup(function(e) {
				// clear input if escape key pressed
				var code = e.charCode || e.keyCode;
				if (code == 27) {
					$input.val('').focus();
				}
				// show clear button if input is not empty
				if ($input.val()) {
					$btn.removeClass("hide");
				} else {
					$btn.addClass("hide");
				}
			});
			// hide x button on blur
			$input.blur(function() {
				if (!$btn.hasClass("hide")) {
					$btn.addClass("hide");
				}
			});
			// show x button on focus and input is not empty
			$input.on("focus", function() {
				if ($input.val()) {
					$btn.removeClass("hide");
				}
			});
		});
	};
}( jQuery ));