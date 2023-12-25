//Simple canvas stuff

function setup() {
  pixelDensity(3.0);
  createCanvas(1050,700);
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
  background(245);
  strokeWeight(4);
  noiseSeed(10);
  colorMode(HSB,16,16,16);   //for each range of values is 0 to 16
}

function draw() {

  gridLines();

  //saveCanvas('myCanvas3', 'png');
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

function gridLines(){
  strokeWeight(9);
  stroke(16); //white
  noFill();
  let l =0; 
  let w = 0;
  let t = 0;
  let h = 0;

  for(let i = 1; i<width/120; i++){
    for(let j = height/120; j>1; j--){
      print(i +' and '+ j);
      fill(i*2,j*3,i+j,0.5) //HSB Hue per column from 2 to 16, Sat increases towards botton left of 13.8

      l = i*105;
      w = 105;
      t = j*80+noise(i)*100-55 //inner loop times 2/3 of size + 100 times noise minus 55
      h = 105+noise(i+j)*50 //at least 105 plus noise times 50
      rect(l,t,w,h);
    }
  }

  shape1 = new skewRect(500,500);
  shape1.drawSkew();

  shape1.report();
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
