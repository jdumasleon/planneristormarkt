(function($){
  $(function(){

    //$('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.button-collapse').sideNav();

    $('.head-link').click(function(e) {
       e.preventDefault();

       var goto = $(this).attr('href');

       $('html, body').animate({
           scrollTop: $(goto).offset().top
       }, 800);
   });

   $(document).ready(function(){
     $('.tooltipped').tooltip({delay: 50});
   });

    $('.slider').slider({full_width: true});

    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();

    $('.button-collapse').sideNav({
     menuWidth: 350, // Default is 240
     edge: 'left', // Choose the horizontal origin
     closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    // Show sideNav
    //$('.button-collapse').sideNav('show');
    // Hide sideNav
    $('.button-collapse').sideNav('hide');

    $('ul.tabs').tabs();

    // Detect touch screen and enable scrollbar if necessary
   function is_touch_device() {
     try {
       document.createEvent("TouchEvent");
       return true;
     } catch (e) {
       return false;
     }
   }
    if (is_touch_device()) {
     $('#nav-mobile').css({ overflow: 'auto'});
   }

   $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );

    function onloadNotifications() {
      var alert = document.getElementsByClassName("alert");
      var result = "";
      if (alert.length != 0 && alert != undefined) {
        result += alert[0].innerHTML;
        Materialize.toast(result, 6500, 'rounded');
      }
    }
    window.onload = onloadNotifications;

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		document.addEventListener( 'touchmove', onDocumentTouchMove, false );


  }); // end of document ready
})(jQuery); // end of jQuery name space
