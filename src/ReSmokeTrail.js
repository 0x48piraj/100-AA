var x = 0;
var y = 0;
var t = 0;

function setup(){
  createCanvas(500,300);
  background(230);
  y = width/2;
  frameRate(100);
  
}

function draw(){
  strokeWeight(1.5);
  point(x,y);
  x = t/4;
  
  y = (noise(t/2)-0.5)*(x*x/600)+height/2;
  
  if(x>width/2){
    stroke(random(125)+125,0,0);
    y = y - (noise(t/2+0.01)-0.5)*(x*x/600);
  }
  
  t += ((width-x)/width);
  
  if(x==width){
    noLoop();
  }
  

}