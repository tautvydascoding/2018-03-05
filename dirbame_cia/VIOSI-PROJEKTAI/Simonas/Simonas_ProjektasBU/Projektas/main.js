var video = document.getElementById("myVideo");
function bgvideo(){

}

$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
    else {
      $('nav').removeClass('black');
    }
  });
