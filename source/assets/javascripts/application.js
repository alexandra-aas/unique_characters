// On Load
loadTheme();

// On Click
$("[data-info-show]").click(function() {
  $("body").addClass("info-show");
});

$("[data-info-hide]").click(function() {
  $("body").removeClass("info-show");
});

$("[data-change-theme]").click(function() {
  var newThemeName = $(this).data("change-theme");
  setTheme(newThemeName);
});

// On Hover
$("[data-theme-dots]").hover(function() {
  $("[data-main-overlay]").toggleClass("preview-theme");
});

$("[data-change-theme]").click(function() {
  var newThemeName = $(this).data("change-theme");
  setTheme(newThemeName);
});

// Functions
function setTheme(themeName) {
  var themeClass = $("[data-theme-class]");
  themeClass.removeClass();
  themeClass.addClass("theme-" + themeName);
  Cookies.set("theme", themeName);
}

function loadTheme() {
  var loadedTheme = Cookies.get("theme");

  if (loadedTheme != undefined) {
    setTheme(loadedTheme);
  } else {
    setTheme("gold");
  }
}
