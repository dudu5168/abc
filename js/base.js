/**
 * code by gqe
 */
$.fn.myPlugin = function (options) {
  var defaults = {
    'color': 'red',
    'fontSize': '14px'
  };
  var settings = $.extend(defaults, options);
  return this.css({
    'color': settings.color,
    'fontSize': settings.fontSize
  });
};
