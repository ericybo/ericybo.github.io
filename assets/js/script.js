$(document).ready(function() {

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  // $("#sidebar-button").click(function() {  //(When the user clicks on an the sidebar button)
  //   if($(".sidebar-container").hasClass("sidebar-active")) { //If the sidebar container has the "active" class:
  //     $("body").removeClass("no-scroll"); //Remove the "no-scroll" class from the body tag
  //     $("#sidebar-button").removeClass("button-active"); //Remove the "active" class from the sidebar button
  //     $(".sidebar-container").removeClass("sidebar-active"); //Remove the "active" class from the sidebar container
  //     $(".page-wrapper").removeClass("wrapper-active"); //Remove the "active" class from the page wrapper
  //   }
  //   else { //Otherwise:
  //     $("#sidebar-button").addClass("button-active"); //Add the "active" class to sidebar button
  //     $(".sidebar-container").addClass("sidebar-active"); //Add the "active" class to sidebar container
  //     $(".page-wrapper").addClass("wrapper-active"); //Add the "active" class to the page wrapper
  //     //Add the "no-scroll" class to the body tag with a delay of 300 ms (code above)
  //     setTimeout(function() {
  //       $('body').addClass('no-scroll');
  //     }, 300);
  //   }
  // });
  
  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  // $(".page-wrapper").click(function() {
  //   if($(".sidebar-container").hasClass("sidebar-active")) {
  //     $("body").removeClass("no-scroll");
  //     $("#sidebar-button").removeClass("button-active");
  //     $(".sidebar-container").removeClass("sidebar-active");
  //     $(".page-wrapper").removeClass("wrapper-active");
  //   }
  // });

  //Implement the "slide to left" when the user clicks on #carousel-next here
  //   $("#carousel-next").click(function() {
  //   var cur = parseInt($('#carousel').css('margin-left').replace("px", ""));
  //   if (cur == -3840) {
  //     return false;
  //   }
  //   else {
  //     $('#carousel').css('margin-left', cur - 960 + "px");
  //   }
  // });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
  // $("#carousel-prev").click(function() {
  //   var cur = parseInt($('#carousel').css('margin-left').replace("px", ""));
  //   if (cur == 0) {
  //     return false;
  //   }
  //   else {
  //     $('#carousel').css('margin-left', cur + 960 + "px");
  //   }
  // });
});