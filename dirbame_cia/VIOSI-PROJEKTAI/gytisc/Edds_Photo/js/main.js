console.log( " Labas ");

$(function() {
  var height = $("#original").height();
  var origHeight = $("#dynamic").height();

  $("#dynamic").css("padding-top", (height-origHeight + 20) + '%');
});
