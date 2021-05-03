const Body=Matter.Body;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




var ground1;
var slingshot;
var ball
var engine,world;

function setup(){
var canvas=createCanvas(1500,800)
engine=Engine.create();
world=engine.world;
Engine.run(engine);
ground1=new Ground(600,780)
ball=new Ball(300,500,70)

box1=new Box(700,730,100,50)
box2=new Box(700,680,100,50)
box3=new Box(700,630,100,50)
box4=new Box(700,400,100,50)
box5=new Box(700,730,100,50)
box6=new Box(700,680,100,50)
box7=new Box(700,630,100,50)
box8=new Box(700,400,100,50)

box9=new Box(800,730,100,50)
box10=new Box(800,680,100,50)
box11=new Box(800,630,100,50)
box12=new Box(800,400,100,50)
box13=new Box(800,730,100,50)
box14=new Box(800,680,100,50)
box15=new Box(800,630,100,50)
box16=new Box(800,400,100,50)

box17=new Box(900,730,100,50)
box18=new Box(900,680,100,50)
box19=new Box(900,630,100,50)
box20=new Box(900,400,100,50)
box21=new Box(900,730,100,50)
box22=new Box(900,680,100,50)
box23=new Box(900,630,100,50)
box24=new Box(900,400,100,50)

Slingshot1 = new Slingshot(ball.body,{x:300,y:400});




}


function draw(){
background("yellow")
Engine.update(engine);


ground1.display()
ball.display()
Slingshot1.display()

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()

box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
//box25.display()


}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY})
  
  }
  