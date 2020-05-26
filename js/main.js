$(document).ready(function () {
    var quoteSwiper = new Swiper(".quote-slider");

    var imageSwiper = new Swiper(".image-slider", {
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
    });
    quoteSwiper.params.control = imageSwiper;
    imageSwiper.params.control = quoteSwiper;
});
