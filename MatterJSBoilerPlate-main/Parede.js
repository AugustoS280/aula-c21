class Parede 
{
  constructor(x, y, a, l) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, a, l, options);
    this.a = a;
    this.l = l;
    World.add(world, this.body);
  }

  mostrar() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("black");
    rect(pos.x, pos.y, this.a, this.l);
    pop();
  }
  
}


