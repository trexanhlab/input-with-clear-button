(function( $ ) {
	$.fn.inputx = function() {
		return this.filter("[data-x-btn='true']").each(function() {
			var $input = $(this);
			$input.addClass("clearable");
			$input.wrap("<div class='input-control'></div>")
			var $wrapper = $input.parent();
			$wrapper.append("<a href='#' class='btn-clear hide' tabindex='-1'><i class='glyphicon glyphicon-remove'></i></a>");
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
		});
	};
}( jQuery ));
(function() {
	$("input").inputx();
})();