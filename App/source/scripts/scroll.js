$('a[href^="#"]').click(function(){
  $('html, body').animate({
    scrollTop:$($(this).attr("href")).offset().top - 50
  }, 1000);
  return false;
});

$(document).ready(function() {
  var navbar = $("nav");

  var about_button = $(".About-btn");
  var about_logo = $(".About-logo");

  var prestation_box_left = $(".Prestation-box-left");
  var prestation_box_middle = $(".Prestation-box-middle");
  var prestation_box_right = $(".Prestation-box-right");

  var contact_item = $(".contact-item-right");

  $(window).scroll(function() {
      if (!navbar.hasClass("transform") && $(window).scrollTop() > 350) {
           navbar.addClass("transform");
      } else if (navbar.hasClass("transform") && $(window).scrollTop() < 350) {
           navbar.removeClass("transform");
      }

      if (!about_logo.hasClass("visible") &&
           about_button[0].getBoundingClientRect().top < window.innerHeight / 1.25) {
           about_button.addClass("animated fadeInUp visible");
           about_logo.addClass("animated fadeInLeft visible");
      }

      if (!prestation_box_middle.hasClass("visible") &&
           prestation_box_middle[0].getBoundingClientRect().top < window.innerHeight / 1.25) {
           prestation_box_left.addClass("animated fadeInLeft visible");
           prestation_box_middle.addClass("animated fadeInUp visible");
           prestation_box_right.addClass("animated fadeInRight visible");
      }

      if (!contact_item.hasClass("visible") && 
           contact_item[0].getBoundingClientRect().top < window.innerHeight / 1.25) {
           contact_item.addClass("animated fadeInRight visible");
      }
  });
});