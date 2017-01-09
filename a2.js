

var main = function() {
  $("#dr-slider").hide();
  $("#degree-reading").hide();
  $("#degree-symbol").hide();
  $("#dr-set").hide();
  $("#dr-power").click(function() {
    $(this).toggleClass('off');
    $("#dr-slider").toggle();
    $("#degree-reading").toggle();
    $("#degree-symbol").toggle();
    $("#dr-set").toggle();
  });

};

$(document).ready(main);
