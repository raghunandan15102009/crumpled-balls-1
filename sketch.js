
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,gd,box1,box,box2;

function setup() {
	createCanvas(1200, 2000);


	engine = Engine.create();
	world = engine.world;

	ball=new Paper(200,350);
  gd=new Ground(600,400,1200,20);
  box1=new Box(1000,400,200,20);
  box=new Box(900,360,20,100);
  box2=new Box(1100,360,20,100);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ball.display();
  gd.display();
  box1.display();
  box.display();
  box2.display();
  if(keyDown("UP_ARROW")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-85})
  }
  drawSprites();
}



