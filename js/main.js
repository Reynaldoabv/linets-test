$(document).ready(function() {
  /* Back to top button */
  var btt = $('.back-to-top');

  btt.on('click', function(e) {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1500
    );

    e.preventDefault();
  });

  $(window).on('scroll', function() {
    var self = $(this),
      height = self.height(),
      top = self.scrollTop();

    if (top > height) {
      if (!btt.is(':visible')) {
        btt.fadeIn(1500);
      }
    } else {
      btt.fadeOut(1500);
    }
  });
});
