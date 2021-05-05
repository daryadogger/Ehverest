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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy90ZWwuanMiLCJzcmMvanMvYW5pbWF0aW9uLmpzIiwic3JjL2pzL21lbnUtb3Blbi5qcyIsInNyYy9qcy9oZWFkZXIuanMiLCJzcmMvanMvc2xpZGVycy5qcyIsInNyYy9qcy9udW1iZXIuanMiLCJzcmMvanMvYnRuLXVwLmpzIiwic3JjL2pzL2dvb2QtcXVhbnRpdHkuanMiLCJzcmMvanMvZm9vdGVyLWZvcm0uanMiLCJzcmMvanMvZGVzay1tZW51LmpzIiwic3JjL2pzL2ZpbHRlci1vcGVuLmpzIiwic3JjL2pzL3JhbmdlLmpzIiwic3JjL2pzL3NvcnQuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlTGlzdEZvckVhY2ggPSAoKSA9PiB7XG4gIGlmICgnTm9kZUxpc3QnIGluIHdpbmRvdyAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTGlzdEZvckVhY2g7XG4iLCJjb25zdCB0ZWwgPSAoKSA9PiB7XG4gIC8vIE1hc2sgZm9yIHRlbFxuICBjb25zdCBmb3JtQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZHNldFwiKTtcblxuICBpZiAoZm9ybUJsb2Nrcy5sZW5ndGgpIHtcblxuICAgIGZvcm1CbG9ja3MuZm9yRWFjaChmdW5jdGlvbihmb3JtQmxvY2spIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPXRlbF1cIik7XG5cbiAgICAgIGlmKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHBob25lTWFzayA9IElNYXNrKCBpbnB1dCwge1xuICAgICAgICAgIG1hc2s6IFwiK3s3fSAwMDAgMDAwLTAwLTAwXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRlbDtcbiIsImNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgLy93b3dcbiAgY29uc3QgYW5pbWF0aW9ucyA9IG5ldyB3aW5kb3cuV09XKCkuaW5pdCgpO1xuXG4gIGNvbnN0IGNhcmRzID0gJChcIi5jYXJkLS1nb29kXCIpO1xuXG4gIGlmIChjYXJkcykge1xuICAgIGNhcmRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjYXJkID0gJCh0aGlzKTtcbiAgICAgIGNvbnN0IGNhcmRTaWRlID0gY2FyZC5maW5kKFwiLmNhcmRfX3NpZGVcIik7XG5cbiAgICAgIGNhcmQub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICB9KTtcblxuICAgICAgY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGlvbjtcbiIsImNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xuICAvLyDQntGC0LrRgNGL0YLQuNC1INC80L7QsSDQvNC10L3RjlxuICBjb25zdCAkYnV0dG9uc01lbnUgPSAkKFwiLmpzLW9wZW4tbWVudVwiKTtcblxuICBpZiAoJGJ1dHRvbnNNZW51Lmxlbmd0aCkge1xuICAgIGNvbnN0ICRtZW51ID0gJChcIi5tZW51XCIpO1xuICAgIGNvbnN0ICRidXR0b25DbG9zZSA9ICQoXCIuanMtYnRuLWNsb3NlXCIpO1xuICAgIGNvbnN0ICRoZWFkZXIgPSAkKFwiLmhlYWRlclwiKTtcblxuICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuXG4gICAgICBjb25zdCBzY3JvbGxIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICgkbWVudS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAgIGlmKCRtZW51LnNjcm9sbFRvcCgpID4gMSkge1xuICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g0LXRgdC70Lgg0L7RgtC60YDRi9GC0L4g0LzQtdC90Y5cbiAgICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKFwiaXMtc2hvd1wiKSkge1xuXG4gICAgICAgICAgY29uc3QgcG9zID0gcGFyc2VJbnQoJChcImJvZHlcIikuYXR0cihcImRhdGEtc2Nyb2xsXCIpLCAxMCk7XG4gICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW1lbnUtb3BlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zY3JvbGxcIik7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBvcyk7XG5cbiAgICAgICAgICAvLyDQtdGB0LvQuCDQt9Cw0LrRgNGL0YLQviDQvNC10L3RjlxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoXCJpcy1zaG93XCIpO1xuXG4gICAgICAgICAgaWYoJG1lbnUuc2Nyb2xsVG9wKCkgPiAxKSB7XG4gICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcyhcImlzLXNob3dcIik7XG5cbiAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1tZW51LW9wZW5cIikuYXR0cihcImRhdGEtc2Nyb2xsXCIsIHBhZ2VQb3MpO1xuICAgICAgICAgIH0sIDQ1MCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKFwiLm1lbnVcIikub24oXCJzY3JvbGxcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgICB9KTtcblxuICAgICRidXR0b25DbG9zZS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwb3MgPSBwYXJzZUludCgkKFwiYm9keVwiKS5hdHRyKFwiZGF0YS1zY3JvbGxcIiksIDEwKTtcbiAgICAgICRtZW51LnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJGJ0biA9ICQodGhpcyk7XG4gICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtbWVudS1vcGVuXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXNjcm9sbFwiKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3MpO1xuICAgIH0pO1xuXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudU9wZW47XG4iLCJjb25zdCBoZWFkZXJTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCAkaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5cbiAgaWYgKCRoZWFkZXIpIHtcbiAgICBcbiAgICAvLyBIZWFkZXIg0LzQtdC90Y/QtdGCINGG0LLQtdGC0LAg0L/RgNC4INGB0LrRgNC+0LvQu9C1LiDQntC9INGD0LbQtSBmaXhlZCDQuNC30L3QsNGH0LDQu9GM0L3QvlxuICAgIGNvbnN0IHNjcm9sbEhlYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludHJvVG9wID0gbWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGlmIChpbnRyb1RvcCA8IC0xKSB7XG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgIH0gZWxzZSBpZiAoJGhlYWRlci5oYXNDbGFzcyhcInNjcm9sbFwiKSAmJiBpbnRyb1RvcCA+IC0xKSB7XG4gICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBzY3JvbGxIZWFkZXIpO1xuICAgICQoZG9jdW1lbnQpLm9uKFwicmVhZHlcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTY3JvbGw7XG4iLCJjb25zdCBzbGlkZXJzID0gKCkgPT4ge1xuICBjb25zdCBTd2lwZXIgPSB3aW5kb3cuU3dpcGVyO1xuXG4gIC8vIFNsaWRlciBwcm9tb1xuICBjb25zdCBwcm9tbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtcHJvbW8tc2xpZGVyXCIpO1xuXG4gIGlmIChwcm9tbykge1xuICAgIGNvbnN0IG15U3dpcGVyID0gbmV3IFN3aXBlcihcIi5qcy1wcm9tby1zbGlkZXIuc3dpcGVyLWNvbnRhaW5lclwiLCB7XG4gICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHNwZWVkOiA2MDAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuanMtcHJvbW8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5qcy1wcm9tby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlcyA9IHByb21vLnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMVwiKTtcblxuICAgIGZ1bmN0aW9uIHNsaWRlQ2hhbmdlSGFuZGxlcih0aW1lcikge1xuICAgICAgbGV0IGFjdGl2ZVNsaWRlID0gcHJvbW8ucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItc2xpZGUtYWN0aXZlXCIpO1xuXG4gICAgICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IGFjdGl2ZVNsaWRlLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9LCB0aW1lcik7XG4gICAgICB9XG5cbiAgICB9XG4gICAgc2xpZGVDaGFuZ2VIYW5kbGVyKDMwMCk7XG5cbiAgICBteVN3aXBlci5vbignc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aXRsZXMuZm9yRWFjaChmdW5jdGlvbih0aXRsZSkge1xuICAgICAgICBpZiAodGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzbGlkZUNoYW5nZUhhbmRsZXIoNTAwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJyYW5kc1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuanMtYnJhbmRzLXNsaWRlci5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIHNwZWVkOiA2MDAsXG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDQxMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgfSxcbiAgICAgICAgNDkwOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgICAgICB9LFxuICAgICAgICA3MDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDk1MDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgfSxcbiAgICAgICAgOTkxOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNsaWRlciBwb3B1bGFyXG4gIGNvbnN0IHBvcHVsYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXBvcHVsYXItc2xpZGVyXCIpO1xuXG4gIGlmIChwb3B1bGFyKSB7XG4gICAgY29uc3QgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItY29udGFpbmVyXCIsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIHNwZWVkOiA0MDAsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuanMtcG9wdWxhci1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLmpzLXBvcHVsYXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICA0NzA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIH0sXG4gICAgICAgIDcwMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgfSxcbiAgICAgICAgOTkxOiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDgsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbGlkZXJzO1xuIiwiY29uc3QgbnVtYmVyID0gKCkgPT4ge1xuICAvL9Cg0LDQt9GA0LXRiNCw0LXRgiDQstCy0L7QtCDRgtC+0LvRjNC60L4g0YbQuNGE0YAg0LIgaW5wdXRcbiAgY29uc3QgJG51bWJlcnMgPSAkKFwiLmpzLW51bWJlclwiKTtcbiAgaWYgKCEkbnVtYmVycykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICRudW1iZXJzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHRoaXNzID0gJCh0aGlzKTtcblxuICAgICR0aGlzcy5tYXNrKCcwIycpO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyO1xuIiwiY29uc3QgYnRuVXAgPSAoKSA9PiB7XG5cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDIwMCkge1xuICAgICAgICBpZiAoJCgnI3VwYnV0dG9uJykuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgJCgnI3VwYnV0dG9uJykuY3NzKHtvcGFjaXR5IDogMC45fSkuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAkKCcjdXBidXR0b24nKS5zdG9wKHRydWUsIGZhbHNlKS5mYWRlT3V0KCdmYXN0Jyk7IH1cbiAgfSk7XG5cbiAgJCgnI3VwYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IDB9LCAzMDApO1xuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnRuVXA7XG4iLCJjb25zdCBnb29kUXVhbnRpdHkgPSAoKSA9PiB7XG4gIC8vINCj0LLQtdC70LjRh9C10L3QuNC1INC4INGD0LzQtdC90YzRiNC10L3QuNC1INGC0L7QstCw0YDQvtCyXG4gIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXF1YW50aXR5XCIpO1xuICBpZiAoY29udGFpbmVycy5sZW5ndGggPCAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYnRuSW5jcmVhc2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5qcy1pbmNyZWFzZVwiKTtcbiAgICBjb25zdCBidG5EZWNyZWFzZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmpzLWRlY3JlYXNlXCIpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgYnRuSW5jcmVhc2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9ICsrdmFsdWU7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA+IDEpIHtcbiAgICAgICAgYnRuRGVjcmVhc2UucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGJ0bkRlY3JlYXNlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICBsZXQgbmV3VmFsdWUgPSAtLXZhbHVlO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPD0gMSkge1xuICAgICAgICBuZXdWYWx1ZSA9IDE7XG4gICAgICAgIGlucHV0LnZhbHVlID0gMTtcbiAgICAgICAgYnRuRGVjcmVhc2Uuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9O1xuXG4gICAgYnRuSW5jcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkluY3JlYXNlSGFuZGxlcik7XG4gICAgYnRuRGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkRlY3JlYXNlSGFuZGxlcik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBidG5JbmNyZWFzZUhhbmRsZXIoKTtcbiAgICAgIGJ0bkRlY3JlYXNlSGFuZGxlcigpO1xuICAgIH0pXG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnb29kUXVhbnRpdHk7XG4iLCJjb25zdCBmb290ZXJGb3JtID0gKCkgPT4ge1xuICBjb25zdCAkZm9vdGVyRm9ybSA9ICQoXCIuZm9vdGVyIGZvcm1cIik7XG4gIGlmICghJGZvb3RlckZvcm0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbnB1dHMgPSAkZm9vdGVyRm9ybS5maW5kKFwiaW5wdXRcIik7XG5cbiAgaW5wdXRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xuXG4gICAgaW5wdXQub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaW5wdXQudmFsKCkgIT09IGBgKSB7XG4gICAgICAgIGlucHV0LmFkZENsYXNzKFwiaGFzLXZhbHVlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoXCJoYXMtdmFsdWVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJGb3JtO1xuIiwiY29uc3QgZGVza01lbnUgPSAoKSA9PiB7XG4gIC8vINCe0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSBoZWFkZXItbWVudSDRgSDQv9C+0LzQvtGJ0YzRjiBmYWRlXG4gIGNvbnN0ICRoZWFkZXJNZW51ID0gJChcIi5qcy1kZXNrLW1lbnVcIik7XG5cbiAgaWYoISRoZWFkZXJNZW51KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGJ0biA9ICQoXCIuanMtZGVzay1tZW51LWJ0blwiKTtcblxuICBjb25zdCBrZXlDb2RlID0ge1xuICAgIEVTQzogMjcsXG4gIH07XG5cbiAgY29uc3Qgb3BlbiA9ICgpID0+IHtcbiAgICAkaGVhZGVyTWVudS5zbGlkZURvd24oMzAwKTtcbiAgICAkaGVhZGVyTWVudS5hZGRDbGFzcyhcInNob3dcIik7XG4gICAgJGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICAkaGVhZGVyTWVudS5zbGlkZVVwKDMwMCk7XG4gICAgJGhlYWRlck1lbnUucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ0bi5ibHVyKCk7XG4gIH07XG5cbiAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAoJGhlYWRlck1lbnUuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNpemVUb3BDb29yZGluYXRlKCk7XG4gICAgICBvcGVuKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyDQntC/0YDQtdC00LXQu9C10L3QuNC1INC4INGD0YHRgtCw0L3QvtCy0LrQsCDQutC+0L7RgNC00LjQvdCw0YLRiyB0b3Ag0LTQu9GPIGhlYWRlci1tZW51XG4gIGNvbnN0IHJlc2l6ZVRvcENvb3JkaW5hdGUgPSAoKSA9PiB7XG4gICAgbGV0IGhlaWdodCA9ICQoXCIuaGVhZGVyXCIpLm91dGVySGVpZ2h0KCk7XG4gICAgbGV0IGEgPSBoZWlnaHQgKyBcInB4XCI7XG5cbiAgICAkaGVhZGVyTWVudS5jc3MoXCJ0b3BcIiwgYSk7XG4gIH07XG4gIHJlc2l6ZVRvcENvb3JkaW5hdGUoKTtcblxuICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgcmVzaXplVG9wQ29vcmRpbmF0ZSk7XG4gICQoZG9jdW1lbnQpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJGhlYWRlck1lbnUuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8g0JfQsNC60YDRi9GC0LjQtSBoZWFkZXItbWVudSDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LLQvdC1INC80LXQvdGOXG4gICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdChcIi5qcy1kZXNrLW1lbnVcIikgPT09IG51bGwgJiYgZXZ0LnRhcmdldC5jbG9zZXN0KFwiLmpzLWRlc2stbWVudS1idG5cIikgPT09IG51bGwpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyDQl9Cw0LrRgNGL0YLQuNC1IGhlYWRlci1tZW51INC/0L4gRVNDXG4gICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IGtleUNvZGUuRVNDICYmICRoZWFkZXJNZW51Lmhhc0NsYXNzKFwic2hvd1wiKSkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGxpbmtzID0gJGhlYWRlck1lbnUuZmluZChcIi5qcy1kZXNrLW1lbnUtbGlua3MgYVwiKTtcbiAgY29uc3QgY29udGVudHMgPSAkaGVhZGVyTWVudS5maW5kKFwiLmRlc2stbWVudV9fY29udGVudFwiKTtcblxuICBmdW5jdGlvbiBkZXNrTWVudUNvbnRlbnRDaGFuZ2UobGluaykge1xuICAgIGxpbmsuYWRkQ2xhc3MoXCJob3ZlclwiKTtcblxuICAgIGNvbnN0IGlkID0gbGluay5hdHRyKFwiZGF0YS1pZFwiKTtcblxuICAgIHJlc2V0Q29udGVudCgpO1xuICAgIGxldCBjb250ZW50ID0gJGhlYWRlck1lbnUuZmluZChgLmRlc2stbWVudV9fY29udGVudFtkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgICBjb250ZW50LmFkZENsYXNzKFwic2hvd1wiKTtcbiAgfVxuICBkZXNrTWVudUNvbnRlbnRDaGFuZ2UoJChsaW5rc1swXSkpO1xuXG4gIGZ1bmN0aW9uIHJlc2V0SG92ZXIoKSB7XG4gICAgbGlua3MuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCBsaW5rID0gJCh0aGlzKTtcbiAgICAgIGxpbmsucmVtb3ZlQ2xhc3MoXCJob3ZlclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q29udGVudCgpIHtcbiAgICBjb250ZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGl0ZW0gPSAkKHRoaXMpO1xuICAgICAgaXRlbS5yZW1vdmVDbGFzcyhcInNob3dcIik7XG4gICAgfSk7XG4gIH1cblxuICBsaW5rcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGxldCBsaW5rID0gJCh0aGlzKTtcblxuICAgIGxpbmsub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIGxpbmsub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2V0SG92ZXIoKTtcbiAgICAgIGRlc2tNZW51Q29udGVudENoYW5nZShsaW5rKTtcbiAgICB9KTtcblxuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVza01lbnU7XG4iLCJjb25zdCBmaWx0ZXIgPSAoKSA9PiB7XG4gIC8v0J7RgtC60YDRi9GC0LjQtSDRhNC40LvRjNGC0YDQsCDQsiDQutCw0YLQsNC70L7Qs9C1XG4gIGNvbnN0ICRmaWx0ZXJCdG4gPSAkKFwiLmpzLWZpbHRlci1idG5cIilcbiAgaWYgKCEkZmlsdGVyQnRuKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGZpbHRlciA9ICQoXCIuanMtZmlsdGVyXCIpO1xuICBjb25zdCAkYnRuQ2xvc2UgPSAkKFwiLmpzLWNsb3NlLWZpbHRlclwiKTtcbiAgY29uc3QgJG92ZXJsYXkgPSAkKFwiLm92ZXJsYXlcIik7XG5cbiAgJGZpbHRlckJ0bi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoJGZpbHRlci5oYXNDbGFzcyhcIm9wZW5cIikpIHtcbiAgICAgICRmaWx0ZXIucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgJG92ZXJsYXkuZmFkZU91dCgzMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZmlsdGVyLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICRvdmVybGF5LmZhZGVJbigzMDApO1xuICAgIH1cbiAgfSk7XG5cbiAgJGJ0bkNsb3NlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkZmlsdGVyLmhhc0NsYXNzKFwib3BlblwiKSkge1xuICAgICAgJGZpbHRlci5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAkb3ZlcmxheS5mYWRlT3V0KDMwMCk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudGFyZ2V0LmNsb3Nlc3QoXCIuanMtZmlsdGVyXCIpID09PSBudWxsICYmIGV2dC50YXJnZXQuY2xvc2VzdChcIi5qcy1jbG9zZS1maWx0ZXJcIikgPT09IG51bGwpIHtcbiAgICAgIGlmICgkZmlsdGVyLmhhc0NsYXNzKFwib3BlblwiKSkge1xuICAgICAgICAkZmlsdGVyLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgJG92ZXJsYXkuZmFkZU91dCgzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbHRlcjtcbiIsImNvbnN0IHJhbmdlID0gKCkgPT4ge1xuICAvLyBJbnB1dCB0eXBlIHJhbmdlXG4gIC8vIGh0dHA6Ly9pb25kZW4uY29tL2EvcGx1Z2lucy9pb24ucmFuZ2VTbGlkZXIvc3RhcnQuaHRtbFxuICBjb25zdCBtaW5QcmljZSA9IDE5OTtcbiAgY29uc3QgbWF4UHJpY2UgPSAyNzk5O1xuICBjb25zdCBmcm9tUHJpY2UgPSAxOTk7XG4gIGNvbnN0IHRvUHJpY2UgPSAyNzk5O1xuXG5cbiAgJChcIi5qcy1yYW5nZVwiKS5pb25SYW5nZVNsaWRlcih7XG4gICAgdHlwZTogXCJkb3VibGVcIixcbiAgICBza2luOiBcInJvdW5kXCIsXG4gICAgZ3JpZDogZmFsc2UsXG4gICAgbWluOiBtaW5QcmljZSxcbiAgICBtYXg6IG1heFByaWNlLFxuICAgIGZyb206IGZyb21QcmljZSxcbiAgICB0bzogdG9QcmljZSxcbiAgICBoaWRlX21pbl9tYXg6IHRydWUsXG4gICAgaGlkZV9mcm9tX3RvOiB0cnVlLFxuICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZ2U7XG4iLCJjb25zdCBzb3J0ID0gKCkgPT4ge1xuICBjb25zdCAkdmlld0xpbmtzID0gJChcIi5qcy1saW5rLXZpZXdcIik7XG5cbiAgaWYgKCR2aWV3TGlua3MpIHtcblxuICAgICR2aWV3TGlua3Mub24oXCJjbGlja1wiLCBmdW5jdGlvbihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVcIikpIHt9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJHZpZXdMaW5rcy50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcIi5qcy1jYXRhbG9nLWNvbnRlbnRcIikudG9nZ2xlQ2xhc3MoXCJjYXRhbG9nLWNvbnRlbnQtLXJvd1wiKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUm93KCkge1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICQoXCIuY2F0YWxvZy1jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwiY2F0YWxvZy1jb250ZW50LS1yb3dcIik7XG4gICAgICAgICAgJChcIi5qcy1yb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgJChcIi5qcy1jb2xcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVJvdygpO1xuXG4gICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIHJlbW92ZVJvdyk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgc29ydDtcbiIsImltcG9ydCBub2RlTGlzdEZvckVhY2ggZnJvbSAnLi9ub2RlLWxpc3QtZm9yLWVhY2gnO1xuaW1wb3J0IHRlbCBmcm9tICcuL3RlbCc7XG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCBtZW51T3BlbiBmcm9tICcuL21lbnUtb3Blbic7XG5pbXBvcnQgaGVhZGVyU2Nyb2xsIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBzbGlkZXJzIGZyb20gJy4vc2xpZGVycyc7XG5pbXBvcnQgbnVtYmVyIGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCBidG5VcCBmcm9tICcuL2J0bi11cCc7XG5pbXBvcnQgZ29vZFF1YW50aXR5IGZyb20gJy4vZ29vZC1xdWFudGl0eSc7XG5pbXBvcnQgZm9vdGVyRm9ybSBmcm9tICcuL2Zvb3Rlci1mb3JtJztcbmltcG9ydCBkZXNrTWVudSBmcm9tICcuL2Rlc2stbWVudSc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJy4vZmlsdGVyLW9wZW4nO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgbm9kZUxpc3RGb3JFYWNoKCk7XG4gICAgdGVsKCk7XG4gICAgYW5pbWF0aW9uKCk7XG4gICAgbWVudU9wZW4oKTtcbiAgICBoZWFkZXJTY3JvbGwoKTtcbiAgICBzbGlkZXJzKCk7XG4gICAgbnVtYmVyKCk7XG4gICAgYnRuVXAoKTtcbiAgICBnb29kUXVhbnRpdHkoKTtcbiAgICBmb290ZXJGb3JtKCk7XG4gICAgZGVza01lbnUoKTtcbiAgICBmaWx0ZXIoKTtcbiAgICByYW5nZSgpO1xuICAgIHNvcnQoKTtcbiAgfVxufVxuXG5cbkFwcC5pbml0KCk7XG53aW5kb3cuQXBwID0gQXBwO1xuIl0sIm5hbWVzIjpbIm5vZGVMaXN0Rm9yRWFjaCIsIndpbmRvdyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwidGhpc0FyZyIsImkiLCJsZW5ndGgiLCJjYWxsIiwidGVsIiwiZm9ybUJsb2NrcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm1CbG9jayIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInBob25lTWFzayIsIklNYXNrIiwibWFzayIsImFuaW1hdGlvbiIsImFuaW1hdGlvbnMiLCJXT1ciLCJpbml0IiwiY2FyZHMiLCIkIiwiZWFjaCIsImNhcmQiLCJjYXJkU2lkZSIsImZpbmQiLCJvbiIsIm1lbnVPcGVuIiwiJGJ1dHRvbnNNZW51IiwiJG1lbnUiLCIkYnV0dG9uQ2xvc2UiLCIkaGVhZGVyIiwiJGJ0biIsInNjcm9sbEhlYWRlciIsImhhc0NsYXNzIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwicG9zIiwicGFyc2VJbnQiLCJhdHRyIiwicmVtb3ZlQXR0ciIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsInBhZ2VQb3MiLCJoZWFkZXJTY3JvbGwiLCJtYWluIiwiaW50cm9Ub3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzbGlkZXJzIiwiU3dpcGVyIiwicHJvbW8iLCJteVN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzcGVlZCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ0aXRsZXMiLCJzbGlkZUNoYW5nZUhhbmRsZXIiLCJ0aW1lciIsImFjdGl2ZVNsaWRlIiwidGl0bGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsImJyYW5kc1N3aXBlciIsImNlbnRlcmVkIiwiYnJlYWtwb2ludHMiLCJwb3B1bGFyIiwibnVtYmVyIiwiJG51bWJlcnMiLCIkdGhpc3MiLCJidG5VcCIsInNjcm9sbCIsImlzIiwiY3NzIiwib3BhY2l0eSIsImZhZGVJbiIsInN0b3AiLCJmYWRlT3V0IiwiYW5pbWF0ZSIsImdvb2RRdWFudGl0eSIsImNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJidG5JbmNyZWFzZSIsImJ0bkRlY3JlYXNlIiwidmFsdWUiLCJidG5JbmNyZWFzZUhhbmRsZXIiLCJuZXdWYWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImJ0bkRlY3JlYXNlSGFuZGxlciIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb290ZXJGb3JtIiwiJGZvb3RlckZvcm0iLCJpbnB1dHMiLCJ2YWwiLCJkZXNrTWVudSIsIiRoZWFkZXJNZW51Iiwia2V5Q29kZSIsIkVTQyIsIm9wZW4iLCJzbGlkZURvd24iLCJjbG9zZSIsInNsaWRlVXAiLCJibHVyIiwicmVzaXplVG9wQ29vcmRpbmF0ZSIsImhlaWdodCIsIm91dGVySGVpZ2h0IiwiYSIsImV2dCIsInRhcmdldCIsImNsb3Nlc3QiLCJsaW5rcyIsImNvbnRlbnRzIiwiZGVza01lbnVDb250ZW50Q2hhbmdlIiwibGluayIsImlkIiwicmVzZXRDb250ZW50IiwiY29udGVudCIsInJlc2V0SG92ZXIiLCJpdGVtIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXIiLCIkZmlsdGVyQnRuIiwiJGZpbHRlciIsIiRidG5DbG9zZSIsIiRvdmVybGF5IiwicmFuZ2UiLCJtaW5QcmljZSIsIm1heFByaWNlIiwiZnJvbVByaWNlIiwidG9QcmljZSIsImlvblJhbmdlU2xpZGVyIiwidHlwZSIsInNraW4iLCJncmlkIiwibWluIiwibWF4IiwiZnJvbSIsInRvIiwiaGlkZV9taW5fbWF4IiwiaGlkZV9mcm9tX3RvIiwic29ydCIsIiR2aWV3TGlua3MiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZVJvdyIsIndpZHRoIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0VBQzVCLE1BQUksY0FBY0MsTUFBZCxJQUF3QixDQUFDQyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLE9BQWhELEVBQXlEO0VBQ3ZERixJQUFBQSxRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLE9BQW5CLEdBQTZCLFVBQVVDLFFBQVYsRUFBb0JDLE9BQXBCLEVBQTZCO0VBQzFEQSxNQUFBQSxPQUFPLEdBQUdBLE9BQU8sSUFBSUwsTUFBckI7O0VBQ0EsV0FBSyxJQUFJ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
