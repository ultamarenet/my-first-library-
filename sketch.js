var o1,o2;


function setup() {
  createCanvas(800,400);
  o1=createSprite(400, 200, 50, 50);
o2=createSprite(300, 100, 40, 40);
o1.shapeColor="red";
o2.shapeColor="red";
o1.debug=true;
o2.debug=true;

}

function draw() {
  background(0); 
  o1.y=World.mouseY ;
  o1.x=World.mouseX ;
if (  isTouching()){
  o1.shapeColor="blue";
  o2.shapeColor="blue";
}

else  {
    o1.shapeColor="red";
  o2.shapeColor="red";}
  drawSprites();
}

