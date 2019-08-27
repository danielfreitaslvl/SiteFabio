$(document).ready(function() {
    
    $('.visibleOff').addClass('visibleOn animated fadeInUp')
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.visibleOff').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $('.visibleOffSegundoNivel1').addClass('visibleOn animated fadeInUp delay-1s')

                $('.visibleOffSegundoNivel2').addClass('visibleOn animated fadeInUp delay-2s')

                $('.visibleOffSegundoNivel3').addClass('visibleOn animated fadeInUp delay-3s')

            }
            
        }); 

    });
    
});