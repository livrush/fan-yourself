// const s = Snap(20, 20);
//
// var bigCircle = s.circle(150, 150, 100);

let makeSVG = function(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
};
