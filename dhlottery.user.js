// ==UserScript==
// @name         dhlottery
// @namespace    https://raw.githubusercontent.com/ravet/dhlottery/master/dhlottery.user.js
// @version      0.1
// @description  navigator.platform
// @author       ravet
// @match        https://*.dhlottery.co.kr/*
// @run-at       document-start
// ==/UserScript==

//https://stackoverflow.com/questions/36605989/how-to-replace-head-script-using-greasemonkey-code
//https://stackoverflow.com/questions/38808968/change-navigator-platform-on-chrome-firefox-or-ie-to-test-os-detection-code

(function () {
    'use strict';

    var i = 'Object.defineProperty(navigator,"platform", { \
        get: function () { return "win32"; } \
    });';
    var s = document.createElement('script');
    s.appendChild(document.createTextNode(i));
    (document.head || document.documentElement).appendChild(s);
    s.parentNode.removeChild(s);
})();
