
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

let SPEED_Y = 0;

function setup() {
  frameRate(30);
  createCanvas(WIDTH, HEIGHT);
  class Joueur {
    constructor(x, y, height, width, speed, score, up, down, ratio) {
        this.x = x;
        this.y = y;
        this.heigth = height;
        this.width = width;
        this.speed = speed;
        this.score = score;
        this.down = down;
        this.up = up;
        this.ratio = ratio;
  }

    update() {
        if (!(keyIsDown(this.down) || keyIsDown(this.up))) {
            this.speed = 0;
  }     if (keyCode === this.up) {
            this.speed = -SPEED_PAD;
  }     else if (keyCode === this.down) {
            this.speed = SPEED_PAD;
  } 
        this.y += this.speed; 
  }
    draw() {
        rect(this.x, this.y, this.width, this.height);  
  }
  }

  class Ball {
    constructor (x, y, radius, speed_x, speed_y) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed_x = speed_x;
        this.speed_y = speed_y;
    }

    update(Joueur1, Joueur2) {
        this.x += this.speed_x; 
        this.y += this.speed_y;
      
        if (this.x >= (WIDTH - this.radius)) {
            this.x = WIDTH/2;
            this.y = HEIGHT/2;
            this.speed_y = 0;
  }     else if (this.x <= this.radius) {
            this.x = WIDTH/2;
            this.y = HEIGHT/2;
            this.speed_y = 0;
  }     else if (this.y >= (HEIGHT)) {
            this.speed_y = -SPEED_Y;
  }     else if (this.y <= 0) {
        this.speed_y = SPEED_Y;
  }
 
        if ((this.x <= Joueur1.x + Joueur1.width + this.radius) && ((this.y >= Joueur1.y) && (this.y <= Joueur1.y + Joueur1.height/2))) {
            this.speed_x = SPEED_X;
            SPEED_Y = SPEED_Y_MAX * Joueur1.ratio;
            this.speed_y = -SPEED_Y ;
  }     else if ((this.x <= Joueur1.x + Joueur1.width + this.radius) && ((this.y >= Joueur1.y + Joueur1.height/2) && (this.y <= Joueur1.y + Joueur1.height))) {
            this.speed_x = SPEED_X;
            SPEED_Y = SPEED_Y_MAX * Joueur1.ratio;
            this.speed_y = SPEED_Y;
  }     else if ((this.x >= Joueur2.x - this.radius) && ((this.y >= Joueur2.y) && (this.y <= Joueur2.y + Joueur2.height/2))){
            this.speed_x = -SPEED_X;
            SPEED_Y = SPEED_Y_MAX * Joueur2.ratio;
            this.speed_y = -SPEED_Y;
  }     else if ((this.x >= Joueur2.x - this.radius) && ((this.y >= Joueur2.y + Joueur2.height/2) && (this.y <= Joueur2.y + Joueur2.height))) {
            this.speed_x = -SPEED_X;
            SPEED_Y = SPEED_Y_MAX * Joueur2.ratio;
            this.speed_y = SPEED_Y;
  }
}
    draw() {
        circle(this.x, this.y, this.radius);
}
  }

  class Score  {
    constructor (texteJ) {
      this.texteJ = texteJ;
    }
  

  update(Balle, Joueur1, Joueur2) {
      if (Balle.x >= (WIDTH - Balle.radius)) {
          Joueur1.score ++;
}     else if (Balle.x <= Balle.radius) {
          Joueur2.score ++;    
}
}
  
  draw(Score_Joueur_1, Score_Joueur_2) {
      textSize(32);
      text(Score_Joueur_1, 50, 100);
      text(Score_Joueur_2, 500, 100);
}
  }

const Joueur1 = new Joueur(WIDTH/10, HEIGHT/2, PAD_HEIGTH, PAD_WIDTH, 0, 0, Z, S, this.y/(this.y +(this.height/2)));
const Joueur2 = new Joueur(WIDTH/1.2, HEIGHT/2 - PAD_HEIGTH/2, PAD_HEIGTH, PAD_WIDTH, 0, 0, ARROW_UP, ARROW_DOWN, this.y/(this.y +(this.height/2)));
const Balle = new Ball(WIDTH/2, HEIGHT/2, BALL_RADIUS, SPEED_X, 0);
const Score_Joueur_1 = new Score('Score Joueur 1 = ' + Joueur1.score);
const Score_Joueur_2 = new Score('Score Joueur 2 = ' + Joueur2.score);
}

function draw() {
  background(75);
  Joueur1.update();
  Joueur2.update();
  Joueur1.draw();
  Joueur2.draw();
  Balle.update();
  Balle.draw();
  Score_Joueur_1.update();
  Score_Joueur_2.update();
  Score_Joueur_1.draw();
  Score_Joueur_2.draw();

}






