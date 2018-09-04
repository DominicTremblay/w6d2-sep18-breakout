$(document).ready(function() {
  const MAX_CHAR = 140;
  $(".new-tweet textarea").on("keyup", function(event) {
    const charsLength = $(this).val().length;
    const charsLeft = MAX_CHAR - charsLength;
    const $counter = $(this).siblings(".counter");
    $counter.text(charsLeft);
    charsLeft < 0
      ? $counter.css("color", "red")
      : $counter.css("color", "black");
  });
  $(this);
});
