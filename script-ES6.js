const Brick = class {
  constructor(){
    this.x = x;
    this.y = y;
    this.graphic = graphic;
    this.width = width;
    this.height = height;
    this.type = type;
    this.live = live;
  }
  
  print(){
    console.log("x = " + this.x)
    console.log("y = " + this.y)
    console.log("graphic = " + this.graphic)
    console.log("width = " + this.width)
    console.log("height = " + this.height)
    console.log("type = " + this.type)
    console.log("live = " + this.live)
  };

  init(){
    console.log('dodano do planszy')
  }
}

class BrickBlue extends Brick {
  constructor(x,y){
    super(graphic, live);
    this.graphic = "blue.png";
    this.live = 10;
    this.x = x;
    this.y = y;
  }
}

class BrickRed extends Brick {
  constructor(){
    super(graphic, live);
    this.graphic = "red.png";
    this.live = 15;
  }
}

class BrickGreen extends Brick {
  constructor(){
    super(graphic, live);
    this.graphic = "green.png";
    this.live = 20;
  }
}

let x,y,graphic,width,height,type,live;