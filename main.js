function preload() {

}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Preview = createCapture(VIDEO);
    Preview.size(300, 300)
    Preview.hide();
    status = ml5.poseNet(Preview, Report);
    status.on('pose', Movenment);
}

function draw() {
    image(Preview, 0, 0, 300, 300);
}

function Report(){
    console.log("Fine!");
}

function Movenment(Result) {
    if(Result > 0) {
        console.log(Result);
        console.log("X = "+Result[0].pose.nose.x);
        console.log("Y = "+Result[0].pose.nose.y);
    }}