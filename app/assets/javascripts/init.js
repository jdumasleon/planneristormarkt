(function($){
  $(function(){

    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.button-collapse').sideNav();

    $('.head-link').click(function(e) {
       e.preventDefault();

       var goto = $(this).attr('href');

       $('html, body').animate({
           scrollTop: $(goto).offset().top
       }, 800);
   });

    $('.slider').slider({full_width: true});

    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();

    $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 240
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

  }); // end of document ready
})(jQuery); // end of jQuery name space
