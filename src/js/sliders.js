const sliders = () => {
  const Swiper = window.Swiper;

  // Slider promo
  const promo = document.querySelector(".js-promo-slider");

  if (promo) {
    const mySwiper = new Swiper(".js-promo-slider.swiper-container", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 400,
      navigation: {
        nextEl: ".js-promo-slider .swiper-button-next",
        prevEl: ".js-promo-slider .swiper-button-prev",
      },
    });
  }

  // Slider popular
  const popular = document.querySelector(".js-slider-popular");

  if (popular) {
    const mySwiper = new Swiper(".js-slider-popular .swiper-container", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 400,
      navigation: {
        nextEl: ".js-slider-popular .swiper-button-next",
        prevEl: ".js-slider-popular .swiper-button-prev",
      },
      breakpoints: {
        460: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        660: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
      },
    });
  }
};

export default sliders;
