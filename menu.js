$(document).ready(function(){
  $('.navigation').click(function(){
    $('nav ul').slideToggle(500);
});

$(window).resize(function(){
  if ($(window).width() > 800 ) {
    $('nav ul').removeAttr('style');
  }
});

});
