function orb(){
    noStroke();
      a=random(100,500);
      fill(random(20,100),random(20,100),random(20,100),random(20,100));
      
      ellipse(random(0,width),random(0,height), a,a);
    
    }
    
    function alien() {
      let x1 = random(100, width - 100),
        y1 = random(height / 5, height / 2),
        x2 = random(50, width - 100),
        y2 = random(50, height - 100),
        x3 = random(50, width - 100),
        y3 = random(50, height - 100)
     // x3-x2>=100 || x2-x3>=100;
    
      let rad = random(20, 90);
      //rect(a3-a2,
     noStroke()
      //bod
      fill(0,random(0,width-100),random(height/5,height/2));
      // if(x3>x2){
      //ellipse(x3-x2,300,x3-x2,30);
      //fill(0,x1,y1);
      //} else if(x2>x3){
      //   ellipse(x3-x2,300,x3-x2,30);
      //fill(0,x1,y1);
      // }
    //stalk
      //if(x3-x2>=40){
      triangle(x1, y1, x2, 300, x3, 300);
      //} else{
      //  loop();
      //}
    
    
      push();
    
      //eye
      fill(255);
      ellipse(x1, y1, rad, rad)
      fill(0);
      ellipse(x1, y1, rad / 2, rad / 2)
    
     
    
      
      pop();
    }
    
    
    function setup() {
      createCanvas(400, 400);
      
    
    //bg
      background(random(20, 200), 0, random(20, 200));
     orb();
      orb();orb();orb();orb();orb();orb();
      
      
      //ALIEN
      //fill(0, random(0, width - 100), random(height / 5, height / 2));
      //ellipse(width / 2, 300, random(100, 300), random(100, 300));
      let eye=[1,2,3],
          op=random(eye)
      
      
      if(op==1){
      alien();
      }else if(op==2){
      alien();
        alien();
      }else if(op==3){
      alien();
        alien();
        alien();
      }
      
    
      noStroke()
      fill(0, random(0, width - 100), random(height / 5, height / 2));
      ellipse(width / 2, 300, random(330, width), random(100, 200));
      
      fill(0, random(0, width - 100), random(height / 5, height / 2));
      ellipse(width / 2, random(250,320), random(50, width/2), random(50, 100));
    
      //words
      let words = ['hi', 'are you','greeting', 'happy', 'who','hi','are you','i am','how','why','yes','no','sad','ok','hi','are you','i am','good','bad','hi','are you','i am'];
    let word = random(words); // select random word
      textSize(50)
      fill(255)
    text(word, 10, 50); // draw the word
      
       let button = createButton('new friend');
      button.position(300, 20);
      button.mousePressed(setup);
    }
    