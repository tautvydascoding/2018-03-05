$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});

// MOVING //
$('.item').click(function() {
  $(this).toggleClass('active');
});


//bandymas sutvarkyt
$(document).ready(function(){
$(this).scrollTop(0);
});
