let ball0;
let ball1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = {
    x: random(50),
    y: random(height),
    dx: 0,
  }
  ball1 = {
    x: random(50),
    y: random(height),
    dx: 0,
  }
}
function draw() {
  background(200);
  ball0.x += ball0.dx;
  ball0.dx += 0.25;
  circle(ball0.x, ball0.y, 50);
  ball1.x += ball1.dx;
  ball1.dx += 0.25;
  circle(ball1.x, ball1.y, 50);
  // if the object hits the bottom of the canvas
  // make it go up instead of down
  if (ball0.x >= width) {
    ball0.dx = -0.95 * ball0.dx;
  }
  if (ball1.x >= width) {
    ball1.dx = -0.95 * ball1.dx;
  }
}
class Ball {
  constructor(x) {
    this.x = x;
  }
  // containsPoint(x, y) {}
  // containsMouse() {}
  update() {
    // changes the properties
  }
  draw() {
    // renders the object
  }
}

