let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(255);
  for (let ball of balls) {
    ball.update();
    ball.display();
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = random(height);
    this.dy = random(-20,20);
    this.radius=random(20,50);
    this.color1 = random(100,200);
    this.color2 = random(100,200);
    this.color3 = random(100,200);
  }
  update() {
    this.x += this.dy;
    if (this.x - 15 <= 0) {
      this.dy = -this.dy;
    }
    if (this.x + 15 >= width) {
      this.dy = -this.dy;
    }
  }
  display() {
    noStroke();
    fill(this.color1,this.color2,this.color3)
    circle(this.x, this.y, this.radius);
  }
}

