// Fractal Trees

var brownR = 83;
var brownG = 53;
var brownB = 10;

var greenR = 30;
var greenG = 147; 
var greenB = 45;

var redR = 100;
var redG = 3; 
var redB = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(42);
  noLoop();
}

function draw() {
  background(240, 248, 255);
  stroke(brownR, brownG, brownB);
  strokeWeight(20);

  push();
    translate(width/4, height);
    branch(width/10, 10, PI/6);
  pop();

  push();
    translate(2*width/3, height);
    branch(width/10, 10, PI/7);
  pop();
}

function branch(len,wei,ang) {
  line(0, 0, 0, -len);
  translate(0,-len);
  stroke(brownR, brownG, brownB);
  strokeWeight(wei);

  if (len > 4) {

    push();
      rotate(ang);
      branch(len * 0.7, wei * 0.7, ang);
    pop();

    push();
      rotate(-ang-PI/12);
      branch(len * 0.7, wei * 0.7, ang);
    pop();

    push();
      rotate(-ang);
      branch(len * 0.3, wei * 0.7, ang);
    pop();

    push();
      rotate(ang+PI/9);
      branch(len * 0.3, wei * 0.7, ang);
    pop();

  } else {

    x = random(0,1);

    if (x > 0.85) { 
      fill(greenR, greenG, greenB);
      noStroke();
      ellipse(0, 0, 14, 6);

    } else if (x < 0.01) {
      fill(redR, redG, redB);
      noStroke();

      ellipse(16,16,16,16);
    }
  }
}
