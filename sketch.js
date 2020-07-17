const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight = 300;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,5));
    }
Engine.run(engine)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  ground.display();

  if(frameCount%60===0){
    console.log("hello")
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
}