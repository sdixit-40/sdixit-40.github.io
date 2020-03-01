console.log("js!");

let s=0;
let slider;
let fr;


function setup() {

  createCanvas(windowWidth, windowHeight);
  background(250,250,0);
  noStroke();
  slider=createSlider(0,80,40);  
  
  slider.position(0,20);
}

function draw() {
    let x = windowWidth / 2;
let y = windowHeight / 2;

  s+=10;
   fr=slider.value();
  frameRate(fr);
  
  if(s>width*2){
    s=0;
  }
  
 
  
  
    fill(230, 0, 230);
    ellipse(x, y, s+600, s+600);
    fill(255,120,0);
    ellipse(x, y, s +500, s + 500);
 fill(250,250,0);
    ellipse(x, y, s +400, s + 400);
 
   
  
 fill(0,0,200);
    ellipse(x, y, s + 300, s + 300);
  
    fill(0, 255, 255, 150);
    ellipse(x, y, s + 150, s + 150);
  
     fill(250,250,0);
    ellipse(x, y, s + 50, s + 50);

     fill(230, 0, 230);
    ellipse(x, y, s, s);

    fill(255,120,0);
    ellipse(x, y, s -50, s - 50);
   fill(250,250,0);
    ellipse(x, y, s -100, s - 100);
  
  fill(0,0,200);
    ellipse(x, y, s - 200, s -200);
  
    fill(0, 255, 255, 150);
    ellipse(x, y, s -300, s -300);
  
     fill(250,250,0);
    ellipse(x, y, s -350, s -350);
  
  
     fill(230, 0, 230);
    ellipse(x, y, s-450, s-450);

    fill(255,120,0);
    ellipse(x, y, s -550, s - 550);
   fill(250,250,0);
    ellipse(x, y, s -600, s - 600);
  
  
 
    loop();
  }
