class Ship{

  constructor(){
    this.x = width/2;
    this.xdir = 0;
  }

  show(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-30, 20, 40);
  }

  setDir(dir){
    this.xdir = dir;
  }

  move(direction){
    this.x += this.xdir;
  }
}
