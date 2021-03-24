var garden,gardenImg;
var cat,catImg,catAni,catFinal;
var mouse,mouseImg,mouseAni,mouseFinal;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
    catAni=loadAnimation("images/cat2.png","images/cat3.png");
    mouseAni=loadAnimation("images/mouse2.png","images/mouse3.png");
    catFinal=loadImage("images/cat4.png");
    mouseFinal=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(970,700);
    //create tom and jerry sprites here
    garden=createSprite(485,350,20,20);
    garden.addImage("park",gardenImg);
    garden.scale=1;    

    cat=createSprite(750,600,50,10);
    cat.addAnimation("animal",catImg);
    cat.scale=0.1;

    mouse=createSprite(150,600,10,10);
    mouse.addAnimation("animal2",mouseImg);
    mouse.scale=0.1;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    if(cat.isTouching(mouse)){
      cat.addAnimation("catFinalImg",catFinal);
      cat.changeAnimation("catFinlaImg");
      mouse.changeAnimation("mouseFinalImg",mouseFinal);
      mouse.addAnimation("mouseFinalImg");
  }

    
    keyPressed();
    
    
      

        
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catAni);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTezing",mouseAni);
    mouse.changeAnimation("mouseTezing");
    }
    
}









    






    
    

