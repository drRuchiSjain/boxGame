
var ball,slider;
var box;
var boxGroup;
var boxWidth = 70;
var score = 0;
var scores = 0;W

var ht = 750;
//VIBGYOR
function setup(){
var canvas = createCanvas(1200,700);

ball = createSprite(300,600,15,15);
ball.shapeColor="white";

slider = createSprite(300,650,200,25);
slider.shapeColor="blue";

ball.velocityY = -10;
ball.velocityX = 10;

boxGroup = new Group();

r = random(255); 
g = random(255); 
b = random(255); 
a = random(255); 

noStroke();
for (var col=1;col<=8;col++){
  for(var x=0 ; x<=17 ; x=x+1.1){
     box = createSprite(x*boxWidth+50,ht*col+30,boxWidth,30);
    box.shapeColor= color(r,g,b,a);
    boxGroup.add(box);
    box.immovable = true;
  }

}

edges=createEdgeSprites();
}

function draw() {
background(52);

slider.x = mouseX;
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  //ball.bounceOff(edges[3]);
ball.bounceOff(slider);
//ball.bounceOff(boxGroup);

ball.bounceOff(boxGroup, explosion);



/*r = random(255); // r is a random number between 0 - 255
g = random(100,200); // g is a random number betwen 100 - 200
b = random(100); // b is a random number between 0 - 100
a = random(200,255); // a is a random number between 200 - 255

noStroke();
for (var col=1;col<=8;col++){
  for(var x=0 ; x<=9 ; x=x+1.1){
    
    box = createSprite(x*boxWidth+50,ht*col+30,boxWidth,30);
    box.shapeColor= color(r,g,b);
    boxGroup.add(box);
  }
i++;
}*/
if (frameCount % 32 === 0){
  scores = scores + 1;
}

drawSprites();
textSize(30);
text(scores,800,30);

}

function explosion(ball, box) {
  box.remove();
  score = score + 5; 

}