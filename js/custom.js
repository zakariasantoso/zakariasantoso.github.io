var customScripts = {
  onePageNav: function () {
    $("#main-nav ul li:first-child").hasClass("active") && $("#main-nav").css("background", "none"),
      $("#mainNav").onePageNav({
        currentClass: "active",
        changeHash: !1,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: "",
        easing: "swing",
        begin: function () {},
        end: function () {
          $("#main-nav ul li:first-child").hasClass("active") ? $(".header").removeClass("addBg") : $(".header").addClass("addBg");
        },
        scrollChange: function (a) {
          $("#main-nav ul li:first-child").hasClass("active") ? $(".header").removeClass("addBg") : $(".header").addClass("addBg");
        },
      });
  },
  init: function () {
    customScripts.onePageNav();
  },
};
new WOW().init();
$("document").ready(function () {
  customScripts.init(),
    $(window).load(function () {
      $("#filter .current").trigger("click");
    });
});
