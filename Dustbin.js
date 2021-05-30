class Dustbin



{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.image=loadImage("dustbingreen.png")
		World.add(world, this.rightWallBody);

	}
	display()
	{
			
			var posRight=this.rightWallBody.position;

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			image(this.image,0,0,this.disbinWidth, this.dustbinHeight);
			pop()

			
			
	}

}