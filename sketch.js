
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var bloco1_opitions = {
	restitution:0.5,
	friction:0.05,
	frictionAir:0
}
var bloco2_opitions = {
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}
var bloco3_opitions = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_opitions={
isStatic:true
}
plane=Bodies.rectangle(400, 690, 800, 10, plane_opitions)
World.add(world,plane)
Engine.run(engine);
bloco1=Bodies.circle(220, 10, 10, bloco1_opitions)
World.add(world,bloco1)
bloco2=Bodies.rectangle(110, 50, 10, 10, bloco2_opitions)
World.add(world,bloco2)
bloco3=Bodies.rectangle(350, 50, 10, 10, bloco3_opitions)
World.add(world,bloco3)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
Engine.update(engine) 
rect(plane.position.x, plane.position.y, 800,10)
ellipse(bloco1.position.x, bloco1.position.y, 10,10)
rect(bloco2.position.x, bloco2.position.y, 10,10)
rect(bloco3.position.x, bloco3.position.y, 10,10)

}



