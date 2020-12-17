var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}
function draw() {
  background(0); 

  console.log(movingRect.x-fixedRect.x);
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2//to detect the collision from top and bottom ok?
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
}