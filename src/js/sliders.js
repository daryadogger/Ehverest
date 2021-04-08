const sliders = () => {
  const Swiper = window.Swiper;

  // Slider promo
  const promo = document.querySelector(".js-promo-slider");

  if (promo) {
    const mySwiper = new Swiper(".js-promo-slider.swiper-container", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      navigation: {
        nextEl: ".js-promo-slider .swiper-button-next",
        prevEl: ".js-promo-slider .swiper-button-prev",
      },
    });
  }

  // Slider popular
  const popular = document.querySelector(".js-popular-slider");

  if (popular) {
    const mySwiper = new Swiper(".js-popular-slider .swiper-container", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 400,
      navigation: {
        nextEl: ".js-popular-slider .swiper-button-next",
        prevEl: ".js-popular-slider .swiper-button-prev",
      },
      breakpoints: {
        470: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
      },
    });
  }
};

export default sliders;
