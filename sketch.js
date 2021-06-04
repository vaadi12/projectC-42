
var bgImg, iss,issImg,spacecraft,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4

function preload(){
bgImg=loadImage("spacebg2.jpg")
issImg=loadImage("iss.png")
spacecraftImg1=loadImage("spacecraft1.png");
spacecraftImg2=loadImage("spacecraft2.png");
spacecraftImg3=loadImage("spacecraft3.png");
spacecraftImg4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(300, 150, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.6
  spacecraft=createSprite(350,280,40,40);
  spacecraft.addAnimation("atrest",spacecraftImg1);
  spacecraft.scale=0.25
}

function draw() {
  background(bgImg);  
  if (keyDown(RIGHT_ARROW) ) {
    spacecraft.positionX += 10
 spacecraft.changeAnimation("atright",spacecraftImg2)
}
if (keyDown(LEFT_ARROW) ) {
  spacecraft.positionX -=10
 spacecraft.changeAnimation("atleft",spacecraftImg3)
}
 if(keyDown(UP_ARROW)){
  spacecraft.positionY -=10
 }

  drawSprites();
}