class Bullet{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;
  }

  show(){
    noStroke();
    fill(120, 0, 200);
    ellipse(this.x, this.y, this.r * 2);
  }

  move(){
    this.y -= 5;
  }

  hits(flower){
    let distance = dist(this.x, this.y, flower.x, flower.y);
    if(distance < this.r + flower.r){
      return true;
    } else{
      return false;
    }
  }

  delete(){
    this.toDelete = true;
  }
}
