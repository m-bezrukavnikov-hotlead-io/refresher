// ==UserScript==
// @name         Refresher
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       DEMENTOR
// @match        https://crm.hotlead.io/callcenter
// @match        http://localhost:8080/callcenter
// @downloadURL  https://github.com/m-bezrukavnikov-hotlead-io/refresher/raw/master/refresher.user.js
// @updateURL    https://github.com/m-bezrukavnikov-hotlead-io/refresher/raw/master/refresher.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let elements = document.querySelectorAll('title');
    console.log(elements[0]);
    elements[0].innerText = "↻";

    function refresh(){
        window.location.reload(false);
    }
    setTimeout(refresh, 60000);
})();
