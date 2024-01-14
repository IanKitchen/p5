

function drawPyramids(){
    var x,y,d;

    strokeWeight(0)

    //9 columns, 6 rows

    for(let i = 1; i<=9; i++){
        for(let j = 1; j<=6; j++){
            print(i + ' and ' + j);
            fill(i*2,j*2.5,i+j,0.9) //Hue per column from 2 to 16, Sat increases towards botton, brightness towards bottom left
    
            x = i*95+10;
            y = j*95;
            d = 95;

            doPyramid(x,y,d);

            if (false){
                saveCanvas('pyramid' + i + j, 'png');
                fill(16);
                rect(0,0,1050,742);
            }

    
            print( 'x: ' + x + 'y: ' + y + 'd: ' + d);
        } 
    }

    
}

//-------------------------------------

function doPyramid(x,y,d){
    shape1 = new pyramid(x,y,d);
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
        triangle(this.pointX1,this.pointY1, this.pointX2, this.pointY2, this.pointX, this.pointY); //top
        fill(5,5,5,1);
        triangle(this.pointX1,this.pointY1, this.pointX3, this.pointY3, this.pointX, this.pointY); //left
        fill(10,10,10,1);
        triangle(this.pointX4,this.pointY4, this.pointX2, this.pointY2, this.pointX, this.pointY); //right
        fill(7,7,5,1);
        triangle(this.pointX4,this.pointY4, this.pointX3, this.pointY3, this.pointX, this.pointY); //bottom
    }
}
  