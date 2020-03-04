
const SPEED = 10;
const SPEED_PAD = 15;
const SPEED_PAD2 = 15;
const WIDTH = 800;
const HEIGTH = 680;

const BALL_RADIUS = 30;
const PAD_WIDTH = 50;
const PAD_HEIGTH = 150;

let positionEllipseX = WIDTH/2;
let positionEllipseY = HEIGTH/2;

let currentSpeedEllipseX = SPEED;
let currentSpeedEllipseY = SPEED;

let positionRectX = WIDTH/10;
let positionRectY = HEIGTH/2 - PAD_HEIGTH/2;

let positionRect2X = WIDTH/1.2;
let positionRect2Y = HEIGTH/2 - PAD_HEIGTH/2;

let currentSpeedRectY = 0;
let currentSpeedRect2Y = 0;

let scoreJoueur1 = 0;
let scoreJoueur2 = 0;

let text = 'Score joueur 1 = ' + scoreJoueur1;
let text2 = 'Score joueur 2 = ' + scoreJoueur2;


function setup() {
  frameRate(30);
  createCanvas(WIDTH, HEIGTH);
}


function draw() {
  background(75);

  if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))) {
    currentSpeedRectY = 0;
  } 

  if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))) {
    currentSpeedRect2Y = 0;
  } 


  positionRectY += currentSpeedRectY;
  positionRect2Y += currentSpeedRect2Y;

  positionEllipseX += currentSpeedEllipseX;
  positionEllipseY += currentSpeedEllipseY;
 

  if (positionEllipseX >= (WIDTH - BALL_RADIUS)) {
    positionEllipseX = WIDTH/2;
    positionEllipseY = HEIGTH/2;
    scoreJoueur1 ++;
  }
  else if (positionEllipseX <= BALL_RADIUS) {
    positionEllipseX = WIDTH/2;
    positionEllipseY = HEIGTH/2;
    scoreJoueur2 ++;
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
  else if ((positionEllipseX >= positionRect2X - BALL_RADIUS) && (positionEllipseY >= positionRect2Y) && (positionEllipseY <= positionRect2Y + PAD_HEIGTH)) {
    currentSpeedEllipseX = -SPEED;
  }

  
  circle(positionEllipseX, positionEllipseY, BALL_RADIUS);
  rect(positionRectX, positionRectY, PAD_WIDTH, PAD_HEIGTH);
  rect(positionRect2X, positionRect2Y, PAD_WIDTH, PAD_HEIGTH);

}

 
function keyPressed() {

    if (keyCode === UP_ARROW) {
    currentSpeedRectY = -SPEED_PAD;
  } else if (keyCode === DOWN_ARROW) {
    currentSpeedRectY = SPEED_PAD;
  }

  if (keyCode === UP_ARROW) {
    currentSpeedRect2Y = -SPEED_PAD2;
  } else if (keyCode === DOWN_ARROW) {
    currentSpeedRect2Y = SPEED_PAD2;
  }
}




