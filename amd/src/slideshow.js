define(['jquery', 'block_slideshow/slick'], function($, c) {
    return {
        init: function ($params) {
            $('.block_slideshow_slides').slick($params);
        }
    };
});
