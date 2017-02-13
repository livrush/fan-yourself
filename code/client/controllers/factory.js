angular.module('logoer.fact', [])
.factory('Colors', function() {
  var hex = () => randomColor();

  return {
    hex: hex
  };
});
