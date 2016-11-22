$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
 
  }
});

$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });
}); 


// $(document).ready(function() {
//   $('.nav-link-more').on('click', function() {
//     $(this).toggleClass('active');
//     $('.mega-menu-hide').toggleClass('mega-menu');
//   })
// });



$(document).ready(function() {
  $( ".nav-link-more" ).click(function() {
    $(this).toggleClass('active');
    $( ".mega-menu" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });
});




$(document).ready(function() {
 
  $(".fullwidth-slider").owlCarousel({
    slideSpeed: 350,
    singleItem: true,
    autoHeight: true,
    navigation: true,
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });



  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });



$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  jQuery(this).find('.fa-plus').toggleClass("fa-minus");
  e.preventDefault();
});






      var pageSection = $(".home-section, .page-section, .small-section, .split-section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
 
});




