const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, platform, attachment;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(250,250,45,45);    
    platform = new Platform();
    attachment = new Attachment(ball.body,platform.body);
}

function draw(){
    background("cyan")
    Engine.update(engine);
    
    ball.display();
    platform.display();
    attachment.display();
    
    text("Press SPACE to move with mouse", 160,250)
    textFont("georgia")
    text("Press ENTER to release from mouse",155,265)
    

   
    

    


    
}