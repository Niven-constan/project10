var ship, shipAni;
var sea, seaBg;
function preload(){
  shipAni = loadAnimation('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png');
  sea = loadImage('sea.png');
}

function setup(){
  createCanvas(400,400);

  seaBg = createSprite(200, 200, 400, 400);
  seaBg.addImage('sea', sea);
  seaBg.scale = 0.2;

  ship = createSprite(100, 200);
  ship.addAnimation('ship', shipAni);
  ship.scale = 0.2;
  
  
}

function draw() {
  background("sea.png");
  ship.x = ship.x+4


  drawSprites();
}