$(document).ready(function() {

  $('#left-personal').click(function() {
    $('.personal-panel').addClass("personal-panel-big");
    $('.professional-panel').addClass("professional-panel-small");

    $('.info-container-personal').removeClass("hidden");
    $('#left-professional').removeClass("hidden");
    $('#left-personal').addClass("hidden");
    $('#right-professional').addClass("hidden");
    $('#personal').addClass("hidden");
  });

  $('#right-professional').click(function() {
    $('.personal-panel').addClass("personal-panel-small");
    $('.professional-panel').addClass("professional-panel-big");

    $('.info-container-professional').removeClass("hidden");
    $('#right-personal').removeClass("hidden");
    $('#right-professional').addClass("hidden");
    $('#left-personal').addClass("hidden");
    $('#professional').addClass("hidden");
  });

  $('#right-personal').click(function() {
    $('.personal-panel').removeClass("personal-panel-small");
    $('.professional-panel').removeClass("professional-panel-big");

    $('.info-container-professional').addClass("hidden");
    $('#right-personal').addClass("hidden");
    $('#right-professional').removeClass("hidden");
    $('#left-personal').removeClass("hidden");
    $('#professional').removeClass("hidden");
  });

  $('#left-professional').click(function() {
    $('.personal-panel').removeClass("personal-panel-big");
    $('.professional-panel').removeClass("professional-panel-small");

    $('.info-container-personal').addClass("hidden");
    $('#left-professional').addClass("hidden");
    $('#left-personal').removeClass("hidden");
    $('#right-professional').removeClass("hidden");
    $('#personal').removeClass("hidden");
  });
});