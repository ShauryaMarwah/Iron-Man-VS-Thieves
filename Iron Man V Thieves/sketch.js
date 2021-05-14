
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = "Start"

	function preload()
	{
	intimg = loadImage ("IntoImage.jpg")
	imimg = loadImage ("FlyingImage.jpg")
	bankimg = loadImage ("Bank.png")
	}

	function setup() {
		createCanvas(800, 700);
		edges = createEdgeSprites();
		rectMode(CENTER);
		intro = createSprite(400, 350, 200, 200);
		intro.addImage(intimg);
		intro.scale = 0.5
		ironman = createSprite(20,25, 20,20)
	    ironman.shapeColor = "red"
	    ironman.addImage(imimg)
	    ironman.scale = 0.15
		cover = createSprite(20,25,60,60);
		cover.shapeColor = "black"
	
		//ironman.visible = false
		//Engine.run(engine);
	
	}


	function draw() {
	rectMode(CENTER);
	background(0);
	if(gameState==="Play") {
	//background(255);
	cover.destroy();
	var c1 = createSprite(150,0,4,200);
	c1.shapeColor = "grey"
	var c2 = createSprite(0,150,300,4);
	c2.shapeColor = "grey"
	var c3 = createSprite(200,100,100,4);
	c3.shapeColor = "grey"
	var c4 = createSprite(300,50,100,4);
	c4.shapeColor = "grey"
	var c5 = createSprite(350,150,4,200);
	c5.shapeColor = "grey"
	var c6 = createSprite(700,175,200,4);
	c6.shapeColor = "grey"
	var c7 = createSprite(400,175,100,4);
	c7.shapeColor = "grey"
	var c8 = createSprite(500,100,300,4);
	c8.shapeColor = "grey"
	var c9 = createSprite(500,250,300,4);
	c9.shapeColor = "grey"
	var c10 = createSprite(400,350,100,4);
	c10.shapeColor = "grey"
	var c11 = createSprite(350,300,4,100);
	c11.shapeColor = "grey"
	var c12 = createSprite(200,350,300,4);
	c12.shapeColor = "grey"
	var c13 = createSprite(50,350,4,200);
	c13.shapeColor = "grey"
	var c14 = createSprite(50,600,4,400);
	c14.shapeColor = "grey"
	var c15 = createSprite(100,300,100,4);
	c15.shapeColor = "grey"
	var c16 = createSprite(150,250,4,200);
	c16.shapeColor = "grey"
	var c17 = createSprite(200,250,4,200);
	c17.shapeColor = "grey"
	var c18 = createSprite(200,200,100,4);
	c18.shapeColor = "grey"
	var c19 = createSprite(150,450,4,200);
	c19.shapeColor = "grey"
	var c20 = createSprite(450, 450, 4, 200);
	c20.shapeColor = "grey"
	var c21 = createSprite(300,650,4,200);
	c21.shapeColor = "grey"
	var c22 = createSprite(700,350,200,4);
    c22.shapeColor = "grey"
	var c23 = createSprite(600,650,4,200);
	c23.shapeColor = "grey"
	var bank = createSprite (95, 480,10,18)
	bank.addImage(bankimg);
	bank.scale = 0.15
    theif1 = createSprite(260,300,10,10);
	theif2 = createSprite(280,300,10,10);
	theif3 = createSprite(300,300,10,10);
	theif4 = createSprite(320,300,10,10);
	ironman.visble = true
	ironman.bounceOff(edges);
	ironman.bounceOff(c1);
	ironman.bounceOff(c2);
	ironman.bounceOff(c3);
	ironman.bounceOff(c4);
	ironman.bounceOff(c5);
	ironman.bounceOff(c6);
	ironman.bounceOff(c7);
	ironman.bounceOff(c8);
	ironman.bounceOff(c9);
	ironman.bounceOff(c10);
	ironman.bounceOff(c11);
	ironman.bounceOff(c12);
	ironman.bounceOff(c13);
	ironman.bounceOff(c14);
	ironman.bounceOff(c15);
	ironman.bounceOff(c16);
	ironman.bounceOff(c17);
	ironman.bounceOff(c18);
	if (keyDown(UP_ARROW)) {
	ironman.y = ironman.y - 15;
  }
  if (keyDown(DOWN_ARROW)) {
	ironman.y = ironman.y + 15;
  }
  if (keyDown(RIGHT_ARROW)) {
	ironman.x = ironman.x + 15;
  }
  if (keyDown(LEFT_ARROW)) {
	ironman.x = ironman.x - 15;
	//ironmanimg.loadImage("FlyingImage2.jpeg")
	//ironman.addImage(ironmanimg)
  }
	}
	drawSprites();
	if(gameState==="Start") {
	fill(212)
	textSize(20)
	text("Iron Man VS Thieves", 310, 400)
	text("Press Space to Start", 310, 450)
	}
	if (keyCode===32 && gameState==="Start") {
		intro.destroy();
		background(0)
		gameState = "Play"
	}
	}



