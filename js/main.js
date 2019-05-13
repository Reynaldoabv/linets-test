$(document).ready(function() {
  // back to top button //
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });

  $('#top-btn').click(function() {
    $('html , body').animate({ scrollTop: 0 }, 800);
  });

  // Navbar hiding //
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop - lastScrollTop > 50) {
      var navHeight = $('.navbar').css('height');

      $('.navbar').animate({ top: '-' + navHeight }, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({ top: '0px' }, 150);
      lastScrollTop = scrollTop;
    }
  });
});
