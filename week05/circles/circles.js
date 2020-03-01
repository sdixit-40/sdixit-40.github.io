console.log("js");

let s = 10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  noFill();
  ellipse(100,150,s,s);
  ellipse(300,250,s,s);
  ellipse(150,300,s,s);

  s=s+10;
//s<20;
}