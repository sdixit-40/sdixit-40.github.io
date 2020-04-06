let r=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textAlign(CENTER);
fill(0, 102, 153);
text('word', 0, 0,0,0);

  
    noStroke()
 background(80);
  translate(width/2, height/2);

fill(0);
const radius = width * 0.3;
  rectMode(CENTER)
rect(0, 0, radius, radius);

fill(255,100,0);
const x = cos(radians(-r)) * radius;
const y = sin(radians(-r)) * radius;
  r+=2;
  noStroke()
rect(x, y, width/10, width/10);
  


}