/****************************************************************************************
 * Here's a component for jQuery :                                                      *
 *                                                                                      *
 * My Side Panel, needs 2 arguments which are :                                         *
 *                                                                                      *
 *  - location (left or right).                                                         *
 *  - visible (a boolean telling the function wether to show or keep the panel hidden). *
 ****************************************************************************************
 * By default the panel is hidden on the left side.                                     *
 ****************************************************************************************/
(function($) {
	$.fn.mySidePanel = function(location, visible) {
		return this.each (function () {
			// Variables.
			var panel_id = $(this).attr("myid");

			// Panel and toggle bar generation.
			var contentDiv = ($("<div></div>").addClass("scrollable").attr("myid", panel_id));
			$(this).children().each(function() { contentDiv.append($(this)); });
			$(this).append(contentDiv);
			$(this).children(":first").before($("<h3></h3>").html($(this).attr("title")));
			$(this).css("height", $(window).height());
			$(this).append($("<div></div>").addClass("toggle_bar")
					.attr("myid", panel_id)
					.css("height", $(window).height())
			);
			contentDiv.css("height", $(window).height() - $(this).children("h3").outerHeight() -40);
			$(this).append($("<div></div>").addClass("toggle_div")
					.attr("myid", panel_id)
					.css("top", ($(window).height() / 2) + 16)
			);

			// Panel and toggle bar positionning.
			if (!location || location == "left") {
				$(this).attr("displayed", 0).css("left", "-" + $(this).outerWidth());
				$(".toggle_bar[myid='" + panel_id + "']").css("left", $(this).outerWidth() -1);
				$(".toggle_div[myid='" + panel_id + "']").css("left", $(this).outerWidth() -1);
				$(".toggle_div[myid='" + panel_id + "']").css("background-image", "url('../img/" + 
																	(visible ? "left" : "right") + ".png')");
				if (visible) $(this).attr("displayed", 1).animate({"left": 0});
			} else {
				$(this).attr("displayed", 0).css("right", "-" + $(this).outerWidth());
				$(".toggle_bar[myid='" + panel_id + "']").css("right", $(this).outerWidth() -1);
				$(".toggle_div[myid='" + panel_id + "']").css("right", $(this).outerWidth() -1);
				$(".toggle_div[myid='" + panel_id + "']").css("background-image", "url('../img/" + 
																	(visible ? "right" : "left") + ".png')");
				if (visible) $(this).attr("displayed", 1).animate({"right": 0});
			}

			// Event to toggle the panel (hidden / shown).
			$(".toggle_div[myid='" + panel_id + "']").click(function () {
				panel = $("div[displayed][myid='" + panel_id + "']");
				if (panel.attr("displayed") == "1") {
					panel.attr("displayed", 0);
					if (!location || location == "left") {
						panel.animate({"left": "-" + panel.outerWidth()});
						$(".toggle_div[myid='" + panel_id + "']").css("background-image", "url('../img/right.png')");
					} else {
						panel.animate({"right": "-" + panel.outerWidth()});
						$(".toggle_div[myid='" + panel_id + "']").css("background-image", "url('../img/left.png')");
					}
				} else {
					panel.attr("displayed", 1);
					if (!location || location == "left") {
						panel.animate({"left": 0});
						$(".toggle_div[myid='" + panel_id + "']").css("background-image", "url('../img/left.png')");
					} else {
						panel.animate({"right": 0});
						$(".toggle_div[myid='" + panel_id + "']").css("background-image", "url('../img/right.png')");
					}
				}
			});

			// Event auto-resizing when resizing window.
			$(window).resize(function () {
				$("div[displayed][myid='" + panel_id + "']").css("height", $(this).height());
				$(".toggle_bar[myid='" + panel_id + "']").css("height", $(this).height());
				$(".toggle_div[myid='" + panel_id + "']").css("top", ($(this).height() / 2) + 16);
				$(".scrollable[myid='" + panel_id + "']").css("height",  $(this).height() - 
						$("div[myid='" + panel_id + "']").children(":first").outerHeight() -40);
			});
			
			/**********************************************************************
			 * Small function the remove the final 'px' from sizes and positions. *
			 * The result of this function is an int which is easier to use.      *
			 **********************************************************************/
			function sizeToInt(val) { return parseInt(val.substring(0, val.indexOf("px"))); }
		});
	}
})(jQuery);