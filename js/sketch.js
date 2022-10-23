//Simple canvas stuff

function setup() {
  pixelDensity(3.0);
  createCanvas(1200,700);
  background(125);
  fill(180);
  stroke(50);
  strokeWeight(4);
  frameRate(1);
  noLoop();
  noiseSeed(99);
  colorMode(HSB,16,16,16);
}

function draw() {

  let coord = {
    x: 100,
    y: 100
  };

  //draw some art!
  //drawSquare();
  //drawTriangle(coord);

  for(let x=5;x<16;x++)
  {
    coord.x = coord.x+5*x;
    //coord.y = coord.y+random(5)*x;
    coord.y += noise(x)*5*x
    fill(x,x,x)
    drawTriangle(coord)
  }
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

function drawSquare(){
  rect(20, 20, 60, 60);
}



function drawTriangle(coord1){
  triangle(coord1.x,coord1.y,coord1.x+100,coord1.y,coord1.x,coord1.y+100);
}
