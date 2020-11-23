var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  //Speed control 
  speed: 400,

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})