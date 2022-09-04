
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObj=new Ground(width/2,670,width,20)
    leftSide=new Ground(1100,600,20,120)
	rightSide=new Ground(1300,600,20,120)
	ball=Bodies.circle(200,100,20)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed() {
if (keyCode==UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:0.07,y:-0.07})
	
}
}




