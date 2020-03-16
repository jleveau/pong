
const Z = 90;
const S = 83;
const ARROW_UP = 38;
const ARROW_DOWN = 40;

const SPEED_X = 10;
const SPEED_PAD = 15;
const SPEED_PAD2 = 15;
const WIDTH = 800;
const HEIGHT = 680;
const SPEED_Y_MAX = 10;

const BALL_RADIUS = 30;
const PAD_WIDTH = 50;
const PAD_HEIGTH = 150;

const joueur1 = {
  x: WIDTH/10,
  y: HEIGHT/2 - PAD_HEIGTH/2,
  height: PAD_HEIGTH,
  width: PAD_WIDTH,
  speed: 0,
  score: 0,
  textScore : 'Score joueur 1 = 0'
};

const joueur2 = {
  x: WIDTH/1.2,
  y: HEIGHT/2 - PAD_HEIGTH/2,
  height: PAD_HEIGTH,
  width: PAD_WIDTH,
  speed: 0,
  score: 0,
  textScore : 'Score joueur 2 = 0'
};

const ball = {
  x : WIDTH/2,
  y : HEIGHT/2,
  radius: BALL_RADIUS,
  speed_x: SPEED_X,
  speed_y: 0
};

let SPEED_Y = 0;


function setup() {
  frameRate(30);
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(75);

  updateBall(ball);
  updatePad(joueur1);
  updatePad(joueur2);

  drawBall(ball);
  drawPad(joueur1);
  drawPad(joueur2);
  drawScore();
}
 
function keyPressed() {
  if (keyCode === Z) {
    joueur1.speed = -SPEED_PAD;
  } else if (keyCode === S) {
    joueur1.speed = SPEED_PAD;
  } 

  if (keyCode === ARROW_UP) {
    joueur2.speed = -SPEED_PAD2;
  } else if (keyCode === ARROW_DOWN) {
    joueur2.speed = SPEED_PAD2;
  }
}

function updateBall(ball) {
  ball.x += ball.speed_x;
  ball.y += ball.speed_y;

  if (ball.x >= (WIDTH - ball.radius)) {
    ball.x = WIDTH/2;
    ball.y = HEIGHT/2;
    ball.speed_y = 0;
    joueur1.score ++;
    joueur1.textScore = 'Score joueur 1 = ' + joueur1.score;
  }
  else if (ball.x <= ball.radius) {
    ball.x = WIDTH/2;
    ball.y = HEIGHT/2;
    ball.speed_y = 0;
    joueur2.score ++;
    joueur2.textScore = 'Score joueur 2 = ' + joueur2.score;
  }
  else if (ball.y >= (HEIGHT)) {
    ball.speed_y = -SPEED_Y;
  }
  else if (ball.y <= 0 + ball.radius) {
    ball.speed_y = SPEED_Y;
  }

  if ((ball.x <= joueur1.x + joueur1.width + ball.radius) && ((ball.y >= joueur1.y) && (ball.y <= joueur1.y + joueur1.height/2))) {
    ball.speed_x = SPEED_X;
    SPEED_Y = SPEED_Y_MAX * (joueur1.y / (ball.y + joueur1.height/2));
    ball.speed_y = -SPEED_Y ;
  }
  else if ((ball.x <= joueur1.x + joueur1.width + ball.radius) && ((ball.y >= joueur1.y + joueur1.height/2) && (ball.y <= joueur1.y + joueur1.height))) {
    ball.speed_x = SPEED_X;
    SPEED_Y = SPEED_Y_MAX * ((joueur1.y + joueur1.height/2) / (ball.y + joueur1.height));
    ball.speed_y = SPEED_Y;
  }
  else if ((ball.x >= joueur2.x - ball.radius) && ((ball.y >= joueur2.y) && (ball.y <= joueur2.y + joueur2.height/2))){
    ball.speed_x = -SPEED_X;
    SPEED_Y = SPEED_Y_MAX * (joueur2.y / (ball.y + joueur2.height/2));
    ball.speed_y = -SPEED_Y;
  }
  else if ((ball.x >= joueur2.x - ball.radius) && ((ball.y >= joueur2.y + joueur2.height/2) && (ball.y <= joueur2.y + joueur2.height))) {
    ball.speed_x = -SPEED_X;
    SPEED_Y = SPEED_Y_MAX * ((joueur2.y + joueur2.height/2) / (ball.y + joueur2.height));
    ball.speed_y = SPEED_Y;
  }

}

function updatePad(pad) {


  if (!(keyIsDown(Z) || keyIsDown(S))) {
    joueur1.speed = 0;
  } 

  if (!(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW))) {
    joueur2.speed = 0;
  } 

  joueur1.y += joueur1.speed;
  joueur2.y += joueur2.speed;

  keyPressed();
  
}

function drawBall(ball) {
  circle(ball.x, ball.y, ball.radius);

}


function drawPad(pad) {
  rect(joueur1.x, joueur1.y, joueur1.width, joueur1.height);
  rect(joueur2.x, joueur2.y, joueur2.width, joueur2.height);

}

function drawScore() {
  textSize(32);
  text(joueur1.textScore, 50, 100);
  text(joueur2.textScore, 500, 100);

}




