let bits = [ 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
// let bits = [ 'A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

let index = () => Math.floor(Math.random() * 16);

let hex = () => bits[index()];

let randomColor = function() {
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += hex();
  }
  return color;
}
