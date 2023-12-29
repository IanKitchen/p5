

function pyramid(){
    var l,w,t,h;

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

    skewShapes();
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
  