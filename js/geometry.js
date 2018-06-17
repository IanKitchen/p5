
var cWidth;
var cHeight;
var canvas;
var penColour;
var fillColour;

function setup() {

  pixelDensity(3.0);
  penColour = "red";
  fillColour = color('rgba(254, 0, 0, 0.1)');
  canvas = createCanvas(windowWidth,windowHeight-200, "WEBGL");
  canvas.parent('geometrySketch');
  background(0);
  cWidth = canvas.width;
  cHeight = canvas.height;
  //noLoop();
}

function draw() {

  //drawStack(80);

  //if(keyIsPressed){
  // drawDrop();
  //}

  if(mouseIsPressed){
    drawOval();
  }
}



function drawStack(size){
  stroke("red");
  noFill();
  for(var box = size; box>60; box--){
    rect(box, box, box+20, box+20);
  }
}


function drawDrop(){
  stroke("blue");
  fill(125);
  for(var rad = 50; rad > 10; rad = rad-5){
    fill(rad*5+5);
    ellipse(mouseX, mouseY, rad, rad);
  }
}

function drawOval(){
  //var pos = canvas.position();
  if(keyIsPressed){
    fill(fillColour);
  }
  else {
    noFill();
  }

  if ( mouseY > cHeight*0.25 && mouseY < cHeight*0.75 && mouseX > cWidth*0.25 && mouseX < cWidth*0.75)
  {
    stroke(penColour);
    //noFill();
    var width = abs(mouseX-cWidth/2)*2;
    var height = abs(mouseY-cHeight/2)*2;
    ellipse(mouseX, mouseY, width, height);
  }
}
