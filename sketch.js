var block1,block2,block3,block4;
var box;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(100,580,200,50);
block1.shapeColor="blue";
block2=createSprite(300,580,200,50);
block2.shapeColor="red";
block3=createSprite(500,580,200,50);
block3.shapeColor="green";
block4=createSprite(700,580,200,50);
block4.shapeColor="pink"

    //create box sprite and give velocity
box=createSprite(500,200,25,25);
box.velocityY=5;
box.velocityX=4;
}

function draw() {
    background(rgb(180,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(block1.isTouching(box)&&box.bounceOff(block1)){
    box.shapeColor="blue";
    music.play();
}
if(block2.isTouching(box)&&box.bounceOff(block2)){
    box.shapeColor="red"
    music.play();
}
if(block3.isTouching(box)&&box.bounceOff(block3)){
    box.shapeColor="green"
    music.stop();
    box.velocityX=0;
    box.velocityY=0;
}
if(block4.isTouching(box)&&box.bounceOff(block4)){
    box.shapeColor="pink"
    music.play();
}


    drawSprites();
}
