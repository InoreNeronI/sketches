let e,a,t,r,i,n,o,l,s,d,c,p,u,h,f,g;function m(e,a,t,r){Object.defineProperty(e,a,{get:t,set:r,enumerable:!0,configurable:!0})}var x,y,A,v,S={};S=p5ex;var w={};const C=(0,(w=CreativeCodingCore).HtmlUtility).getElementOrBody("FarEast"),I={width:800,height:800},R="../assets",E=a=>e=a,T=e=>a=e,P=(e,a)=>{e.loadFont(`${R}/${a.jp}`,E),e.loadFont(`${R}/${a.en}`,T)};p5;let M=0;const L=e=>a=>e.loadSound(`${R}/${a}`),k=(e,a)=>{let s=L(e);e.soundFormats("ogg","mp3"),(t=s(a.music)).setLoop(!0),e.soundFormats("wav"),(r=s(a.gunSound)).setLoop(!0),i=s(a.bombSound),n=s(a.preAppearanceSound),o=s(a.appearanceSound),l=s(a.damageSound);let d=e.createDiv();d.position(0,0),e.userStartAudio().then(()=>d.remove())},b=()=>{t.play()},F=()=>{t.stop()},N=e=>{t.setVolume(e),r.setVolume(.25*e),i.setVolume(.65*e),n.setVolume(.3*e),o.setVolume(.5*e),l.setVolume(1*e),0===M&&e>0?b():M>0&&0===e&&F(),M=e},D=()=>{r.isPlaying()||r.play()},G=()=>{r.isPlaying()&&r.stop()},O=e=>{e.isPlaying()&&e.stop(),e.play()},H=()=>O(i),V=()=>O(n),B=()=>O(o),K=()=>O(l);var _={};m(_,"create",function(){return U}),m(_,"use",function(){return z}),m(_,"kill",function(){return Y}),m(_,"runAndDraw",function(){return j}),m(_,"reset",function(){return J}),m(_,"breakActors",function(){return Q}),m(_,"checkCollision",function(){return Z});const U=e=>({soa:(0,w.StructureOfArrays).from({active:!1,frameCount:0,x:0,y:0,vx:0,vy:0,rotationAngle:0,scaleFactor:1,drawGraphics:()=>{},drawGraphicsDamaged:null,run:()=>{},collisionDistance:0,life:0,damagedRemainingCount:0},e),startIndex:1/0,endIndex:0}),z=(e,a,t,r,i,n,o)=>{let{data:l,length:s}=e.soa,{active:d}=l;for(let c=0;c<s;c+=1)if(!d[c])return d[c]=!0,l.x[c]=a,l.y[c]=t,l.vx[c]=r,l.vy[c]=i,l.rotationAngle[c]=n,l.scaleFactor[c]=1,l.run[c]=o.run,l.drawGraphics[c]=o.draw,l.drawGraphicsDamaged[c]=o.drawDamaged||null,l.collisionDistance[c]=o.collisionDistance,l.life[c]=o.maxLife,l.frameCount[c]=0,l.damagedRemainingCount[c]=0,c<e.startIndex&&(e.startIndex=c),c>=e.endIndex&&(e.endIndex=c+1),c;return null},$=(e,a,t)=>{for(let r=a;r<t;r+=1)if(e[r])return r;return 1/0},W=(e,a,t)=>{for(let r=t-1;r>=a;r-=1)if(e[r])return r;return -1},Y=(e,a)=>{let{soa:t,startIndex:r,endIndex:i}=e,{active:n}=t.data;return!!n[a]&&(n[a]=!1,a===r&&(e.startIndex=$(n,r+1,i)),a===i&&(e.endIndex=W(n,e.startIndex,i-1)+1),!0)},j=e=>{let{soa:a,startIndex:t,endIndex:r}=e;if(t>=a.length)return;let{data:i}=a,{active:n,frameCount:o,drawGraphics:l,drawGraphicsDamaged:s,x:d,y:c,vx:p,vy:u,run:h,rotationAngle:f,scaleFactor:g,damagedRemainingCount:m}=i,x={x:0,y:0};for(let a=t;a<r;a+=1){if(!n[a])continue;if(h[a](i,a),x.x=d[a]+=p[a],x.y=c[a]+=u[a],!(0,w.RectangleRegion).containsPoint(S.canvas.logicalRegion,x,-100)){Y(e,a);continue}let t=g[a],r=s[a],y=m[a]>0;t>0&&(0,S.drawTransformed)(y&&r&&o[a]%4<2?r:l[a],d[a],c[a],f[a],t),y&&(m[a]-=1),o[a]+=1}},J=e=>{let{active:a,run:t,drawGraphics:r,drawGraphicsDamaged:i}=e.soa.data,n=()=>{};for(let o=0,l=e.soa.length;o<l;o+=1)a[o]=!1,t[o]=n,r[o]=n,i[o]=null;return e.startIndex=1/0,e.endIndex=0,e},Q=(e,a)=>{let{active:t,x:r,y:i,run:n,drawGraphics:o,drawGraphicsDamaged:l}=e.soa.data,s=()=>{};for(let d=0,c=e.soa.length;d<c;d+=1)t[d]&&(a(r[d],i[d]),t[d]=!1,n[d]=s,o[d]=s,l[d]=null);return e.startIndex=1/0,e.endIndex=0,e},Z=(e,a,t)=>{let r=e.soa.data,i=a.soa.data,{active:n,x:o,y:l,collisionDistance:s}=r,d=i.active,c=i.x,p=i.y,u=i.collisionDistance;for(let r=e.startIndex;r<e.endIndex;r+=1){if(!n[r])continue;let i=o[r],h=l[r],f=s[r];for(let n=a.startIndex;n<a.endIndex;n+=1){if(!d[n])continue;let o=f+u[n];!(Math.abs(i-c[n])>o)&&(Math.abs(h-p[n])>o||t(e,r,a,n))}}};let q=0;const X=_.create(1);let ee=!1;const ea=e=>{_.use(X,.5*I.width,I.height-100,0,0,-w.Math.HALF_PI,e),ee=!0},et=()=>{_.kill(X,0),ee=!1,G()},er=()=>ee?X.soa.data.life[0]:0,ei=X.soa.data.x,en=X.soa.data.y,eo=(e,a)=>{let t=ei[0]-e,r=en[0]-a;return 0===t&&0===r?0:Math.atan2(r,t)},el=_.create(128),es=e=>(a,t,r,i,n)=>_.use(e,a,t,r*Math.cos(i),r*Math.sin(i),i,n),ed=es(el),ec=_.create(32);let ep=0;const eu=(e,a,t)=>{let r=_.use(ec,e,a,0,0,w.Math.HALF_PI,t);return null!=r&&(ep+=1),r},eh=e=>{_.kill(ec,e),ep-=1},ef=e=>ec.soa.data.active[e],eg=_.create(1024),em=es(eg),ex=_.create(256),ey=(e,a,t)=>_.use(ex,e,a,0,0,0,t),eA=es(ex),ev=e=>_.kill(ex,e),eS=(e,a)=>{ex.soa.data.run[e]=a},ew=[ex,X,ec,el,eg],eC=()=>{(0,w.ArrayUtility).loop(ew,_.runAndDraw),q+=1},eI=()=>{q=0,(0,w.ArrayUtility).loop(ew,_.reset)},eR=e=>_.checkCollision(el,ec,e),eE=e=>{q%2!=0&&(X.soa.data.damagedRemainingCount[0]>0||_.checkCollision(eg,X,e))},eT=e=>_.breakActors(eg,e),eP=()=>(0,w.Random).fromArray(c),eM=()=>(0,w.Random).fromArray(h),eL={char:"多",dir:3,flip:!1},ek={char:"参",dir:0,flip:!1},eb=[{char:"欠",dir:0,flip:!1},{char:"洞",dir:0,flip:!0},{char:"鯵",dir:3,flip:!1},{char:"娃",dir:0,flip:!0},{char:"辣",dir:1,flip:!0},{char:"酔",dir:0,flip:!1},{char:"彫",dir:3,flip:!1},{char:"委",dir:2,flip:!0},{char:"綾",dir:3,flip:!1},{char:"儒",dir:0,flip:!0},{char:"俺",dir:0,flip:!0},{char:"喪",dir:0,flip:!0},{char:"沈",dir:0,flip:!0},{char:"演",dir:1,flip:!1},{char:"晩",dir:2,flip:!1},{char:"携",dir:3,flip:!1},{char:"詠",dir:0,flip:!0},{char:"筆",dir:0,flip:!0},{char:"筑",dir:0,flip:!0},{char:"苑",dir:2,flip:!0},{char:"摘",dir:1,flip:!1},{char:"描",dir:2,flip:!0},{char:"算",dir:2,flip:!0},{char:"輝",dir:1,flip:!1},{char:"郷",dir:1,flip:!1},{char:"解",dir:2,flip:!0},{char:"鑓",dir:2,flip:!0},{char:"簸",dir:3,flip:!0},{char:"讐",dir:2,flip:!0},{char:"濯",dir:0,flip:!0},{char:"鋳",dir:0,flip:!0},{char:"突",dir:2,flip:!0},{char:"探",dir:2,flip:!0},{char:"邪",dir:3,flip:!1},{char:"淑",dir:1,flip:!0},{char:"擁",dir:1,flip:!1},{char:"桟",dir:3,flip:!0},{char:"呑",dir:0,flip:!0},{char:"桑",dir:0,flip:!0}],eF=(a,t,r)=>{let i=.5*t,n=(0,S.p).createGraphics(t,t);return n.push(),n.translate(i,i),n.rotate(a.dir*w.Math.HALF_PI),a.flip&&n.scale(-1,1),n.fill(r),n.textFont(e,.8*t),n.textAlign(S.p.CENTER,S.p.CENTER),n.text(a.char,0,-.2*t),n.pop(),n},eN=e=>{let a=(0,S.graphicsToImage)(e),{width:t,height:r}=a,i=(0,S.p).createGraphics(t,r);i.fill(0),i.noStroke(),i.rect(0,0,t,.5*r),a.mask(i),e.clear(),e.image(a,0,0),e.translate(0,r),e.scale(1,-1),e.image(a,0,0)},eD=(e,a,t)=>{let r=eF(e,a,t);return eN(r),()=>{(0,S.p).image(r,0,0)}};(0,S.onSetup).push(e=>{let a=()=>{},t=(e,a)=>ed(e,a,70,-w.Math.HALF_PI,p),r=[32,90,122,74,106,13,10],i=(e,a)=>{let t=e.x[a],r=e.y[a],{width:i,height:n}=S.canvas.logicalSize;t<30?e.x[a]=30:t>=i-30&&(e.x[a]=i-30-1),r<30?e.y[a]=30:r>=n-30&&(e.y[a]=n-30-1)};s={run:(e,a)=>{i(e,a);let{vx:n,vy:o}=e,l=S.MoveKeys.unitVector;if(n[a]=10*l.x,o[a]=10*l.y,!(0,S.KeyBoard).anyKeyIsDown(r)){G();return}if(e.frameCount[a]%16==0||e.frameCount[a]%2==1)return;let s=e.x[a],d=e.y[a];t(s-45,d),t(s,d-20),t(s+45,d),t(s-45,d-30),t(s,d-50),t(s+45,d-30),D()},draw:d=eD(ek,100,e.color(0,64,0)),drawDamaged:()=>{},collisionDistance:20,maxLife:3},p={run:a,draw:eD(eL,40,e.color(128,144,128)),collisionDistance:15,maxLife:1};let n=[(e,a)=>{let t=e.x[a],r=e.y[a],i=eo(t,r);e.rotationAngle[a]=i,e.frameCount[a]%4==0&&(0,w.Random).bool(.2)&&em(t,r,4,i,u)},(e,a)=>{let t=e.frameCount[a],r=e.x[a],i=e.y[a];if(t%120<30)t%6==0&&em(r,i,5,e.rotationAngle[a],u);else{let t=eo(r,i);e.rotationAngle[a]+=.2*(t-e.rotationAngle[a])}},(e,a)=>{let t=e.x[a],r=e.y[a],i=e.frameCount[a],n=eo(t,r);if(e.rotationAngle[a]=n,!(i%90<45)&&i%4==0){let e=.008*i;for(let a=0;a<4;a+=1)em(t,r,8,e+a*w.Math.HALF_PI,u)}},(e,a)=>{let t=e.x[a],r=e.y[a],i=e.frameCount[a],n=eo(t,r);if(e.rotationAngle[a]=n,!(i%90>0))for(let e=0;e<24;e+=1)em(t,r,3,e*w.Math.TWO_PI/24+i,u)},(e,a)=>{let t=e.x[a],r=e.y[a],i=e.frameCount[a];if(i%180<90){if(i%4==0){let e=t+(0,w.Random).between(-50,50),a=r+(0,w.Random).between(-50,50),i=eo(e,a);em(e,a,4,i,u)}}else{let i=eo(t,r);e.rotationAngle[a]+=.1*(i-e.rotationAngle[a])}},(e,a)=>{let t=e.x[a],r=e.y[a],i=e.frameCount[a],n=e.rotationAngle[a];if(i%180<90){if(i%4==0){let e=4+i%90*.2;em(t-40,r,e,n,u),em(t+40,r,e,n,u)}}else{let i=eo(t,r);e.rotationAngle[a]+=.1*(i-n)}}],o=e.color(32,0,0),l=e.color(192,0,0);c=eb.map((e,a)=>({run:n[a%n.length],draw:eD(e,160,o),drawDamaged:eD(e,160,l),collisionDistance:70,maxLife:200})),u={run:a,draw:eD(eL,40,e.color(0)),collisionDistance:5,maxLife:1};let f=e.color(160,156,152),g=(e,a)=>{let t=e.frameCount[a]/45;e.scaleFactor[a]=1-(0,w.Easing).easeInQuad(t),e.vx[a]*=.9,e.vy[a]*=.9,e.vy[a]+=.1,e.frameCount[a]>45&&ev(a)};h=eb.map(e=>({run:g,draw:eD(e,32,f),collisionDistance:0,maxLife:0}))}),(x=A||(A={})).ACTIVE="ACTIVE",x.APPROACHING="APPROACHING",x.ABSENT="ABSENT";const eG=[{x:.25*I.width,y:.25*I.height,index:-1,state:"ABSENT"},{x:.5*I.width,y:.15*I.height,index:-1,state:"ABSENT"},{x:.75*I.width,y:.25*I.height,index:-1,state:"ABSENT"}],eO=e=>{for(let a=0;a<eG.length;a+=1)e(eG[a])},eH=e=>{for(let a=0;a<eG.length;a+=1){let t=eG[a];switch(t.state){case"ACTIVE":ef(t.index)||(t.state="ABSENT");break;case"ABSENT":(0,w.Random).bool(.02)&&e(t)}}};let eV=0;(y=v||(v={})).PLAYING="PLAYING",y.RESULT="RESULT";let eB="PLAYING";const eK=(0,w.Timer).Set.create(64),e_=(e,a,t,r,i)=>{for(let n=0;n<t;n+=1)eA(e+(0,w.Random).between(-r,r),a+(0,w.Random).between(-r,r),(0,w.Random).between(5,i),(0,w.Random).angle(),eM())},eU=(e,a,t)=>{let r=ey(0,0,eM());null!=r&&eS(r,(r,i)=>{let n=r.frameCount[i],o=n/60;r.rotationAngle[i]-=.3,r.scaleFactor[i]=5*(0,w.Easing).easeInQuad(o);let l=(1-o)*100,s=t+.1*n;r.x[i]=e+l*Math.cos(s),r.y[i]=a+l*Math.sin(s),n>60&&ev(i)})},ez=(e,a)=>{for(let t=0;t<8;t+=1)eU(e,a,t/8*w.Math.TWO_PI)},e$=e=>{let{x:a,y:t}=e;ez(a,t),(0,w.Timer).Set.addTimer(eK,(0,w.Timer).create(60,void 0,()=>{let r=eu(a,t,eP());null!==r&&(e.index=r,e.state=A.ACTIVE,e_(a,t,32,30,30),B())})),e.state=A.APPROACHING,V()},eW=(e=!0)=>{eV=0,eB="PLAYING",(0,w.Timer).Set.clear(eK),eI(),ea(s),e||et(),eO(e$)},eY=(e,a,t,r)=>{let i=e.soa.data.x[a],n=e.soa.data.y[a];_.kill(e,a),(0,w.Random).bool(.2)&&e_(i,n,1,5,15);let o=t.soa.data.life[r]-=1;t.soa.data.damagedRemainingCount[r]=2,eV+=10,o<=0&&(eh(r),e_(i,n,64,50,35),eV+=8e3,(0,S.setShake)(.05,.8,"VERTICAL"),H())},ej=(e,a,t,r)=>{let i=e.soa.data.x[a],n=e.soa.data.y[a];_.kill(e,a);let o=t.soa.data.life[r]-=1;t.soa.data.damagedRemainingCount[r]=180,o>0?(e_(i,n,64,30,30),(0,S.setShake)(.1,.9,"HORIZONTAL",!0)):(et(),e_(i,n,128,50,30),(0,S.setShake)(.2,.95,"HORIZONTAL",!0),eB="RESULT"),K(),eT((e,a)=>eA(e,a,0,0,eM()))},eJ=()=>{let e=Math.max(0,er()-1),a=30;for(let t=0;t<e;t+=1)(0,S.drawTransformed)(d,a,30,-w.Math.HALF_PI,.5),a+=60},eQ=()=>{(0,S.p).textSize(24),(0,S.p).textAlign(S.p.RIGHT),(0,S.p).text(`SCORE: ${(0,S.p).nfc(eV,0)}`,S.canvas.logicalSize.width-20,40)},eZ=()=>{(0,S.p).textAlign(S.p.CENTER),(0,S.p).textSize(64),(0,S.p).text("RESULT",S.canvas.logicalCenterPosition.x,S.canvas.logicalCenterPosition.y),(0,S.p).textSize(96),(0,S.p).text((0,S.p).nfc(eV,0),S.canvas.logicalCenterPosition.x,S.canvas.logicalCenterPosition.y+128)},eq=()=>{switch((0,S.applyShake)(),eC(),eR(eY),eE(ej),(0,w.Timer).Set.step(eK),eH(e$),eB){case"PLAYING":eQ(),eJ();break;case"RESULT":eZ()}};let eX=!1;const e0=()=>{P(S.p,{jp:"NotoSerifJP-Medium-subset.otf",en:"NotoSerifJP-Bold-subset.otf"}),k(S.p,{music:"WELCOMEB4CK.ogg",gunSound:"submachinegun1_edit.wav",bombSound:"bomb2_edit.wav",preAppearanceSound:"enemy-advent1.wav",appearanceSound:"punch-high2.wav",damageSound:"cannon1_edit.wav"})},e1=()=>{eW(eX)},e2=()=>{N(.01*g.value())},e5=()=>{(g=(0,S.p).createSlider(0,100,15,5)).position(50*S.canvas.scaleFactor,S.canvas.scaleFactor*(S.canvas.logicalSize.height-40)),g.style("width",`${200*S.canvas.scaleFactor}px`),g.style("height",`${25*S.canvas.scaleFactor}px`),e2()},e3=()=>{(0,S.p).push(),(0,S.p).textFont(a,24),(0,S.p).textAlign(S.p.LEFT),(0,S.p).text("ARROW / WASD :",160,500),(0,S.p).text("MOVE",460,500),(0,S.p).text("Z / J / SPACE / ENTER :",160,540),(0,S.p).text("SHOOT",460,540),(0,S.p).text("PRESS SPACE KEY TO START",160,600),(0,S.p).pop()},e4=()=>{eq(),eX||e3(),(0,S.p).textFont(a,16),(0,S.p).textAlign(S.p.LEFT),(0,S.p).text("VOL",10,S.canvas.logicalSize.height-23)},e6=()=>{f(),(0,S.canvas).drawScaled(e4),e2()},e8=()=>{"g"===S.p.key&&(0,S.p).save("image.png"),eX||32!==S.p.keyCode||(eW(!0),eX=!0),eB===v.RESULT&&eW(!0)};(0,S.startSketch)({htmlElement:C,logicalCanvasSize:I,initialize:()=>{let e=(0,S.createPixels)(()=>{(0,S.canvas).drawScaled(()=>{let{width:e,height:a}=I;(0,S.p).background(248),(0,S.p).stroke(128,112,96,4),(0,S.p).strokeCap(S.p.SQUARE),(0,S.p).strokeWeight(20);for(let t=0;t<2e3;t+=1){let t=(0,S.p).random(0,e),r=(0,S.p).random(-50,a-50);(0,S.p).line(t,r,t,r+(0,S.p).random(50,200))}})});f=()=>(0,S.replaceCanvasPixels)(e),(0,S.p).imageMode(S.p.CENTER),(0,S.p).textFont(a),e5(),e1()},setP5Methods:e=>{e.preload=e0,e.draw=e6,e.mouseMoved=()=>{(0,S.Mouse).updatePosition(),(0,S.Mouse).onMoved()},e.mousePressed=S.Mouse.onPressed,e.keyTyped=e8,e.keyPressed=()=>{if((0,S.MoveKeys).onPressed(),S.MoveKeys.up||S.MoveKeys.left||S.MoveKeys.down||S.MoveKeys.right)return!1},e.keyReleased=()=>{(0,S.MoveKeys).onReleased()}},fittingOption:void 0});
//# sourceMappingURL=index.14984f9b.js.map
