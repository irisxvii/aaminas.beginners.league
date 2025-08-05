let x = 200; 
let y = 200;  
let speedX = 3;  
let speedY = 2;  

function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background("black");  

  x += speedX;
  y += speedY;

  ellipse(x, y, 50, 50);

  if (x <= 0 || x >= width) {
    speedX = -speedX;  
  }

  if (y <= 0 || y >= height) {
    speedY = -speedY;  
  }
}