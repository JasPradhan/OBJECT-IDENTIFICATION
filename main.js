img="";

status="";

function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640, 420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting objects";
}

function draw(){
image(img , 0 , 0 , 640 , 420);
fill('#0051ff');
text("Dog" , 60 , 75);
noFill();
stroke('#0051ff');
rect(15 , 60 , 570 , 355);

fill('#05fa15');
text("Cat" , 335 , 90);
noFill();
stroke('#05fa15');
rect(290 , 70 , 275 , 330);
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}