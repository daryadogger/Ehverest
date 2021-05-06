const deskMenu = () => {
  // Открытие и закрытие header-menu с помощью fade
  const $headerMenu = $(".js-desk-menu");

  if(!$headerMenu) {
    return;
  }

  const $btn = $(".js-desk-menu-btn");

  const keyCode = {
    ESC: 27,
  };

  const open = () => {
    $headerMenu.slideDown(300);
    $headerMenu.addClass("show");
    $btn.addClass("active");
  };

  const close = () => {
    $headerMenu.slideUp(300);
    $headerMenu.removeClass("show");
    $btn.removeClass("active");
    $btn.blur();
  };

  $btn.click(function() {
    if ($headerMenu.hasClass("show")) {
      close();
    } else {
      resizeTopCoordinate();
      open();
    }
  });

  // Определение и установка координаты top для header-menu
  const resizeTopCoordinate = () => {
    let height = $(".header").outerHeight();
    let a = height + "px";

    $headerMenu.css("top", a);
  };
  resizeTopCoordinate();

  $(window).on("resize", resizeTopCoordinate);
  $(document).on("scroll", function () {
    if ($headerMenu.hasClass("show")) {
      close();
    }
  });

  // Закрытие header-menu при нажатии вне меню
  $(document).on('mouseup', function(evt) {
    if (evt.target.closest(".js-desk-menu") === null && evt.target.closest(".js-desk-menu-btn") === null) {
      close();
    }
  });

  // Закрытие header-menu по ESC
  $(document).on("keydown", function(evt) {
    if (evt.keyCode === keyCode.ESC && $headerMenu.hasClass("show")) {
      close();
    }
  });
};

export default deskMenu;
