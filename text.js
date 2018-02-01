class Text{

  constructor(font, x, y){
    this.font = font;
    this.x = x;
    this.y = y;
    this.r = 60;
  }

  show(){
    textFont(this.font);
    textAlign(CENTER);
    textSize(this.r);
    text('Start', this.x, this.y);
  }

  move(){
    this.x += 1;
  }
}
