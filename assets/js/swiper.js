var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
  },
  loop: true,
});