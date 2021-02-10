var $releaseCarousel = $('.new-releases__carrousel');
var $comingCarousel = $('.coming-soon__carrousel');

function showSliderScreen($widthScreen) {
    //console.log($widthScreen);

    if ($widthScreen < "768") {
        if (!$releaseCarousel.hasClass('slick-initialized') && (!$comingCarousel.hasClass('slick-initialized'))) {
            $releaseCarousel.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.pri-arrow-left'),
                nextArrow: $('.pri-arrow-right')
            });
            $comingCarousel.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.sec-arrow-left'),
                nextArrow: $('.sec-arrow-right')
            });
        }
    } else {
        if ($releaseCarousel.hasClass('slick-initialized') && ($comingCarousel.hasClass('slick-initialized'))) {
            $releaseCarousel.slick('unslick');
            $comingCarousel.slick('unslick');
        }
    }
}

var widthScreen = $(window).width();
$(window).ready(showSliderScreen(widthScreen)).resize(
    function() {
        var widthScreen = $(window).width();
        showSliderScreen(widthScreen);
    }
);