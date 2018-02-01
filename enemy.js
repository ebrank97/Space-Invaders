class Enemy{

  constructor(img, x, y){
    this.img = img;
    this.x = x;
    this.y = y;
    this.r = 20
    this.xdir = 2;
    this.toDelete = false;
  }

  show(){
    image(this.img, this.x, this.y, this.r * 2, this.r * 2);
    // fill(255, 0, 200);
    // ellipse(this.x, this.y, this.r * 2);
  }

  touchEdge(){
    if(this.x > width - this.r * 2 || this.x < 0){
      return true;
    } else{
      return false;
    }
  }

  shiftDown(){
    this.y += 2 * this.r + 5;
    this.xdir *= -1;
  }

  move(){
    this.x += this.xdir;
  }

  delete(){
    this.toDelete = true;
  }

}
