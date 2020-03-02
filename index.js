
const SPEED = 10;
const SPEED_PAD = 15;
const WIDTH = 800;
const HEIGTH = 680;

const BALL_RADIUS = 40;
const PAD_WIDTH = 50;
const PAD_HEIGTH = 150;

let positionEllipseX = WIDTH/2;
let positionEllipseY = HEIGTH/2;

let currentSpeedEllipseX = SPEED;
let currentSpeedEllipseY = SPEED;

let positionRectX = WIDTH/10;
let positionRectY = HEIGTH/2 - PAD_HEIGTH/2;


let currentSpeedRectY = 0;


function setup() {
  frameRate(30);
  createCanvas(WIDTH, HEIGTH);
}


function draw() {
  background(75);

  if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))) {
    currentSpeedRectY = 0;
  } 


  positionRectY += currentSpeedRectY;

  positionEllipseX += currentSpeedEllipseX;
  positionEllipseY += currentSpeedEllipseY;
 

  if (positionEllipseX >= (WIDTH - BALL_RADIUS)) {
    currentSpeedEllipseX = -SPEED;
  }
  else if (positionEllipseX <= BALL_RADIUS) {
    currentSpeedEllipseX = SPEED;
  }

  else if (positionEllipseY >= (HEIGTH - BALL_RADIUS)) {
    currentSpeedEllipseY = -SPEED;
  }
  else if (positionEllipseY <= BALL_RADIUS) {
    currentSpeedEllipseY = SPEED;
  }

  if ((positionEllipseX <= positionRectX + PAD_WIDTH + BALL_RADIUS) && (positionEllipseY >= positionRectY) && (positionEllipseY <= positionRectY + PAD_HEIGTH)) {
    currentSpeedEllipseX = SPEED;
  }
  

  circle(positionEllipseX, positionEllipseY, BALL_RADIUS);
  rect(positionRectX, positionRectY, PAD_WIDTH, PAD_HEIGTH);

}

function keyPressed() {

    if (keyCode === UP_ARROW) {
    currentSpeedRectY = -SPEED_PAD;
  } else if (keyCode === DOWN_ARROW) {
    currentSpeedRectY = SPEED_PAD;
  }
}




