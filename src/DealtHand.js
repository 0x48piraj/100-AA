//You've got play the hand you've been dealt
//If there is anyone who can play the cards its you
//Bsign, know when to hold em. Know when to fold em.

//Unfinished

var t = 0;
var T = 0;

function setup(){
  background(230);
  createCanvas(400,400);
  
}


function draw(){
 T = 500;
 
    if(t<T){
      fill(255-(t/T)*300);
      rect(random(width),random(height),15,25);
      console.log(t);
      t += 1;
    }else{
      var i;
      for(i = 0;i<100;i++){
        fill(255,0,0);
        if(i>10){
          rect(130,200,15,25);
        }else{ if(i>20){
          rect(150,200,15,25);
        }
        }
      }
      }
    }