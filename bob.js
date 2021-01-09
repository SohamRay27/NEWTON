class Bob{
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density : 0.1

        }
        
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);

      }
      display(){
      var pos=this.body.position
      var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate (angle)
        imageMode(RADIUS)
         fill(255) 
        image(this.image,0,0,this.r, this.r);

      
        pop();
      }
}