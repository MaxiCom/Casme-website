$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
	
  //Top bar
	if (scroll > $(document).height() * 0.08)
		$("nav").addClass("transform");
	else if (scroll < $(document).height() * 0.8)
		$("nav").removeClass("transform");
  
  //About btn
  if (scroll > $(document).height() * 0.10)
    $("#About-btn").addClass("animated fadeInUp visible");

  //Services boxes
  if (scroll > $(document).height() * 0.2){
    $(".service-box-left").addClass("animated fadeInLeft visible");
    $(".service-box-right").addClass("animated fadeInRight visible");
  }

  //Realisation boxes
  if (scroll > $(document).height() * 0.4){
    $(".realisation-box-left").addClass("animated fadeInLeft visible");
    $(".realisation-box-right").addClass("animated fadeInRight visible");
  }

  //Contact boxes
  if (scroll > $(document).height() * 0.7){
    $(".contact-item-left").addClass("animated fadeInLeft visible");
    $(".contact-item-middle").addClass("animated fadeInUp visible");
    $(".contact-item-right").addClass("animated fadeInRight visible");
  }
});

// --------------- //
//     Credits     //
// Geoffrey Crofte //
// --------------- //
$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop:$(the_id).offset().top
  }, 1000);
  return false;
});
