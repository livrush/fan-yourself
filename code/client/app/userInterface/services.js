angular.module('logoer.services', [])
.factory('Colors', function() {
  let hex = () => randomHex();

  let change = function(input) {
    if (input.match(/[abcdef0123456789]/g).length) {
      if (input.length === 6) {
        if (input[0] !== '#') {
          document.getElementById('hexColor').value = `#${input}`;
          document.getElementById('hexColor').style.background = input;
          changer('#' + colors.text());
        }
      } else if (input.length === 7) {
        document.getElementById('hexColor').value = input;
        document.getElementById('hexColor').style.background = input;
      }
    }
  };

  return {
    hex: hex,
    change: change
  };
})

.factory('Shapes', function() {
  let add = function(shape) {
    if (shape === 'circle') {
      let color = document.getElementById('hexColor').value || randomHex();
      var shape = makeSVG(shape, {'cy': '200', 'cx': '200', 'fill': color, 'r': '50'});
      document.getElementById('svg-wrapper').append(shape);
    } else if (shape === 'square') {
      var shape = makeSVG('rect', {'x': '200', 'y': '200', 'fill': color, 'width': '150', 'height': '150'});
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
