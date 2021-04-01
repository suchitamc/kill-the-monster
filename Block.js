class Block{

    constructor(x,y){

        var options={
            friction:0,
            density:0.5,
            restitution:1.0
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,0,0);
        strokeWeight(4);
        stroke(0);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}