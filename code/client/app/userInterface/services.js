angular.module('logoer.services', [])
.factory('Colors', function() {
  let hex = () => randomHex();

  return {
    hex: hex
  };
})

.factory('Shapes', function() {
  let add = function(shape) {
    if (shape === 'circle') {
      var shape = makeSVG(shape, {'cy': '200', 'cx': '200', 'fill': randomHex(), 'r': '50'});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'square') {
      var shape = makeSVG('rect', {'x': '200', 'y': '200', 'fill': randomHex(), 'width': '150', 'height': '150'});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'triangle') {

    } else if (shape === 'heart') {

    } else if (shape === 'pentagon') {

    }
  };

  let del = function(index) {
    document.getElementsByTagName('svg')[0].children[index].remove();
  };

  return {
    add: add,
    del: del
  };
});
