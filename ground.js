class Ground{
    constructor(x,y){

      var option={isStatic:true

      }


    this.body=Bodies.rectangle(x,y,1200,50,option)
    this.x=x;
    this.y=y;
    World.add(world,this.body)


    }
  display(){
      push ();
    var x=this.body.position.x
    var y=this.body.position.y
    rectMode(CENTER)
    fill ("brown")
      rect(x,y,1200,50)
      

     pop ();
  }





}