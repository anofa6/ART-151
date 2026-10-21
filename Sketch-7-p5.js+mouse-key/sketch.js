let capture;
let mic;
let amplitude = 0;
let vol = 0;

function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
  strokeWeight(10);
  stroke('red');
}

function draw() {
  if(capture) {
    vol = mic.getLevel();
    
    image(capture, 0, 0, 300, 300);
    
    push();
    translate(150, 290);
    rotate(180);
    line(0, 0, 150 * cos(map(vol, 0, 0.7, 0, 180)), 150 * sin(map(vol, 0, 0.7, 0, 180)));
    pop();
    
    filter(BLUR, map(vol, 0, 0.7, 0, 4));
    filter(POSTERIZE, 3);
    
    console.log(vol);
  }
}

function mousePressed() {
  capture = createCapture(VIDEO);
  capture.hide();
  mic = new p5.AudioIn();
  mic.start();
}