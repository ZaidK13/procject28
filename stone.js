class Stone
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image=loadImage("stone.png")
		this.body=Bodies.circle(x, y, w, options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill("green")
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}