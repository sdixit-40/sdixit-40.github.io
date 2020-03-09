console.log("js");

var area=false;
var col = false;
let c;
let r=0;
let b=240;
let g=0;
let lc;

function preload() {
  mySound = loadSound('music.mp3');
}

function setup() {
  mySound.setVolume(0.5);
  mySound.play();
  createCanvas(400, 400);
  background(r,g,b);
  r=+2;
  b=+2
  
  noStroke();
  stencilshape(); 

}



function s1() {
  fill(r,g,b);
    r=+2;
  b=+2
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(400, 0);
  vertex(400, 50);
  vertex(300, 50);
  vertex(300, 250);
  vertex(250, 250);
  vertex(250, 50);
  vertex(50, 50);
  vertex(50, 250);
  vertex(0, 250);


  endShape(CLOSE);
}

function stencilshape() {
  beginShape();

  vertex(0, 250);
  vertex(50, 250);
  vertex(50, 50);
  vertex(250, 50);
  vertex(250, 250);
  vertex(300, 250);
  vertex(300, 50);
  vertex(400, 50);

  vertex(400, 100);

  vertex(350, 100);
  vertex(350, 300);
  vertex(200, 300);
  vertex(200, 100);
  vertex(100, 100);
  vertex(100, 300);
  vertex(0, 300);
 
   fill(r,g,b);
    r=+2;
  b=+2
  endShape(CLOSE);
}

function s2(){
  
   fill(r,g,b);
    r=+2;
  b=+2
   beginShape();
  
  vertex(0, 400);
  vertex(400, 400);
  vertex(400, 100);
  vertex(350, 100);
  vertex(350,300);
  vertex(200, 300);
  vertex(200, 100);
  vertex(100, 100);
  vertex(100, 300);
  vertex(0, 300);
  endShape(CLOSE);
}



function draw() {


  stroke(50, 0, 170);
  strokeWeight(5);

 
    let c = get(mouseX, mouseY);

    



    fill(c);
    ellipse(350, 350, 20, 20); 
    
    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  s1();

  s2();

 



}