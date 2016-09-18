'use strict';

function loadCookies() {
    document.cookie = "name=oeschger";
    document.cookie = "favorite_food=tripe";
}
function showCookie() {
    console.log(document.cookie);
}