// ==UserScript==
// @name         Youtube shorts redirect
// @namespace    https://www.youtube.com/
// @version      0.1
// @description  Redirect current YT Short url to play as Video
// @author       Aditya Meena
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    function skipShorts()
    {
        if (window.location.toString().includes('shorts'))
        {
            window.location.replace(window.location.toString().replace('shorts','watch'))
        }
    }

    // Running the function every 5 sec,
    setInterval(skipShorts, 5000);

})();
