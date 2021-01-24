
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var ground;
var leftSide,rightSide,bottomSide;
var binIMG,bin;

function preload()
{
binIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
    paper = new Paper(100,500,20);
	
ground = new Ground(400,580,800,10);

bin = createSprite(611,520,20,20);
bin.addImage(binIMG);
bin.scale=0.50;

leftSide = new Dustbin(560,520,20,100)
rightSide = new Dustbin(630,560,90,20)
bottomSide = new Dustbin(640,520,20,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
paper.display();
ground.display();

leftSide.display();
rightSide.display();
bottomSide.display();

drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:58,y:-58});

}


}