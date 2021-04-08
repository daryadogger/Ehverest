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
        speed: 700,
        navigation: {
          nextEl: ".js-promo-slider .swiper-button-next",
          prevEl: ".js-promo-slider .swiper-button-prev"
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
      }
    }]);

    return App;
  }();

  App.init();
  window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy90ZWwuanMiLCJzcmMvanMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21lbnUtb3Blbi5qcyIsInNyYy9qcy9oZWFkZXIuanMiLCJzcmMvanMvc2xpZGVycy5qcyIsInNyYy9qcy9udW1iZXIuanMiLCJzcmMvanMvYnRuLXVwLmpzIiwic3JjL2pzL2dvb2QtcXVhbnRpdHkuanMiLCJzcmMvanMvZm9vdGVyLWZvcm0uanMiLCJzcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlTGlzdEZvckVhY2ggPSAoKSA9PiB7XG4gIGlmICgnTm9kZUxpc3QnIGluIHdpbmRvdyAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTGlzdEZvckVhY2g7XG4iLCJjb25zdCB0ZWwgPSAoKSA9PiB7XG4gIC8vIE1hc2sgZm9yIHRlbFxuICBjb25zdCBmb3JtQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHNldFwiKTtcblxuICBpZiAoZm9ybUJsb2Nrcy5sZW5ndGgpIHtcblxuICAgIGZvcm1CbG9ja3MuZm9yRWFjaChmdW5jdGlvbihmb3JtQmxvY2spIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPXRlbF1cIik7XG5cbiAgICAgIGlmKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBob25lTWFzayA9IElNYXNrKCBpbnB1dCwge1xuICAgICAgICAgIG1hc2s6IFwiK3s3fSAwMDAgMDAwLTAwLTAwXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbDtcbiIsImNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgLy93b3dcbiAgY29uc3QgYW5pbWF0aW9ucyA9IG5ldyB3aW5kb3cuV09XKCkuaW5pdCgpO1xuXG4gIGNvbnN0IGNhcmRzID0gJChcIi5jYXJkLS1nb29kXCIpO1xuXG4gIGlmIChjYXJkcykge1xuICAgIGNhcmRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjYXJkID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNhcmRTaWRlID0gY2FyZC5maW5kKFwiLmNhcmRfX3NpZGVcIik7XG5cbiAgICAgIGNhcmQub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICB9KTtcblxuICAgICAgY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGlvbjtcbiIsImNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xuICAvLyDQntGC0LrRgNGL0YLQuNC1INC80L7QsSDQvNC10L3RjlxuICBjb25zdCAkYnV0dG9uc01lbnUgPSAkKFwiLmpzLW9wZW4tbWVudVwiKTtcblxuICBpZiAoJGJ1dHRvbnNNZW51Lmxlbmd0aCkge1xuICAgIGNvbnN0ICRtZW51ID0gJChcIi5tZW51XCIpO1xuICAgIGNvbnN0ICRidXR0b25DbG9zZSA9ICQoXCIuanMtYnRuLWNsb3NlXCIpO1xuICAgIGNvbnN0ICRoZWFkZXIgPSAkKFwiLmhlYWRlclwiKTtcblxuICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuXG4gICAgICBjb25zdCBzY3JvbGxIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICgkbWVudS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAgIGlmKCRtZW51LnNjcm9sbFRvcCgpID4gMSkge1xuICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g0LXRgdC70Lgg0L7RgtC60YDRi9GC0L4g0LzQtdC90Y5cbiAgICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKFwiaXMtc2hvd1wiKSkge1xuXG4gICAgICAgICAgY29uc3QgcG9zID0gcGFyc2VJbnQoJChcImJvZHlcIikuYXR0cihcImRhdGEtc2Nyb2xsXCIpLCAxMCk7XG4gICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW1lbnUtb3BlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zY3JvbGxcIik7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBvcyk7XG5cbiAgICAgICAgICAvLyDQtdGB0LvQuCDQt9Cw0LrRgNGL0YLQviDQvNC10L3RjlxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoXCJpcy1zaG93XCIpO1xuXG4gICAgICAgICAgaWYoJG1lbnUuc2Nyb2xsVG9wKCkgPiAxKSB7XG4gICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcyhcImlzLXNob3dcIik7XG5cbiAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1tZW51LW9wZW5cIikuYXR0cihcImRhdGEtc2Nyb2xsXCIsIHBhZ2VQb3MpO1xuICAgICAgICAgIH0sIDQ1MCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKFwiLm1lbnVcIikub24oXCJzY3JvbGxcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgICB9KTtcblxuICAgICRidXR0b25DbG9zZS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwb3MgPSBwYXJzZUludCgkKFwiYm9keVwiKS5hdHRyKFwiZGF0YS1zY3JvbGxcIiksIDEwKTtcbiAgICAgICRtZW51LnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJGJ0biA9ICQodGhpcyk7XG4gICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtbWVudS1vcGVuXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXNjcm9sbFwiKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3MpO1xuICAgIH0pO1xuXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudU9wZW47XG4iLCJjb25zdCBoZWFkZXJTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCAkaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5cbiAgaWYgKCRoZWFkZXIpIHtcblxuICAgIC8vIEhlYWRlciDQvNC10L3Rj9C10YIg0YbQstC10YLQsCDQv9GA0Lgg0YHQutGA0L7Qu9C70LUuINCe0L0g0YPQttC1IGZpeGVkINC40LfQvdCw0YfQsNC70YzQvdC+XG4gICAgY29uc3Qgc2Nyb2xsSGVhZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW50cm9Ub3AgPSBtYWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgaWYgKGludHJvVG9wIDwgLTEpIHtcbiAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcblxuICAgICAgfSBlbHNlIGlmICgkaGVhZGVyLmhhc0NsYXNzKFwic2Nyb2xsXCIpICYmIGludHJvVG9wID4gLTEpIHtcbiAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIHNjcm9sbEhlYWRlcik7XG4gICAgJChkb2N1bWVudCkub24oXCJyZWFkeVwiLCBzY3JvbGxIZWFkZXIpO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlclNjcm9sbDtcbiIsImNvbnN0IHNsaWRlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IFN3aXBlciA9IHdpbmRvdy5Td2lwZXI7XG5cbiAgLy8gU2xpZGVyIHByb21vXG4gIGNvbnN0IHByb21vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1wcm9tby1zbGlkZXJcIik7XG5cbiAgaWYgKHByb21vKSB7XG4gICAgY29uc3QgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLXByb21vLXNsaWRlci5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5qcy1wcm9tby1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmpzLXByb21vLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2xpZGVyIHBvcHVsYXJcbiAgY29uc3QgcG9wdWxhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcG9wdWxhci1zbGlkZXJcIik7XG5cbiAgaWYgKHBvcHVsYXIpIHtcbiAgICBjb25zdCBteVN3aXBlciA9IG5ldyBTd2lwZXIoXCIuanMtcG9wdWxhci1zbGlkZXIgLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgc3BlZWQ6IDQwMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5qcy1wb3B1bGFyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuanMtcG9wdWxhci1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDQ3MDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgfSxcbiAgICAgICAgNzAwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgICAgICB9LFxuICAgICAgICA5OTE6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogOCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlcnM7XG4iLCJjb25zdCBudW1iZXIgPSAoKSA9PiB7XG4gIC8v0KDQsNC30YDQtdGI0LDQtdGCINCy0LLQvtC0INGC0L7Qu9GM0LrQviDRhtC40YTRgCDQsiBpbnB1dFxuICBjb25zdCAkbnVtYmVycyA9ICQoXCIuanMtbnVtYmVyXCIpO1xuICBpZiAoISRudW1iZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJG51bWJlcnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkdGhpc3MgPSAkKHRoaXMpO1xuXG4gICAgJHRoaXNzLm1hc2soJzAjJyk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXI7XG4iLCJjb25zdCBidG5VcCA9ICgpID0+IHtcblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMjAwKSB7XG4gICAgICAgIGlmICgkKCcjdXBidXR0b24nKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAkKCcjdXBidXR0b24nKS5jc3Moe29wYWNpdHkgOiAwLjl9KS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7ICQoJyN1cGJ1dHRvbicpLnN0b3AodHJ1ZSwgZmFsc2UpLmZhZGVPdXQoJ2Zhc3QnKTsgfVxuICB9KTtcblxuICAkKCcjdXBidXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wIDogMH0sIDMwMCk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidG5VcDtcbiIsImNvbnN0IGdvb2RRdWFudGl0eSA9ICgpID0+IHtcbiAgLy8g0KPQstC10LvQuNGH0LXQvdC40LUg0Lgg0YPQvNC10L3RjNGI0LXQvdC40LUg0YLQvtCy0LDRgNC+0LJcbiAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcXVhbnRpdHlcIik7XG4gIGlmIChjb250YWluZXJzLmxlbmd0aCA8IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBidG5JbmNyZWFzZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmpzLWluY3JlYXNlXCIpO1xuICAgIGNvbnN0IGJ0bkRlY3JlYXNlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZGVjcmVhc2VcIik7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBidG5JbmNyZWFzZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgbGV0IG5ld1ZhbHVlID0gKyt2YWx1ZTtcblxuICAgICAgaWYgKG5ld1ZhbHVlID4gMSkge1xuICAgICAgICBidG5EZWNyZWFzZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuRGVjcmVhc2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9IC0tdmFsdWU7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA8PSAxKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gMTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAxO1xuICAgICAgICBidG5EZWNyZWFzZS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH07XG5cbiAgICBidG5JbmNyZWFzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnRuSW5jcmVhc2VIYW5kbGVyKTtcbiAgICBidG5EZWNyZWFzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnRuRGVjcmVhc2VIYW5kbGVyKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ0bkluY3JlYXNlSGFuZGxlcigpO1xuICAgICAgYnRuRGVjcmVhc2VIYW5kbGVyKCk7XG4gICAgfSlcbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdvb2RRdWFudGl0eTtcbiIsImNvbnN0IGZvb3RlckZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0ICRmb290ZXJGb3JtID0gJChcIi5mb290ZXIgZm9ybVwiKTtcbiAgaWYgKCEkZm9vdGVyRm9ybSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGlucHV0cyA9ICRmb290ZXJGb3JtLmZpbmQoXCJpbnB1dFwiKTtcblxuICBpbnB1dHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XG5cbiAgICBpbnB1dC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChpbnB1dC52YWwoKSAhPT0gYGApIHtcbiAgICAgICAgaW5wdXQuYWRkQ2xhc3MoXCJoYXMtdmFsdWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcyhcImhhcy12YWx1ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlckZvcm07XG4iLCJpbXBvcnQgbm9kZUxpc3RGb3JFYWNoIGZyb20gJy4vbm9kZS1saXN0LWZvci1lYWNoJztcbmltcG9ydCB0ZWwgZnJvbSAnLi90ZWwnO1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgbWVudU9wZW4gZnJvbSAnLi9tZW51LW9wZW4nO1xuaW1wb3J0IGhlYWRlclNjcm9sbCBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgc2xpZGVycyBmcm9tICcuL3NsaWRlcnMnO1xuaW1wb3J0IG51bWJlciBmcm9tICcuL251bWJlcic7XG5pbXBvcnQgYnRuVXAgZnJvbSAnLi9idG4tdXAnO1xuaW1wb3J0IGdvb2RRdWFudGl0eSBmcm9tICcuL2dvb2QtcXVhbnRpdHknO1xuaW1wb3J0IGZvb3RlckZvcm0gZnJvbSAnLi9mb290ZXItZm9ybSc7XG5cbmNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIG5vZGVMaXN0Rm9yRWFjaCgpO1xuICAgIHRlbCgpO1xuICAgIGFuaW1hdGlvbigpO1xuICAgIG1lbnVPcGVuKCk7XG4gICAgaGVhZGVyU2Nyb2xsKCk7XG4gICAgc2xpZGVycygpO1xuICAgIG51bWJlcigpO1xuICAgIGJ0blVwKCk7XG4gICAgZ29vZFF1YW50aXR5KCk7XG4gICAgZm9vdGVyRm9ybSgpO1xuICB9XG59XG5cblxuQXBwLmluaXQoKTtcbndpbmRvdy5BcHAgPSBBcHA7XG4iXSwibmFtZXMiOlsibm9kZUxpc3RGb3JFYWNoIiwid2luZG93IiwiTm9kZUxpc3QiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwiaSIsImxlbmd0aCIsImNhbGwiLCJ0ZWwiLCJmb3JtQmxvY2tzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUJsb2NrIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwicGhvbmVNYXNrIiwiSU1hc2siLCJtYXNrIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9ucyIsIldPVyIsImluaXQiLCJjYXJkcyIsIiQiLCJlYWNoIiwiY2FyZCIsImNhcmRTaWRlIiwiZmluZCIsIm9uIiwibWVudU9wZW4iLCIkYnV0dG9uc01lbnUiLCIkbWVudSIsIiRidXR0b25DbG9zZSIsIiRoZWFkZXIiLCIkYnRuIiwic2Nyb2xsSGVhZGVyIiwiaGFzQ2xhc3MiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2xpY2siLCJwb3MiLCJwYXJzZUludCIsImF0dHIiLCJyZW1vdmVBdHRyIiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwicGFnZVBvcyIsImhlYWRlclNjcm9sbCIsIm1haW4iLCJpbnRyb1RvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNsaWRlcnMiLCJTd2lwZXIiLCJwcm9tbyIsIm15U3dpcGVyIiwiZGlyZWN0aW9uIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNwZWVkIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBvcHVsYXIiLCJicmVha3BvaW50cyIsIm51bWJlciIsIiRudW1iZXJzIiwiJHRoaXNzIiwiYnRuVXAiLCJzY3JvbGwiLCJpcyIsImNzcyIsIm9wYWNpdHkiLCJmYWRlSW4iLCJzdG9wIiwiZmFkZU91dCIsImFuaW1hdGUiLCJnb29kUXVhbnRpdHkiLCJjb250YWluZXJzIiwiY29udGFpbmVyIiwiYnRuSW5jcmVhc2UiLCJidG5EZWNyZWFzZSIsInZhbHVlIiwiYnRuSW5jcmVhc2VIYW5kbGVyIiwibmV3VmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJidG5EZWNyZWFzZUhhbmRsZXIiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9vdGVyRm9ybSIsIiRmb290ZXJGb3JtIiwiaW5wdXRzIiwidmFsIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0VBQzVCLE1BQUksY0FBY0MsTUFBZCxJQUF3QixDQUFDQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLE9BQWhELEVBQXlEO0VBQ3ZERixJQUFBQSxRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLE9BQW5CLEdBQTZCLFVBQVVDLFFBQVYsRUFBb0JDLE9BQXBCLEVBQTZCO0VBQzFEQSxNQUFBQSxP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
