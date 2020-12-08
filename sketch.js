var bullet,bulletWeight,bulletSpeed;
var wall,wallThickness;
var object1,object2;
var spaceImage,space;

function preload() {
    spaceImage=loadImage("space.png");
}

function setup() {
createCanvas(1600,400);

wallThickness=random(22,83);
bulletSpeed=random(223,321);
bulletWeight=random(30,52);

bullet=createSprite(40,200,50,10);

wall=createSprite(1200,200,wallThickness,height/2);
wall.shapeColor=color(80,80,80);

space=createSprite(600,200,10,10);
space.addImage("start",spaceImage);
space.scale=0.1;


}

function draw() {
background("black");

if(keyDown("space")) {
bullet.velocityX=bulletSpeed;
space.visible=false;
}
if(collide(bullet,wall)) {
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(wallThickness*wallThickness*wallThickness);
    
    if(damage>10)
    {
     wall.shapeColor=color(255,0,0);
     fill("red");
     textSize(30);  
     text("FAIL",900,50);
    }
     else if(damage<10)
    {
     wall.shapeColor=color(0,255,0);
     fill("green");
     textSize(30);  
     text("PASS",900,50);
    }
    }

if(bullet.x>1500) {
    wall.shapeColor=color(255,0,0);
    fill("red");
     textSize(30);  
     text("FAIL",900,50);
}

drawSprites();

fill("white");
textSize(30);
text(damage,1000,50);
fill("white");
textSize(50);
text("WALL TESTER",200,50);

}








