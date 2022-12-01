var xstart = 200;
var ystart = 200;
var størrelse = 10;
var xhas = størrelse;
var yhas = 0;
var score = 0;
var framerate = 10;

class Kroppsdel {
  constructor(xpos, ypos, stø, farge) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.stø = stø;
    this.farge = farge;
  }

  tegnKvadrat() {
    fill("#3B69A9");
    stroke("#192954");
    strokeWeight(5);
    square(this.xpos, this.ypos, this.stø);
  }

  tegnKvadratM() {
    fill("#3B69A9");
    stroke("#192954");
    strokeWeight(5);
    square(this.xpos, this.ypos, this.stø);
  }
}

var slange = [
  new Kroppsdel(xstart, ystart, størrelse, "red"),
  new Kroppsdel(xstart - størrelse, ystart, størrelse, "white"),
  new Kroppsdel(xstart - 2 * størrelse, ystart, størrelse, "blue"),
];
var mat = new Kroppsdel(xstart + 100, ystart, størrelse, "red");

function setup() {
  createCanvas(500, 500);
  frameRate(framerate);
}

function draw() {
  background("#3B69A9");

  stroke(25, 41, 84, 60);
  fill(25, 41, 84, 50);
  textSize(200);

  if (score < 10) {
    text(score, 195, 300);
  } else if (score >= 10 && score < 100) {
    text(score, 135, 300);
  } else {
    text(score, 75, 300);
  }

  for (let i = 0; i < slange.length; i = i + 1) {
    slange[i].tegnKvadrat();
  }

  mat.tegnKvadratM();

  for (let i = 1; i < slange.length; i = i + 1) {
    if (slange[0].xpos == slange[i].xpos && slange[0].ypos == slange[i].ypos) {
      frameRate(0);
      textSize(72);
      text("Du døde", 110, 150);
    }
  }

  if (slange[0].xpos == mat.xpos && slange[0].ypos == mat.ypos) {
    slange.unshift(
      new Kroppsdel(slange[0].xpos + xhas, slange[0].ypos + yhas, størrelse)
    );
    mat.xpos = Math.floor(random(0, 480));
    mat.xpos = mat.xpos / 10;
    mat.xpos = Math.floor(mat.xpos);
    mat.xpos = mat.xpos * 10;
    mat.ypos = Math.floor(random(0, 480));
    mat.ypos = mat.ypos / 10;
    mat.ypos = Math.floor(mat.ypos);
    mat.ypos = mat.ypos * 10;
    score = score + 1;
    framerate = framerate + 1;
    frameRate(framerate);
  }

  if (slange[0].xpos >= width) {
    slange[0].xpos = 0;
  } else if (slange[0].xpos < 0) {
    slange[0].xpos = width - størrelse;
  } else if (slange[0].ypos >= height) {
    slange[0].ypos = 0;
  } else if (slange[0].ypos < 0) {
    slange[0].ypos = height - størrelse;
  }

  slange.unshift(
    new Kroppsdel(slange[0].xpos + xhas, slange[0].ypos + yhas, størrelse)
  );
  slange.pop();
}

function keyPressed() {
  if (keyCode === 82) {
    frameRate(5);
    slange = [
      new Kroppsdel(xstart, ystart, størrelse, "red"),
      new Kroppsdel(xstart - størrelse, ystart, størrelse, "white"),
      new Kroppsdel(xstart - 2 * størrelse, ystart, størrelse, "blue"),
    ];
    score = 0;
  } else if ((keyCode === UP_ARROW || keyCode === 87) && yhas != størrelse) {
    xhas = 0;
    yhas = -størrelse;
  } else if ((keyCode === DOWN_ARROW || keyCode === 83) && yhas != -størrelse) {
    xhas = 0;
    yhas = størrelse;
  } else if ((keyCode === LEFT_ARROW || keyCode === 65) && xhas != størrelse) {
    xhas = -størrelse;
    yhas = 0;
  } else if (
    (keyCode === RIGHT_ARROW || keyCode === 68) &&
    xhas != -størrelse
  ) {
    xhas = størrelse;
    yhas = 0;
  } else if (keyCode === 90) {
    score++;
  }
}
