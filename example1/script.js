$( document ).ready(function() {
    console.log( "ready!" );
    $("button#do_thing").on('click', function(e){
      console.log('clicked', e);
      // slide toggle the alert

    });
});