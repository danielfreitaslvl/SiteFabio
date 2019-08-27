var flagFadeRight = 0;
$(document).ready(function() {
    $('.owl-carousel-convenios').owlCarousel({
        loop: true,
        nav: true,
        //autoplay: true,
        //autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 0,
        singleItem: true,
        dots: true,
        dotsContainer: '#dots',
        dotsEach: true
    })
});

