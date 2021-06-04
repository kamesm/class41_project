const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var maxDrops=100;
var drop = [];
var umbrella;

var thunder;

function preload(){
   
}

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    for(var i=0; i<maxDrops;i++){
        drop.push(new Drop(random(0,400),random(0,400)));
    }
    umbrella = new Umbrella(200,500);
}

function draw(){ 
    background(0);
    thunder = createSprite(random(0,350),random(10,20),10,10);
    

    Engine.update(engine);
    for(var i=0; i<maxDrops;i++){
        drop[i].display();
        drop[i].update();
    }    
    umbrella.display();
}   

