class Box  {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.7,
        }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibility = 255
  }
 
  display(){
    
    console.log(this.body.speed)
    if(this.body.speed < 7)
{

    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(rgb(3,252,194));
    rect(0,0, this.width, this.height);
    pop();
 }

     else{
       World.remove(world, this.body);
       push();
       this.visiblity = this.visiblity - 5;
       tint(255,this.visiblity);
      rect(999,999, this.width, this.height);
       pop();
     }
     
    
    
   
  }
};