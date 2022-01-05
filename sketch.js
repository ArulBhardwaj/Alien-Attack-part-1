var score=0;

var spaceship,alien,ground;

var spaceshipImg,alienImg,groundImg;

var laser,blast;
var laserImg,blastImg;

var alienGroup;

var life = 3;
var gamestate=1;

function preload() {
  spaceshipImg=loadImage("spaceship.png");
  alienImg=loadImage("alien.png");
  groundImg=loadImage("ground.png");;
  laserImg=loadImage("laser.png");
  blast=loadImage("blast.png");
}
function setup() {
  createCanvas(1200,800);

  ground=createSprite(600,800,1200,50)
  ground.addImage(groundImg);
  ground.scale=4
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}