(function () {
  'use strict';

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector('.ud-header');
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector('.my-navbar img');
    const title = document.querySelector('.my-navbar h1');

    if (window.pageYOffset > sticky) {
      ud_header.classList.add('sticky');
    } else {
      ud_header.classList.remove('sticky');
    }

    // === logo change
    if (ud_header.classList.contains('sticky')) {
      logo.src = 'logo2.webp';
      title.classList.remove('text-white');
    } else {
      logo.src = 'logo.svg';
      title.classList.add('text-white');
    }
  };

  // ===== wow js
  new WOW().init();

  // ====== scroll top js

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
})();