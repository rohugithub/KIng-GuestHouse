document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu_btn');
    var navMenu = document.querySelector('nav ul');

    menuButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});