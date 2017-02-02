$(function(){
  $('body').scrollspy({ target: '#header' });

  var navToggle = $('.nav-toggle-wrapper');
  navToggle.on('click', '.nav-toggle-btn', function(){
    navToggle.toggleClass('expand');
  });

  $('.header__nav__item a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 900);
      event.preventDefault();
      navToggle.removeClass('expand');
  });

  

});