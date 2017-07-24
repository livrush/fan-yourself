fanYourself.controller('DisplayCtrl', function() {
  this.getBg = file => {
    return {
      'background-image': `url(../assets/backgrounds/${file})`,
    };
  };
})
/* END SOLUTION */
.directive('display', function() {
  return {
    scope: {
      bg: '<',
    },
    restrict: 'E',
    controller: 'DisplayCtrl',
    controllerAs: 'display',
    bindToController: true,
    templateUrl: './templates/display.html'
  };
});
