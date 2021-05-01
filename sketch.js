var bullet, wall;
var speed, weight,thickness;


function setup() {

  createCanvas(1600,400);

  bullet = createSprite(150, 150, 50, 20);

  //bullet.debug = true;

  wall = createSprite(1200, 150, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  //wall.debug = true;

  speed = random(223, 321);
  weight = random(30, 52);

  thickness=random(22, 83);

} 

function draw() {

  background("lightblue");  
  bullet.velocityX = speed;

  if(wall.x-bullet.x < (bullet.width + wall.width ) /2)
  {
    bullet.x  = 1125;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
      wall.shapeColor = "red";
    }

    
    if(damage<10)
    {
      wall.shapeColor = "green";
    }
  }

  drawSprites();

}