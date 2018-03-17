function setup() {
  pixelDensity(3.0);
  createCanvas(500,500);
  background(0);
  noStroke();

}

function draw() {


  if(keyIsPressed){
   drawDrop();
  }
}


function drawDrop(){
  for(rad = 50; rad > 10; rad = rad-5){
    fill(rad*5+5);
    ellipse(mouseX, mouseY, rad, rad);
  }
}

function drawOval(){

  if(mouseIsPressed){
    fill(0);
  }
  else {
    fill(255);
  }

  var width = abs(mouseX-250)*2;
  var height = abs(mouseY-250)*2;

  ellipse(mouseX, mouseY, width, height);
}
