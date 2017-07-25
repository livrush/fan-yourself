fanYourself.controller('AboutCtrl', function() {

})
.directive('about', function() {
  return {
    scope: {
      close: '<'
    },
    restrict: 'E',
    controller: 'AboutCtrl',
    controllerAs: 'about',
    bindToController: true,
    templateUrl: './templates/about.html'
  };
});
