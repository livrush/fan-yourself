angular.module('logoer.shapes', [])
.factory('Shapes', function() {
  let add = function(shape, color, x, y, r) {
    if (shape === 'circle') {
      color = color || randomHex();
      var shape = makeSVG(shape, {'cy': y, 'cx': x, 'fill': color, 'r': r});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'square') {
      var shape = makeSVG('rect', {'x': x - r, 'y': y - r, 'fill': color, 'width': r * 2, 'height': r * 2});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'tall rect') {
      var shape = makeSVG('rect', {'x': x - r, 'y': y - r * 1.5, 'fill': color, 'width': r * 2, 'height': r * 3});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'wide rect') {
      var shape = makeSVG('rect', {'x': x - r * 1.5, 'y': y - r, 'fill': color, 'width': r * 3, 'height': r * 2});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'triangle') {
      var shape = makeSVG('rect', {'x': '200', 'y': '200', 'fill': color, 'width': '150', 'height': '150'});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'heart') {
      var shape = makeSVG('rect', {'x': '100', 'y': '100', 'fill': color, 'width': '50', 'height': '25'});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'pentagon') {
      var shape = makeSVG('rect', {'x': '200', 'y': '200', 'fill': color, 'width': '150', 'height': '150'});
      document.getElementById('svg-wrapper').append(shape);
    }
  };

  let del = function(index) {
    document.getElementsByTagName('svg')[0].children[index].remove();
  };

  let position = function(choice) {
    let result;
    switch(choice) {
    case 1: result = [ '100', '100' ];
      break;
    case 2: result = [ '100', '200' ];
      break;
    case 3: result = [ '100', '300' ];
      break;
    case 4: result = [ '200', '100' ];
      break;
    case 5: result = [ '200', '200' ];
      break;
    case 6: result = [ '200', '300' ];
      break;
    case 7: result = [ '300', '100' ];
      break;
    case 8: result = [ '300', '200' ];
      break;
    case 9: result = [ '300', '300' ];
      break;
    }
    return result;
  };

  return {
    add: add,
    del: del,
    position: position
  };
});
