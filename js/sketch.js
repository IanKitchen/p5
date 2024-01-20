//Simple canvas stuff

function setup() {
  pixelDensity(3.0);
  //createCanvas(1050,700);   //8 columns plus 2 margins of 105 each, 6 rows of for 3x2 card
  createCanvas(1050,742);   //A4, 297mm by 210mm rescalled to 1050px wide
  setupGraphics();
  frameRate(1);
  noLoop();
}

var drawFrame = 1;
var saved = false;

function mouseClicked() {
  drawFrame++;
  saved = false;
  fill(5,5,5);
  rect(mouseX,mouseY,drawFrame*10,40);
  drawPyramids();
}

function setupGraphics()
{
  colorMode(HSB,16,16,16); //for each range of values is 0 to 16
  background(15);
  strokeWeight(4); //this draws centred on the extent of the shape
  stroke(8); //white
  noiseSeed(10);
}

function draw() {
  //gridLines();
  drawPyramids();
  //saveCanvas('myCanvas3', 'png');
}

//-------------------------------------

function gridLines(){

  var l,w,t,h;

  for(let i = 1; i<=8; i++){
    for(let j = 1; j<=6; j++){
      print(i + ' and ' + j);
      fill(i*2,j*2.5,i+j,0.9) //Hue per column from 2 to 16, Sat increases towards botton, brightness towards bottom left

      l = i*105;
      w = 105;
      t = j*80+noise(i/2)*120-20 //top is inner loop times 80 plus outer loop noise
      h = 80+noise(i+j)*80 //height is between 80 and 160
      rect(l,t,w,h);

      print( 'left: ' + l + 'width: ' + w + 'top: ' + t + 'height: ' + h);
    }
  }
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
