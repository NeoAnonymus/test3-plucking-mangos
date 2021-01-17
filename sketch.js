
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1 = new Ground(600,570,1200,20);
 mango1 = new mango(200,100,20,20)
 boy1 = new boy(150,520,250,250)
 stone1 = new stone(70,470,20,20)
 sling = new slingshot(stone1.body,{x:70,y:470})
 
 tree1 = new tree(900,280,600,600)

 

	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground1.display();
  mango1.display();
  boy1.display();
  tree1.display();
  stone1.display();
  sling.display();

  drawSprites();
 
}
function mouseDragged(){

    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

	sling.fly()
	
	}


