class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.1,
            friction :1,
           //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(0,0,this.width, this.height);
        pop();
      }
}