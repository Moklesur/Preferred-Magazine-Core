!(function ($) {
    "use strict";

    var Preferred_MagazineGlobal = function ($scope, $) {

        // Js Start
        $('[data-background]').each(function () {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        });

        // Js End

    };

    $(window).on('elementor/frontend/init', function () {
        if (elementorFrontend.isEditMode()) {
            console.log('Elementor editor mod loaded');
            elementorFrontend.hooks.addAction('frontend/element_ready/global', Preferred_MagazineGlobal);

        } else {
            console.log('Elementor frontend mod loaded');
            elementorFrontend.hooks.addAction('frontend/element_ready/global', Preferred_MagazineGlobal);
            // elementorFrontend.hooks.addAction('frontend/element_ready/preferred_magazine-banner.default', Preferred_Magazinevideo);
        }
    });
    console.log('addon js loaded');
})(jQuery);