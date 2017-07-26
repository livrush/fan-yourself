fanYourself.controller('AppCtrl', function() {

  var update = function(what, whats) {
    return function(up) {
      if (up) {
        if (this[what] < this[whats]) {
          this[what]++;
        } else {
          this[what] = 0;
        }
      } else {
        if (this[what] > 0) {
          this[what]--;
        } else {
          this[what] = this[whats];
        }
      }
    };
  };

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
  this.backgrounds = 11;
  this.background = 0;
  this.updateBg = update('background', 'backgrounds').bind(this);

  // ALTERING MOTHERFLOCKERS
  this.motherflockers = 6;
  this.motherflocker = 0;
  this.updateMf = update('motherflocker', 'motherflockers').bind(this);
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
