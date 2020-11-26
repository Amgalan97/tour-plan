var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  //Speed control 
  speed: 400,

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  //Speed control 
  speed: 400,

  //Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

//Parallax effect
$('.parallax-window').parallax({imageSrc: '../img/newsletter-bg.jpeg'});