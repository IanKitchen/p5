

function drawPyramids(){
    var l,w,t,h;

    strokeWeight(0)

    for(let i = 1; i<=8; i++){
        for(let j = 1; j<=6; j++){
          print(i + ' and ' + j);
          fill(i*2,j*2.5,i+j,0.9) //Hue per column from 2 to 16, Sat increases towards botton, brightness towards bottom left
    
          l = i*105;
          w = 105;
          t = j*80+noise(i/2)*120-20 //top is inner loop times 80 plus outer loop noise
          h = 80+noise(i+j)*80 //height is between 80 and 160
          //rect(l,t,w,h);
    
          print( 'left: ' + l + 'width: ' + w + 'top: ' + t + 'height: ' + h);
        }
    }

    doPyramid();
}

//-------------------------------------

function doPyramid(){
    shape1 = new pyramid(100,100,100);
    shape1.drawPyramid();
    shape1.report();
}
  
class pyramid {
    constructor(x, y, l) {
      this.pointX1 = x;
      this.pointY1 = y;
      this.pointX2 = x + l;
      this.pointY2 = y;
      this.pointX3 = x;
      this.pointY3 = y+l;
      this.pointX4 = x + l;
      this.pointY4 = y + l;
      this.pointX = x + l/2 + noise(x)*5;
      this.pointY = y + l/2 + noise(y)*5;
      this.report = function () {
        print(this.pointX1 + " / " + this.pointY1 + " / " + this.pointX2 + " / " + this.pointY2);
      };
    }
  
    drawPyramid() {
        fill(11);
        triangle(this.pointX1,this.pointY1, this.pointX2, this.pointY2, this.pointX, this.pointY); //top
        fill(10);
        triangle(this.pointX1,this.pointY1, this.pointX3, this.pointY3, this.pointX, this.pointY); //left
        fill(9);
        triangle(this.pointX4,this.pointY4, this.pointX2, this.pointY2, this.pointX, this.pointY); //right
        fill(8);
        triangle(this.pointX4,this.pointY4, this.pointX3, this.pointY3, this.pointX, this.pointY); //bottom
    }
}
  