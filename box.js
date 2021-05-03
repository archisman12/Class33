class Box{
    constructor(x,y,width,height){

      var option= {restitution:0.2,
        friction:0.4,
        density:0.6

      }


    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width;
    this.height=height;
    World.add(world,this.body)


    }
  display(){
      
    var x=this.body.position.x
    var y=this.body.position.y
    var angle=this.body.angle
    push ();
      translate(x,y)
      rotate(angle)
      rectMode(CENTER)
    
    angleMode(RADIANS)
    
    fill ("green")
    strokeWeight(2)
    stroke("black")
    rect(0,0,this.width,this.height)
     pop (); 

  }

}