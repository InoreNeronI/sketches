class t{constructor(t){this.QUANTITY=100,this.PARTICLE_SIZE=10,this.document=t,this.window=t.defaultView}drawParticles(t,i){if(t&&t.getContext){this.context=t.getContext("2d"),this.context.globalCompositeOperation="destination-over",this.window.addEventListener("resize",this.windowResizeHandler.bind(this),!1);let e=new ResizeObserver(t=>t.forEach(this.windowResizeHandler.bind(this)));this.CONTAINER=i,e.observe(this.CONTAINER),this.windowResizeHandler(),this.createParticles(),this.loop()}}windowResizeHandler(){this.context.canvas.width=this.CONTAINER.offsetWidth,this.context.canvas.height=this.CONTAINER.offsetHeight}createParticles(){this.particles=[];for(let t=0;t<this.QUANTITY;t++){let i=this.PARTICLE_SIZE/2+Math.random()*(this.context.canvas.width-this.PARTICLE_SIZE/2),e=this.PARTICLE_SIZE/2+Math.random()*(this.context.canvas.offsetHeight-this.PARTICLE_SIZE/2),s=-2+4*Math.random(),o=-2+4*Math.random();this.particles.push({position:{x:i,y:e},size:this.PARTICLE_SIZE,directionX:s,directionY:o,speed:2,targetX:i,targetY:e,depth:0,index:t,fillColor:`#${(60159*Math.random()+16711680|0).toString(16)}`})}}loop(){this.context.fillStyle="rgba(248, 249, 250, 0.2)",this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);let t=0,i=0;for(let i=0;i<this.particles.length;i++){let e=this.particles[i],s={x:e.position.x,y:e.position.y};(e.position.x<=e.size/2||e.position.x>=this.context.canvas.width-this.PARTICLE_SIZE/2)&&(e.directionX*=-1),(e.position.y<=e.size/2||e.position.y>=this.context.canvas.offsetHeight-this.PARTICLE_SIZE/2)&&(e.directionY*=-1);for(let i=0;i<this.particles.length;i++){let s=this.particles[i];s.index!==e.index&&(t=this.PARTICLE_SIZE,Math.sqrt(Math.abs(s.position.x-e.position.x)**2+Math.abs(s.position.y-e.position.y)**2)<t&&(this.randomiseDirection(e),this.randomiseDirection(s)))}e.position.x-=e.directionX,e.position.y-=e.directionY,this.context.beginPath(),this.context.fillStyle=e.fillColor,this.context.lineWidth=e.size,this.context.moveTo(s.x,s.y),this.context.arc(e.position.x,e.position.y,e.size/2,0,2*Math.PI,!0),this.context.closePath(),this.context.fill()}this.window.requestAnimationFrame(this.loop.bind(this))}randomiseDirection(t){let i=0;for(;0===i||90===i||180===i||360===i;)i=Math.floor(360*Math.random());let e=180*i/Math.PI;t.directionX=Math.sin(e)*t.speed,t.directionY=Math.cos(e)*t.speed}}document.addEventListener("DOMContentLoaded",i=>{new t(i.target).drawParticles(i.target.querySelector(".canvas-background"),i.target.querySelector(".main"))},!1);
//# sourceMappingURL=index.3d7fe41d.js.map
