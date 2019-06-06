class Particle{
	constructor(x,y,isSubparticle){
		this.pos=createVector(x,y);
		if(isSubparticle){
			this.velocity=createVector(random(-3,3),random(-3,3))
			this.gravity=0.08;
			this.life=255;
		}
		else{
			this.velocity=createVector(0,random(-10,-4));
			this.gravity=0.08;
			this.subParticles=[];
			this.exploded=false;
			this.color={
				r:floor(random(0,255)),
				g:floor(random(0,255)),
				b:floor(random(0,255)),
			}
		}
	}
	show(){
		if(!this.exploded){
			stroke(this.color.r,this.color.g,this.color.b);
			strokeWeight(4);
			point(this.pos.x,this.pos.y);
		}
		for(var i in this.subParticles){
			stroke(this.color.r,this.color.g,this.color.b,this.subParticles[i].life);
			strokeWeight(4);
			point(this.subParticles[i].pos.x,this.subParticles[i].pos.y);
		}
	}
	update(){
		if(!this.exploded){
			this.velocity.y+=this.gravity;
			this.pos.add(this.velocity);
			if(this.velocity.y>=0){
				this.exploded=true;
				for(var i=0;i<100;i++){
					this.subParticles.push(new Particle(this.pos.x,this.pos.y,true))
				}
			}
		}
		for(var i in this.subParticles){
			this.subParticles[i].velocity.y+=this.subParticles[i].gravity;
			this.subParticles[i].pos.add(this.subParticles[i].velocity);
			this.subParticles[i].life-=3;
		}
	}
}