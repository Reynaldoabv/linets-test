$(document).ready(function() {
  $(document).scroll(function() {
    var height = $('.navbar').height();

    if ($(this).scrollTop() > height) {
      $('.navbar').css('background-color', 'black');
    } else {
      $('.navbar').css('background-color', 'transparent');
    }
  });
});
