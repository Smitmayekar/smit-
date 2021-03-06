const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Base();
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);
  

  block1 = new Block(340, 275, 40, 40);
  block2 = new Block(360, 235, 40, 40);
  block3 = new Block(380, 275, 40, 40);
  block4 = new Block(400, 235, 40, 40);
  block5 = new Block(420, 275, 40, 40);
  block6 = new Block(380, 195, 40, 40);
  blocks1 = new Block(650, 175, 40, 40);
  blocks2 = new Block(690, 175, 40, 40);
  blocks3 = new Block(670, 135, 40, 40);
  blocks4 = new Block(730, 175, 40, 40);
  blocks5 = new Block(710, 135, 40, 40);
  blocks6 = new Block(690, 95, 40, 40);


  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, { x: 100, y: 200 });
}
function draw() {
  background(153, 217, 234);

  
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("Score : " + score,750,50)
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}
