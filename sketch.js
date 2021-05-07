var fixedRect;
var movingRect;


function setup() {
   createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
}

function draw() {
  background("black");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
   {
     fixedRect.shapeColor="green";
     movingRect.shapeColor="red";
   }
   else
   {
    fixedRect.shapeColor="grey";
    movingRect.shapeColor="grey";
   }
  drawSprites();
}