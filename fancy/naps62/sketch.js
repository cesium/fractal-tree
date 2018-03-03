// Fractal Trees

var W = 800;
var H = 800;
var lineHeight = 150;
var rotationSlider;

var brownR = 129;
var brownG = 69;
var brownB = 19;

var greenR = 0;
var greenG = 128;
var greenB = 0;

function setup() {
  createCanvas(W, H);
  maxSlider = createSlider(1, 14, 8, 1);
  rotationSlider = createSlider(0, PI, PI/4, 0.01);
  heightSlider = createSlider(0, 1, 0.6, 0.01);
}

function draw() {
  background(255);

  stroke(139, 69, 19);
  strokeWeight(4);
  translate(400, 800);
  tree(maxSlider.value(), maxSlider.value(), rotationSlider.value(), -lineHeight);
}

function tree(max, count, rotation, endY) {
  if (count == 0) {
    return;
  }

  var greenRatio = (max - count) / max;
  var brownRatio = 1 - greenRatio;

  var colorR = brownR * brownRatio + greenR * greenRatio;
  var colorG = brownG * brownRatio + greenG * greenRatio;
  var colorB = brownB * brownRatio + greenB * greenRatio;

  var weightRatio = max - count;

  stroke(colorR, colorG, colorB);

  if (count == 1) {
    strokeWeight(20);
  } else {
    strokeWeight(6);
  }

  line(0, 0, 0, endY);
  translate(0, endY);
  push();

  rotate(rotation);

  tree(max, count - 1, rotation, endY * heightSlider.value());

  pop();

  rotate(-rotation);

  tree(max, count - 1, rotation, endY * heightSlider.value());
}
