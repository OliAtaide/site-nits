$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $('.sec').each(function () {
        var sec = $(this);
        $('.slider-item').each(function () {
            var sec_name = $(this).data('sec');
            var position = sec.position().top - 10;
            if (sec.hasClass(sec_name)) {
                if (scroll_position >= position) {
                    $('.slider-item').removeClass('slider-item-active');
                    $(this).addClass('slider-item-active');
                }
            }
        })
    })
})

$('.slider-item').click(function () {
    var data_sec = $(this).data('sec')
    $('.sec').each(function () {
        if ($(this).hasClass(data_sec)) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(this).position().top
            }, 100);
        }
    })
})