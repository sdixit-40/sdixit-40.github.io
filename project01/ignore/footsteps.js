console.log("js");

var blood={
  x:100,
  y:50
}

var col={
  r:255,
  g:0,
  b:0

}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
   
}

function draw() {
  blood.x=random(0,width);
  blood.y=random(0,height);
noStroke();
  let s=random(20,50);
let o=random(80,200);
  
  fill(200,0,0,o);
  ellipse(blood.x,blood.y,s,s);
}
}