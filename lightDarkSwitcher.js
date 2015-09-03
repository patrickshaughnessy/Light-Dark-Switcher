$(document).ready(init);

function init(){

  // get input from button
  $('#switchButton').on('click', clickHandler);

  function clickHandler(){
    var $button = $('#switchButton').text();

    if ($button == "DO IT!") {
      $('.jumbotron').removeClass('light').addClass('dark');
      $('body').removeClass('dark').addClass('light');
      $('#switchButton').removeClass('dark').addClass('light').text('GO BACK!');
      spanSwitch('GNITREVNI');

    } else if ($button == 'GO BACK!'){
      $('.jumbotron').removeClass('dark').addClass('light');
      $('body').removeClass('light').addClass('dark');
      $('#switchButton').removeClass('light').addClass('dark').text('DO IT!');
      spanSwitch('INVERTING')
    }
  }

  function spanSwitch(text){
    $('.span').animate({opacity: 0}, 'fast');
    $('.span').text(text);
    $('.span').animate({opacity: 1}, 'fast');
  }

}
