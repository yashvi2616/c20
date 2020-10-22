var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.debug=true;
 fixedRect.shapeColor="yellow";
 movingRect=createSprite(150,200,50,100);
 movingRect.debug=true;
 movingRect.shapeColor="red";
 gameObject1=createSprite(100,100,50,50);
 gameObject1.shapeColor="pink";
 gameObject2=createSprite(200,100,50,50);
 gameObject2.shapeColor="purple";
}

function draw() {
  background(0,0,0);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    
    movingRect.shapeColor="blue";
    object1.shapeColor="blue";

  }
  else{
    movingRect.shapeColor="green";
    object1.shapeColor="green";
    
  }




  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.height/2+object1.height/2
    && object1.y-object2.y<object2.height/2+object1.height/2){
   return true;
  } 
  else{
   return false; 



  }
}