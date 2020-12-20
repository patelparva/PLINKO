class Plinko{
    constructor(x,y) {
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,20,20);
        pop();
    }
}