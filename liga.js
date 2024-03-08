/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'dots-grid-outline': '&#xe909;',
            'user-square': '&#xe900;',
            'user-square-outline': '&#xe901;',
            'help-circle': '&#xe902;',
            'question-mark-circle': '&#xe902;',
            'question-circle': '&#xe902;',
            'help-circle-outline': '&#xe903;',
            'question-mark-circle-outline': '&#xe903;',
            'question-circle-outline': '&#xe903;',
            'heart-rounded': '&#xe904;',
            'love-rounded': '&#xe904;',
            'heart-rounded-outline': '&#xe905;',
            'love-rounded-outline': '&#xe905;',
            'link-broken-01': '&#xe906;',
            'link-broken-01-outline': '&#xe907;',
            'dots-grid': '&#xe908;',
            'check-circle': '&#xe90a;',
            'tick-circle': '&#xe90a;',
            'check-circle-outline': '&#xe90b;',
            'tick-circle-outline': '&#xe90b;',
            'switch-horizontal-01': '&#xe90c;',
            'switch-horizontal-01-outline': '&#xe90d;',
            'chevron-selector-vertical': '&#xe90e;',
            'chevron-selector-vertical-outline': '&#xe90f;',
            'arrow-circle-right': '&#xe910;',
            'arrow-circle-right-outline': '&#xe911;',
            'trend-up-01': '&#xe912;',
            'trend-up-01-outline': '&#xe913;',
            'bar-chart-square-02': '&#xe914;',
            'bar-chart-square-02-outline': '&#xe915;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
