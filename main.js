objects=[];
sausage = "";

function setup(){
    canvas = createCanvas(500, 300);
    canvas.center();
    video.hide();


}

function preload(){
    video = createVideo("video.mp4");
}

function draw(){
    image(video, 0 ,0, 500, 300);
    if(sausage != ""){
        pastry.detect(video,vanilla);
        for(i=0; i <objects.length ; i++){
            document.getElementById("status").innerHTML = "Video Processed";
            document.getElementById("no-of-objects").innerHTML = "There are "+ objects.length +" objects."
        percent = floor(objects[i].confidence * 100);
            fill("#0000FF");
            text(objects[i].label+""+percent+"%", objects[i].x, objects[i].y);
            noFill();
            stroke("#30D5C8");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function start(){
    pastry= ml5.objectDetector("cocossd", pumpkin);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function pumpkin(){
    console.log("fried");
    video.loop();
    video.speed(1);
    video.volume(0);
    sausage = true;
}

function vanilla(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}