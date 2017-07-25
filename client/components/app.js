fanYourself.controller('AppCtrl', function() {

  // TEXT OVERLAYS
  this.about = false;
  this.ref = false;
  this.show = function(target) {
    this.about = false;
    this.ref = false;
    this[target] = true;
    console.log('app', this[target]);
  }.bind(this);
  this.close = function() {
    this.about = false;
    this.ref = false;
  }.bind(this);

  // ALTERING BACKGROUNDS
  this.backgrounds = 6;
  this.background = 0;
  this.updateBg = function(up) {
    if (up) {
      if (this.background < this.backgrounds) {
        this.background++;
      } else {
        this.background = 0;
      }
    } else {
      if (this.background > 0) {
        this.background--;
      } else {
        this.background = this.backgrounds;
      }
    }
    console.log(this.background);
  }.bind(this);
})
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
