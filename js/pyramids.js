

function drawPyramids(){
    var x,y,d;

    strokeWeight(0)

    //9 columns, 6 rows

    for(let i = 1; i<=9; i++){
        for(let j = 1; j<=6; j++){
            print(i + ' and ' + j);
            let hue = i*1.77; //1.77 to 16
            let sat = j*2.5-2.5; //0 to 12.5
            let lightness = (i+j)*0.9; //2 to 15
            fill(hue,sat,lightness,1) 
    
            x = i*95+3;
            y = j*95-9;
            d = 95;

            doPyramid(x,y,d);

            if ((i-1)*6+j==54){
                saveCanvas('pyramid' + i + j, 'png');
            }

            if(false){
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
      this.pointX = x + l/2 + noise(x)*25;
      this.pointY = y + l/2 + noise(y)*25;
      this.report = function () {
        print(this.pointX1 + " / " + this.pointY1 + " / " + this.pointX2 + " / " + this.pointY2);
      };
    }
  
    drawPyramid() {
        triangle(this.pointX1,this.pointY1, this.pointX2, this.pointY2, this.pointX, this.pointY); //top
        fill(0,10,10,1); //fill(5,5,5,1);
        triangle(this.pointX1,this.pointY1, this.pointX3, this.pointY3, this.pointX, this.pointY); //left
        fill(10,10,10,1);
        triangle(this.pointX4,this.pointY4, this.pointX2, this.pointY2, this.pointX, this.pointY); //right
        fill(7,7,5,1);
        triangle(this.pointX4,this.pointY4, this.pointX3, this.pointY3, this.pointX, this.pointY); //bottom
    }
}
  