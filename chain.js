class Chain{
    constructor(body1, body2){
        var options = {
            length:100,
            stiffness:0.3,
            bodyA:body1,
            bodyB:body2
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        strokeWeight(10)
        line(posA.x, posA.y, posB.x, posB.y)
    }
}