// Fractal Trees

var angle;
var fr = 15;

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
  createCanvas(windowWidth, 0.95 * windowHeight);
  slider = createSlider(width / 10, width / 8, width / 10, 1);
  randomSeed(2018);
  frameRate(fr);
}

function draw() {
  background(240, 248, 255);
  stroke(brownR, brownG, brownB);

  push();
  translate(width / 2, height);
  branch(slider.value(), slider.value()/11, PI / 6);
  pop();

}

function branch(len, wei, ang) {
  strokeWeight(wei);
  line(0, 0, 0, -len);
  translate(0, -len);
  r = random(0.1, 0.5);
  s = random(-1, 1);

  if (len > 10) {

    push();
    rotate(ang + PI / 12 + r * s / len);
    branch(len * 0.7, wei * 0.7, ang);
    pop();

    push();
    rotate(ang + 3 * PI / 2 + r * s / len);
    branch(len * 0.7, wei * 0.7, ang);
    pop();

    push();
    rotate(ang + 3 * PI / 2 + PI / 9 + r * s / len);
    branch(len * 0.3, wei * 0.7, ang);
    pop();

    push();
    rotate(ang + PI / 6 + r * s / len);
    branch(len * 0.3, wei * 0.7, ang);
    pop();

  } else {

    fill(greenR, greenG, greenB);
    noStroke();
    ellipse(0, 0, 15, 6);
    rotate(PI);
    ellipse(0, 0, 14, 5);

  }
}

