const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var maxDrops=100;
var drop = [];
var umbrella;

var thunder;
var thunder1, thunder2, thunder3, thunder4;
var randomnum;

var thunderCreatedFrame;

function preload(){
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
   thunder3 = loadImage("3.png");
   thunder4 = loadImage("4.png");
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

    Engine.update(engine);
    for(var i=0; i<maxDrops;i++){
        drop[i].display();
        drop[i].update();
    }    
    umbrella.display();

    randomnum = Math.round(random(1,4));

    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(0,350),random(10,20),10,10);
        thunder.scale = random(0.3,0.6);
        switch(randomnum){
        case 1: 
            thunder.addImage(thunder1)  
        break;
        case 2: 
            thunder.addImage(thunder2)  
        break;
        case 3: 
            thunder.addImage(thunder3)  
        break;
        case 4: 
            thunder.addImage(thunder4)  
        break;
        default: break;
        }
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}   

