function setup() {
    createCanvas(400,windowHeight);
  }
   
  function draw() {
    background(20);
    fill(255);
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    for(i=0;i<=360;i+=15){
     rect(width/2, height*sin(radians(i)),width/2,30); 
    }
  }