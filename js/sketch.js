//Simple canvas stuff

function setup() {
  pixelDensity(3.0);
  createCanvas(1200,500);
  background(125);
  fill(180);
  stroke(50);
  strokeWeight(4);
}

function draw() {

  let coord = {
    x: 100,
    y: 100
  };

  //draw some art!
  drawSquares();
  drawTriangle(coord);
}


function drawDrop(){
  for(rad = 50; rad > 10; rad = rad-5){
    fill(rad*5+5);
    ellipse(mouseX, mouseY, rad, rad);
  }
}

function drawAtMouse()
{  
  if(mouseIsPressed){
    fill(0);
  }
  else {
    fill(255);
  }

  var width = abs(mouseX-250)*2;
  var height = abs(mouseY-250)*2;

  // ellipse(mouseX, mouseY, width, height);}
}

function drawSquares(){
  rect(20, 20, 60, 60);
}



function drawTriangle(coord1){
  triangle(coord1.x,coord1.y,coord1.x+100,coord1.y,coord1.x,coord1.y+100);
}
