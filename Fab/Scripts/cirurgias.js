var visibleRight2 = 0;
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.visibleOffRight').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $('.visibleOffRight').addClass('visibleOn animated fadeInRight')

                $('.visibleOffRight2').addClass('visibleOn animated fadeInRight delay-2s')

            }
            
        }); 

        $('.visibleOffLeft').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $('.visibleOffLeft').addClass('visibleOn animated fadeInLeft')
            }
            
        }); 

    });
    
});