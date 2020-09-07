var car, wall;
var speed 
var weight

var deformation 

function setup() {
createCanvas(800,400);

speed = random(50, 100);
weight = random(400, 2500);

wall = createSprite(780, 200, 60, 200);

car = createSprite(100, 200, 30, 20);

deformation = 0.5*weight*speed*speed/22500;

car.velocityX = speed;


}


function draw() {
  background(0,0,0); 
  
  if(car.collide(wall)) {

  if (deformation < 100) {
    car.shapeColor=color(0, 255, 0)
    car.velocityX = 0
  } 
   if(deformation < 180 && deformation > 100) {
    car.shapeColor=color(230, 230, 0)
    car.velocityX = 0
  } 
   if(deformation > 180) {
    car.shapeColor=color(255, 0, 0)
    car.velocityX = 0
  }

} 
  drawSprites();
}