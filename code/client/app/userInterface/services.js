angular.module('logoer.services', [])
.factory('Colors', function() {
  let hex = () => randomHex();

  let change = function(input) {
    if (!input) {
      document.getElementById('hexColor').style['background-color'] = 'white';
    } else if (input.match(/[abcdef0123456789]/g).length) {
      if (input.length === 6) {
        if (input[0] !== '#') {
          document.getElementById('hexColor').value = `#${input}`;
          document.getElementById('hexColor').style['background-color'] = input;
          document.getElementById('textColor').style['background-color'] = input;
        }
      } else if (input.length === 7) {
        document.getElementById('hexColor').value = input;
        document.getElementById('hexColor').style['background-color'] = input;
        document.getElementById('textColor').style['background-color'] = input;
      }
    }
  };

  let del = function() {
    document.getElementsByClassName('colorRow')[0].children[0].remove();
  };

  return {
    hex: hex,
    change: change,
    del: del
  };
});
