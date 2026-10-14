let pumpkinImage;
let pumpkinWidth = 140;
let pumpkinSquish = 1;

let ghostImage;
let ghostX = 20;
let ghostdX = 2;

let leafImage;
let leavesX = [];
let leavesY = [];
let leavesdX = [];

let halloweenMusic;

async function setup() {
  createCanvas(700, 700);
  
  pumpkinImage = await loadImage('images/pumpkin.png');
  ghostImage = await loadImage('images/ghost.png');
  leafImage = await loadImage('images/leaf.png');
  halloweenMusic = mySound = await loadSound('images/halloween.mp3');
  
  for(let i = 0; i < 20; i++) {
    leavesX[i] = random(650);
    leavesY[i] = random(50);
    leavesdX[i] = random(1) + 1;
  }
}

function draw() {
  background(50, 39, 79);
  stroke(0);
  strokeWeight(1);
  
  // Ground //
  fill(61, 49, 36);
  rect(0, 620, 700, 80);
  
  // Pumpkin //
  image(pumpkinImage, 140, 500, pumpkinWidth, 140);
  
  pumpkinWidth += pumpkinSquish;
  if(pumpkinWidth > 150) {
    pumpkinSquish = -1;
  }else if(pumpkinWidth < 130) {
    pumpkinSquish = 2;
  }
  
  // Ghost //
  image(ghostImage, ghostX, Math.cos(ghostX / 50) * 50 + 40, 160, 200);
  ghostX += ghostdX;
  
  if(ghostX > width - 140 || ghostX < 0) {
    ghostdX *= -1;
  }
  
  // Leaves //
  for(let i = 0; i < 20; i++) {
    tint(255, map(leavesY[i], 0, 600, 0, 255));
    image(leafImage, leavesX[i], leavesY[i] + leavesdX[i], 50, 50);
    leavesY[i] += leavesdX[i];
    
    if(leavesY[i] > 600) {
      leavesY[i] = 0;
    }
  }
  noTint();
}

function mousePressed(){
  halloweenMusic.play();
}