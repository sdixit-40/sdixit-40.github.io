console.log("js!");

var img;
var c;
let s = 20;
let speed = 3;
let x;
let y;
var drawcolor = false;

function preload() {
  img = loadImage('palette.png'); // Load the image
}

function setup() {
  createCanvas(1000, 600);
  noStroke();
  image(img, 0, 0, img.width / 2, img.height / 2);
}

function draw() {

  //image(img, 0, 0, img.width / 2, img.height / 2); //draw image

  x = mouseX;
  y = mouseY;

  if (mouseIsPressed == true) {
    drawcolor = true;
    c = img.get(mouseX * 2, mouseY * 2);

  }


  //draw when clicked

  if (drawcolor == true) {

   fill(c);

    //draws ellipse at mouse point which moves and bounces off the side 
    ellipse(x, y, s, s);
  }
 // function mouseClicked() {
   //  for (mouseX < img.width / 2 && mouseY < img.height / 2) {
   //  var c = get(mouseX, mouseY);
   //  fill(c);
   //      ellipse(x, y, s, s);
  // }
 // 
  
  

  }
    function mouseClicked() {
   c = get(mouseX, mouseY);
    fill(c);
    ellipse(x, y, s, s);
   x = x + speed;
    if (x > width || x<0 ) {
      speed = !speed;
    }else if ( x<0){   
                        
     let speed=3;
    }
    }