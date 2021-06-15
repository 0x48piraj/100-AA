var x,y,t;

function setup(){ background(255); createCanvas(600,600); }

function draw(){
  x = random(width*1.5)-width/4;
  y = random(height*1.5)-height/4;
  stroke(0); line(width/2 + random(-28,28),height/2 + random(-28,28),x,y);
  fill(255); noStroke(); ellipse(width/2,height/2,80,80);
  fill(255,5); rect(0,0,width,height);
}