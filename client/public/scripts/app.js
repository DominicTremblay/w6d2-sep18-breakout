$(document).ready(function() {
  $("#tweet-container").on("mouseenter", "article", function(event) {
    $(this).css("opacity", "1");
    $(this)
      .find(".icons")
      .css("opacity", "1");
  });

  $("#tweet-container").on("mouseleave", "article", function(event) {
    $(this).css("opacity", "0.6");
    $(this)
      .find(".icons")
      .css("opacity", "0");
  });

  $(".compose-btn").on("click", function(event) {
    var $section = $("section.new-tweet");

    $section.slideToggle("fast");
    $section.find("textarea").focus();
  });
});
