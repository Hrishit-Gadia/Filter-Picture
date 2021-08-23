var Xs = 0;
var Ys = 0;

function preload() {
    Females = loadImage('https://i.postimg.cc/SNq0Qrf7/Female.png');
    Males = loadImage('https://i.postimg.cc/7ZYp0Zc5/Male.png');
    Gender = Males;
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
    image(Gender, Xs, Ys, 70, 40);
}

function Report() {
    console.log("Fine!");
}

function Movenment(Result) {
    if (Result.length > 0) {
        if(Gender == Males){
        console.log(Result);
        Xs = Result[0].pose.nose.x - 30;
        Ys = Result[0].pose.nose.y;
        console.log("X = " + Xs);
        console.log("Y = " + Ys);
        }
        if(Gender == Females){
            console.log(Result);
            Xs = Result[0].pose.nose.x - 30;
            Ys = Result[0].pose.nose.y+20;
            console.log("X = " + Xs);
            console.log("Y = " + Ys);
            }
        }
}

function Male(){
    Gender = Males;
}


function Female(){
    Gender = Females;
}