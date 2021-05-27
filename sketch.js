var ball,box, slider,r,g,b;
var boxWidth = 70;
var ht = 50;
var score=0;
var scores=0;
var gameState='Play';
function setup(){
    var canvas = createCanvas(1200,700);
    
    ball = createSprite(300,600,15,15);
    ball.shapeColor="white";
    
    slider = createSprite(600,650,100,15);
    slider.shapeColor="blue";
    
    ball.velocityY = -17;
    ball.velocityX = 17;
    
    boxGroup = new Group();
    
    r = random(255); 
    g = random(255); 
    b = random(255); 
    a = random(255); 
    
    noStroke();
    for (var col=1;col<=8;col++){
      for(var x=0 ; x<=16 ; x=x+1.1){
         box = createSprite(x*boxWidth+50,ht*col+30,boxWidth,30);
        box.shapeColor= color(r,g,b,a);
        boxGroup.add(box);
        box.immovable = true;
      }
    
    }
    
    edges=createEdgeSprites();
    }
    
    function draw(){
    background(0);
if(gameState==='Play'){
    slider.x = mouseX;
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    // ball.bounceOff(edges[3]);
    ball.bounceOff(slider);
    ball.bounceOff(boxGroup, explosion);

  if (frameCount % 32 === 0){
    scores = scores + 1;
  }
  
  
  textSize(30);
  text(scores,800,30);
[]
  if (!boxGroup[0]){
      gameState='End';
  }
  if (ball.isTouching(edges[3])){
    gameState = "Lost";
  }
}

if(gameState === 'End'){
  ball.velocityX = 0;
  ball.velocityY = 0;
  textSize(30);
  stroke("red");
  strokeWeight(4);
  text("Well Done!! You won the game",300,200);
}

if(gameState === 'Lost'){
  ball.velocityX = 0;
  ball.velocityY = 0;
  textSize(30);
  stroke("red");
  strokeWeight(4);
  text("Try Again!! You lost the Game",300,500);
}


drawSprites();
    }

    function explosion(ball, box) {
        box.remove();
        score = score + 5; 
      
      }