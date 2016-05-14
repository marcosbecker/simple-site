/*globals navigator,jQuery,document,console,setTimeout*/
(function () {
    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(document).ready(function ($) {
        // Add a class to the body tag after identify the device
        if (isMobile.any()) {
            $('body').addClass('mobile');

            if (isMobile.iOS) {
                $('body').addClass('iphone');
            }
        } else {
            $('body').addClass('desktop');
        }
    });
}());
