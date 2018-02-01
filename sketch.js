let ship;
let enemyImg;
let font;
let newText;
let bullets = [];
let enemies = [];

function preload(){
  enemyImg = loadImage('imgs/enemy.jpg');
  font = loadFont('libraries/AvenirNextLTPro-Demi.otf');
}

function setup() {
  // put setup code here
  createCanvas(700, 700);
  ship = new Ship();
  newText = new Text(font, width/2, height/2);
  // Bullet = new Bullet(width/2, height/2);
  // for (let i = 0; i < 10; i++) {
  //   enemies[i] = new Enemy(enemyImg, i * 60, 20);
  // }
 }

function draw() {
  // put drawing code here
  background(0);
  ship.show();
  ship.move();

  newText.show();
  newText.move();


  if(frameCount % 30 == 0 && enemies.length < 20){
    let enemy = new Enemy(enemyImg, 0, 20);
    enemies.push(enemy);
  }
  // image(enemyImg, width/2, height/2, 100, 100);

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < enemies.length; j++) {
      if (bullets[i].hits(enemies[j])) {
        bullets[i].delete();
        enemies[j].delete();
        console.log("HITS!");
      }
    }
  }

  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].toDelete) {
      enemies.splice(i, 1);
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].show();
    enemies[i].move();
    if (enemies[i].touchEdge()) {
      enemies[i].shiftDown();
    }
  }

}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ' && enemies[0].y >= 2 * enemies[0].r + 5) {
    let bullet = new Bullet(ship.x, height - 40);
    bullets.push(bullet);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(3);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-3);
  }
}
