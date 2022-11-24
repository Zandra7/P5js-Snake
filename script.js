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
    fill('green')
  }
  
  tegnSirkel() {
    fill(this.farge) 
    circle(this.xpos, this.ypos, this.stø)
    
  }
  
  tegnTrekant() {
    triangle(this.xpos, this.ypos, this.xpos - this.stø, this.ypos - this.stø/2, this.xpos - this.stø, this.ypos + this.stø/2)
  }
}

var slange = [new Kroppsdel(xstart, ystart, størrelse, "red"),
              new Kroppsdel(xstart-størrelse, ystart, størrelse, "white"),
              new Kroppsdel(xstart-2*størrelse, ystart, størrelse, "blue"),

              ]

function setup() {
  createCanvas(650, 400);
  frameRate(5)
  
}

function draw() {
  background(220);
  
  for(let i = 0; i < slange.length; i = i + 1) {
    slange[i].tegnKvadrat()

  }
  
  slange.unshift(new Kroppsdel(slange[0].xpos+xhas, slange[0].ypos+yhas, størrelse))
  slange.pop()
}

function keyPressed() {
  if((keyCode === UP_ARROW || keyCode === 87) && yhas != størrelse) {
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