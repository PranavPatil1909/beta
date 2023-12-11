$(document).ready(function () {
  "use strict";
  //smooth scrolling
  $("html").smoothScroll(800);

  // new WOW().init();
  new WOW().init({ mobile: true });
  //Portfolio
  $("#container").imagesLoaded(function () {
    // filter items on button click
    $(".filter-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    var $grid = $(".grid").isotope({
      // options options
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    // images have loaded
  });
  //Counter Up
  $(".counter").counterUp({ delay: 10, time: 3000 });
  //Image Light Box Popup
  $(".image-link").magnificPopup({ type: "image" });
  $(".video-link").magnificPopup({ type: "iframe" });
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");

  // Show Navbar background on scroll
  // $(window).scroll(function ()
  // {

  //     var top = $(window).scrollTop();
  //     if (top >= 100) {
  //         $(".navbar").css(
  //           "background",
  //           "linear-gradient(138deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 14%, rgba(218,218,218,1) 37%, rgba(184,184,184,1) 52%, rgba(0,0,0,1) 100%)"
  //         );
  //     }
  //     // else if
  //     //     ($('.navbar').css(
  //     //     'background',
  //     //     'linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)'
  //     // ))
  //     {

  //         $(".navbar").css(
  //           "background",
  //           "linear-gradient(138deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 14%, rgba(218,218,218,1) 37%, rgba(184,184,184,1) 52%, rgba(0,0,0,1) 100%)"
  //         );
  //     }
  // });
//   $(window).scroll(function () {
//     var top = $(window).scrollTop();
//     if (top >= 200) {
//       $(".navbar").css(
//         "background",
//         //  "background-color: rgba(246, 242, 242, 0.2)"
//         "linear-gradient(138deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 14%, rgba(218,218,218,1) 37%, rgba(184,184,184,1) 52%, rgba(0,0,0,1) 100%)"
//         );
        
//     }
//      else if (
//          $(".navbar").css(
//            "background",
//            //   "background-color: rgba(0, 0, 0, 0.5)"

//            "linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)"
//          )
//        ) {
//          $(".navbar").css(
//            "background",
//            //   " background-color: rgba(246, 242, 242, 0.2)"
//            "linear-gradient(135deg, rgba(44, 51, 56, 0) 0%, rgba(44, 51, 56, 0) 100%)"
//          );
//        }
//   });
});
