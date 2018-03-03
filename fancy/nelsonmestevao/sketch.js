// Fractal Trees

var angle;
var slider;

function setup() {
  createCanvas(1600, 900);
  slider = createSlider(0, PI, PI/6, 0.01);
}

function draw() {
  background(240, 248, 255);

  angle = slider.value();
  stroke(178, 34, 34);
  strokeWeight(11);
  push();
    translate(400, height);
    branch(200,10, angle);
  pop();

  angle = slider.value() - PI/15;
  stroke(178, 34, 34);
  strokeWeight(11);
  push();
    translate(1200, height);
    branch(200,10, angle);
  pop();
}

function branch(len,wei,ang) {
  line(0, 0, 0, -len);
  translate(0,-len);
  strokeWeight(wei);
  if (len > 4) {
    stroke(0, 191, 255);
    push();
      rotate(ang);
      branch(len * 0.7, wei * 0.7, ang * .9);
    pop();

    stroke(95, 158, 160);
    push();
      rotate(-2*ang);
      branch(len * 0.7, wei * 0.7, ang * 1.2);
    pop();

    stroke(100, 200, 100);
    push();
      rotate(2*ang);
      branch(len * 0.3, wei * 0.7, ang * 1.1);
    pop();

    push();
      rotate(-ang);
      branch(len * 0.3, wei * 0.7, ang * 1.15);
    pop();
  }
}
