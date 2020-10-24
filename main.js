img="";

status="";

objects=[];

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
if(status!=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: Objects Detected";
        fill('#0051ff');
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+" %" , objects[i].x+15 , objects[i].y+15);
        noFill();
        stroke('#0051ff');
        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    }
}
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
        objects=results;
    }
}