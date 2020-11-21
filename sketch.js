
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	

	ball = new Ball(200,300,5);

	ground = new Ground(600,height,1200,20)

	box1 = new Box(880,550,20, 200);
	box2 = new Box(990,600,200, 20);
	box3 = new Box(1090,550,20, 200);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

ball.display();
ground.display();

box1.display();
box2.display();
box3.display();

keyPressed();
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body, ball.body.position ,{x:0.2, y:-0.2})
ball.body.velocityY = ball.body.velocityY + 0.8


}

}


