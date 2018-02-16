var stars = [];
var speed = 3;
var r,g,b;
var bling;
var x,y,z;
function preload(){
  bling = loadImage('bling.gif');

}
function setup() {
  createCanvas(windowWidth,windowHeight)
  x = windowWidth;
  y = 0;
  z = 0;
  //r = random(0,255);
  //g = random (0,255);
  //b = random (0,255);
  background(0);
  noStroke();
  for (var i = 0; i < 500;i++){
    stars[i]= new Star();

  }
}

function draw() {
  fill(0,20);
  rect(0,0,width,height);
   translate(width/2, height/2);
  //for my screen
  

  for(var i = 0; i < stars.length;i++){
    stars[i].update();
    stars[i].display();
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    stroke(r,g,b);
    strokeWeight(1);
    //the rect

  }
    image(bling,x,y,z,60,60);
  x = x - random(0,10);
  y = y + random(0,10);
  z = z + random(0,10);
    if (y>windowHeight){
      y = 0;

    }
  
  

}
class Star{
 constructor(){
   this.position = createVector(random(-width,width),random(-height,height),random(600));
   this.velocity = createVector(0, 0, 1);
   this.acceleration = createVector(0,0,0.02);

 }
 update(){
   this.velocity.add(this.acceleration);
   this.position.add(this.velocity);

   if (this.position.z <1){
     this.position.z = 600;
     this.position.x = random(-width,width);
     this.position.y = random(-height,height);
     
   }
  
 }
 display(){
   fill(r,g,b);
   stroke(r,g,b,300);
   strokeWeight(random(10));
   var sx = map(this.position.x/this.position.z,0,1.5,0,width);
   var sy = map(this.position.y/this.position.z,0,1.5,0,height);
   var r = map(this.position.z,0,width,15,0);
   ellipse(sx, sy, r, r);

  


 }

}
class img{
  constructor(){

  }
  display(){

  }
  move(){

  }
}
//nature of code
