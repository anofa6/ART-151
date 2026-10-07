let bgColor;
let canvasW = 400;
let canvasH = 400;

let doorX = 135;
let doorY = 338;
let doorW = 25;
let doorH = 40;
let doorOutline = 'white';

function setup() {
  createCanvas(canvasW, canvasH);
  bgColor = color(135, 206, 235);
  background(bgColor);
}

function draw() {
  // Grass //
  fill('limegreen');
  rect(0, canvasH - 30, canvasW, 30);
  
  // Cloud //
  fill('white');
  ellipse(160, 70, 50, 40)
  ellipse(240, 70, 50, 40)
  ellipse(200, 50, 100, 50)
  
  // House //
  fill('brown');
  rect(50, 280, 200, 100);
  triangle(50, 280, 250, 280, 150, 230);
  fill('white');
  translate(43, 280);
  rotate((QUARTER_PI / 45) * -28)
  rect(0, 0, 120, 5);
  rotate((QUARTER_PI / 45) * 28)
  translate(212, 3);
  rotate((QUARTER_PI / 45) * -153)
  rect(0, 0, 120, 5)
  rotate((QUARTER_PI / 45) * 153)
  translate(-255, -283);
  
  // Door //
  fill('brown')
  stroke('white')
  strokeWeight(2)
  rect(doorX, doorY, doorW, doorH)
  line(doorX, doorY, doorX + doorW, doorY + doorH)
  line(doorX + doorW, doorY, doorX, doorY + doorH)
  
  // Reset Stroke //
  stroke('black')
  strokeWeight(1);
  
}