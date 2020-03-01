console.log("js!");

let amp;
let vol;
let rad;

function preload() {
  mySound = loadSound('music.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
  createCanvas(400, 400);
    background(100);
   amp=new p5.Amplitude();
}


function draw() {
  background(100);
  let r=random(100,255);
  let b=random(100,255);
  
  
  var vol= amp.getLevel();
  rad=map(vol,0,1,10,100);
  fill(r,0,b);
 noStroke();

  ellipse(width/2,height/2,rad*10,rad*10);

}