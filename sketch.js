const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1200,600);
	paperObj=new Paper(200,450,40);
	groundObj=new Ground(width/2,650,width,20);
	//Create a Ground
	

	Sling=new Launcher(paperObj.body,{x:300,y:400});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(20,0,10);
 
  dustbinObj.display();
  paperObj.display();
  groundObj.display();
  Sling.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:45,y:-85});
    
  	}
}
function mouseDragged(){
	Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY});
//to drag ball where mouse moves
}

function mouseReleased(){
	
		//code for ASCII code 32 means spacebar
		Sling.fly();
	
}
