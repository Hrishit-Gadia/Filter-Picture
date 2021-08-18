function preload() {
    Female = '';
    Male = 'https://i.postimg.cc/D02zpZct/Male.jpg';
}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Preview = createCapture(VIDEO);
    Preview.size(300, 300)
    Preview.hide();
    Status = ml5.poseNet(Preview, Report);
    Status.on('pose', Movenment);
}

function draw() {
    image(Preview, 0, 0, 300, 300);
}

function Report() {
    console.log("Fine!");
}

function Movenment(Result) {
    if (Result.length > 0) {
        console.log(Result);
        console.log("X = " + Result[0].pose.nose.x);
        console.log("Y = " + Result[0].pose.nose.y);
        Xs = Result[0].pose.nose.x;
        Ys = Result[0].pose.nose.y;
    }
}