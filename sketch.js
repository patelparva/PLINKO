const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var border1,border2,border3,border4,plinko,plinkos,particles,divisions;
var divisionHt=300;

plinkos=[];
particles=[];
divisions=[];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;
    
  Engine.run(engine);

  border1=new Ground(width/2,795,width,10);
  border2=new Ground(width/2,5,width,10);
  border3=new Ground(5,height/2,10,height);
  border4=new Ground(475,height/2,10,height);

  for (var i = 5; i <= width; i=i+78) {
    divisions.push(new Division(i,height-divisionHt/2,10,divisionHt));
  }

  for (var i=40; i <=width ; i=i+50) {
    plinkos.push(new Plinko(i,75));
  }

  for (var i=15; i <=480 ; i=i+50) {
    plinkos.push(new Plinko(i,175));
  }

  for (var i=45; i <=480 ; i=i+50) {
    plinkos.push(new Plinko(i,275));
  }

  for (var i=15; i <=480 ; i=i+50) {
    plinkos.push(new Plinko(i,375));
  }
}

function draw() {
  background(0);  

  Engine.update(engine);

  border1.display();
  border2.display();
  border3.display();
  border4.display();

  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }  
  
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
}