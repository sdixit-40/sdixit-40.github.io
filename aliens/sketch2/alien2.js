function preload() {
    //data = loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json")
    data = loadJSON("https://github.com/dariusk/corpora/blob/master/data/technology/new_technologies.json")
  //
  
    //data from corpora, github
  }
  
  function orb() {
    let w = width,
      h = height;
    noStroke();
    a = random(h / 8, h / 2);
    fill(random(20, 100), random(20, 100), random(20, 100), random(20, 100));
  
    ellipse(random(0, w), random(0, h), a, a);
  
  }
  
  function bodyspot() {
      push();
    let w = width,
      h = height;
    const r = w * 0.25;
    digit = [3, 4, 5, 6, 7, 8, 9];
  
    numVertices = random(digit);
    spacing = 360 / numVertices;
  
  
    noStroke();
    fill(0, random(0, 300), random(100, 200), random(50, 100));
  
    let my = height / 4,
      mx = width / 4
  
    translate(w / 2, h / 2);
    translate(random(-mx, mx), random(-my, my));
  
    beginShape();
    for (let i = 0; i < numVertices + 1; i++) {
  
  
      const angle = i * spacing;
      const x = cos(radians(angle)) * w / 4;
      const y = sin(radians(angle)) * w / 4;
  
      if (i == 0) {
  
        vertex(x, y);
      } else {
  
        const cAngle = angle - spacing / 2;
        const cX = cos(radians(cAngle)) * 180;
        const cY = sin(radians(cAngle)) * 180;
        quadraticVertex(cX, cY, x, y)
      }
    }
    endShape();
  
    noLoop();
    pop();
  }
  
  function eyestalk() {
    let w = width,
      h = height;
  
    let my = height / 4,
      mx = width / 4
  
    let x1 = random(mx, w - mx),
      y1 = random(my, h - my);
  
  
    let rad = random(h / 20, h / 4);
  
  
  
  
    push();
  
    //eye
    fill(255);
    ellipse(x1, y1, rad, rad)
    fill(0);
    ellipse(x1, y1, rad / 2, rad / 2)
  
  
  
  
    pop();
  
  
  }
  
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    let w = width,
      h = height;
    let my = height / 4,
      mx = width / 4;
  
    //bg
    background(random(20, 200), 0, random(20, 200));
    for (o = 1; o <= 10; o++) {
      orb(o);
    }
  
  
    //ALIEN
    //shape
    // main bod
    push();
    noStroke();
    fill(0, random(0, 300), random(100, 200));
  
    translate(w / 2, h / 2);
    spacing = 360 / random(3, 12);
  
    beginShape();
    for (let i = 0; i < 10; i++) {
      const x = cos(radians(i * spacing)) * (w / 2);
      const y = sin(radians(i * spacing)) * (h / 2);
      vertex(x, y);
    }
  
    endShape();
    pop();
    //draw upto 9 eyes
  
    let eye = [1, 2, 3, 4, 5, 6],
      op = random(eye)
  
    for (b = 1; b <= 5; b++) {
      bodyspot(b);
  
    }
    for (e = 1; e <= op; e++) {
      eyestalk(e);
    }
  
    //words
    //let words = data.programming_languages_popular;
    let words=data.technologies;
    let word = random(words); // select random word
    textSize(height/20)
    fill(255)
    text(word, width / 15, height / 10);
    //}
  
  
  
    let button = createButton('new friend');
    button.position(3 * w / 4, h / 12);
    button.mousePressed(setup);
    //button.textSize=30 
  
    let saveas=createButton('save');
    saveas.position(3 * w / 4,  h / 6);
    saveas.mousePressed(saveCanvas('alien.jpg'));
  
  }