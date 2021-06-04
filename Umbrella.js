class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body);
        this.radius = 10;
    }
    display(){
        image(this.image,this.body.position.x-140,this.body.position.y-70,300,300);    
    }
}