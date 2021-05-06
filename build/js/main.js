(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var nodeListForEach = function nodeListForEach() {
    if ('NodeList' in window && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
  };

  var tel = function tel() {
    // Mask for tel
    var formBlocks = document.querySelectorAll(".fieldset");

    if (formBlocks.length) {
      formBlocks.forEach(function (formBlock) {
        var input = formBlock.querySelector("input[name=tel]");

        if (input) {
          var phoneMask = IMask(input, {
            mask: "+{7} 000 000-00-00"
          });
        }
      });
    }
  };

  var animation = function animation() {
    //wow
    var animations = new window.WOW().init();
    var cards = $(".card--good");

    if (cards) {
      cards.each(function () {
        var card = $(this);
        var cardSide = card.find(".card__side");
        card.on("mouseenter", function () {});
        card.on("mouseleave", function () {});
      });
    }
  };

  var menuOpen = function menuOpen() {
    // Открытие моб меню
    var $buttonsMenu = $(".js-open-menu");

    if ($buttonsMenu.length) {
      var $menu = $(".menu");
      var $buttonClose = $(".js-btn-close");
      var $header = $(".header");
      $buttonsMenu.each(function () {
        var $btn = $(this);

        var scrollHeader = function scrollHeader() {
          if ($menu.hasClass("is-show")) {
            if ($menu.scrollTop() > 1) {
              $header.addClass("scroll");
            } else {
              $header.removeClass("scroll");
            }
          }
        };

        $btn.click(function () {
          // если открыто меню
          if ($menu.hasClass("is-show")) {
            var pos = parseInt($("body").attr("data-scroll"), 10);
            $menu.removeClass("is-show");
            $btn.removeClass("is-show");
            $header.removeClass("scroll");
            $("body").removeClass("is-menu-open").removeAttr("data-scroll");
            window.scrollTo(0, pos); // если закрыто меню
          } else {
            $menu.addClass("is-show");

            if ($menu.scrollTop() > 1) {
              $header.addClass("scroll");
            }

            setTimeout(function () {
              $btn.addClass("is-show");
            }, 100);
            setTimeout(function () {
              var pagePos = $(window).scrollTop();
              $("body").addClass("is-menu-open").attr("data-scroll", pagePos);
            }, 450);
          }
        });
        $(".menu").on("scroll", scrollHeader);
      });
      $buttonClose.click(function () {
        var pos = parseInt($("body").attr("data-scroll"), 10);
        $menu.removeClass("is-show");
        $buttonsMenu.each(function () {
          var $btn = $(this);
          $btn.removeClass("is-show");
        });
        $("body").removeClass("is-menu-open").removeAttr("data-scroll");
        window.scrollTo(0, pos);
      });
    }
  };

  var headerScroll = function headerScroll() {
    var main = document.querySelector("main");
    var $header = $(".header");

    if ($header) {
      // Header меняет цвета при скролле. Он уже fixed изначально
      var scrollHeader = function scrollHeader() {
        var introTop = main.getBoundingClientRect().top;

        if (introTop < -1) {
          $header.addClass("scroll");
        } else if ($header.hasClass("scroll") && introTop > -1) {
          $header.removeClass("scroll");
        }
      };

      $(window).on("scroll", scrollHeader);
      $(document).on("ready", scrollHeader);
    }
  };

  var sliders = function sliders() {
    var Swiper = window.Swiper; // Slider promo

    var promo = document.querySelector(".js-promo-slider");

    if (promo) {
      var mySwiper = new Swiper(".js-promo-slider.swiper-container", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        navigation: {
          nextEl: ".js-promo-slider .swiper-button-next",
          prevEl: ".js-promo-slider .swiper-button-prev"
        }
      });
      var titles = promo.querySelectorAll("h1");

      function slideChangeHandler(timer) {
        var activeSlide = promo.querySelector(".swiper-slide-active");

        if (activeSlide) {
          setTimeout(function () {
            var title = activeSlide.querySelector("h1");
            title.classList.add("active");
          }, timer);
        }
      }

      slideChangeHandler(300);
      mySwiper.on('slideChangeTransitionStart', function () {
        titles.forEach(function (title) {
          if (title.classList.contains("active")) {
            title.classList.remove("active");
          }
        });
        slideChangeHandler(500);
      });
      var brandsSwiper = new Swiper(".js-brands-slider.swiper-container", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        centered: true,
        breakpoints: {
          410: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          490: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          950: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }
      });
    } // Slider popular


    var popular = document.querySelector(".js-popular-slider");

    if (popular) {
      var _mySwiper = new Swiper(".js-popular-slider .swiper-container", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 400,
        navigation: {
          nextEl: ".js-popular-slider .swiper-button-next",
          prevEl: ".js-popular-slider .swiper-button-prev"
        },
        breakpoints: {
          470: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 8
          }
        }
      });
    }
  };

  var number = function number() {
    //Разрешает ввод только цифр в input
    var $numbers = $(".js-number");

    if (!$numbers) {
      return;
    }

    $numbers.each(function () {
      var $thiss = $(this);
      $thiss.mask('0#');
    });
  };

  var btnUp = function btnUp() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        if ($('#upbutton').is(':hidden')) {
          $('#upbutton').css({
            opacity: 0.9
          }).fadeIn('fast');
        }
      } else {
        $('#upbutton').stop(true, false).fadeOut('fast');
      }
    });
    $('#upbutton').click(function () {
      $('html, body').stop().animate({
        scrollTop: 0
      }, 300);
    });
  };

  var goodQuantity = function goodQuantity() {
    // Увеличение и уменьшение товаров
    var containers = document.querySelectorAll(".js-quantity");

    if (containers.length < 0) {
      return;
    }

    containers.forEach(function (container) {
      var input = container.querySelector("input");
      var btnIncrease = container.querySelector(".js-increase");
      var btnDecrease = container.querySelector(".js-decrease");
      var value;

      var btnIncreaseHandler = function btnIncreaseHandler() {
        value = input.value;
        var newValue = ++value;

        if (newValue > 1) {
          btnDecrease.removeAttribute("disabled");
        }

        input.value = newValue;
      };

      var btnDecreaseHandler = function btnDecreaseHandler() {
        value = input.value;
        var newValue = --value;

        if (newValue <= 1) {
          newValue = 1;
          input.value = 1;
          btnDecrease.setAttribute("disabled", "disabled");
        }

        input.value = newValue;
      };

      btnIncrease.addEventListener("click", btnIncreaseHandler);
      btnDecrease.addEventListener("click", btnDecreaseHandler);
      input.addEventListener("change", function () {
        btnIncreaseHandler();
        btnDecreaseHandler();
      });
    });
  };

  var footerForm = function footerForm() {
    var $footerForm = $(".footer form");

    if (!$footerForm) {
      return;
    }

    var inputs = $footerForm.find("input");
    inputs.each(function () {
      var input = $(this);
      input.on("change", function () {
        if (input.val() !== "") {
          input.addClass("has-value");
        } else {
          input.removeClass("has-value");
        }
      });
    });
  };

  var deskMenu = function deskMenu() {
    // Открытие и закрытие header-menu с помощью fade
    var $headerMenu = $(".js-desk-menu");

    if (!$headerMenu) {
      return;
    }

    var $btn = $(".js-desk-menu-btn");
    var keyCode = {
      ESC: 27
    };

    var open = function open() {
      $headerMenu.slideDown(300);
      $headerMenu.addClass("show");
      $btn.addClass("active");
    };

    var close = function close() {
      $headerMenu.slideUp(300);
      $headerMenu.removeClass("show");
      $btn.removeClass("active");
      $btn.blur();
    };

    $btn.click(function () {
      if ($headerMenu.hasClass("show")) {
        close();
      } else {
        resizeTopCoordinate();
        open();
      }
    }); // Определение и установка координаты top для header-menu

    var resizeTopCoordinate = function resizeTopCoordinate() {
      var height = $(".header").outerHeight();
      var a = height + "px";
      $headerMenu.css("top", a);
    };

    resizeTopCoordinate();
    $(window).on("resize", resizeTopCoordinate);
    $(document).on("scroll", function () {
      if ($headerMenu.hasClass("show")) {
        close();
      }
    }); // Закрытие header-menu при нажатии вне меню

    $(document).on('mouseup', function (evt) {
      if (evt.target.closest(".js-desk-menu") === null && evt.target.closest(".js-desk-menu-btn") === null) {
        close();
      }
    }); // Закрытие header-menu по ESC

    $(document).on("keydown", function (evt) {
      if (evt.keyCode === keyCode.ESC && $headerMenu.hasClass("show")) {
        close();
      }
    });
  };

  var filter = function filter() {
    //Открытие фильтра в каталоге
    var $filterBtn = $(".js-filter-btn");

    if (!$filterBtn) {
      return;
    }

    var $filter = $(".js-filter");
    var $btnClose = $(".js-close-filter");
    var $overlay = $(".overlay");
    $filterBtn.on("click", function (evt) {
      evt.preventDefault();

      if ($filter.hasClass("open")) {
        $filter.removeClass("open");
        $overlay.fadeOut(300);
      } else {
        $filter.addClass("open");
        $overlay.fadeIn(300);
      }
    });
    $btnClose.on("click", function () {
      if ($filter.hasClass("open")) {
        $filter.removeClass("open");
        $overlay.fadeOut(300);
      }
    });
    $(document).on('mouseup', function (evt) {
      if (evt.target.closest(".js-filter") === null && evt.target.closest(".js-close-filter") === null) {
        if ($filter.hasClass("open")) {
          $filter.removeClass("open");
          $overlay.fadeOut(300);
        }
      }
    });
  };

  var range = function range() {
    // Input type range
    // http://ionden.com/a/plugins/ion.rangeSlider/start.html
    var minPrice = 199;
    var maxPrice = 2799;
    var fromPrice = 199;
    var toPrice = 2799;
    $(".js-range").ionRangeSlider({
      type: "double",
      skin: "round",
      grid: false,
      min: minPrice,
      max: maxPrice,
      from: fromPrice,
      to: toPrice,
      hide_min_max: true,
      hide_from_to: true
    });
  };

  var sort = function sort() {
    var $viewLinks = $(".js-link-view");

    if ($viewLinks) {
      $viewLinks.on("click", function (evt) {
        evt.preventDefault();

        if ($(this).hasClass("active")) ; else {
          $viewLinks.toggleClass("active");
          $(".js-catalog-content").toggleClass("catalog-content--row");
        }
      });

      function removeRow() {
        if ($(window).width() < 992) {
          $(".catalog-content").removeClass("catalog-content--row");
          $(".js-row").removeClass("active");
          $(".js-col").addClass("active");
        }
      }

      removeRow();
      $(window).on("resize", removeRow);
    }
  };

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);
    }

    _createClass(App, null, [{
      key: "init",
      value: function init() {
        nodeListForEach();
        tel();
        animation();
        menuOpen();
        headerScroll();
        sliders();
        number();
        btnUp();
        goodQuantity();
        footerForm();
        deskMenu();
        filter();
        range();
        sort();
      }
    }]);

    return App;
  }();

  App.init();
  window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy90ZWwuanMiLCJzcmMvanMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21lbnUtb3Blbi5qcyIsInNyYy9qcy9oZWFkZXIuanMiLCJzcmMvanMvc2xpZGVycy5qcyIsInNyYy9qcy9udW1iZXIuanMiLCJzcmMvanMvYnRuLXVwLmpzIiwic3JjL2pzL2dvb2QtcXVhbnRpdHkuanMiLCJzcmMvanMvZm9vdGVyLWZvcm0uanMiLCJzcmMvanMvZGVzay1tZW51LmpzIiwic3JjL2pzL2ZpbHRlci1vcGVuLmpzIiwic3JjL2pzL3JhbmdlLmpzIiwic3JjL2pzL3NvcnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlTGlzdEZvckVhY2ggPSAoKSA9PiB7XG4gIGlmICgnTm9kZUxpc3QnIGluIHdpbmRvdyAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTGlzdEZvckVhY2g7XG4iLCJjb25zdCB0ZWwgPSAoKSA9PiB7XG4gIC8vIE1hc2sgZm9yIHRlbFxuICBjb25zdCBmb3JtQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHNldFwiKTtcblxuICBpZiAoZm9ybUJsb2Nrcy5sZW5ndGgpIHtcblxuICAgIGZvcm1CbG9ja3MuZm9yRWFjaChmdW5jdGlvbihmb3JtQmxvY2spIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPXRlbF1cIik7XG5cbiAgICAgIGlmKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBob25lTWFzayA9IElNYXNrKCBpbnB1dCwge1xuICAgICAgICAgIG1hc2s6IFwiK3s3fSAwMDAgMDAwLTAwLTAwXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbDtcbiIsImNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgLy93b3dcbiAgY29uc3QgYW5pbWF0aW9ucyA9IG5ldyB3aW5kb3cuV09XKCkuaW5pdCgpO1xuXG4gIGNvbnN0IGNhcmRzID0gJChcIi5jYXJkLS1nb29kXCIpO1xuXG4gIGlmIChjYXJkcykge1xuICAgIGNhcmRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjYXJkID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNhcmRTaWRlID0gY2FyZC5maW5kKFwiLmNhcmRfX3NpZGVcIik7XG5cbiAgICAgIGNhcmQub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICB9KTtcblxuICAgICAgY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGlvbjtcbiIsImNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xuICAvLyDQntGC0LrRgNGL0YLQuNC1INC80L7QsSDQvNC10L3RjlxuICBjb25zdCAkYnV0dG9uc01lbnUgPSAkKFwiLmpzLW9wZW4tbWVudVwiKTtcblxuICBpZiAoJGJ1dHRvbnNNZW51Lmxlbmd0aCkge1xuICAgIGNvbnN0ICRtZW51ID0gJChcIi5tZW51XCIpO1xuICAgIGNvbnN0ICRidXR0b25DbG9zZSA9ICQoXCIuanMtYnRuLWNsb3NlXCIpO1xuICAgIGNvbnN0ICRoZWFkZXIgPSAkKFwiLmhlYWRlclwiKTtcblxuICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuXG4gICAgICBjb25zdCBzY3JvbGxIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICgkbWVudS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAgIGlmKCRtZW51LnNjcm9sbFRvcCgpID4gMSkge1xuICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g0LXRgdC70Lgg0L7RgtC60YDRi9GC0L4g0LzQtdC90Y5cbiAgICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKFwiaXMtc2hvd1wiKSkge1xuXG4gICAgICAgICAgY29uc3QgcG9zID0gcGFyc2VJbnQoJChcImJvZHlcIikuYXR0cihcImRhdGEtc2Nyb2xsXCIpLCAxMCk7XG4gICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW1lbnUtb3BlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zY3JvbGxcIik7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBvcyk7XG5cbiAgICAgICAgICAvLyDQtdGB0LvQuCDQt9Cw0LrRgNGL0YLQviDQvNC10L3RjlxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoXCJpcy1zaG93XCIpO1xuXG4gICAgICAgICAgaWYoJG1lbnUuc2Nyb2xsVG9wKCkgPiAxKSB7XG4gICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcyhcImlzLXNob3dcIik7XG5cbiAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1tZW51LW9wZW5cIikuYXR0cihcImRhdGEtc2Nyb2xsXCIsIHBhZ2VQb3MpO1xuICAgICAgICAgIH0sIDQ1MCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKFwiLm1lbnVcIikub24oXCJzY3JvbGxcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgICB9KTtcblxuICAgICRidXR0b25DbG9zZS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwb3MgPSBwYXJzZUludCgkKFwiYm9keVwiKS5hdHRyKFwiZGF0YS1zY3JvbGxcIiksIDEwKTtcbiAgICAgICRtZW51LnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJGJ0biA9ICQodGhpcyk7XG4gICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtbWVudS1vcGVuXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXNjcm9sbFwiKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3MpO1xuICAgIH0pO1xuXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudU9wZW47XG4iLCJjb25zdCBoZWFkZXJTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCAkaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5cbiAgaWYgKCRoZWFkZXIpIHtcbiAgICBcbiAgICAvLyBIZWFkZXIg0LzQtdC90Y/QtdGCINGG0LLQtdGC0LAg0L/RgNC4INGB0LrRgNC+0LvQu9C1LiDQntC9INGD0LbQtSBmaXhlZCDQuNC30L3QsNGH0LDQu9GM0L3QvlxuICAgIGNvbnN0IHNjcm9sbEhlYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludHJvVG9wID0gbWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGlmIChpbnRyb1RvcCA8IC0xKSB7XG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgIH0gZWxzZSBpZiAoJGhlYWRlci5oYXNDbGFzcyhcInNjcm9sbFwiKSAmJiBpbnRyb1RvcCA+IC0xKSB7XG4gICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBzY3JvbGxIZWFkZXIpO1xuICAgICQoZG9jdW1lbnQpLm9uKFwicmVhZHlcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTY3JvbGw7XG4iLCJjb25zdCBzbGlkZXJzID0gKCkgPT4ge1xuICBjb25zdCBTd2lwZXIgPSB3aW5kb3cuU3dpcGVyO1xuXG4gIC8vIFNsaWRlciBwcm9tb1xuICBjb25zdCBwcm9tbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcHJvbW8tc2xpZGVyXCIpO1xuXG4gIGlmIChwcm9tbykge1xuICAgIGNvbnN0IG15U3dpcGVyID0gbmV3IFN3aXBlcihcIi5qcy1wcm9tby1zbGlkZXIuc3dpcGVyLWNvbnRhaW5lclwiLCB7XG4gICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHNwZWVkOiA2MDAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuanMtcHJvbW8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5qcy1wcm9tby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlcyA9IHByb21vLnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMVwiKTtcblxuICAgIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlSGFuZGxlcih0aW1lcikge1xuICAgICAgbGV0IGFjdGl2ZVNsaWRlID0gcHJvbW8ucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItc2xpZGUtYWN0aXZlXCIpO1xuXG4gICAgICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGFjdGl2ZVNsaWRlLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9LCB0aW1lcik7XG4gICAgICB9XG5cbiAgICB9XG4gICAgc2xpZGVDaGFuZ2VIYW5kbGVyKDMwMCk7XG5cbiAgICBteVN3aXBlci5vbignc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aXRsZXMuZm9yRWFjaChmdW5jdGlvbih0aXRsZSkge1xuICAgICAgICBpZiAodGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzbGlkZUNoYW5nZUhhbmRsZXIoNTAwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJyYW5kc1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuanMtYnJhbmRzLXNsaWRlci5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIHNwZWVkOiA2MDAsXG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDQxMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgfSxcbiAgICAgICAgNDkwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgICAgICB9LFxuICAgICAgICA3MDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDk1MDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgfSxcbiAgICAgICAgOTkxOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNsaWRlciBwb3B1bGFyXG4gIGNvbnN0IHBvcHVsYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXBvcHVsYXItc2xpZGVyXCIpO1xuXG4gIGlmIChwb3B1bGFyKSB7XG4gICAgY29uc3QgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIHNwZWVkOiA0MDAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuanMtcG9wdWxhci1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICA0NzA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDcwMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgfSxcbiAgICAgICAgOTkxOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbGlkZXJzO1xuIiwiY29uc3QgbnVtYmVyID0gKCkgPT4ge1xuICAvL9Cg0LDQt9GA0LXRiNCw0LXRgiDQstCy0L7QtCDRgtC+0LvRjNC60L4g0YbQuNGE0YAg0LIgaW5wdXRcbiAgY29uc3QgJG51bWJlcnMgPSAkKFwiLmpzLW51bWJlclwiKTtcbiAgaWYgKCEkbnVtYmVycykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICRudW1iZXJzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHRoaXNzID0gJCh0aGlzKTtcblxuICAgICR0aGlzcy5tYXNrKCcwIycpO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyO1xuIiwiY29uc3QgYnRuVXAgPSAoKSA9PiB7XG5cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDIwMCkge1xuICAgICAgICBpZiAoJCgnI3VwYnV0dG9uJykuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgJCgnI3VwYnV0dG9uJykuY3NzKHtvcGFjaXR5IDogMC45fSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAkKCcjdXBidXR0b24nKS5zdG9wKHRydWUsIGZhbHNlKS5mYWRlT3V0KCdmYXN0Jyk7IH1cbiAgfSk7XG5cbiAgJCgnI3VwYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IDB9LCAzMDApO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnRuVXA7XG4iLCJjb25zdCBnb29kUXVhbnRpdHkgPSAoKSA9PiB7XG4gIC8vINCj0LLQtdC70LjRh9C10L3QuNC1INC4INGD0LzQtdC90YzRiNC10L3QuNC1INGC0L7QstCw0YDQvtCyXG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXF1YW50aXR5XCIpO1xuICBpZiAoY29udGFpbmVycy5sZW5ndGggPCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYnRuSW5jcmVhc2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5qcy1pbmNyZWFzZVwiKTtcbiAgICBjb25zdCBidG5EZWNyZWFzZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmpzLWRlY3JlYXNlXCIpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgYnRuSW5jcmVhc2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9ICsrdmFsdWU7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA+IDEpIHtcbiAgICAgICAgYnRuRGVjcmVhc2UucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ0bkRlY3JlYXNlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgbmV3VmFsdWUgPSAtLXZhbHVlO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPD0gMSkge1xuICAgICAgICBuZXdWYWx1ZSA9IDE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gMTtcbiAgICAgICAgYnRuRGVjcmVhc2Uuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9O1xuXG4gICAgYnRuSW5jcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkluY3JlYXNlSGFuZGxlcik7XG4gICAgYnRuRGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkRlY3JlYXNlSGFuZGxlcik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidG5JbmNyZWFzZUhhbmRsZXIoKTtcbiAgICAgIGJ0bkRlY3JlYXNlSGFuZGxlcigpO1xuICAgIH0pXG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnb29kUXVhbnRpdHk7XG4iLCJjb25zdCBmb290ZXJGb3JtID0gKCkgPT4ge1xuICBjb25zdCAkZm9vdGVyRm9ybSA9ICQoXCIuZm9vdGVyIGZvcm1cIik7XG4gIGlmICghJGZvb3RlckZvcm0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbnB1dHMgPSAkZm9vdGVyRm9ybS5maW5kKFwiaW5wdXRcIik7XG5cbiAgaW5wdXRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xuXG4gICAgaW5wdXQub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaW5wdXQudmFsKCkgIT09IGBgKSB7XG4gICAgICAgIGlucHV0LmFkZENsYXNzKFwiaGFzLXZhbHVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoXCJoYXMtdmFsdWVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJGb3JtO1xuIiwiY29uc3QgZGVza01lbnUgPSAoKSA9PiB7XG4gIC8vINCe0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSBoZWFkZXItbWVudSDRgSDQv9C+0LzQvtGJ0YzRjiBmYWRlXG4gIGNvbnN0ICRoZWFkZXJNZW51ID0gJChcIi5qcy1kZXNrLW1lbnVcIik7XG5cbiAgaWYoISRoZWFkZXJNZW51KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGJ0biA9ICQoXCIuanMtZGVzay1tZW51LWJ0blwiKTtcblxuICBjb25zdCBrZXlDb2RlID0ge1xuICAgIEVTQzogMjcsXG4gIH07XG5cbiAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAkaGVhZGVyTWVudS5zbGlkZURvd24oMzAwKTtcbiAgICAkaGVhZGVyTWVudS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgJGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAkaGVhZGVyTWVudS5zbGlkZVVwKDMwMCk7XG4gICAgJGhlYWRlck1lbnUucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ0bi5ibHVyKCk7XG4gIH07XG5cbiAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoJGhlYWRlck1lbnUuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNpemVUb3BDb29yZGluYXRlKCk7XG4gICAgICBvcGVuKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyDQntC/0YDQtdC00LXQu9C10L3QuNC1INC4INGD0YHRgtCw0L3QvtCy0LrQsCDQutC+0L7RgNC00LjQvdCw0YLRiyB0b3Ag0LTQu9GPIGhlYWRlci1tZW51XG4gIGNvbnN0IHJlc2l6ZVRvcENvb3JkaW5hdGUgPSAoKSA9PiB7XG4gICAgbGV0IGhlaWdodCA9ICQoXCIuaGVhZGVyXCIpLm91dGVySGVpZ2h0KCk7XG4gICAgbGV0IGEgPSBoZWlnaHQgKyBcInB4XCI7XG5cbiAgICAkaGVhZGVyTWVudS5jc3MoXCJ0b3BcIiwgYSk7XG4gIH07XG4gIHJlc2l6ZVRvcENvb3JkaW5hdGUoKTtcblxuICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgcmVzaXplVG9wQ29vcmRpbmF0ZSk7XG4gICQoZG9jdW1lbnQpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJGhlYWRlck1lbnUuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8g0JfQsNC60YDRi9GC0LjQtSBoZWFkZXItbWVudSDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LLQvdC1INC80LXQvdGOXG4gICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdChcIi5qcy1kZXNrLW1lbnVcIikgPT09IG51bGwgJiYgZXZ0LnRhcmdldC5jbG9zZXN0KFwiLmpzLWRlc2stbWVudS1idG5cIikgPT09IG51bGwpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyDQl9Cw0LrRgNGL0YLQuNC1IGhlYWRlci1tZW51INC/0L4gRVNDXG4gICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IGtleUNvZGUuRVNDICYmICRoZWFkZXJNZW51Lmhhc0NsYXNzKFwic2hvd1wiKSkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVza01lbnU7XG4iLCJjb25zdCBmaWx0ZXIgPSAoKSA9PiB7XG4gIC8v0J7RgtC60YDRi9GC0LjQtSDRhNC40LvRjNGC0YDQsCDQsiDQutCw0YLQsNC70L7Qs9C1XG4gIGNvbnN0ICRmaWx0ZXJCdG4gPSAkKFwiLmpzLWZpbHRlci1idG5cIilcbiAgaWYgKCEkZmlsdGVyQnRuKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGZpbHRlciA9ICQoXCIuanMtZmlsdGVyXCIpO1xuICBjb25zdCAkYnRuQ2xvc2UgPSAkKFwiLmpzLWNsb3NlLWZpbHRlclwiKTtcbiAgY29uc3QgJG92ZXJsYXkgPSAkKFwiLm92ZXJsYXlcIik7XG5cbiAgJGZpbHRlckJ0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJGZpbHRlci5oYXNDbGFzcyhcIm9wZW5cIikpIHtcbiAgICAgICRmaWx0ZXIucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgJG92ZXJsYXkuZmFkZU91dCgzMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZmlsdGVyLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICRvdmVybGF5LmZhZGVJbigzMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgJGJ0bkNsb3NlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkZmlsdGVyLmhhc0NsYXNzKFwib3BlblwiKSkge1xuICAgICAgJGZpbHRlci5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAkb3ZlcmxheS5mYWRlT3V0KDMwMCk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoXCIuanMtZmlsdGVyXCIpID09PSBudWxsICYmIGV2dC50YXJnZXQuY2xvc2VzdChcIi5qcy1jbG9zZS1maWx0ZXJcIikgPT09IG51bGwpIHtcbiAgICAgIGlmICgkZmlsdGVyLmhhc0NsYXNzKFwib3BlblwiKSkge1xuICAgICAgICAkZmlsdGVyLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgJG92ZXJsYXkuZmFkZU91dCgzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlcjtcbiIsImNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAvLyBJbnB1dCB0eXBlIHJhbmdlXG4gIC8vIGh0dHA6Ly9pb25kZW4uY29tL2EvcGx1Z2lucy9pb24ucmFuZ2VTbGlkZXIvc3RhcnQuaHRtbFxuICBjb25zdCBtaW5QcmljZSA9IDE5OTtcbiAgY29uc3QgbWF4UHJpY2UgPSAyNzk5O1xuICBjb25zdCBmcm9tUHJpY2UgPSAxOTk7XG4gIGNvbnN0IHRvUHJpY2UgPSAyNzk5O1xuXG5cbiAgJChcIi5qcy1yYW5nZVwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgdHlwZTogXCJkb3VibGVcIixcbiAgICBza2luOiBcInJvdW5kXCIsXG4gICAgZ3JpZDogZmFsc2UsXG4gICAgbWluOiBtaW5QcmljZSxcbiAgICBtYXg6IG1heFByaWNlLFxuICAgIGZyb206IGZyb21QcmljZSxcbiAgICB0bzogdG9QcmljZSxcbiAgICBoaWRlX21pbl9tYXg6IHRydWUsXG4gICAgaGlkZV9mcm9tX3RvOiB0cnVlLFxuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZ2U7XG4iLCJjb25zdCBzb3J0ID0gKCkgPT4ge1xuICBjb25zdCAkdmlld0xpbmtzID0gJChcIi5qcy1saW5rLXZpZXdcIik7XG5cbiAgaWYgKCR2aWV3TGlua3MpIHtcblxuICAgICR2aWV3TGlua3Mub24oXCJjbGlja1wiLCBmdW5jdGlvbihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHt9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJHZpZXdMaW5rcy50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcIi5qcy1jYXRhbG9nLWNvbnRlbnRcIikudG9nZ2xlQ2xhc3MoXCJjYXRhbG9nLWNvbnRlbnQtLXJvd1wiKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUm93KCkge1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICQoXCIuY2F0YWxvZy1jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwiY2F0YWxvZy1jb250ZW50LS1yb3dcIik7XG4gICAgICAgICAgJChcIi5qcy1yb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgJChcIi5qcy1jb2xcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVJvdygpO1xuXG4gICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIHJlbW92ZVJvdyk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgc29ydDtcbiIsImltcG9ydCBub2RlTGlzdEZvckVhY2ggZnJvbSAnLi9ub2RlLWxpc3QtZm9yLWVhY2gnO1xuaW1wb3J0IHRlbCBmcm9tICcuL3RlbCc7XG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCBtZW51T3BlbiBmcm9tICcuL21lbnUtb3Blbic7XG5pbXBvcnQgaGVhZGVyU2Nyb2xsIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzbGlkZXJzIGZyb20gJy4vc2xpZGVycyc7XG5pbXBvcnQgbnVtYmVyIGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCBidG5VcCBmcm9tICcuL2J0bi11cCc7XG5pbXBvcnQgZ29vZFF1YW50aXR5IGZyb20gJy4vZ29vZC1xdWFudGl0eSc7XG5pbXBvcnQgZm9vdGVyRm9ybSBmcm9tICcuL2Zvb3Rlci1mb3JtJztcbmltcG9ydCBkZXNrTWVudSBmcm9tICcuL2Rlc2stbWVudSc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLW9wZW4nO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgbm9kZUxpc3RGb3JFYWNoKCk7XG4gICAgdGVsKCk7XG4gICAgYW5pbWF0aW9uKCk7XG4gICAgbWVudU9wZW4oKTtcbiAgICBoZWFkZXJTY3JvbGwoKTtcbiAgICBzbGlkZXJzKCk7XG4gICAgbnVtYmVyKCk7XG4gICAgYnRuVXAoKTtcbiAgICBnb29kUXVhbnRpdHkoKTtcbiAgICBmb290ZXJGb3JtKCk7XG4gICAgZGVza01lbnUoKTtcbiAgICBmaWx0ZXIoKTtcbiAgICByYW5nZSgpO1xuICAgIHNvcnQoKTtcbiAgfVxufVxuXG5cbkFwcC5pbml0KCk7XG53aW5kb3cuQXBwID0gQXBwO1xuIl0sIm5hbWVzIjpbIm5vZGVMaXN0Rm9yRWFjaCIsIndpbmRvdyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwidGhpc0FyZyIsImkiLCJsZW5ndGgiLCJjYWxsIiwidGVsIiwiZm9ybUJsb2NrcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm1CbG9jayIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInBob25lTWFzayIsIklNYXNrIiwibWFzayIsImFuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJXT1ciLCJpbml0IiwiY2FyZHMiLCIkIiwiZWFjaCIsImNhcmQiLCJjYXJkU2lkZSIsImZpbmQiLCJvbiIsIm1lbnVPcGVuIiwiJGJ1dHRvbnNNZW51IiwiJG1lbnUiLCIkYnV0dG9uQ2xvc2UiLCIkaGVhZGVyIiwiJGJ0biIsInNjcm9sbEhlYWRlciIsImhhc0NsYXNzIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwicG9zIiwicGFyc2VJbnQiLCJhdHRyIiwicmVtb3ZlQXR0ciIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsInBhZ2VQb3MiLCJoZWFkZXJTY3JvbGwiLCJtYWluIiwiaW50cm9Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzbGlkZXJzIiwiU3dpcGVyIiwicHJvbW8iLCJteVN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzcGVlZCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ0aXRsZXMiLCJzbGlkZUNoYW5nZUhhbmRsZXIiLCJ0aW1lciIsImFjdGl2ZVNsaWRlIiwidGl0bGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsImJyYW5kc1N3aXBlciIsImNlbnRlcmVkIiwiYnJlYWtwb2ludHMiLCJwb3B1bGFyIiwibnVtYmVyIiwiJG51bWJlcnMiLCIkdGhpc3MiLCJidG5VcCIsInNjcm9sbCIsImlzIiwiY3NzIiwib3BhY2l0eSIsImZhZGVJbiIsInN0b3AiLCJmYWRlT3V0IiwiYW5pbWF0ZSIsImdvb2RRdWFudGl0eSIsImNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJidG5JbmNyZWFzZSIsImJ0bkRlY3JlYXNlIiwidmFsdWUiLCJidG5JbmNyZWFzZUhhbmRsZXIiLCJuZXdWYWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImJ0bkRlY3JlYXNlSGFuZGxlciIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb290ZXJGb3JtIiwiJGZvb3RlckZvcm0iLCJpbnB1dHMiLCJ2YWwiLCJkZXNrTWVudSIsIiRoZWFkZXJNZW51Iiwia2V5Q29kZSIsIkVTQyIsIm9wZW4iLCJzbGlkZURvd24iLCJjbG9zZSIsInNsaWRlVXAiLCJibHVyIiwicmVzaXplVG9wQ29vcmRpbmF0ZSIsImhlaWdodCIsIm91dGVySGVpZ2h0IiwiYSIsImV2dCIsInRhcmdldCIsImNsb3Nlc3QiLCJmaWx0ZXIiLCIkZmlsdGVyQnRuIiwiJGZpbHRlciIsIiRidG5DbG9zZSIsIiRvdmVybGF5IiwicHJldmVudERlZmF1bHQiLCJyYW5nZSIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJmcm9tUHJpY2UiLCJ0b1ByaWNlIiwiaW9uUmFuZ2VTbGlkZXIiLCJ0eXBlIiwic2tpbiIsImdyaWQiLCJtaW4iLCJtYXgiLCJmcm9tIiwidG8iLCJoaWRlX21pbl9tYXgiLCJoaWRlX2Zyb21fdG8iLCJzb3J0IiwiJHZpZXdMaW5rcyIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlUm93Iiwid2lkdGgiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07RUFDNUIsTUFBSSxjQUFjQyxNQUFkLElBQXdCLENBQUNDLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsT0FBaEQsRUFBeUQ7RUFDdkRGLElBQUFBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsT0FBbkIsR0FBNkIsVUFBVUMsUUFBVixFQUFvQkMsT0FBcEIsRUFBNkI7RUFDMURBLE1BQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJTCxNQUFyQjs7RUFDQSxXQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7RUFDdENGLFFBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjSCxPQUFkLEVBQXVCLEtBQUtDLENBQUwsQ0FBdkIsRUFBZ0NBLENBQWhDLEVBQW1DLElB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
