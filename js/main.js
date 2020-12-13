$(document).ready(function () {
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
  });

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
  });

  //Parallax effect
  $('.parallax-window').parallax({imageSrc: 'img/newsletter-bg.jpeg'});

  var menuButton = $('.menu-button');
  menuButton.on('click', function  () {
    $(".navbar-bottom").toggleClass('navbar-bottom_visible');
    $("body").toggleClass('noscroll');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $(targetModal).find(".scroll").addClass("noscroll");
    $("body").toggleClass('noscroll');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass('noscroll');
  }

  //Функция закрытия модального окна по нажатию Esc
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
      }
  };

  // Обработка форм
  $(".modal__form").each(function () {
    $(this).validate({
    errorClass: "modal__error",
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "The name must be at least 2 characters long"
       },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
        },
      phone: {
        required: "Phone is required"
        },
      },
    });
  });

  $(".subscribe").each(function () {
    $(this).validate({
    errorClass: "subscribe__error",
    messages: {
      subscribe_email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    },
  });
  });

  $(".footer__form").each(function () {
    $(this).validate({
    errorClass: "footer__error",
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "The name must be at least 2 characters long"
       },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
        },
      },
  });
  });

  // Маска ввода телефона 
  $("input[type='tel']").mask("+7 (999) 999-99-99");

  //Библиотека анимаций AOS
  AOS.init();
});