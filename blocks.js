class Blocks{
constructor(x,y,width,height){
var options = {
isStatic:true,
restitution:0.8,
friction:1.0,
density:1.0
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world,this.body);
this.image = loadImage("sprites/wood1.png");
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    fill("black")
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 70, 70);
    pop();

}
}