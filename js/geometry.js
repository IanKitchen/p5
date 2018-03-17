function setup() {
  pixelDensity(3.0);
  createCanvas(800,800);
  background(0);
  noFill();
  stroke("red");
  noLoop();

}

function draw() {

  for(box=100;box>80;box--){
    rect(box, box, box+20, box+20);
  }

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
