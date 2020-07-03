const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Global variables
var engine, world;
var bin1, bin2, bin3;
var ground;
var ball;

function setup(){
	// Create Canvas
	var canvas = createCanvas(1600,700);
	
	// Create Engine
    engine = Engine.create();
    world = engine.world;

    // Create Object for ground
    ground = new Ground(600,height,1600,20)

	// Create the 3 conponent objects for the bin
	bin1 = new Dustbin(1070, 680, 250, 20);
    bin2 = new Dustbin(950, 650, 20, 500);
	bin3 = new Dustbin(1200, 650, 20, 500);
	
	// Create object for ball
	ball = new Paper(150, 365, 100);
	
	// Run the code using physics engine
	Engine.run(engine);
}

function draw(){
    background(255);
    Engine.update(engine);

	// Display all objects
    bin1.display();
	bin2.display();
	bin3.display();
	ground.display();
	ball.display();
	
	keypressed();
	
}

// Function for making the ball jump into the bin
function keypressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85 ,y:-85});
		
	}
}
