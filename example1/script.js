$( document ).ready(function() {
    console.log( "ready" );
    $("button#do_thing").on('click', function(e){
      // console.log('clicked', e);
      $('.alert').slideToggle();
      // $('.alert').fadeToggle();
      // $('.alert').css('display', 'block');
      // slide toggle the alert

    });
});