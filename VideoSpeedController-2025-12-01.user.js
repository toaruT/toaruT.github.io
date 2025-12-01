// ==UserScript==
// @name         VideoSpeedController
// @namespace    http://tampermonkey.net/
// @version      2025-12-01
// @description  try to take over the world!
// @author       FukuokaHighSchool
// @match        https://pos.toshin.com/SSO1/SSOMenu/StudentMenu.aspx
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    let a = new Audio("https://www.myinstants.com/media/sounds/hub-intro-sound.mp3")
    a.currentTime = 0.5
    a.play()
})();