// On Load
convertImagesToInlineSvgs();
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
  }
}

function convertImagesToInlineSvgs() {
  $("img.svg").each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    jQuery.get(
      imgURL,
      function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find("svg");

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a");

        // Check if the viewport is set, else we gonna set it if we can.
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}
