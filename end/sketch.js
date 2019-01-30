// Fractal Trees

let angle;
let slider;

function setup() {
  createCanvas(800, 800);
  slider = createSlider(0, PI, PI/4, 0.01);
}

function draw() {
  background(0, 100, 100);
  angle = slider.value();
  stroke(255);
  translate(400, height);
  branch(200);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0,-len);
  if (len > 4) {
    push();
      rotate(angle);
      branch(len * 0.7);
    pop();

    push();
      rotate(-angle);
      branch(len * 0.7);
    pop();
  }
}
