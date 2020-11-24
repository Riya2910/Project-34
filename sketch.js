
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2,windowHeight/2);
	engine=Engine.create()
	world= engine.world()
let canvasmouse = Mouse.create(canvas.elt)
canvasmouse.pixelRtaio = pixelDensity()
let options = {
	mouse: canvasmouse
}
mConstraint = MouseConstraint.create(engine, options)
World.add(world, mConstraint);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Pendulum(200,450,40)
	bobObject2 = new Pendulum(400,450,40)
	bobObject3 = new Pendulum(600,450,40)
	bobObject4 = new Pendulum(800,450,40)
	bobObject5 = new Pendulum(1000,450,40)
	rope2=new Sling(bobObject2.body,roofObject.body,-bobDiameter*2,0)
	rope3=new Sling(bobObject3.body,roofObject.body,-bobDiameter*2,0)
	rope4=new Sling(bobObject4.body,roofObject.body,-bobDiameter*2,0)
	rope5=new Sling(bobObject5.body,roofObject.body,-bobDiameter*2,0)

	



	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1 .display()
  	bobObject2.display() 
	bobObject3 .display()
	bobObject4 .display()
	bobObject5 .display()
	rope2.display();
   rope3.display();
	rope4.display();
	 rope5.display();




	

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x: mouseX, y:MouseY})
}

