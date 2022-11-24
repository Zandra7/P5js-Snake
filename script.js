var xstart = 200
var ystart = 200
var størrelse = 20
var xhas = størrelse
var yhas = 0

class Kroppsdel {
  constructor(xpos, ypos, stø, farge) {
    this.xpos = xpos
    this.ypos = ypos
    this.stø = stø
    this.farge = farge
  
  }
  
  tegnKvadrat() {
    square(this.xpos, this.ypos, this.stø)
    fill('#3B69A9')
    stroke('#192954')
    strokeWeight(10)
  }
  
}

var slange = [new Kroppsdel(xstart, ystart, størrelse, "red"),
              new Kroppsdel(xstart-størrelse, ystart, størrelse, "white"),
              new Kroppsdel(xstart-2*størrelse, ystart, størrelse, "blue"),

              ]

function setup() {
  createCanvas(500, 500);
  frameRate(5)
  
}

function draw() {
  background('#3B69A9');
  
  for(let i = 0; i < slange.length; i = i + 1) {
    slange[i].tegnKvadrat()

  }

  if (slange[0].xpos >= width) {
        slange[0].xpos = 0;
  } else if (slange[0].xpos < 0) {
        slange[0].xpos = width - størrelse; 
  } else if (slange[0].ypos >= height) {
        slange[0].ypos = 0;
  } else if (slange[0].ypos < 0) {
        slange[0].ypos = height - størrelse
  }
  
  slange.unshift(new Kroppsdel(slange[0].xpos+xhas, slange[0].ypos+yhas, størrelse))
  slange.pop()
}

function keyPressed() {
  if(keyCode === 82) {
        slange = [
                    new Kroppsdel(xstart, ystart, størrelse, "red"),
                    new Kroppsdel(xstart-størrelse, ystart, størrelse, "white"),
                    new Kroppsdel(xstart-2*størrelse, ystart, størrelse, "blue"),
                ]
  } else if((keyCode === UP_ARROW || keyCode === 87) && yhas != størrelse) {
    xhas = 0
    yhas = -størrelse
  } else if ((keyCode === DOWN_ARROW || keyCode === 83) && yhas != -størrelse) {
    xhas = 0
    yhas = størrelse 
  } else if ((keyCode === LEFT_ARROW || keyCode === 65) && xhas != størrelse) {
    xhas = -størrelse
    yhas = 0
  } else if ((keyCode === RIGHT_ARROW || keyCode === 68) && xhas != -størrelse) {
    xhas = størrelse
    yhas = 0
  }
}



