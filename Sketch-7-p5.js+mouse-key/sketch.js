let capture;
let mic;
let amplitude = 0;
let vol = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if(capture) {
    // let vol = mic.getLevel();
    
    image(capture, 0, 0, 300, 300 * capture.height / capture.width);
    filter(BLUR, map(vol, 0, 300, 0, 4));
    filter(POSTERIZE, 3);
  }
  
  vol++;
  if(vol > 300) {
    vol = 0;
  }
}

function mousePressed() {
  capture = createCapture(VIDEO);
  mic = new p5.AudioIn();
  mic.start();
}