class Paper{
    constructor(x,y){
       var options={isStatic:false,restitution:0.3,friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body); 
    }
    display(){
      var pos=this.body.position;
      pos.x=this.body.position.x;
      pos.y=this.body.position.y;
      ellipseMode(RADIUS);
      fill("purple");
      circle(pos.x,pos.y,20);    
    }
}