//= require_tree .

$("[data-info-show]").click(function() {
  $("body").addClass("info-show");
});

$("[data-info-hide]").click(function() {
  $("body").removeClass("info-show");
});

$("[data-change-theme]").click(function() {
  var newTheme = $(this).data("change-theme");
  var themeWrapper = $("[data-theme]");

  themeWrapper.removeClass();
  themeWrapper.addClass("theme-" + newTheme);
});
