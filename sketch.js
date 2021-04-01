const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground, hero, sting, monster, sting2;
//var bgImage;

var block = [];

function preload() {

  bg=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200, 620);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,600,1220,10);
  hero = new Hero(400,800,250);
  sting = new Fly(hero.body,{x:400,y:50});
  monster = new Monster(1100,550);

  for(var i=0; i<7; i++){

    block.push(new Block(650,100));

  }
  for(var i=0; i<6; i++){
    block.push(new Block(720,100));
  }
  for(var i=0; i<8; i++){
    block.push(new Block(790,100));
  }
  for(var i=0; i<5; i++){
    block.push(new Block(860,100));
  }

}

function draw() {

  background(bg);

  Engine.update(engine);

  ground.display();
  

  for(var j=0; j<block.length; j++){

    block[j].display();

  }
 hero.display();
  sting.display();
  monster.display();
/*if(hero.body.position.x>730 ){

  Matter.Body.setStatic(monster.body,false);

  }*/

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  //console.log(hero.body.position.x);

}

//function mouseReleased(){
//
//  if(hero.body.position.x>50 ){
//
//  sting2.fly();
//  Matter.Body.setStatic(monster.body,false);
//}
//
//}

