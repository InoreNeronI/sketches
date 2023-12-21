const e={};e.boss1={nextStage:"enter",stages:{enter:{nextStage:"ricochet",ai(e){pl.pos.y<3*MAP_HEIGHT/4&&(pl.pos.y=lerp(pl.pos.y,3*MAP_HEIGHT/4,.05*dt())),e.pos.y>=MAP_HEIGHT/8&&(e.pos.y=MAP_HEIGHT/8,e.vel.y=0,e.switchStage())},init(e){e.speed=1,e.vel=createVector(0,e.speed),e.needleStage=.5>random()}},ricochet:{nextStage:"wait",timeLimit:720,ai(e){e.speed=lerp(e.speed,3,.05*dt()),e.vel.setMag(e.speed);for(let e=0;e<bullets.length;e++){let t=bullets[e];t.fromPlayer&&(t.mapTop=MAP_HEIGHT/4)}e.fire()},attack(e){emitBullets(e.pos.x,e.pos.y,90,[-45,0,45],5,5,BULLET.ricochet)},init(e){e.fireRate=35,e.vel=createVector(randSign(),0),pl.mapTop=MAP_HEIGHT/4,walls.push(new Wall(MAP_HEIGHT/4,20,!0))},finish(e){e.vel.x=0,pl.mapTop=0,walls=[]}},wait:{nextStage:"center",timeLimit:120,ai(e){e.pos.x=lerp(e.pos.x,width/2,.05*dt())}},center:{ai(e){e.pos.y>=MAP_HEIGHT/2&&(e.pos.y=MAP_HEIGHT/2,e.vel.y=0,e.nextStage=e.needleStage?"needle":"spiral",e.needleStage=!e.needleStage,e.switchStage())},init(e){e.vel.y=e.speed}},spiral:{healthLimit:.3,nextStage:"up",timeLimit:1200,ai(e){e.fire()},attack(e){for(let t=0;t<e.emitters.length;t++)e.emitters[t].fire()},finish(e){for(let t=0;t<e.emitters.length;t++)e.emitters[t].dead=!0;e.emitters=[]},init(e){e.fireRate=0;let t=new Emitter(-200,0,e),i=new Emitter(200,0,e);applyTemplate(t,{bulletTemplate:BULLET.basic,fireRate:60,angles:[0,60,120,180,240,300],angVel:10,maxSpeed:2,minSpeed:2});let l=[];for(let e=0;e<6;e++){let t=60*e;for(let e=0;e<3;e++)l.push(t+15*e)}applyTemplate(i,{bulletTemplate:BULLET.basic,fireRate:60,angles:l,angVel:-10,maxSpeed:1,minSpeed:1}),e.emitters=[t,i]}},up:{nextStage:"clear",ai(e){e.pos.y<=MAP_HEIGHT/8&&(e.pos.y=MAP_HEIGHT/8,e.vel.y=0,e.switchStage())},init(e){e.vel=createVector(0,-e.speed/4)}},clear:{nextStage:"ricochet",timeLimit:60,ai(e){pl.pos.y<3*MAP_HEIGHT/4&&(pl.pos.y=lerp(pl.pos.y,3*MAP_HEIGHT/4,.05*dt()))}},needle:{healthLimit:.2,nextStage:"up",timeLimit:1e3,ai(e){e.fire()},attack(e){let t=random(360);emitBullets(e.pos.x,e.pos.y,t,[0,120,240],3,4,BULLET.twoStage)},init(e){e.fireRate=50}}},color:"#009B90",model:MODEL.ship.boss1,hp:380,points:2e3,onHitLeft(){this.pos.x=this.mapLeft+this.r*this.edgeRadius,this.vel.x*=-1},onHitRight(){this.pos.x=this.mapRight-this.r*this.edgeRadius,this.vel.x*=-1}},e.heavyBomber={nextStage:"enter",stages:{enter:{nextStage:"bombs",ai(e){e.pos.y>=MAP_HEIGHT/6&&(e.pos.y=MAP_HEIGHT/6,e.vel.y=0,e.switchStage())},init(e){e.speed=1,e.vel=createVector(0,e.speed)}},bombs:{nextStage:"center",healthLimit:.2,timeLimit:900,ai(e){e.speed=lerp(e.speed,2,.05*dt()),e.vel.setMag(e.speed),.003>random()&&(e.vel.x*=-1),e.fire()},attack(e){let t=.5>random()?0:180;emitBullets(e.pos.x,e.pos.y,t,[0],3,5,BULLET.largeBomb)},init(e){e.fireRate=70,e.vel=createVector(randSign(),0)},finish(e){e.vel.x=0}},center:{nextStage:"repel",timeLimit:260,ai(e){e.pos.x=lerp(e.pos.x,width/2,.05*dt())}},repel:{nextStage:"enemies",timeLimit:60,ai(e){pl.pos.y<3*MAP_HEIGHT/4&&(pl.pos.y=lerp(pl.pos.y,3*MAP_HEIGHT/4,.05*dt()))}},enemies:{nextStage:"wait",timeLimit:1200,ai(e){for(let e=0;e<bullets.length;e++){let t=bullets[e];t.fromPlayer&&(t.mapTop=MAP_HEIGHT/3)}e.fire()},attack(e){spawnEnemy()},init(e){e.fireRate=80,pl.mapTop=MAP_HEIGHT/3,walls.push(new Wall(MAP_HEIGHT/3,20,!0))}},wait:{nextStage:"delay",ai(e){for(let e=0;e<bullets.length;e++){let t=bullets[e];t.fromPlayer&&(t.mapTop=MAP_HEIGHT/3)}0===enemies.length&&e.switchStage()},finish(e){pl.mapTop=0,walls=[]}},delay:{nextStage:"bullets",timeLimit:60},bullets:{nextStage:"bombs",healthLimit:.2,timeLimit:1200,ai(e){e.fire()},attack(e){let t=random(30,150);if(emitBullets(e.pos.x,e.pos.y,t,[0],4,5,BULLET.large),.1>random()){let t=random(30,150);emitBullets(e.pos.x,e.pos.y,t,[0],0,3,BULLET.bomb)}},init(e){e.fireRate=50},finish(e){}}},color:"#009C41",model:MODEL.ship.heavyBomber,r:54,hp:440,points:2e3,onHitLeft(){this.pos.x=this.mapLeft+this.r*this.edgeRadius,this.vel.x*=-1},onHitRight(){this.pos.x=this.mapRight-this.r*this.edgeRadius,this.vel.x*=-1}};
//# sourceMappingURL=index.9edf6f20.js.map
