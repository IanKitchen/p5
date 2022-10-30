//Simple canvas stuff

function setup() {
  pixelDensity(3.0);
  createCanvas(1050,700);
  // setupA();
  setupB();
  frameRate(1);
  noLoop();
  
  colorMode(HSB,16,16,16);
}

function setupA()
{
  background(125);
  strokeWeight(4);
  noiseSeed(99);
}

function setupB()
{
  background(245);
  strokeWeight(4);
  noiseSeed(109);
}

function draw() {

  fallingTriangles();
  
  // saveCanvas('myCanvas', 'png');
}

function fallingTriangles(){
  let coord = {
    x: 100,
    y: 100
  };

  //11 triangles, 5px further each loop plus noise on y steps
  //Colour mode is 5 to 15 of 0 to 16
  for(let i=5;i<16;i++)
  {
    coord.x = coord.x+5*i;
    coord.y += noise(i)*5*i
    fill(i,i,i)
    drawTriangle(coord)
  }
}

function drawTriangle(coord1){
  triangle(coord1.x,coord1.y,coord1.x+100,coord1.y,coord1.x,coord1.y+100);
}
