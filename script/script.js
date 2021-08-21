//Slider - 3 items
$('#carouselExample3').on('slide.bs.carousel', function(e) {

    /*

    CC 2.0 License Iatek LLC 2018
    Attribution required
	
    */

    var $e = $(e.relatedTarget);

    var idx = $e.index();
    console.log("IDX :  " + idx);

    var itemsPerSlide = 9;
    var totalItems = $('.carousel-item3').length;

    if (idx >= totalItems - (itemsPerSlide - 3)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item3').eq(i).appendTo('.carousel-inner3');
            } else {
                $('.carousel-item3').eq(0).appendTo('.carousel-inner3');
            }
        }
    }
});


// Кнопка вверх
$(function() {

    $('.scrollup').click(function() {

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

$(window).scroll(function() {

    if ($(this).scrollTop() > 200) {

        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});


//Прокрутка по ссылке меню
$('.nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top + 70
    }, 1500);
});