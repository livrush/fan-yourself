angular.module('logoer.services', [])
.factory('Colors', function() {
  let hex = () => randomHex();

  let change = function(input) {
    if (!input) {
      document.getElementById('hexColor').style.background = 'white';
    } else if (input.match(/[abcdef0123456789]/g).length) {
      if (input.length === 6) {
        if (input[0] !== '#') {
          document.getElementById('hexColor').value = `#${input}`;
          document.getElementById('hexColor').style.background = input;
          document.getElementById('textColor').style.background = input;
          changer('#' + colors.text());
        }
      } else if (input.length === 7) {
        document.getElementById('hexColor').value = input;
        document.getElementById('hexColor').style.background = input;
        document.getElementById('textColor').style.background = input;
      }
    }
  };

  return {
    hex: hex,
    change: change
  };
});
