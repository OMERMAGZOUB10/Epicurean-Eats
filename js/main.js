(function ($) {
    "use strict";
        // WOW Animation js
        new WOW({ mobile: true }).init();
})(jQuery);

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}

