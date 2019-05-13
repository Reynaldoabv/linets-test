$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $('#nav').css('background', '#000');
    } else {
      $('#nav').css('background', 'transparent');
    }
  });

  $('.back-to-top').click(function() {
    alert('Testing JQ');
  });
});
