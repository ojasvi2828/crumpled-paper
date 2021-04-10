class Paper {
	constructor(x,y,width,height){
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2		
			}
            this.body=Bodies.rectangle(x,y,width,height,options);
            this.image = loadImage("paper.png");
            World.add(world, this.body);
    }
display(){
 var pos =this.body.position;


 push();
            translate(pos.x, pos.y);
        rect(0, 0, this.width, this.height);
             pop(); 
}
 keyPressed(){
	if(keyCode === UP_ARROW){
 Matter.body.applyForce(paper.body,paper.body.position,{x:130,y: -145});

 	}
}
}