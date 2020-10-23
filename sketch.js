let x0,y0;
let dy0=0;

let x1,y1;
let dy1=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  y0 = 0;
  y1 = 0
}


function draw() {
  background(200);

  y0+=dy0;
  dy0==0.35;
  circle(x0,y0,50);

  y1+=dy1;
  dy1==0.35;
  circle(x1,y1,50);

  if(y0>=height){
    dy0=-0.95*dy0;
  }

  if(y1>=height){
    dy1=-0.95*dy1;
  }
}
