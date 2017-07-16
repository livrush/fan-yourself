angular.module('logoer.shapes', [])
.factory('Shapes', function($http) {
  let add = function(shape, i, color, y, x, r) {
    var shape;
    if (shape === 'circle') {
      color = color || randomHex();
      shape = makeSVG(shape, {'cy': y, 'cx': x, 'fill': color, 'r': r});
    } else if (shape === 'square') {
      shape = makeSVG('rect', {'x': x - r, 'y': y - r, 'fill': color, 'width': r * 2, 'height': r * 2});
    } else if (shape === 'tall rect') {
      shape = makeSVG('rect', {'x': x - r, 'y': y - r * 1.5, 'fill': color, 'width': r * 2, 'height': r * 3});
    } else if (shape === 'wide rect') {
      shape = makeSVG('rect', {'x': x - r * 1.5, 'y': y - r, 'fill': color, 'width': r * 3, 'height': r * 2});
    } else if (shape === 'diamond') {
      shape = makeSVG('rect', {'fill': color, 'width': r * 2, 'height': r * 2, transform: `rotate(45, ${x}, ${y})`});
    }
    shape.setAttribute('id', i);
    document.getElementById('svg-wrapper').append(shape);
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

  let save = function(logo) {
    console.log(logo);
    return $http({
      method: 'POST',
      url: 'api/logos',
      data: logo
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp;
    });
  };

  let canvasChange = function(num) {
    let canvas = document.getElementById('canvas');
    if (num === 1) {
      canvas.style.background = 'url(\'../assets/checker.png\')';
    } else if (num === 2) {
      canvas.style.background = 'white';
    } else if (num === 3) {
      canvas.style.background = 'black';
    }
  };

  return {
    add: add,
    del: del,
    position: position,
    save: save,
    canvasChange: canvasChange,
  };
});
