var t=0;

function setup(){createCanvas(200,200);noStroke();}

function draw(){
  background(230);
  fill(noise(t)*255);
  ellipse(width/2,height/2,30*noise(t/1.3),30*noise(t/1.3));
  t+=0.01;
}