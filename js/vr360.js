$(document).ready(function () {

  $('.photo360').magnificPopup({
  type: 'iframe',
  src: $(this).attr("href")
});
  $('.video360').magnificPopup({
  type: 'iframe',
  src: $(this).attr("href")
});

  $(".toggle_mnu").click(function () {
    $(".sandwich i").toggleClass("hidden");
    $(".nav_main").toggleClass("hidden");
  });

  $(".top_mnu ul a").click(function () {
    $(".sandwich i").toggleClass("hidden");
    $(".top_mnu").fadeOut(600);
  });

  $(".nav_main").click(function () {
    $(".sandwich i").toggleClass("hidden");
    $(".nav_main").toggleClass("hidden");
  });

  $(".logo").click(function () {
    if ($(".toggle_mnu").is(":visible")) {
      if ($(".nav_main").is(":visible")) {
        $(".sandwich i").toggleClass("hidden");
        $(".nav_main").toggleClass("hidden");
      };
    };
  });
});
