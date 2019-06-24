// Global Variables
let  p5Canvas;

let  names = [];
let  ballXValues = [];
let  ballYValues = [];
let  ballXVelocities = [];
let  ballYVelocities = [];

let  ballRadius  ; 

function setup() {
  
  noStroke(); 
  

  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  
  createElement("h1", "Welcome to CS3!");
  
  names = ["Darius","Amir","Kyra","Galvin","Kareem","Hu","Portia","Alea","Mary","Ray","Len","Chantale","Marny","Sybil","Amy","Colby","Imelda","Lani","Chester","Cassady"];
  ballRadius   = 50; 
  setStartLocationAndSpeed();
  
}

function draw() {

  background(100, 0, 100);
  drawBalls();

}


function setStartLocationAndSpeed() {
  for(let  i = 0; i < names.length; i++) {
   
    ballXValues[i] = random(ballRadius, width - ballRadius); 
    ballXVelocities[i] = random(1, 5);
    if(random(1) >= 0.5) {
      ballXVelocities[i] *= -1;
     }

    ballYValues[i] =random(ballRadius, height - ballRadius); 
    ballYVelocities[i] = random(1, 5);
    if(random(1) >= 0.5) {
    ballYVelocities[i] *= -1;
     
  }
}
}


function drawBalls() {
  for(let  i = 0; i < names.length; i++) {
   
    let  diameter = ballRadius  *2;
    if(ballXValues[i] >= width - ballRadius   || ballXValues[i] <= 0 + ballRadius  ) {
      ballXVelocities[i] *= -1;
    }
    if(ballYValues[i] >= height - ballRadius   || ballYValues[i] <= 0 + ballRadius  ) {
      ballYVelocities[i] *= -1;
    }
    ballXValues[i] += ballXVelocities[i];
    ballYValues[i] += ballYVelocities[i];
    
    fill("pink");
    ellipse(ballXValues[i], ballYValues[i], diameter, diameter);
 
    textSize(20);
    fill("white");
    textAlign(CENTER, CENTER);
    text(names[i], ballXValues[i], ballYValues[i]);
     
  }
}

function mousePressed(){
    
    let deletedName = (int(random(names.length))); 
    names.splice(deletedName,1);
        
    
  }
// function mousePressed(){
    
//     while(true) {
//     let myName = names.indexOf("Darius");
//     let deletedName = (int(random(names.length))); 
    
//     if (deletedName != myName || names.length === 1) {
//         names.splice(deletedName,1);
//         return
//       }
// }
//}