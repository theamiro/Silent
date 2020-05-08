$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        navigation: true,
        items : 1,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        rewindSpeed: 500
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $('.navbar-dark').addClass('solid')
        } else {
            $('.navbar-dark').removeClass('solid')
        }
    })
});
