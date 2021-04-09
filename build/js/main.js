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
    var links = $headerMenu.find(".js-desk-menu-links a");
    var contents = $headerMenu.find(".desk-menu__content");

    function deskMenuContentChange(link) {
      link.addClass("hover");
      var id = link.attr("data-id");
      resetContent();
      var content = $headerMenu.find(".desk-menu__content[data-id=\"".concat(id, "\"]"));
      content.addClass("show");
    }

    deskMenuContentChange($(links[0]));

    function resetHover() {
      links.each(function () {
        var link = $(this);
        link.removeClass("hover");
      });
    }

    function resetContent() {
      contents.each(function () {
        var item = $(this);
        item.removeClass("show");
      });
    }

    links.each(function () {
      var link = $(this);
      link.on("click", function (evt) {
        evt.preventDefault();
      });
      link.on("mouseenter", function () {
        resetHover();
        deskMenuContentChange(link);
      });
    });
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
      }
    }]);

    return App;
  }();

  App.init();
  window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy90ZWwuanMiLCJzcmMvanMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21lbnUtb3Blbi5qcyIsInNyYy9qcy9oZWFkZXIuanMiLCJzcmMvanMvc2xpZGVycy5qcyIsInNyYy9qcy9udW1iZXIuanMiLCJzcmMvanMvYnRuLXVwLmpzIiwic3JjL2pzL2dvb2QtcXVhbnRpdHkuanMiLCJzcmMvanMvZm9vdGVyLWZvcm0uanMiLCJzcmMvanMvZGVzay1tZW51LmpzIiwic3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZUxpc3RGb3JFYWNoID0gKCkgPT4ge1xuICBpZiAoJ05vZGVMaXN0JyBpbiB3aW5kb3cgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICB0aGlzQXJnID0gdGhpc0FyZyB8fCB3aW5kb3c7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZUxpc3RGb3JFYWNoO1xuIiwiY29uc3QgdGVsID0gKCkgPT4ge1xuICAvLyBNYXNrIGZvciB0ZWxcbiAgY29uc3QgZm9ybUJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzZXRcIik7XG5cbiAgaWYgKGZvcm1CbG9ja3MubGVuZ3RoKSB7XG5cbiAgICBmb3JtQmxvY2tzLmZvckVhY2goZnVuY3Rpb24oZm9ybUJsb2NrKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGZvcm1CbG9jay5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT10ZWxdXCIpO1xuXG4gICAgICBpZihpbnB1dCkge1xuICAgICAgICBjb25zdCBwaG9uZU1hc2sgPSBJTWFzayggaW5wdXQsIHtcbiAgICAgICAgICBtYXNrOiBcIit7N30gMDAwIDAwMC0wMC0wMFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZWw7XG4iLCJjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gIC8vd293XG4gIGNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgd2luZG93LldPVygpLmluaXQoKTtcblxuICBjb25zdCBjYXJkcyA9ICQoXCIuY2FyZC0tZ29vZFwiKTtcblxuICBpZiAoY2FyZHMpIHtcbiAgICBjYXJkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2FyZCA9ICQodGhpcyk7XG4gICAgICBjb25zdCBjYXJkU2lkZSA9IGNhcmQuZmluZChcIi5jYXJkX19zaWRlXCIpO1xuXG4gICAgICBjYXJkLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgfSk7XG5cbiAgICAgIGNhcmQub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltYXRpb247XG4iLCJjb25zdCBtZW51T3BlbiA9ICgpID0+IHtcbiAgLy8g0J7RgtC60YDRi9GC0LjQtSDQvNC+0LEg0LzQtdC90Y5cbiAgY29uc3QgJGJ1dHRvbnNNZW51ID0gJChcIi5qcy1vcGVuLW1lbnVcIik7XG5cbiAgaWYgKCRidXR0b25zTWVudS5sZW5ndGgpIHtcbiAgICBjb25zdCAkbWVudSA9ICQoXCIubWVudVwiKTtcbiAgICBjb25zdCAkYnV0dG9uQ2xvc2UgPSAkKFwiLmpzLWJ0bi1jbG9zZVwiKTtcbiAgICBjb25zdCAkaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5cbiAgICAkYnV0dG9uc01lbnUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkYnRuID0gJCh0aGlzKTtcblxuICAgICAgY29uc3Qgc2Nyb2xsSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoJG1lbnUuaGFzQ2xhc3MoXCJpcy1zaG93XCIpKSB7XG5cbiAgICAgICAgICBpZigkbWVudS5zY3JvbGxUb3AoKSA+IDEpIHtcbiAgICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICRidG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vINC10YHQu9C4INC+0YLQutGA0YvRgtC+INC80LXQvdGOXG4gICAgICAgIGlmICgkbWVudS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAgIGNvbnN0IHBvcyA9IHBhcnNlSW50KCQoXCJib2R5XCIpLmF0dHIoXCJkYXRhLXNjcm9sbFwiKSwgMTApO1xuICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuXG4gICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJpcy1tZW51LW9wZW5cIikucmVtb3ZlQXR0cihcImRhdGEtc2Nyb2xsXCIpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3MpO1xuXG4gICAgICAgICAgLy8g0LXRgdC70Lgg0LfQsNC60YDRi9GC0L4g0LzQtdC90Y5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICRtZW51LmFkZENsYXNzKFwiaXMtc2hvd1wiKTtcblxuICAgICAgICAgIGlmKCRtZW51LnNjcm9sbFRvcCgpID4gMSkge1xuICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRidG4uYWRkQ2xhc3MoXCJpcy1zaG93XCIpO1xuXG4gICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZVBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaXMtbWVudS1vcGVuXCIpLmF0dHIoXCJkYXRhLXNjcm9sbFwiLCBwYWdlUG9zKTtcbiAgICAgICAgICB9LCA0NTApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJChcIi5tZW51XCIpLm9uKFwic2Nyb2xsXCIsIHNjcm9sbEhlYWRlcik7XG4gICAgfSk7XG5cbiAgICAkYnV0dG9uQ2xvc2UuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcG9zID0gcGFyc2VJbnQoJChcImJvZHlcIikuYXR0cihcImRhdGEtc2Nyb2xsXCIpLCAxMCk7XG4gICAgICAkbWVudS5yZW1vdmVDbGFzcyhcImlzLXNob3dcIik7XG4gICAgICAkYnV0dG9uc01lbnUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW1lbnUtb3BlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zY3JvbGxcIik7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zKTtcbiAgICB9KTtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVPcGVuO1xuIiwiY29uc3QgaGVhZGVyU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgY29uc3QgJGhlYWRlciA9ICQoXCIuaGVhZGVyXCIpO1xuXG4gIGlmICgkaGVhZGVyKSB7XG4gICAgXG4gICAgLy8gSGVhZGVyINC80LXQvdGP0LXRgiDRhtCy0LXRgtCwINC/0YDQuCDRgdC60YDQvtC70LvQtS4g0J7QvSDRg9C20LUgZml4ZWQg0LjQt9C90LDRh9Cw0LvRjNC90L5cbiAgICBjb25zdCBzY3JvbGxIZWFkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRyb1RvcCA9IG1haW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICBpZiAoaW50cm9Ub3AgPCAtMSkge1xuICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsXCIpO1xuXG4gICAgICB9IGVsc2UgaWYgKCRoZWFkZXIuaGFzQ2xhc3MoXCJzY3JvbGxcIikgJiYgaW50cm9Ub3AgPiAtMSkge1xuICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgICAkKGRvY3VtZW50KS5vbihcInJlYWR5XCIsIHNjcm9sbEhlYWRlcik7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyU2Nyb2xsO1xuIiwiY29uc3Qgc2xpZGVycyA9ICgpID0+IHtcbiAgY29uc3QgU3dpcGVyID0gd2luZG93LlN3aXBlcjtcblxuICAvLyBTbGlkZXIgcHJvbW9cbiAgY29uc3QgcHJvbW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXByb21vLXNsaWRlclwiKTtcblxuICBpZiAocHJvbW8pIHtcbiAgICBjb25zdCBteVN3aXBlciA9IG5ldyBTd2lwZXIoXCIuanMtcHJvbW8tc2xpZGVyLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBzcGVlZDogNjAwLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLmpzLXByb21vLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuanMtcHJvbW8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0aXRsZXMgPSBwcm9tby5xdWVyeVNlbGVjdG9yQWxsKFwiaDFcIik7XG5cbiAgICBmdW5jdGlvbiBzbGlkZUNoYW5nZUhhbmRsZXIodGltZXIpIHtcbiAgICAgIGxldCBhY3RpdmVTbGlkZSA9IHByb21vLnF1ZXJ5U2VsZWN0b3IoXCIuc3dpcGVyLXNsaWRlLWFjdGl2ZVwiKTtcblxuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgdGl0bGUgPSBhY3RpdmVTbGlkZS5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSwgdGltZXIpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHNsaWRlQ2hhbmdlSGFuZGxlcigzMDApO1xuXG4gICAgbXlTd2lwZXIub24oJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdGl0bGVzLmZvckVhY2goZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgaWYgKHRpdGxlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2xpZGVDaGFuZ2VIYW5kbGVyKDUwMCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTbGlkZXIgcG9wdWxhclxuICBjb25zdCBwb3B1bGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1wb3B1bGFyLXNsaWRlclwiKTtcblxuICBpZiAocG9wdWxhcikge1xuICAgIGNvbnN0IG15U3dpcGVyID0gbmV3IFN3aXBlcihcIi5qcy1wb3B1bGFyLXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lclwiLCB7XG4gICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICBzcGVlZDogNDAwLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5qcy1wb3B1bGFyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgNDcwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgICAgICB9LFxuICAgICAgICA3MDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDk5MToge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2xpZGVycztcbiIsImNvbnN0IG51bWJlciA9ICgpID0+IHtcbiAgLy/QoNCw0LfRgNC10YjQsNC10YIg0LLQstC+0LQg0YLQvtC70YzQutC+INGG0LjRhNGAINCyIGlucHV0XG4gIGNvbnN0ICRudW1iZXJzID0gJChcIi5qcy1udW1iZXJcIik7XG4gIGlmICghJG51bWJlcnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkbnVtYmVycy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICR0aGlzcyA9ICQodGhpcyk7XG5cbiAgICAkdGhpc3MubWFzaygnMCMnKTtcbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlcjtcbiIsImNvbnN0IGJ0blVwID0gKCkgPT4ge1xuXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAyMDApIHtcbiAgICAgICAgaWYgKCQoJyN1cGJ1dHRvbicpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICQoJyN1cGJ1dHRvbicpLmNzcyh7b3BhY2l0eSA6IDAuOX0pLmZhZGVJbignZmFzdCcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHsgJCgnI3VwYnV0dG9uJykuc3RvcCh0cnVlLCBmYWxzZSkuZmFkZU91dCgnZmFzdCcpOyB9XG4gIH0pO1xuXG4gICQoJyN1cGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3AgOiAwfSwgMzAwKTtcbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ0blVwO1xuIiwiY29uc3QgZ29vZFF1YW50aXR5ID0gKCkgPT4ge1xuICAvLyDQo9Cy0LXQu9C40YfQtdC90LjQtSDQuCDRg9C80LXQvdGM0YjQtdC90LjQtSDRgtC+0LLQsNGA0L7QslxuICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1xdWFudGl0eVwiKTtcbiAgaWYgKGNvbnRhaW5lcnMubGVuZ3RoIDwgMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IGJ0bkluY3JlYXNlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtaW5jcmVhc2VcIik7XG4gICAgY29uc3QgYnRuRGVjcmVhc2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5qcy1kZWNyZWFzZVwiKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGJ0bkluY3JlYXNlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgbmV3VmFsdWUgPSArK3ZhbHVlO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPiAxKSB7XG4gICAgICAgIGJ0bkRlY3JlYXNlLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH07XG5cbiAgICBjb25zdCBidG5EZWNyZWFzZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgbGV0IG5ld1ZhbHVlID0gLS12YWx1ZTtcblxuICAgICAgaWYgKG5ld1ZhbHVlIDw9IDEpIHtcbiAgICAgICAgbmV3VmFsdWUgPSAxO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IDE7XG4gICAgICAgIGJ0bkRlY3JlYXNlLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfTtcblxuICAgIGJ0bkluY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidG5JbmNyZWFzZUhhbmRsZXIpO1xuICAgIGJ0bkRlY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidG5EZWNyZWFzZUhhbmRsZXIpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYnRuSW5jcmVhc2VIYW5kbGVyKCk7XG4gICAgICBidG5EZWNyZWFzZUhhbmRsZXIoKTtcbiAgICB9KVxuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ29vZFF1YW50aXR5O1xuIiwiY29uc3QgZm9vdGVyRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgJGZvb3RlckZvcm0gPSAkKFwiLmZvb3RlciBmb3JtXCIpO1xuICBpZiAoISRmb290ZXJGb3JtKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5wdXRzID0gJGZvb3RlckZvcm0uZmluZChcImlucHV0XCIpO1xuXG4gIGlucHV0cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcblxuICAgIGlucHV0Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGlucHV0LnZhbCgpICE9PSBgYCkge1xuICAgICAgICBpbnB1dC5hZGRDbGFzcyhcImhhcy12YWx1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKFwiaGFzLXZhbHVlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyRm9ybTtcbiIsImNvbnN0IGRlc2tNZW51ID0gKCkgPT4ge1xuICAvLyDQntGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUgaGVhZGVyLW1lbnUg0YEg0L/QvtC80L7RidGM0Y4gZmFkZVxuICBjb25zdCAkaGVhZGVyTWVudSA9ICQoXCIuanMtZGVzay1tZW51XCIpO1xuXG4gIGlmKCEkaGVhZGVyTWVudSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0ICRidG4gPSAkKFwiLmpzLWRlc2stbWVudS1idG5cIik7XG5cbiAgY29uc3Qga2V5Q29kZSA9IHtcbiAgICBFU0M6IDI3LFxuICB9O1xuXG4gIGNvbnN0IG9wZW4gPSAoKSA9PiB7XG4gICAgJGhlYWRlck1lbnUuc2xpZGVEb3duKDMwMCk7XG4gICAgJGhlYWRlck1lbnUuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICAgICRidG4uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gIH07XG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgJGhlYWRlck1lbnUuc2xpZGVVcCgzMDApO1xuICAgICRoZWFkZXJNZW51LnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICAkYnRuLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRidG4uYmx1cigpO1xuICB9O1xuXG4gICRidG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKCRoZWFkZXJNZW51Lmhhc0NsYXNzKFwic2hvd1wiKSkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzaXplVG9wQ29vcmRpbmF0ZSgpO1xuICAgICAgb3BlbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQuCDRg9GB0YLQsNC90L7QstC60LAg0LrQvtC+0YDQtNC40L3QsNGC0YsgdG9wINC00LvRjyBoZWFkZXItbWVudVxuICBjb25zdCByZXNpemVUb3BDb29yZGluYXRlID0gKCkgPT4ge1xuICAgIGxldCBoZWlnaHQgPSAkKFwiLmhlYWRlclwiKS5vdXRlckhlaWdodCgpO1xuICAgIGxldCBhID0gaGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgJGhlYWRlck1lbnUuY3NzKFwidG9wXCIsIGEpO1xuICB9O1xuICByZXNpemVUb3BDb29yZGluYXRlKCk7XG5cbiAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIHJlc2l6ZVRvcENvb3JkaW5hdGUpO1xuICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRoZWFkZXJNZW51Lmhhc0NsYXNzKFwic2hvd1wiKSkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vINCX0LDQutGA0YvRgtC40LUgaGVhZGVyLW1lbnUg0L/RgNC4INC90LDQttCw0YLQuNC4INCy0L3QtSDQvNC10L3RjlxuICAkKGRvY3VtZW50KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoXCIuanMtZGVzay1tZW51XCIpID09PSBudWxsICYmIGV2dC50YXJnZXQuY2xvc2VzdChcIi5qcy1kZXNrLW1lbnUtYnRuXCIpID09PSBudWxsKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8g0JfQsNC60YDRi9GC0LjQtSBoZWFkZXItbWVudSDQv9C+IEVTQ1xuICAkKGRvY3VtZW50KS5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSBrZXlDb2RlLkVTQyAmJiAkaGVhZGVyTWVudS5oYXNDbGFzcyhcInNob3dcIikpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBsaW5rcyA9ICRoZWFkZXJNZW51LmZpbmQoXCIuanMtZGVzay1tZW51LWxpbmtzIGFcIik7XG4gIGNvbnN0IGNvbnRlbnRzID0gJGhlYWRlck1lbnUuZmluZChcIi5kZXNrLW1lbnVfX2NvbnRlbnRcIik7XG5cbiAgZnVuY3Rpb24gZGVza01lbnVDb250ZW50Q2hhbmdlKGxpbmspIHtcbiAgICBsaW5rLmFkZENsYXNzKFwiaG92ZXJcIik7XG5cbiAgICBjb25zdCBpZCA9IGxpbmsuYXR0cihcImRhdGEtaWRcIik7XG5cbiAgICByZXNldENvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudCA9ICRoZWFkZXJNZW51LmZpbmQoYC5kZXNrLW1lbnVfX2NvbnRlbnRbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gICAgY29udGVudC5hZGRDbGFzcyhcInNob3dcIik7XG4gIH1cbiAgZGVza01lbnVDb250ZW50Q2hhbmdlKCQobGlua3NbMF0pKTtcblxuICBmdW5jdGlvbiByZXNldEhvdmVyKCkge1xuICAgIGxpbmtzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgbGluayA9ICQodGhpcyk7XG4gICAgICBsaW5rLnJlbW92ZUNsYXNzKFwiaG92ZXJcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENvbnRlbnQoKSB7XG4gICAgY29udGVudHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCBpdGVtID0gJCh0aGlzKTtcbiAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgIH0pO1xuICB9XG5cbiAgbGlua3MuZWFjaChmdW5jdGlvbigpIHtcbiAgICBsZXQgbGluayA9ICQodGhpcyk7XG5cbiAgICBsaW5rLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBsaW5rLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNldEhvdmVyKCk7XG4gICAgICBkZXNrTWVudUNvbnRlbnRDaGFuZ2UobGluayk7XG4gICAgfSk7XG5cbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlc2tNZW51O1xuIiwiaW1wb3J0IG5vZGVMaXN0Rm9yRWFjaCBmcm9tICcuL25vZGUtbGlzdC1mb3ItZWFjaCc7XG5pbXBvcnQgdGVsIGZyb20gJy4vdGVsJztcbmltcG9ydCBhbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb24nO1xuaW1wb3J0IG1lbnVPcGVuIGZyb20gJy4vbWVudS1vcGVuJztcbmltcG9ydCBoZWFkZXJTY3JvbGwgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHNsaWRlcnMgZnJvbSAnLi9zbGlkZXJzJztcbmltcG9ydCBudW1iZXIgZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IGJ0blVwIGZyb20gJy4vYnRuLXVwJztcbmltcG9ydCBnb29kUXVhbnRpdHkgZnJvbSAnLi9nb29kLXF1YW50aXR5JztcbmltcG9ydCBmb290ZXJGb3JtIGZyb20gJy4vZm9vdGVyLWZvcm0nO1xuaW1wb3J0IGRlc2tNZW51IGZyb20gJy4vZGVzay1tZW51JztcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgbm9kZUxpc3RGb3JFYWNoKCk7XG4gICAgdGVsKCk7XG4gICAgYW5pbWF0aW9uKCk7XG4gICAgbWVudU9wZW4oKTtcbiAgICBoZWFkZXJTY3JvbGwoKTtcbiAgICBzbGlkZXJzKCk7XG4gICAgbnVtYmVyKCk7XG4gICAgYnRuVXAoKTtcbiAgICBnb29kUXVhbnRpdHkoKTtcbiAgICBmb290ZXJGb3JtKCk7XG4gICAgZGVza01lbnUoKTtcbiAgfVxufVxuXG5cbkFwcC5pbml0KCk7XG53aW5kb3cuQXBwID0gQXBwO1xuIl0sIm5hbWVzIjpbIm5vZGVMaXN0Rm9yRWFjaCIsIndpbmRvdyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwidGhpc0FyZyIsImkiLCJsZW5ndGgiLCJjYWxsIiwidGVsIiwiZm9ybUJsb2NrcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm1CbG9jayIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInBob25lTWFzayIsIklNYXNrIiwibWFzayIsImFuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJXT1ciLCJpbml0IiwiY2FyZHMiLCIkIiwiZWFjaCIsImNhcmQiLCJjYXJkU2lkZSIsImZpbmQiLCJvbiIsIm1lbnVPcGVuIiwiJGJ1dHRvbnNNZW51IiwiJG1lbnUiLCIkYnV0dG9uQ2xvc2UiLCIkaGVhZGVyIiwiJGJ0biIsInNjcm9sbEhlYWRlciIsImhhc0NsYXNzIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwicG9zIiwicGFyc2VJbnQiLCJhdHRyIiwicmVtb3ZlQXR0ciIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsInBhZ2VQb3MiLCJoZWFkZXJTY3JvbGwiLCJtYWluIiwiaW50cm9Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzbGlkZXJzIiwiU3dpcGVyIiwicHJvbW8iLCJteVN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzcGVlZCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ0aXRsZXMiLCJzbGlkZUNoYW5nZUhhbmRsZXIiLCJ0aW1lciIsImFjdGl2ZVNsaWRlIiwidGl0bGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInBvcHVsYXIiLCJicmVha3BvaW50cyIsIm51bWJlciIsIiRudW1iZXJzIiwiJHRoaXNzIiwiYnRuVXAiLCJzY3JvbGwiLCJpcyIsImNzcyIsIm9wYWNpdHkiLCJmYWRlSW4iLCJzdG9wIiwiZmFkZU91dCIsImFuaW1hdGUiLCJnb29kUXVhbnRpdHkiLCJjb250YWluZXJzIiwiY29udGFpbmVyIiwiYnRuSW5jcmVhc2UiLCJidG5EZWNyZWFzZSIsInZhbHVlIiwiYnRuSW5jcmVhc2VIYW5kbGVyIiwibmV3VmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJidG5EZWNyZWFzZUhhbmRsZXIiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9vdGVyRm9ybSIsIiRmb290ZXJGb3JtIiwiaW5wdXRzIiwidmFsIiwiZGVza01lbnUiLCIkaGVhZGVyTWVudSIsImtleUNvZGUiLCJFU0MiLCJvcGVuIiwic2xpZGVEb3duIiwiY2xvc2UiLCJzbGlkZVVwIiwiYmx1ciIsInJlc2l6ZVRvcENvb3JkaW5hdGUiLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsImEiLCJldnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGlua3MiLCJjb250ZW50cyIsImRlc2tNZW51Q29udGVudENoYW5nZSIsImxpbmsiLCJpZCIsInJlc2V0Q29udGVudCIsImNvbnRlbnQiLCJyZXNldEhvdmVyIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0VBQzVCLE1B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
