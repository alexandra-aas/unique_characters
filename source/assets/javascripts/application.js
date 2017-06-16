//= require_tree .

$("[data-info-show]").click(function() {
  $("body").addClass("info-show");
});

$("[data-info-hide]").click(function() {
  $("body").removeClass("info-show");
});

$("[data-theme]").click(function() {
  var theme = $(this).data("theme");

  if ($("body").hasClass("info-show")) {
    changeTheme(theme);
    $("body").addClass("info-show");
  } else {
    changeTheme(theme);
  }
});

function changeTheme(theme) {
  $("body").removeClass();
  $("body").addClass("theme-" + theme);
}
