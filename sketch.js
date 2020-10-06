var engine, world;
var ground;
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = engine.create();
  world = engine.world();
ground = new Ground(240,height,800,20);

} 

var particles = [];
var plinkos = [];
var divisions = [];




function draw() {
  background(255,255,255);
  
  Ground.display();   
  Division.display();
  Plinko.display();
  Particle.display();



  drawSprites();


}