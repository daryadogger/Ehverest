const range = () => {
  // Input type range
  // http://ionden.com/a/plugins/ion.rangeSlider/start.html
  const minPrice = 199;
  const maxPrice = 2799;
  const fromPrice = 199;
  const toPrice = 2799;


  $(".js-range").ionRangeSlider({
    type: "double",
    skin: "round",
    grid: false,
    min: minPrice,
    max: maxPrice,
    from: fromPrice,
    to: toPrice,
    hide_min_max: true,
    hide_from_to: true,
  });

};

export default range;
