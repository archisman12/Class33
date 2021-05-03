class Ball{
    constructor(x,y,radius){

      var option= {restitution:0.2,
        friction:0.4,
        density:0.6

      }


    this.body=Bodies.circle(x,y,radius,option)
    this.x=x;
    this.y=y;
    this.radius=radius;
    World.add(world,this.body)


    }
  display(){
      
    var x=this.body.position.x
    var y=this.body.position.y
    var angle=this.body.angle
    push ();
      translate(x,y)
      rotate(angle)
      ellipseMode(CENTER)
    
    angleMode(RADIANS)
    
    fill ("brown")
    strokeWeight(2)
    stroke("black")
    ellipse(0,0,this.radius)
     pop (); 

  }

}