function setup()  {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas =createCanvas(550,550);
    canvas.position(540,75);
    
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#969a9a');
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be =" + difference +"px"
fill ('#F90093');
stroke('#F90093');
square(noseX, noseY, difference);
}

function gotPoses(results)
{

    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX +" noseY " + noseY);
        leftWristX = result[0].pose.leftWrist.x;
       rightWristX = result[0].pose.rightWrist.x;
       difference = leftWristX - rightWrist;
       difference = floor(leftWristX - rightWristX);
       console.log(" leftWristX ="+ leftWristX   + "right WristX ="+ rightWrist + " difference = " + difference);
}
}
