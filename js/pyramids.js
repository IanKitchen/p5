

function drawLines(){
    var x,y,d;
    var outputMode = false;

    strokeWeight(0)

    //9 columns, 6 rows

    for(let i = 1; i<=10; i++){
        for(let j = 1; j<=7; j++){ 
            let hue = j*2; //1.77 to 16
            let sat = j*2.5-2.5; //0 to 12.5
            let lightness = (i+j)*0.9; //2 to 15
            fill(hue,16,14,1) 

            x = i*95+3;
            y = j*95-9;
            d = 95;

            rect(0, y-3, 1050, 6);
            rect(x-3, y, 6, 742);
        }
    }
}



function drawPyramids(){
    var x,y,d;
    var topColor, leftColor, rightColor, bottomColor;
    var outputMode = false;

    strokeWeight(0)

    //drawLines();

    //9 columns, 6 rows

    for(let i = 1; i<=9; i++){
        for(let j = 1; j<=6; j++){
            if(outputMode){   //erase all drawing
                fill(16);
                rect(0,0,1050,742);
            }

            print(i + ' and ' + j);

            let hue = i+j-2;
            let sat = i+j-2;
            let lightness = i+j-2; 

            topColor = color(hue, sat, lightness, 1);

            hue = 16 - (i+j-2);
            sat = 16 - (i+j-2);
            lightness = 16 - (i+j-2); 

            leftColor = color(hue, sat, lightness, 1);

            hue = 9-i+j;
            sat = 9-i+j;
            lightness = 9-i+j; 

            rightColor = color(hue, sat, lightness, 1);

            hue = 6+i-j;
            sat = 6+i-j;
            lightness = 6+i-j;

            bottomColor = color(hue, sat, lightness, 1);
    
            x = i*95+3;
            y = j*95-9;
            d = 95;

            doPyramid(x,y,d,topColor, leftColor, rightColor, bottomColor);

            //when in outputMode output a png of each pyramid on each click
            if ((i-1)*6+j==drawFrame && outputMode && !saved){  //0 to 54
                saveCanvas('pyramid' + i + j, 'png');
                saved = true;
                return;
            }
 
            print( 'x: ' + x + 'y: ' + y + 'd: ' + d);
        } 
    }    
    
    //saveCanvas('pyramid', 'png');
}



//-------------------------------------

function doPyramid(x,y,d,topColor, leftColor, rightColor, bottomColor){
    shape1 = new pyramid(x,y,d,topColor,leftColor,rightColor,bottomColor);
    shape1.drawPyramid();
    shape1.report();
}
  
class pyramid {
    constructor(x, y, l, topColor, leftColor, rightColor, bottomColor) {
        let gap=0;
        this.topColor = topColor;
        this.leftColor = leftColor;
        this.rightColor = rightColor;
        this.bottomColor = bottomColor;
        this.pointX1 = x+gap;
        this.pointY1 = y+gap;
        this.pointX2 = x + l - gap;
        this.pointY2 = y + gap;
        this.pointX3 = x + gap;
        this.pointY3 = y+l - gap;
        this.pointX4 = x + l - gap;
        this.pointY4 = y + l - gap;
        this.pointX = x + l/2 + noise(x)*25-12;
        this.pointY = y + l/2 + noise(y)*25-12;
        this.report = function () {
        print(this.pointX1 + " / " + this.pointY1 + " / " + this.pointX2 + " / " + this.pointY2);
      };
    }
  
    drawPyramid() {
        fill(this.topColor);
        triangle(this.pointX1,this.pointY1, this.pointX2, this.pointY2, this.pointX, this.pointY);
        fill(this.leftColor);
        triangle(this.pointX1,this.pointY1, this.pointX3, this.pointY3, this.pointX, this.pointY); 
        fill(this.rightColor);
        triangle(this.pointX4,this.pointY4, this.pointX2, this.pointY2, this.pointX, this.pointY); 
        fill(this.bottomColor);
        triangle(this.pointX4,this.pointY4, this.pointX3, this.pointY3, this.pointX, this.pointY); 
    }
}
  