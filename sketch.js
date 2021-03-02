var movingRect
var fixedRect

var rect1
var rect2

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green"
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green"

  rect1 = createSprite(200,50,80,30);
  rect1.velocityY = 1
  rect2  = createSprite(200,380,50,80)
  rect2.velocityY = -1
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "red"
}
else {
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
}

if (rect1.y-rect2.y < rect1.height/2 + rect2.height/2 &&
  rect2.y - rect1.y < rect1.height/2 +rect2.height/2) {
    rect1.velocityY = rect1.velocityY * -1
    rect2.velocityY = rect2.velocityY * -1
  }
  if (rect1.x-rect2.x < rect1.width/2 + rect2.width/2 &&
    rect2.x - rect1.x < rect1.width/2 +rect2.width/2) {
      rect1.velocityX = rect1.velocityX * -1
      rect2.velocityX = rect2.velocityX * -1
    }
  drawSprites();
}