const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground








function setup(){
    createCanvas(1360,500);
    engine = Engine.create();
    world = engine.world;

ground1=new Ground(975,353,300,15)
box1=new Block(875,320,50,50)
box2=new Block(925,320,50,50)
box3=new Block(975,320,50,50)
box4=new Block(1025,320,50,50)
box5=new Block(1075,320,50,50)
box6=new Block(900,270,50,50)
box7=new Block(950,270,50,50)
box8=new Block(1000,270,50,50)
box9=new Block(1050,270,50,50)
box10=new Block(925,220,50,50)
box11=new Block(975,220,50,50)
box12=new Block(1025,220,50,50)
box13=new Block(950,150,50,50)
box14=new Block(1000,150,50,50)
box15=new Block(975,80,50,50)



}


function draw(){
    background("black")
Engine.update(engine)
ground1.display()
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
}










