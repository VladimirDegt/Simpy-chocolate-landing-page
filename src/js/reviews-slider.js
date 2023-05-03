 const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});
