class Monster{

    constructor(x,y){

        var options={
            friction:0,
            density:5

        }

        this.body = Bodies.circle(x,y,100,options);
        this.radius = 200;
        World.add(world,this.body);
        this.image = loadImage("monster.png");

    }

    display(){

        var pos = this.body.position;
        push()
        translate(pos.x, pos.y+20);
        rectMode(CENTER)
        fill(255);
        //ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
       //circle(pos.x,pos.y,this.radius);
       pop();

    }
}