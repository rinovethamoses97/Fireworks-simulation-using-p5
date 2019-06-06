var particles=[];
function setup(){
    createCanvas(600,600);
    background(0);
}
function draw(){
    if(random(1)<0.2){
        particles.push(new Particle(random(width),height,false))
    }
    background(0,10);
    for(var i in particles){
        if(particles[i].subParticles.length==0 && particles[i].exploded){
            particles.splice(i,1);
            i--;
        }
        else{
            particles[i].update();
            particles[i].show();
        }
    }
}