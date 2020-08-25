var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321); 
  weight = random(30, 52);

  bullet = createSprite(50, 150, 100, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80);
  
  thickness = random(22, 83)
}

function draw() {
  background(0);
  
  bullet.collide(wall);
  
  if(wall.x - bullet.x < (bullet.width + bullet.width)/2)
  {
  bullet.velocityX = 0;  
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness); 
  if(damage > 10) 
  {
    wall.shapeColor = "red";
   }  

  if(damage < 10)
  { 
    wall.shapeColor = "green";
  }

drawSprites();
}
}