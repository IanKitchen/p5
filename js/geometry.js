function setup() {
  pixelDensity(3.0);
  createCanvas(800,800);
  background(0);
  //noLoop();
}

function draw() {

  //drawStack(80);

  if(keyIsPressed){
   drawDrop();
  }

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
  stroke("red");
  noFill();
  var width = abs(mouseX-400)*2;
  var height = abs(mouseY-400)*2;
  ellipse(mouseX, mouseY, width, height);
}
