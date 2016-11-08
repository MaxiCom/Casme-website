$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
	
  //Top bar
	if (scroll > $(document).height() * 0.08)
		$("nav").addClass("transform");
	else if (scroll < $(document).height() * 0.8)
		$("nav").removeClass("transform");
  
  //About btn
  if (scroll > $(document).height() * 0.09){
    $(".About-btn").addClass("animated fadeInUp visible");
    $(".About-logo").addClass("animated fadeInLeft visible");
  }

  //Prestation boxes
  if (scroll > $(document).height() * 0.20){
    $(".Prestation-box-left").addClass("animated fadeInLeft visible");
    $(".Prestation-box-middle").addClass("animated fadeInUp visible");
    $(".Prestation-box-right").addClass("animated fadeInRight visible");
  }

  //Contact boxes
  if (scroll > $(document).height() * 0.57){
    $(".contact-item-right").addClass("animated fadeInRight visible");
  }
});

$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop:$(the_id).offset().top
  }, 1000);
  return false;
});
