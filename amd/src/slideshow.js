define(['jquery', 'block_slideshow/slick'], function($) {
    return {
        init: function ($params) {
            $(window).resize(function() {
                var fontsize = $('.block_slideshow_slideshow').width()/$(document).width();
                $('.block_slideshow_slideshow').css("font-size", fontsize + "vw");
                if (parseFloat($('.block_slideshow_slideshow').css("font-size")) < 9) {
                   $('.block_slideshow_slideshow').css("font-size", "9px");
                }
            });
            $(window).resize();
            $('.block_slideshow_slides').slick($params);
        }
    };
});
