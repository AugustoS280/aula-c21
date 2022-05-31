const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola 
var solo, parede, parede_2
var limiteDePulo

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    solo = new Parede(400,670,800,60);
	parede = new Parede(585, 610, 30,140 )
	parede_2 = new Parede(670, 610, 30, 140)

	limiteDePulo = 0
	
	var opcao = {
		restitution : 0.3,
		density : 0.5,
		frictionAir: 0.05
	}
	bola = Bodies.circle(100,600,10,opcao)
	World.add(world, bola)
	
	

	
	
	

	//Create the Bodies Here.

    
}


function draw() {
    rectMode(CENTER)
	background("yellow");

	ellipse(bola.position.x, bola.position.y, 20)
	fill("black")
	
	keyW()

	solo.mostrar()
	parede.mostrar()
	parede_2.mostrar()
	Engine.update(engine)

	
 
}


function keyW(){
	if(keyCode === UP_ARROW && limiteDePulo == 0){
	 Matter.Body.applyForce(bola,{x:0, y:0},{x:14.5, y:-10})
	 limiteDePulo = 1
	}
	
}






