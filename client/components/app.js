fanYourself.controller('AppCtrl', function() {
  this.backgrounds = [
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
  ];

  this.background = this.backgrounds[0];

})
/* END SOLUTION */
.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'app',
    bindToController: true,
    templateUrl: './templates/app.html'
  };
});
