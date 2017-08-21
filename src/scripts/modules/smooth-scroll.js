$(document).ready(function () {
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        var link = $(this);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: (target.offset().top - 100)
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            /*$target.focus();*/
            if ($target.is(":focus")) { // Checking if the target was focused

              /*link.addClass('active');*/
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }


      }
    });


  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    /*console.log($(window).scrollTop());*/
    if ($(window).scrollTop() > 650) {
      $('.header').addClass('header--fixed');
    }
    if ($(window).scrollTop() < 650) {
      $('.header').removeClass('header--fixed');
    }


    return onScroll();
  });


  function onScroll(event) {
    var scrollPos = $(window).scrollTop();
    $('header a[href*="#"]')
    // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .each(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          var link = $(this);

          if (target.offset().top - 200 <= scrollPos && target.offset().top + target.height() + 200 > scrollPos) {
            link.addClass("active");
          }
          else {
            link.removeClass("active");
          }
        }
      });
  }
});






