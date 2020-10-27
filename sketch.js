let balls = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(200);
  for (let ball of balls) {
    ball.update();
    ball.display();
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = random(height);
    this.dy = random(-1,1);
  }
  update() {
    this.x += this.dy;
    if (this.x - 30 <= 0) {
      this.dy = -this.dy;
    }
    if (this.x + 30 >= width) {
      this.dy = -this.dy;
    }
  }
  display() {
    circle(this.x, this.y, 30);
  }
}

