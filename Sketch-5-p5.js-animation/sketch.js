let pumpkinImage;

async function setup() {
  createCanvas(700, 700);
  
  pumpkinImage = await loadImage('images/pumpkin.png');
}

function draw() {
  // background(50, 39, 79);
  // stroke(0);
  // strokeWeight(1);
  
  // Ground //
  // fill(61, 49, 36);
  // rect(0, 620, 700, 80);
  
  // Pumpkin //
  image(pumpkinImage, 0, 0);
}