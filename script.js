var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





var menuBtn = document.querySelector("nav h4")
var fullNav = document.querySelector(" #full-nav")

var flag = 0;

menuBtn.addEventListener("click",()=>{
  if(flag == 0){
    fullNav.style.right = 0
     menuBtn.innerHTML ='<i class="ri-close-large-line"></i>'
    flag = 1
  } else{
    fullNav.style.right = "-100%"
    menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>'
    flag = 0
  }
  
})