// Fractal Trees

let angle;
let fr = 15;

let brownR = 83;
let brownG = 53;
let brownB = 10;

let greenR = 30;
let greenG = 147;
let greenB = 45;

let redR = 100;
let redG = 3;
let redB = 0;

function setup() {
    createCanvas(windowWidth, 0.95 * windowHeight);
    slider = createSlider(width / 10, width / 8, width / 10, 1);
    randomSeed(2018);
    frameRate(fr);
}

function draw() {
    background(240, 248, 255);
    stroke(brownR, brownG, brownB);

    translate(width / 2, height);
    branch(200, 20, PI/4);
    noLoop();
}

function branch(len, wei, ang) {
    strokeWeight(wei);
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {

        push();
            rotate(ang + PI/6);
            branch(len * 0.35, wei * 0.4, ang);
        pop();

        push();
            branch(len * 0.75, wei * 0.8, ang);
        pop();

        push();
            rotate(-ang - PI/6);
            branch(len * 0.35, wei * 0.4, ang);
        pop();

    } else {
        fill(greenR, greenG, greenB);
        noStroke();

        ellipse(0, 0, 15, 6);

        rotate(PI);
        ellipse(0, 0, 14, 5);
    }
}

