// On Load
setThemeFromParams();

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

// Functions
function setTheme(themeName) {
  var themeClass = $("[data-theme-class]");
  themeClass.removeClass();
  themeClass.addClass("theme-" + themeName);

  $("[data-theme-param-link]").each(function() {
    var filterLink = $(this);
    var filterLinkHref = filterLink.attr("href").split('?')[0];
    filterLink.attr("href", filterLinkHref + "?theme=" + themeName);
  });
}

function setThemeFromParams() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var newThemeName = url.searchParams.get("theme");

  if (newThemeName != null) {
    setTheme(newThemeName);
  }
}
