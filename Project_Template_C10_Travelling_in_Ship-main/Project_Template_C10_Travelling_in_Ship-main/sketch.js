var sea;
var seaImg;
var shipImg;
var ship;

function preload(){
 seaImg= loadImage("sea.png");
 shipImg= loadAnimation ("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (300,180,600,2);
  sea.addImage (seaImg);
  sea.velocityX=-4;
  sea.x=sea.width/2;

  ship = createSprite(100,300,10,10);
  ship.addAnimation("sailing", shipImg);
  ship.scale=0.2;
}

function draw() {
  background("blue");
  //Infinite Ground
  if(sea.x<0){
    sea.x=sea.width/2;
   }
  drawSprites();
}