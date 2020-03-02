
const SPEED = 10;
let postitionX = 0;
let postitionY = 0;

let currentSpeedX = 0;
let currentSpeedY = 0;


function setup() {
  frameRate(30);
  createCanvas(800, 680);
  
}

function draw() {
  background(75);
  
  if (!(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW))) {
    currentSpeedX = 0;
  } 
  if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))) {
    currentSpeedY = 0;
  } 

  postitionX += currentSpeedX;
  postitionY += currentSpeedY;
  ellipse(postitionX, postitionY, 80, 80);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    currentSpeedX = -SPEED;
  } else if (keyCode === RIGHT_ARROW) {
    currentSpeedX = SPEED;
  } else if (keyCode === UP_ARROW) {
    currentSpeedY = -SPEED;
  } else if (keyCode === DOWN_ARROW) {
    currentSpeedY = SPEED;
  }
}