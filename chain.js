class Chain {
   constructor (bodyA,bodyB)
   {
       var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           length :100,
           stiffness : 0.5
       }
       this.chain = Constraint.create(options);
       World.add(world,this.chain);
   } 
   display(){
       var PA = this.chain.bodyA.position
       var PB = this.chain.bodyB.position
       line (PA.x,PA.y,PB.x,PB.y)
   }
}