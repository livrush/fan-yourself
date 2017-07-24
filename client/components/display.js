fanYourself.controller('DisplayCtrl', function() {
  this.getBg = file => {
    return {
      'background-image': `url(../assets/backgrounds/${file}.png)`,
    };
  };
})

.directive('display', function() {
  return {
    scope: {
      about: '<',
      ref: '<',
      bg: '<',
    },
    restrict: 'E',
    controller: 'DisplayCtrl',
    controllerAs: 'display',
    bindToController: true,
    templateUrl: './templates/display.html'
  };
});
