var box1;
var box2;
var ground;

//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creating world and engine from matter library for our use
var engine, world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world ;
   box1 = new Box(200, 300, 50, 50); 
   box2 = new Box(240, 100, 50, 100);
   ground = new Ground(200, 390, 400, 20);
}

function draw() {
  background("pink"); 
  Engine.update(engine); 
  box1.display();
  box2.display();
  ground.display();
}

