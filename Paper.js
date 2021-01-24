class Paper{

    constructor(x,y,radius){
        var options={
            isStastic:false,
            restitution:0.3,
            density:1.2   
    
            };
    
           this.body=Bodies.circle(x,y,radius,options);
           this.radius = radius;
           this.image=loadImage("paper.png")
          // this.image=load
           World.add(world, this.body);
       
    }
    display(){

        //push,pop,translate,rotate.
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius);
    }
}