new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.video-slider',
  },

  slidesPerView: 3,
  spaceBetween: 30,
  initialSlide: 2,
  loop: true,
  loopedSlides: 3,
  // freeMode: true,

  autoplay: {
    delay: 1000,
    // stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,

});


