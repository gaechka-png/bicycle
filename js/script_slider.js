if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        dots: true,
        accessibility: false,
        slidesToShow: 1,
        Speed: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: ' <button type="button" class="slick-next"></button>',
        prevArrow: ' <button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}
