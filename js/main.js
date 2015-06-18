(function($) {

  // Setup variables
  $window = $(window);
  $slide = $('.cover, .content');
  $body = $('body');


  //FadeIn all sections
  $body.imagesLoaded(function() {
    setTimeout(function() {

      // Resize sections
      adjustWindow();

      // Fade in sections
      $body.removeClass('loading').addClass('loaded');

    }, 800);
  });


})(jQuery);
