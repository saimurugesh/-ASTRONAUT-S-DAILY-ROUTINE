var astronaut;

var sleep;
var eat;
var brush;
var drink;
var bath;
var gym;
var move;

var backgroundsprite;
var backgroundI;

var edges;

function preload(){
  backgroundI = loadImage("iss.png");

  sleep = loadImage("sleep.png");
  eat = loadAnimation("eat1.png","eat2.png");
  brush = loadAnimation("brush.png");
  bath = loadAnimation("bath1.png","bath2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move = loadAnimation("move.png","move1.png");
  drink = loadAnimation("drink1.png","drink2.png");
}

function setup() {
  createCanvas(600,400);

  backgroundsprite = createSprite(width/2,height/2);
  backgroundsprite.addImage(backgroundI);
  backgroundsprite.scale = 0.12;

  astronaut = createSprite(width/2,232,10,10);
  astronaut.addImage(sleep);
  astronaut.scale = 0.1;

  astronaut.setCollider("rectangle",0,0,1500,2500);
  //astronaut.debug = true;
}

function draw() {
  background(220);

 if(keyDown("space")){
  astronaut.addAnimation("move",move);
  astronaut.changeAnimation("move");

  astronaut.y = 230;

  astronaut.velocityY = 2;
  astronaut.velocityX = 1;
}

 if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("brush",brush);
  astronaut.changeAnimation("brush");

  astronaut.y = 230;

  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
 } 

 if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bath",bath);
  astronaut.changeAnimation("bath");

  astronaut.y = 230;

  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
 } 

 if(keyDown("UP_ARROW")){
  astronaut.addAnimation("eat",eat);
  astronaut.changeAnimation("eat");

  astronaut.y = 170;

  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
 } 

 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("drink",drink);
  astronaut.changeAnimation("drink");

  astronaut.y = 230;

  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
 } 

 if(keyDown("g")){
  astronaut.addAnimation("gym",gym);
  astronaut.changeAnimation("gym");

  astronaut.y = 230;

  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
 } 

 edges = createEdgeSprites();
 astronaut.collide(edges);

 drawSprites();

 fill("white");
 textSize(18);
 text("Instructions:",5,20);

 textSize(12)
 text("Up Arrow = Eating",5,45);
 text("Down Arrow = Drinking",5,60);
 text("Left Arrow = Bathing",5,75);
 text("Right Arrow = Brushing",5,90);
 text("Space Key = Moving",5,105);
 text("G Key = Gymming",5,120);
}
