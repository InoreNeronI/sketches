const e={draw:(e,l,a,t)=>{let r=t.snake,n=t.apple,o=t.walls;e.stroke(0),e.strokeWeight(l(.5)),e.fill(0),r.forEach((t,n)=>{n!=r.length-1&&e.line(l(t.x+.5),a(t.y+.5),l(r[n+1].x+.5),a(r[n+1].y+.5))}),e.fill(255),e.strokeWeight(2),e.ellipse(l(r[0].x+.5),a(r[0].y+.5),l(.25),a(.25)),r[r.length-1],e.strokeWeight(2),e.fill(255,0,0),e.ellipse(l(n.x+.5),a(n.y+.5),l(.75),a(.75)),e.strokeWeight(2),e.stroke(34,139,34),e.fill(34,139,34),o.lookup.forEach(t=>{e.rect(l(t.x),a(t.y),l(1),a(1))}),e.stroke(0),e.noFill(),e.strokeWeight(5),e.rect(0,0,e.width,e.height)},processUserInput:e=>"w"==e.key||e.keyIsDown(38)?game.NORTH:"s"==e.key||e.keyIsDown(40)?game.SOUTH:"d"==e.key||e.keyIsDown(39)?game.EAST:"a"==e.key||e.keyIsDown(37)?game.WEST:null},l={drawArrow:(e,a,t,r)=>{a.eq(game.NORTH)?l._drawArrow(e,node,0,-.5,.15,0,t,r):a.eq(game.SOUTH)?l._drawArrow(e,node,0,.5,.15,0,t,r):a.eq(game.EAST)?l._drawArrow(e,node,.5,0,0,.15,t,r):a.eq(game.WEST)&&l._drawArrow(e,node,-.5,0,0,.15,t,r)},_drawArrow:(e,l,a,t,r,n,o,d)=>{let i=l.x+.5,s=l.y+.5;e.triangle(o(i+r),d(s+n),o(i+a),d(s+t),o(i-r),d(s-n))}},a={draw:(e,a,t,r)=>{e.noStroke(),e.fill("rgb(0,191,255)"),r.policy.map((n,o)=>n.map((n,d)=>{null!=n&&(node=Node(o,d),l.drawArrow(e,r.getAction(node),a,t))}))}},t={draw:(e,a,t,r)=>{e.noStroke(),e.fill("rgb(0,191,255)"),r.isHamiltonianCycle?r.policy.map((n,o)=>n.map((n,d)=>{null!=n&&(node=Node(o,d),l.drawArrow(e,r.getAction(node),a,t))})):r.spAgent.policy.map((n,o)=>n.map((n,d)=>{null!=n&&(node=Node(o,d),l.drawArrow(e,r.getAction(node),a,t))}))},notice:(e,l,a)=>{e.textSize(30),e.stroke(255),e.strokeWeight(2),e.fill(0),e.textAlign(e.CENTER),e.text("Searching for Cycle...",l,a)}},r={draw:(e,a,t,r)=>{let n=null;for(let e=0;e<r.policy.length;e++)for(let l=0;l<r.policy[0].length;l++){let a=r.maxQ(Node(e,l));(null==n||a>n)&&(n=a)}e.noStroke(),r.policy.map((o,d)=>o.map((o,i)=>{node=Node(d,i),r.allQEq(node)||(e.fill(`rgba(0,191,255,${Math.max(.1,e.map(r.maxQ(node),n/6,n,0,1))})`),l.drawArrow(e,r.getAction(node),a,t))}))}};new p5(l=>{FRAMERATE_MAX=60,FRAMERATE_MIN=1,FRAMERATE_STEP=1,FRAMERATE_INITIAL=FRAMERATE_MAX,SIZE_MAX=25,SIZE_MIN=2,SIZE_STEP=1,SIZE_INITIAL=10,SIZE_INITIAL_HAMILTONIAN=4,SIZE_MAX_HAMILTONIAN=6;let n=()=>{l.createCanvas(600,600).parent("#canvas")},o=0,d=null,i=()=>{(d=l.createSpan(`${o}`)).parent("#scoreCount")},s=e=>e.snake.length-2,c=e=>{o=e,d.html(o)},h=[],u=null,A=null,p=null,g=null,m=null,w=()=>{(m=l.createSpan("0")).parent("#gameCount"),(u=l.createSpan("0")).parent("#scoreMean"),(A=l.createSpan("0")).parent("#scoreMedian"),(p=l.createSpan("0")).parent("#scoreMin"),(g=l.createSpan("0")).parent("#scoreMax")},S=e=>{e>=0&&h.push(e),h.sort((e,l)=>e-l);let l=h.reduce((e,l)=>e+l,0),a=Math.floor(h.length/2);m.html(h.length),u.html(h.length>0?(l/h.length).toFixed(2):0),A.html(h.length>0?h[a]:0),p.html(h.length>0?h[0]:0),g.html(h.length>0?h[h.length-1]:0)},E=null,I=()=>{(E=l.createSelect()).parent("#playerSelect"),E.option("Human",0),E.option("Q-Learning",1),E.option("Shortest Path",2),E.option("Hamiltonian Cycle",3),E.value(3),E.changed(()=>{T.remove(),M.remove(),_(),U()})},k=null,M=null,T=null,_=()=>{T=3==E.value()?l.createSlider(SIZE_MIN,SIZE_MAX_HAMILTONIAN,SIZE_INITIAL_HAMILTONIAN,SIZE_STEP):l.createSlider(SIZE_MIN,SIZE_MAX,SIZE_INITIAL,SIZE_STEP),(M=l.createSpan(`${T.value()}`)).parent("#gameSizeLbl"),T.parent("#gameSize"),T.changed(()=>{M.html(T.value()),U()})},N=null,R=null,y=null,f=()=>{y=l.createSlider(FRAMERATE_MIN,FRAMERATE_MAX,FRAMERATE_INITIAL,FRAMERATE_STEP),(R=l.createSpan(`${y.value()}`)).parent("#gameSpeedLbl"),y.parent("#gameSpeed"),y.changed(()=>{N.checked()||l.frameRate(y.value()),R.html(y.value())})},v=null,x=!1,L=NodeSet(),Z=()=>{(N=l.createCheckbox(" Add/Remove Walls (pauses game)",!1)).parent("#drawWalls"),N.changed(()=>{N.checked()&&l.frameRate(FRAMERATE_MAX),N.checked()||3!=E.value()||(l.frameRate(y.value()),U())}),(v=l.createButton("Clear Walls")).parent("#drawWalls"),v.mousePressed(H)},H=()=>{L=NodeSet(),D.walls=L,3==E.value()&&U()},F=()=>2*T.value(),W=()=>2*T.value(),X=e=>Math.floor(e*l.width/F()),C=e=>Math.floor(e*l.height/W()),P=e=>Math.floor(e*F()/l.width),b=e=>Math.floor(e*W()/l.height),O=null,D=null,q=null,Q=()=>{D=(O=game.next(F(),W(),L))(),q={direction:game.EAST},Y.reset(),$=ShortestPath()},U=()=>{h=[],c(0),S(-1),z.reset(),Q()},Y=QLearn(100,50,1,.05,.01,.9,.9,1,-1),$=null,z=Hamiltonian(100,100,1e3,10);l.setup=()=>{n(),f(),Z(),i(),w(),I(),_(),(k=l.createCheckbox(" Draw Path Arrows",!0)).parent("#arrows"),l.frameRate(y.value()),U()},l.draw=()=>{l.background(240),!N.checked()&&((D=O(D,q)).justEaten&&c(s(D)),D.isAlive&&null!=D.apple||(S(s(D)),Q()),1==E.value()?(Y.update(O,D,D.justEaten),q.direction=Y.getAction(D.snake[0]),k.checked()&&r.draw(l,X,C,Y)):2==E.value()?($.update(D,D.apple),q.direction=$.getAction(D.snake[0]),k.checked()&&a.draw(l,X,C,$)):3==E.value()&&(z.update(D),q.direction=z.getAction(D.snake[0]),k.checked()&&t.draw(l,X,C,z))),e.draw(l,X,C,D),3!=E.value()||z.isHamiltonianCycle||t.notice(l,l.width/2,l.height/2)},l.keyPressed=()=>{if(0==E.value()){let a=e.processUserInput(l);q.direction=null==a?q.direction:a}};let j=()=>l.mouseX<=l.width&&l.mouseX>=0&&l.mouseY<=l.height&&l.mouseY>=0;l.mousePressed=()=>{if(N.checked()&&j()){let e=P(l.mouseX),a=b(l.mouseY);D.walls.has(e,a)?(x=!1,D.walls.delete(e,a)):(x=!0,D.walls.add(e,a))}},l.mouseDragged=()=>{if(N.checked()&&j()){let e=P(l.mouseX),a=b(l.mouseY);x&&!D.walls.has(e,a)?D.walls.add(e,a):!x&&D.walls.has(e,a)&&D.walls.delete(e,a)}}});
//# sourceMappingURL=index.621e858a.js.map
