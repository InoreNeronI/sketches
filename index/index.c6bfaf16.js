let t,e;const i=document.querySelector(".main");let o=i.offsetWidth,n=i.offsetHeight;const s=document.querySelector(".canvas-background");function a(t){let e=0;for(;0===e||90===e||180===e||360===e;)e=Math.floor(360*Math.random());let i=180*e/Math.PI;t.directionX=Math.sin(i)*t.speed,t.directionY=Math.cos(i)*t.speed}function r(){o=i.offsetWidth,n=i.offsetHeight,s.width=o,s.height=n}s&&s.getContext&&((t=s.getContext("2d")).globalCompositeOperation="destination-over",window.addEventListener("resize",r,!1),r(),function(){e=[];for(let t=0;t<100;t++){let o=5+Math.random()*(i.offsetWidth-5),n=5+Math.random()*(i.offsetHeight-5),s=-2+4*Math.random(),a=-2+4*Math.random();e.push({position:{x:o,y:n},size:10,directionX:s,directionY:a,speed:2,targetX:o,targetY:n,depth:0,index:t,fillColor:`#${(60159*Math.random()+16711680|0).toString(16)}`})}}(),function i(){t.fillStyle="rgba(255,255,255,0.2)",t.fillRect(0,0,t.canvas.width,t.canvas.height);let s=0,r=0;for(let i=0;i<e.length;i++){let r=e[i],l={x:r.position.x,y:r.position.y};(r.position.x<=r.size/2||r.position.x>=o-5)&&(r.directionX*=-1),(r.position.y<=r.size/2||r.position.y>=n-5)&&(r.directionY*=-1);for(let t=0;t<e.length;t++){let i=e[t];i.index!==r.index&&(s=10,Math.sqrt(Math.abs(i.position.x-r.position.x)**2+Math.abs(i.position.y-r.position.y)**2)<s&&(a(r),a(i)))}r.position.x-=r.directionX,r.position.y-=r.directionY,t.beginPath(),t.fillStyle=r.fillColor,t.lineWidth=r.size,t.moveTo(l.x,l.y),t.arc(r.position.x,r.position.y,r.size/2,0,2*Math.PI,!0),t.closePath(),t.fill()}requestAnimationFrame(i)}()),document.querySelector(".screen").addEventListener("click",r);
//# sourceMappingURL=index.c6bfaf16.js.map
