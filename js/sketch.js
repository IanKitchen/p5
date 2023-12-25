//Simple canvas stuff

function setup() {
  pixelDensity(3.0);
  createCanvas(1050,700);   //8 columns plus 2 margins of 105 each, 6 rows of 
  setupGraphicsB();
  frameRate(1);
  noLoop();
}

function setupGraphicsA()
{
  background(125);
  strokeWeight(4);
  noiseSeed(99);
  colorMode(HSB,16,16,16);   //for each range of values is 0 to 16
}

function setupGraphicsB()
{
  colorMode(HSB,16,16,16); //for each range of values is 0 to 16
  background(15);
  strokeWeight(16); //this draws inside the shape
  stroke(16); //white
  noiseSeed(10);
}

function draw() {
  gridLines();
  //saveCanvas('myCanvas3', 'png');
}

function gridLines(){
  // let l =0; 
  // let w = 0;
  // let t = 0;
  // let h = 0;

  var l,w,t,h;

  for(let i = 1; i<=8; i++){
    for(let j = 1; j<=6; j++){
      print(i + ' and ' + j);
      fill(i*2,j*2.5,i+j,0.9) //Hue per column from 2 to 16, Sat increases towards botton, brightness towards bottom left

      l = i*105;
      w = 105;
      t = j*80+noise(i/100)*120-20 //top is inner loop times 80 plus outer loop noise
      h = 80+noise(i+j)*80 //height between 80 and 160
      rect(l,t,w,h);

      print( 'left: ' + l + 'width: ' + w + 'top: ' + t + 'height: ' + h);
    }
  }
}

//-------------------------------------

function skewShapes(){
  shape1 = new skewRect(500,500);
  shape1.drawSkew();
  shape1.report();
}

class skewRect {
  constructor(x, y) {
    this.pointX1 = x;
    this.pointY1 = y;
    this.pointX2 = x + noise(50)*50;
    this.pointY2 = y + noise(50)+50;
    this.report = function () {
      print(this.pointX1 + " / " + this.pointY1 + " / " + this.pointX2 + " / " + this.pointY2);
    };
  }

  drawSkew() {
    quad( this.pointX1, this.pointY1, 
          this.pointX1 + 100, this.pointY1,
          this.pointX2, this.pointY2, 
          this.pointX2 - 100, this.pointY2 )
  }
}

//-------------------------------------

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
