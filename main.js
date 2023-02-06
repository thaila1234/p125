var noseX = 0;
var noseY = 0;
var rightWrist = 0;
var leftWrist = 0;
var diference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(450, 450);
    canvas = createCanvas(560, 400)
    canvas.position(750, 100);
    poseNet = ml5.poseNet(video, modelLoaded())
    poseNet.on('pose', gotPoses)
}

function draw(){
    background("#4C5ED0");
    fill("purple");
    stroke("white");
    square(noseX, noseY, diference);
    document.getElementById("square").innerHTML = "O tamanho do quadrado é "+diference+"px";
}

function modelLoaded(){
    console.log("O poseNet foi carregado");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        diference = floor(leftWrist - rightWrist);
    }
}