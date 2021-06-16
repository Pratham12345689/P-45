var p1,p2,p1img,p2img,bg,score;

function preload(){
  bg=loadImage("bg.png");


}


function setup() {
  createCanvas(displayWidth-20,displayHeight-130);
 
  p1=createSprite(325,310,90,90) ;
  p2=createSprite(1082,300,90,90) ;
}

function draw() {
  background(bg); 

if(keyDown("a")){
  p1.x-=6;

}
  
 


if(keyDown("d")){
  p1.x+=6;
}

if(keyDown("LEFT_ARROW")){
  p2.x-=6;
}

if(keyDown("RIGHT_ARROW")){
  p2.x+=6;
}








 
  drawSprites();
  textSize(30);
  fill("white");
}