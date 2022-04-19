(function ($) {
  "use strict";

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $(".loop").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    nav: true,
    margin: 30,
    responsive: {
      992: {
        items: 4,
      },
    },
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate(
          {
            scrollTop: target.offset().top + 1,
          },
          700
        );
        return false;
      }
    }
  });

  $(document).ready(function () {
    // get element with contactForm class when submitted do ajax post
    $(".contactForm").on("submit", function (e) {
      e.preventDefault();
      // get name, email, subject, message. use let to declare a variable!
      let name = $("#name").val();
      let email = $("#email").val();
      let subject = $("#subject").val();
      let message = $("#message").val();

      let waMessage = `Hey RudeSploit! you have new contact form filled from *${name}*. He give you his email so you can contact him, here's the email! *${email}*.\n\n\n*${subject}*\n${message}\n\nOk, thats it. Thanks.`;
      // do ajax post to action url
      $.ajax({
        type: "POST",
        url: "http://node.mujaka.net/send-message",
        data: {
          number: "6283800187937",
          message: waMessage,
          key: "RudeSploit",
        },
        success: function () {
          // show success message
          alert("Pesan anda berhasil dikirim!");
        },
      });
    });
    // untuk smoot
    $(document).on("scroll", onScroll);

    $('.scroll-to-section a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $(".scroll-to-section a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top + 1,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Page loading animation
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
})(window.jQuery);
