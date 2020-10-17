img="";

function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640, 420);
canvas.center();
}

function draw(){
image(img , 0 , 0 , 640 , 420);
fill('#0051ff');
text("Dog" , 60 , 75);
noFill();
stroke('#0051ff');
rect(15 , 60 , 570 , 355);
}