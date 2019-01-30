function setup(){
  createCanvas(600,600);
  noLoop();
}

function draw(){
  background(255);
  strokeWeight(10);
  translate(width/2,height-20);
  branch(0);
}

function branch(depth){
  if (depth < 10) {
    line(0,0,0,-height/10); // draw a line going up
    {
      translate(0,-height/10); // move the space upwards
      rotate(random(-0.05,0.05));  // random wiggle

      if (random(1.0) < 0.6){ // branching
        rotate(0.3); // rotate to the right
        scale(0.8); // scale down

        push(); // now save the transform state
        branch(depth + 1); // start a new branch!
        pop(); // go back to saved state

        rotate(-0.6); // rotate back to the left

        push(); // save state
        branch(depth + 1);   // start a second new branch
        pop(); // back to saved state
     }
      else { // no branch - continue at the same depth
        branch(depth);
      }
    }
  }
}


function mouseReleased(){
  redraw();
}
