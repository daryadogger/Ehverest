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
        if ($(".header").hasClass("scroll")) {
          $('html, body').stop().animate({
            scrollTop: 0
          }, 300);
        }

        open();
      }
    }); // Определение и установка координаты top для header-menu

    var resizeTopCoordinate = function resizeTopCoordinate() {
      var height = $(".header").outerHeight();
      var a = height + "px";
      $headerMenu.css("top", a);
    };

    resizeTopCoordinate();
    $(window).on("resize", resizeTopCoordinate); // Закрытие header-menu при нажатии вне меню

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy90ZWwuanMiLCJzcmMvanMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21lbnUtb3Blbi5qcyIsInNyYy9qcy9oZWFkZXIuanMiLCJzcmMvanMvc2xpZGVycy5qcyIsInNyYy9qcy9udW1iZXIuanMiLCJzcmMvanMvYnRuLXVwLmpzIiwic3JjL2pzL2dvb2QtcXVhbnRpdHkuanMiLCJzcmMvanMvZm9vdGVyLWZvcm0uanMiLCJzcmMvanMvZGVzay1tZW51LmpzIiwic3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZUxpc3RGb3JFYWNoID0gKCkgPT4ge1xuICBpZiAoJ05vZGVMaXN0JyBpbiB3aW5kb3cgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICB0aGlzQXJnID0gdGhpc0FyZyB8fCB3aW5kb3c7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZUxpc3RGb3JFYWNoO1xuIiwiY29uc3QgdGVsID0gKCkgPT4ge1xuICAvLyBNYXNrIGZvciB0ZWxcbiAgY29uc3QgZm9ybUJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzZXRcIik7XG5cbiAgaWYgKGZvcm1CbG9ja3MubGVuZ3RoKSB7XG5cbiAgICBmb3JtQmxvY2tzLmZvckVhY2goZnVuY3Rpb24oZm9ybUJsb2NrKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGZvcm1CbG9jay5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT10ZWxdXCIpO1xuXG4gICAgICBpZihpbnB1dCkge1xuICAgICAgICBjb25zdCBwaG9uZU1hc2sgPSBJTWFzayggaW5wdXQsIHtcbiAgICAgICAgICBtYXNrOiBcIit7N30gMDAwIDAwMC0wMC0wMFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZWw7XG4iLCJjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gIC8vd293XG4gIGNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgd2luZG93LldPVygpLmluaXQoKTtcblxuICBjb25zdCBjYXJkcyA9ICQoXCIuY2FyZC0tZ29vZFwiKTtcblxuICBpZiAoY2FyZHMpIHtcbiAgICBjYXJkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2FyZCA9ICQodGhpcyk7XG4gICAgICBjb25zdCBjYXJkU2lkZSA9IGNhcmQuZmluZChcIi5jYXJkX19zaWRlXCIpO1xuXG4gICAgICBjYXJkLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgfSk7XG5cbiAgICAgIGNhcmQub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltYXRpb247XG4iLCJjb25zdCBtZW51T3BlbiA9ICgpID0+IHtcbiAgLy8g0J7RgtC60YDRi9GC0LjQtSDQvNC+0LEg0LzQtdC90Y5cbiAgY29uc3QgJGJ1dHRvbnNNZW51ID0gJChcIi5qcy1vcGVuLW1lbnVcIik7XG5cbiAgaWYgKCRidXR0b25zTWVudS5sZW5ndGgpIHtcbiAgICBjb25zdCAkbWVudSA9ICQoXCIubWVudVwiKTtcbiAgICBjb25zdCAkYnV0dG9uQ2xvc2UgPSAkKFwiLmpzLWJ0bi1jbG9zZVwiKTtcbiAgICBjb25zdCAkaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5cbiAgICAkYnV0dG9uc01lbnUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkYnRuID0gJCh0aGlzKTtcblxuICAgICAgY29uc3Qgc2Nyb2xsSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoJG1lbnUuaGFzQ2xhc3MoXCJpcy1zaG93XCIpKSB7XG5cbiAgICAgICAgICBpZigkbWVudS5zY3JvbGxUb3AoKSA+IDEpIHtcbiAgICAgICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICRidG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vINC10YHQu9C4INC+0YLQutGA0YvRgtC+INC80LXQvdGOXG4gICAgICAgIGlmICgkbWVudS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAgIGNvbnN0IHBvcyA9IHBhcnNlSW50KCQoXCJib2R5XCIpLmF0dHIoXCJkYXRhLXNjcm9sbFwiKSwgMTApO1xuICAgICAgICAgICRtZW51LnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuXG4gICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJpcy1tZW51LW9wZW5cIikucmVtb3ZlQXR0cihcImRhdGEtc2Nyb2xsXCIpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3MpO1xuXG4gICAgICAgICAgLy8g0LXRgdC70Lgg0LfQsNC60YDRi9GC0L4g0LzQtdC90Y5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICRtZW51LmFkZENsYXNzKFwiaXMtc2hvd1wiKTtcblxuICAgICAgICAgIGlmKCRtZW51LnNjcm9sbFRvcCgpID4gMSkge1xuICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRidG4uYWRkQ2xhc3MoXCJpcy1zaG93XCIpO1xuXG4gICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZVBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiaXMtbWVudS1vcGVuXCIpLmF0dHIoXCJkYXRhLXNjcm9sbFwiLCBwYWdlUG9zKTtcbiAgICAgICAgICB9LCA0NTApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJChcIi5tZW51XCIpLm9uKFwic2Nyb2xsXCIsIHNjcm9sbEhlYWRlcik7XG4gICAgfSk7XG5cbiAgICAkYnV0dG9uQ2xvc2UuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcG9zID0gcGFyc2VJbnQoJChcImJvZHlcIikuYXR0cihcImRhdGEtc2Nyb2xsXCIpLCAxMCk7XG4gICAgICAkbWVudS5yZW1vdmVDbGFzcyhcImlzLXNob3dcIik7XG4gICAgICAkYnV0dG9uc01lbnUuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW1lbnUtb3BlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zY3JvbGxcIik7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcG9zKTtcbiAgICB9KTtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVPcGVuO1xuIiwiY29uc3QgaGVhZGVyU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgY29uc3QgJGhlYWRlciA9ICQoXCIuaGVhZGVyXCIpO1xuXG4gIGlmICgkaGVhZGVyKSB7XG5cbiAgICAvLyBIZWFkZXIg0LzQtdC90Y/QtdGCINGG0LLQtdGC0LAg0L/RgNC4INGB0LrRgNC+0LvQu9C1LiDQntC9INGD0LbQtSBmaXhlZCDQuNC30L3QsNGH0LDQu9GM0L3QvlxuICAgIGNvbnN0IHNjcm9sbEhlYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludHJvVG9wID0gbWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGlmIChpbnRyb1RvcCA8IC0xKSB7XG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgIH0gZWxzZSBpZiAoJGhlYWRlci5oYXNDbGFzcyhcInNjcm9sbFwiKSAmJiBpbnRyb1RvcCA+IC0xKSB7XG4gICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBzY3JvbGxIZWFkZXIpO1xuICAgICQoZG9jdW1lbnQpLm9uKFwicmVhZHlcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTY3JvbGw7XG4iLCJjb25zdCBzbGlkZXJzID0gKCkgPT4ge1xuICBjb25zdCBTd2lwZXIgPSB3aW5kb3cuU3dpcGVyO1xuXG4gIC8vIFNsaWRlciBwcm9tb1xuICBjb25zdCBwcm9tbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcHJvbW8tc2xpZGVyXCIpO1xuXG4gIGlmIChwcm9tbykge1xuICAgIGNvbnN0IG15U3dpcGVyID0gbmV3IFN3aXBlcihcIi5qcy1wcm9tby1zbGlkZXIuc3dpcGVyLWNvbnRhaW5lclwiLCB7XG4gICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuanMtcHJvbW8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5qcy1wcm9tby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNsaWRlciBwb3B1bGFyXG4gIGNvbnN0IHBvcHVsYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXBvcHVsYXItc2xpZGVyXCIpO1xuXG4gIGlmIChwb3B1bGFyKSB7XG4gICAgY29uc3QgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIHNwZWVkOiA0MDAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuanMtcG9wdWxhci1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICA0NzA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDcwMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgfSxcbiAgICAgICAgOTkxOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbGlkZXJzO1xuIiwiY29uc3QgbnVtYmVyID0gKCkgPT4ge1xuICAvL9Cg0LDQt9GA0LXRiNCw0LXRgiDQstCy0L7QtCDRgtC+0LvRjNC60L4g0YbQuNGE0YAg0LIgaW5wdXRcbiAgY29uc3QgJG51bWJlcnMgPSAkKFwiLmpzLW51bWJlclwiKTtcbiAgaWYgKCEkbnVtYmVycykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICRudW1iZXJzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHRoaXNzID0gJCh0aGlzKTtcblxuICAgICR0aGlzcy5tYXNrKCcwIycpO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyO1xuIiwiY29uc3QgYnRuVXAgPSAoKSA9PiB7XG5cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDIwMCkge1xuICAgICAgICBpZiAoJCgnI3VwYnV0dG9uJykuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgJCgnI3VwYnV0dG9uJykuY3NzKHtvcGFjaXR5IDogMC45fSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAkKCcjdXBidXR0b24nKS5zdG9wKHRydWUsIGZhbHNlKS5mYWRlT3V0KCdmYXN0Jyk7IH1cbiAgfSk7XG5cbiAgJCgnI3VwYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IDB9LCAzMDApO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnRuVXA7XG4iLCJjb25zdCBnb29kUXVhbnRpdHkgPSAoKSA9PiB7XG4gIC8vINCj0LLQtdC70LjRh9C10L3QuNC1INC4INGD0LzQtdC90YzRiNC10L3QuNC1INGC0L7QstCw0YDQvtCyXG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXF1YW50aXR5XCIpO1xuICBpZiAoY29udGFpbmVycy5sZW5ndGggPCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYnRuSW5jcmVhc2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5qcy1pbmNyZWFzZVwiKTtcbiAgICBjb25zdCBidG5EZWNyZWFzZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmpzLWRlY3JlYXNlXCIpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgYnRuSW5jcmVhc2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9ICsrdmFsdWU7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA+IDEpIHtcbiAgICAgICAgYnRuRGVjcmVhc2UucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ0bkRlY3JlYXNlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgbmV3VmFsdWUgPSAtLXZhbHVlO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPD0gMSkge1xuICAgICAgICBuZXdWYWx1ZSA9IDE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gMTtcbiAgICAgICAgYnRuRGVjcmVhc2Uuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9O1xuXG4gICAgYnRuSW5jcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkluY3JlYXNlSGFuZGxlcik7XG4gICAgYnRuRGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkRlY3JlYXNlSGFuZGxlcik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidG5JbmNyZWFzZUhhbmRsZXIoKTtcbiAgICAgIGJ0bkRlY3JlYXNlSGFuZGxlcigpO1xuICAgIH0pXG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnb29kUXVhbnRpdHk7XG4iLCJjb25zdCBmb290ZXJGb3JtID0gKCkgPT4ge1xuICBjb25zdCAkZm9vdGVyRm9ybSA9ICQoXCIuZm9vdGVyIGZvcm1cIik7XG4gIGlmICghJGZvb3RlckZvcm0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbnB1dHMgPSAkZm9vdGVyRm9ybS5maW5kKFwiaW5wdXRcIik7XG5cbiAgaW5wdXRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xuXG4gICAgaW5wdXQub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaW5wdXQudmFsKCkgIT09IGBgKSB7XG4gICAgICAgIGlucHV0LmFkZENsYXNzKFwiaGFzLXZhbHVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoXCJoYXMtdmFsdWVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJGb3JtO1xuIiwiY29uc3QgZGVza01lbnUgPSAoKSA9PiB7XG4gIC8vINCe0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSBoZWFkZXItbWVudSDRgSDQv9C+0LzQvtGJ0YzRjiBmYWRlXG4gIGNvbnN0ICRoZWFkZXJNZW51ID0gJChcIi5qcy1kZXNrLW1lbnVcIik7XG5cbiAgaWYoISRoZWFkZXJNZW51KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGJ0biA9ICQoXCIuanMtZGVzay1tZW51LWJ0blwiKTtcblxuICBjb25zdCBrZXlDb2RlID0ge1xuICAgIEVTQzogMjcsXG4gIH07XG5cbiAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAkaGVhZGVyTWVudS5zbGlkZURvd24oMzAwKTtcbiAgICAkaGVhZGVyTWVudS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgJGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAkaGVhZGVyTWVudS5zbGlkZVVwKDMwMCk7XG4gICAgJGhlYWRlck1lbnUucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ0bi5ibHVyKCk7XG4gIH07XG5cbiAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoJGhlYWRlck1lbnUuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJChcIi5oZWFkZXJcIikuaGFzQ2xhc3MoXCJzY3JvbGxcIikpIHtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3AgOiAwfSwgMzAwKTtcbiAgICAgIH1cbiAgICAgIG9wZW4oKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vINCe0L/RgNC10LTQtdC70LXQvdC40LUg0Lgg0YPRgdGC0LDQvdC+0LLQutCwINC60L7QvtGA0LTQuNC90LDRgtGLIHRvcCDQtNC70Y8gaGVhZGVyLW1lbnVcbiAgY29uc3QgcmVzaXplVG9wQ29vcmRpbmF0ZSA9ICgpID0+IHtcbiAgICBsZXQgaGVpZ2h0ID0gJChcIi5oZWFkZXJcIikub3V0ZXJIZWlnaHQoKTtcbiAgICBsZXQgYSA9IGhlaWdodCArIFwicHhcIjtcblxuICAgICRoZWFkZXJNZW51LmNzcyhcInRvcFwiLCBhKTtcbiAgfTtcbiAgcmVzaXplVG9wQ29vcmRpbmF0ZSgpO1xuXG4gICQod2luZG93KS5vbihcInJlc2l6ZVwiLCByZXNpemVUb3BDb29yZGluYXRlKTtcblxuICAvLyDQl9Cw0LrRgNGL0YLQuNC1IGhlYWRlci1tZW51INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQstC90LUg0LzQtdC90Y5cbiAgJChkb2N1bWVudCkub24oJ21vdXNldXAnLCBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LnRhcmdldC5jbG9zZXN0KFwiLmpzLWRlc2stbWVudVwiKSA9PT0gbnVsbCAmJiBldnQudGFyZ2V0LmNsb3Nlc3QoXCIuanMtZGVzay1tZW51LWJ0blwiKSA9PT0gbnVsbCkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vINCX0LDQutGA0YvRgtC40LUgaGVhZGVyLW1lbnUg0L/QviBFU0NcbiAgJChkb2N1bWVudCkub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmIChldnQua2V5Q29kZSA9PT0ga2V5Q29kZS5FU0MgJiYgJGhlYWRlck1lbnUuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbGlua3MgPSAkaGVhZGVyTWVudS5maW5kKFwiLmpzLWRlc2stbWVudS1saW5rcyBhXCIpO1xuICBjb25zdCBjb250ZW50cyA9ICRoZWFkZXJNZW51LmZpbmQoXCIuZGVzay1tZW51X19jb250ZW50XCIpO1xuXG4gIGZ1bmN0aW9uIGRlc2tNZW51Q29udGVudENoYW5nZShsaW5rKSB7XG4gICAgbGluay5hZGRDbGFzcyhcImhvdmVyXCIpO1xuXG4gICAgY29uc3QgaWQgPSBsaW5rLmF0dHIoXCJkYXRhLWlkXCIpO1xuXG4gICAgcmVzZXRDb250ZW50KCk7XG4gICAgbGV0IGNvbnRlbnQgPSAkaGVhZGVyTWVudS5maW5kKGAuZGVzay1tZW51X19jb250ZW50W2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuICAgIGNvbnRlbnQuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICB9XG4gIGRlc2tNZW51Q29udGVudENoYW5nZSgkKGxpbmtzWzBdKSk7XG5cbiAgZnVuY3Rpb24gcmVzZXRIb3ZlcigpIHtcbiAgICBsaW5rcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGxpbmsgPSAkKHRoaXMpO1xuICAgICAgbGluay5yZW1vdmVDbGFzcyhcImhvdmVyXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDb250ZW50KCkge1xuICAgIGNvbnRlbnRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgaXRlbSA9ICQodGhpcyk7XG4gICAgICBpdGVtLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpbmtzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxpbmsgPSAkKHRoaXMpO1xuXG4gICAgbGluay5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgbGluay5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzZXRIb3ZlcigpO1xuICAgICAgZGVza01lbnVDb250ZW50Q2hhbmdlKGxpbmspO1xuICAgIH0pO1xuXG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXNrTWVudTtcbiIsImltcG9ydCBub2RlTGlzdEZvckVhY2ggZnJvbSAnLi9ub2RlLWxpc3QtZm9yLWVhY2gnO1xuaW1wb3J0IHRlbCBmcm9tICcuL3RlbCc7XG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCBtZW51T3BlbiBmcm9tICcuL21lbnUtb3Blbic7XG5pbXBvcnQgaGVhZGVyU2Nyb2xsIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzbGlkZXJzIGZyb20gJy4vc2xpZGVycyc7XG5pbXBvcnQgbnVtYmVyIGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCBidG5VcCBmcm9tICcuL2J0bi11cCc7XG5pbXBvcnQgZ29vZFF1YW50aXR5IGZyb20gJy4vZ29vZC1xdWFudGl0eSc7XG5pbXBvcnQgZm9vdGVyRm9ybSBmcm9tICcuL2Zvb3Rlci1mb3JtJztcbmltcG9ydCBkZXNrTWVudSBmcm9tICcuL2Rlc2stbWVudSc7XG5cbmNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIG5vZGVMaXN0Rm9yRWFjaCgpO1xuICAgIHRlbCgpO1xuICAgIGFuaW1hdGlvbigpO1xuICAgIG1lbnVPcGVuKCk7XG4gICAgaGVhZGVyU2Nyb2xsKCk7XG4gICAgc2xpZGVycygpO1xuICAgIG51bWJlcigpO1xuICAgIGJ0blVwKCk7XG4gICAgZ29vZFF1YW50aXR5KCk7XG4gICAgZm9vdGVyRm9ybSgpO1xuICAgIGRlc2tNZW51KCk7XG4gIH1cbn1cblxuXG5BcHAuaW5pdCgpO1xud2luZG93LkFwcCA9IEFwcDtcbiJdLCJuYW1lcyI6WyJub2RlTGlzdEZvckVhY2giLCJ3aW5kb3ciLCJOb2RlTGlzdCIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsYmFjayIsInRoaXNBcmciLCJpIiwibGVuZ3RoIiwiY2FsbCIsInRlbCIsImZvcm1CbG9ja3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtQmxvY2siLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJwaG9uZU1hc2siLCJJTWFzayIsIm1hc2siLCJhbmltYXRpb24iLCJhbmltYXRpb25zIiwiV09XIiwiaW5pdCIsImNhcmRzIiwiJCIsImVhY2giLCJjYXJkIiwiY2FyZFNpZGUiLCJmaW5kIiwib24iLCJtZW51T3BlbiIsIiRidXR0b25zTWVudSIsIiRtZW51IiwiJGJ1dHRvbkNsb3NlIiwiJGhlYWRlciIsIiRidG4iLCJzY3JvbGxIZWFkZXIiLCJoYXNDbGFzcyIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsInBvcyIsInBhcnNlSW50IiwiYXR0ciIsInJlbW92ZUF0dHIiLCJzY3JvbGxUbyIsInNldFRpbWVvdXQiLCJwYWdlUG9zIiwiaGVhZGVyU2Nyb2xsIiwibWFpbiIsImludHJvVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2xpZGVycyIsIlN3aXBlciIsInByb21vIiwibXlTd2lwZXIiLCJkaXJlY3Rpb24iLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic3BlZWQiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicG9wdWxhciIsImJyZWFrcG9pbnRzIiwibnVtYmVyIiwiJG51bWJlcnMiLCIkdGhpc3MiLCJidG5VcCIsInNjcm9sbCIsImlzIiwiY3NzIiwib3BhY2l0eSIsImZhZGVJbiIsInN0b3AiLCJmYWRlT3V0IiwiYW5pbWF0ZSIsImdvb2RRdWFudGl0eSIsImNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJidG5JbmNyZWFzZSIsImJ0bkRlY3JlYXNlIiwidmFsdWUiLCJidG5JbmNyZWFzZUhhbmRsZXIiLCJuZXdWYWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImJ0bkRlY3JlYXNlSGFuZGxlciIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb290ZXJGb3JtIiwiJGZvb3RlckZvcm0iLCJpbnB1dHMiLCJ2YWwiLCJkZXNrTWVudSIsIiRoZWFkZXJNZW51Iiwia2V5Q29kZSIsIkVTQyIsIm9wZW4iLCJzbGlkZURvd24iLCJjbG9zZSIsInNsaWRlVXAiLCJibHVyIiwicmVzaXplVG9wQ29vcmRpbmF0ZSIsImhlaWdodCIsIm91dGVySGVpZ2h0IiwiYSIsImV2dCIsInRhcmdldCIsImNsb3Nlc3QiLCJsaW5rcyIsImNvbnRlbnRzIiwiZGVza01lbnVDb250ZW50Q2hhbmdlIiwibGluayIsImlkIiwicmVzZXRDb250ZW50IiwiY29udGVudCIsInJlc2V0SG92ZXIiLCJpdGVtIiwicHJl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
