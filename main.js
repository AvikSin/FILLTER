noseX = "";
noseY = "";

function preload() {
    clown=loadImage("https://i.postimg.cc/W19N9NMS/download-removebg-preview.png");
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("noseX=" + results[0].pose.nose.x);
        console.log("noseY=" + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw() {
    image(video, 0, 0, 600, 400);
    //fill("red");
    //stroke("red");
    //circle(noseX,noseY,20)
    image(clown,noseX-44,noseY-5,100,70)
}
function take_snapshot() {
    save('meWithAmouctach');
}