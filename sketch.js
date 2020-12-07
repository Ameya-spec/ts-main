const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon;
var shapeImage;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var slingShot;
//var backgroundImg;



function preload(){
   
shapeImage = loadImage("sprites/polygon.png");

//backgroundImg = loadImage("sprites/background.png")
}

function setup(){
    
    createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    //Bodies
    polygon = createSprite(200,250,10,10);
    polygon.addImage("shapeImage",shapeImage);
    polygon.scale=0.15;
    block1 = new Blocks(800,400,10,10);//done
    block2 = new Blocks(870,400,10,10);//done
    block3 = new Blocks(730,400,10,10);//done
    block4 = new Blocks(940,400,10,10);//done
    block5 = new Blocks(765,330,10,10);//done
    block6 = new Blocks(835,330,10,10);//done
    block7 = new Blocks(905,330,10,10);
    block8 = new Blocks(800,260,10,10);
    block9 = new Blocks(870,260,10,10);
    block10 = new Blocks(835,190,10,10);
  slingShot= new Slingshot(polygon,{x:200,y:100});
  

    Engine.run(engine);
}

function draw(){
    background("ghostRed");
   
    Engine.update(engine);

    strokeWeight(4);

   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    slingShot.display();
   
//    detectcolision(block1,polygon)
    drawSprites();
}
// function detectcolision(block1,polygon){
// block1BodyPosition = block1.body.position;
// polygonBodyPosition = polygon.body,position;

// }