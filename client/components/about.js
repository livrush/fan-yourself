fanYourself.controller('AboutCtrl', function() {

})
.directive('about', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AboutCtrl',
    controllerAs: 'about',
    bindToController: true,
    templateUrl: './templates/about.html'
  };
});
