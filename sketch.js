
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
ground= new Ground(width/2,600,width,20);

tree= new Tree(950,300,600,600);
	
mango1= new Mango(900,100,50,50);
mango2= new Mango(820,100,50,50);
mango3= new Mango(1000,150,50,50);
mango4= new Mango(1111,170,50,50);
mango5= new Mango(850,190,50,50);

stone=  new Stone(230,430,60,60);

launcher= new Launcher(stone.body,{x:230,y:430});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 Engine.update(engine);

 ground.display();
  image(boy,200,340,200,300);

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  stone.display();
  launcher.display();

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	launcher.fly();
}
function detectCollision(stone, mango) {
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;
  
	const distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  
	if (distance <= mango.w + stone.w) {
	  Matter.Body.setStatic(mango.body, false);
	}
  }



