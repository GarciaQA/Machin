new Swiper('.offers', {
    slidesPerView: 2,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
      },
    }
});