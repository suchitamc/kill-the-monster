class Fly{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 450
        }

        this.string = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.string);

    }

    display(){

        if(this.string.bodyA){

        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;

        stroke(0);
        strokeWeight(0);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       
        }
    }

}