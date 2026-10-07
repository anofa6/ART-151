let bgColor;
let canvasW = 400;
let canvasH = 400;

function setup() {
  createCanvas(canvasW, canvasH);
  bgColor = color(135, 206, 235);
  background(bgColor);
}

function draw() {
  fill('limegreen');
  rect(0, canvasH - 30, canvasW, 30);
  noStroke();
  fill('brown');
  rect(50, 280, 200, 100);
  triangle(50, 280, 250, 280, 150, 230);
  stroke();
  fill('white');
  translate(43, 280);
  rotate((QUARTER_PI / 45) * -28)
  rect(0, 0, 118, 5);
  translate(0, 0);
}