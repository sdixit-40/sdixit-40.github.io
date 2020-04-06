
function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
  translate(width/2, height/2);
  beginShape();
    strokeWeight(random(1,5));
    stroke(random(0,100));
  for(let i = 0; i <=360; i++) {
    const x = cos(radians(i*random(1,5) )) * width/4;
    const y = sin(radians(i*random(1,5) )) * width/4;
    vertex(x, y);
  }
  endShape();
    
  }