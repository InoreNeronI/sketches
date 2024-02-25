let $59fe03a7d07f847a$export$2c3b404bf3a77a1f = Matter.Engine, $59fe03a7d07f847a$export$160ae30d75f98247 = Matter.Render, $59fe03a7d07f847a$export$571ad3bcba5a0c45 = Matter.Runner, $59fe03a7d07f847a$export$494c5ef0c7f1eca0 = Matter.Composites, $59fe03a7d07f847a$export$ada873a34909da65 = Matter.Events, $59fe03a7d07f847a$export$aec1359a0a40a615 = Matter.Constraint, $59fe03a7d07f847a$export$958fcd69b8edf071 = Matter.MouseConstraint, $59fe03a7d07f847a$export$7caecd373b84cec3 = Matter.Mouse, $59fe03a7d07f847a$export$43586241d9db0c6d = Matter.Composite, $59fe03a7d07f847a$export$d8385f27924644d0 = Matter.Bodies, $59fe03a7d07f847a$export$4b2c32e08f77ff18 = Matter.Body;
const $59fe03a7d07f847a$export$71ba42fcf8a11200 = 1200;
const $59fe03a7d07f847a$export$11450214e8737bc1 = 600;
const $59fe03a7d07f847a$export$c780001c1465f77e = 250;
const $59fe03a7d07f847a$export$6ae89c657c51e582 = 450;
const $59fe03a7d07f847a$export$1ba50321ba96739 = 25;
const $59fe03a7d07f847a$export$6072ea6461b4d979 = 35;
const $59fe03a7d07f847a$export$ab1db39109f73a1c = 40;
const $59fe03a7d07f847a$export$825e0964753ee409 = 38;
const $59fe03a7d07f847a$export$8bca3475abc2fbf2 = 20;
const $59fe03a7d07f847a$export$15e081af6720bfc6 = 25;
const $59fe03a7d07f847a$export$7dfe989db8551c2c = 50;
const $59fe03a7d07f847a$export$eb13a36a06ee9779 = 60;
const $59fe03a7d07f847a$export$769f973c86dc1af0 = 30;
const $59fe03a7d07f847a$export$505536d0c98afb2b = $59fe03a7d07f847a$export$71ba42fcf8a11200 / 2;
const $59fe03a7d07f847a$export$36ef235a51dff7c4 = $59fe03a7d07f847a$export$11450214e8737bc1 - $59fe03a7d07f847a$export$769f973c86dc1af0 / 2;
const $59fe03a7d07f847a$export$f7994d0fc0f6294c = $59fe03a7d07f847a$export$c780001c1465f77e - 18;
const $59fe03a7d07f847a$export$41e664dc98ff491a = $59fe03a7d07f847a$export$c780001c1465f77e + 6;
const $59fe03a7d07f847a$export$1e4be4250b9bcf30 = $59fe03a7d07f847a$export$6ae89c657c51e582 + 5;
const $59fe03a7d07f847a$export$ae39de71e9f0f803 = $59fe03a7d07f847a$export$c780001c1465f77e - 6;
const $59fe03a7d07f847a$export$5c2cfd2f409694e5 = $59fe03a7d07f847a$export$36ef235a51dff7c4 - 75;


class $dfcedbaafa1ce313$export$4b2c32e08f77ff18 {
    constructor(){
        this.body = undefined;
    }
    getBody() {
        return this.body;
    }
}


class $0bbfdff8836d2637$export$e71c4d32a2263218 extends (0, $dfcedbaafa1ce313$export$4b2c32e08f77ff18) {
    constructor(x, y, w, h){
        super();
        this.body = Matter.Bodies.rectangle(x, y, w, h);
    }
}


class $2a3cf7cfbb957889$export$c6957adcf93c393f extends (0, $0bbfdff8836d2637$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.isStatic = true;
        this.body.friction = 0.6;
        this.body.render.fillStyle = "grey";
    }
}



class $37a986572177912b$export$9fbb62047327c811 extends (0, $dfcedbaafa1ce313$export$4b2c32e08f77ff18) {
    constructor(x, y, r){
        super();
        this.body = Matter.Bodies.circle(x, y, r, {
            density: 0.005
        });
        this.isAbility = true;
    }
}


class $b484b98dc9506182$export$74330acc58d077f9 extends (0, $37a986572177912b$export$9fbb62047327c811) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/birds/red.png";
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    }
    // red bird ability
    ability() {
        if (this.isAbility) {
            console.log("I'm cute!!");
            this.isAbility = false;
        }
    }
}



class $64ecbcc1bbb33f85$export$e0cc5cfdd2689f48 extends (0, $37a986572177912b$export$9fbb62047327c811) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/birds/chuck.png";
        this.body.render.sprite.xScale = 0.5;
        this.body.render.sprite.yScale = 0.5;
    }
    // chuck bird ability
    ability() {
        if (this.isAbility) {
            let body = this.body;
            if (body.force.x == 0) {
                body.force.x += 0.7;
                setTimeout(()=>{
                    body.force.x = 0;
                }, 500);
            }
            this.isAbility = false;
        }
    }
}



class $ac4c5c502d587500$export$5c826d372fd8b619 extends (0, $37a986572177912b$export$9fbb62047327c811) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/birds/bomb.png";
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    }
    // bomb bird ability
    ability() {
        if (this.isAbility) {
            let body = this.body;
            Matter.Body.scale(body, 2, 2);
            body.render.sprite.xScale = 0.8;
            body.render.sprite.yScale = 0.8;
            this.isAbility = false;
        }
    }
}



class $c3c1ad29b354c5a3$export$1ddf40a7e646abd0 extends (0, $37a986572177912b$export$9fbb62047327c811) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/birds/hal.png";
        this.body.render.sprite.xScale = 0.6;
        this.body.render.sprite.yScale = 0.6;
    }
    // hal bird ability
    ability() {
        if (this.isAbility) {
            let body = this.body;
            if (body.force.x == 0) {
                body.force.x -= 0.5;
                setTimeout(()=>{
                    body.force.x -= 0.5;
                }, 100);
                setTimeout(()=>{
                    body.force.x -= 0.5;
                }, 100);
                setTimeout(()=>{
                    body.force.x -= 0.5;
                }, 100);
                setTimeout(()=>{
                    body.force.x -= 0.5;
                }, 100);
                body.force.y += 1.5;
                body.torque += 50;
                setTimeout(()=>{
                    body.force.x = 0;
                    body.force.y = 0;
                }, 500);
            }
            this.isAbility = false;
        }
    }
}



class $14b3d13635fd38c5$export$5b49fc0c2cf32189 extends (0, $dfcedbaafa1ce313$export$4b2c32e08f77ff18) {
    constructor(x, y, r){
        super();
        this.body = Matter.Bodies.circle(x, y, r, {
            density: 0.005
        });
    }
}


class $a30c8e2c0b426f08$export$2135a04fb4b93399 extends (0, $14b3d13635fd38c5$export$5b49fc0c2cf32189) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/pigs/minion-pig.png";
        this.body.render.sprite.xScale = 0.3;
        this.body.render.sprite.yScale = 0.3;
    }
}



class $c23e5d08e6ed898f$export$ce8db840f17332db extends (0, $14b3d13635fd38c5$export$5b49fc0c2cf32189) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/pigs/corporal-pig.png";
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    }
}



class $3346fabb30e81fb1$export$55443b8f1efd7137 extends (0, $14b3d13635fd38c5$export$5b49fc0c2cf32189) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/pigs/king-pig.png";
        this.body.render.sprite.xScale = 0.7;
        this.body.render.sprite.yScale = 0.7;
    }
}



class $9e482991d048b59c$export$5106198af9e0a79d {
    constructor(){
        this.composites = [];
        this.groundTop = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$505536d0c98afb2b), (0, $59fe03a7d07f847a$export$11450214e8737bc1) - (0, $59fe03a7d07f847a$export$36ef235a51dff7c4), (0, $59fe03a7d07f847a$export$71ba42fcf8a11200), (0, $59fe03a7d07f847a$export$769f973c86dc1af0));
        this.groundBottom = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$505536d0c98afb2b), (0, $59fe03a7d07f847a$export$36ef235a51dff7c4), (0, $59fe03a7d07f847a$export$71ba42fcf8a11200), (0, $59fe03a7d07f847a$export$769f973c86dc1af0));
        this.groundLeft = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) / 2, (0, $59fe03a7d07f847a$export$11450214e8737bc1) / 2, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$11450214e8737bc1));
        this.groundRight = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$71ba42fcf8a11200) - (0, $59fe03a7d07f847a$export$769f973c86dc1af0) / 2, (0, $59fe03a7d07f847a$export$11450214e8737bc1) / 2, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$11450214e8737bc1));
        this.RedBird = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$1ba50321ba96739));
        this.ChuckBird = new (0, $64ecbcc1bbb33f85$export$e0cc5cfdd2689f48)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$6072ea6461b4d979));
        this.BombBird = new (0, $ac4c5c502d587500$export$5c826d372fd8b619)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$ab1db39109f73a1c));
        this.HalBird = new (0, $c3c1ad29b354c5a3$export$1ddf40a7e646abd0)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$825e0964753ee409));
        this.MinionPig = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.CorporalPig = new (0, $c23e5d08e6ed898f$export$ce8db840f17332db)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$15e081af6720bfc6));
        this.KingPig = new (0, $3346fabb30e81fb1$export$55443b8f1efd7137)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$7dfe989db8551c2c));
        this.composites.push(this.groundTop.getBody());
        this.composites.push(this.groundBottom.getBody());
        this.composites.push(this.groundLeft.getBody());
        this.composites.push(this.groundRight.getBody());
        this.composites.push(this.RedBird.getBody());
        this.composites.push(this.ChuckBird.getBody());
        this.composites.push(this.BombBird.getBody());
        this.composites.push(this.HalBird.getBody());
        this.composites.push(this.MinionPig.getBody());
        this.composites.push(this.CorporalPig.getBody());
        this.composites.push(this.KingPig.getBody());
    }
    getComposites() {
        return this.composites;
    }
    // add random body to render canvas
    addBody(world) {
        let newBody = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$1ba50321ba96739));
        let rand = Math.floor(Math.random() * 7);
        if (rand === 0) newBody = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$1ba50321ba96739));
        else if (rand === 1) newBody = new (0, $64ecbcc1bbb33f85$export$e0cc5cfdd2689f48)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$6072ea6461b4d979));
        else if (rand === 2) newBody = new (0, $ac4c5c502d587500$export$5c826d372fd8b619)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$ab1db39109f73a1c));
        else if (rand === 3) newBody = new (0, $c3c1ad29b354c5a3$export$1ddf40a7e646abd0)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$825e0964753ee409));
        else if (rand === 4) newBody = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        else if (rand === 5) newBody = new (0, $c23e5d08e6ed898f$export$ce8db840f17332db)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$15e081af6720bfc6));
        else if (rand === 6) newBody = new (0, $3346fabb30e81fb1$export$55443b8f1efd7137)((0, $59fe03a7d07f847a$export$769f973c86dc1af0) + Math.random() * 1000, (0, $59fe03a7d07f847a$export$769f973c86dc1af0), (0, $59fe03a7d07f847a$export$7dfe989db8551c2c));
        (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add(world, newBody.getBody());
    }
}









class $a4ac294b149164b3$export$56ebabebb04a9ca9 extends (0, $dfcedbaafa1ce313$export$4b2c32e08f77ff18) {
    constructor(x, y, bird){
        super();
        this.bird = bird;
        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: this.bird,
            stiffness: 0.05,
            render: {
                type: "line",
                strokeStyle: "#120E0A",
                lineWidth: 8
            }
        };
        this.body = Matter.Constraint.create(options);
    }
}


class $efca504d705dbb19$export$106a1768f35cf5d9 extends (0, $dfcedbaafa1ce313$export$4b2c32e08f77ff18) {
    constructor(bird){
        super();
        this.bird = bird;
        this.elastic1 = new (0, $a4ac294b149164b3$export$56ebabebb04a9ca9)((0, $59fe03a7d07f847a$export$f7994d0fc0f6294c), (0, $59fe03a7d07f847a$export$1e4be4250b9bcf30), this.bird.getBody());
        this.elastic2 = new (0, $a4ac294b149164b3$export$56ebabebb04a9ca9)((0, $59fe03a7d07f847a$export$41e664dc98ff491a), (0, $59fe03a7d07f847a$export$1e4be4250b9bcf30), this.bird.getBody());
        this.elastic1.body.render.visible = false;
        this.elastic2.body.render.visible = false;
        this.slingshotBody = new (0, $0bbfdff8836d2637$export$e71c4d32a2263218)((0, $59fe03a7d07f847a$export$ae39de71e9f0f803), (0, $59fe03a7d07f847a$export$5c2cfd2f409694e5), 0.1, 0.1);
        this.slingshotBody.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/img/slingshot.png";
        this.slingshotBody.body.render.sprite.xScale = 0.15;
        this.slingshotBody.body.render.sprite.yScale = 0.15;
        this.slingshotBody.body.isStatic = true;
    }
    getLeftElastic() {
        return this.elastic1.getBody();
    }
    getRightElastic() {
        return this.elastic2.getBody();
    }
    getSlingshotBody() {
        return this.slingshotBody.getBody();
    }
}



class $bc99b89ea5fc0981$export$25beb7769fa512b extends (0, $0bbfdff8836d2637$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/obstacles/steel-square.png";
        this.body.render.sprite.xScale = 0.75;
        this.body.render.sprite.yScale = 0.75;
        this.body.isStatic = true;
        this.body.friction = 0.6;
    }
}


class $c78b7213df7c9fd0$export$b6bbab5a9b109038 {
    constructor(){
        this.observers = [];
    }
    subscribe(observer) {
        if (observer != null) this.observers.push(observer);
    }
    unsubscribe(observer) {
        if (observer == null) return;
        this.observers = this.observers.filter((e)=>e !== observer);
    }
    unsubscribeAll() {
        this.observers = [];
    }
    notifySubscribers(source, ...others) {
        for (let ob of this.observers)if (ob != null) ob.update(source, ...others);
    }
}



class $f62da825f7db0092$export$ed229dc90776b6d0 extends (0, $c78b7213df7c9fd0$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$1ba50321ba96739));
        this.ground = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$505536d0c98afb2b), (0, $59fe03a7d07f847a$export$36ef235a51dff7c4), (0, $59fe03a7d07f847a$export$71ba42fcf8a11200), (0, $59fe03a7d07f847a$export$769f973c86dc1af0));
        this.slingshot = new (0, $efca504d705dbb19$export$106a1768f35cf5d9)(this.bird);
        this.pig = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)(1000, 300, (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.steelSquare = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(1000, 400, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.composites.push(this.slingshot.getLeftElastic());
        this.composites.push(this.slingshot.getRightElastic());
        this.composites.push(this.slingshot.getSlingshotBody());
        this.composites.push(this.ground.getBody());
        this.composites.push(this.bird.getBody());
        this.composites.push(this.pig.getBody());
        this.composites.push(this.steelSquare.getBody());
        this.flyingBird = this.bird;
    }
    getComposites() {
        return this.composites;
    }
    // transmit information to ScoreDisplay
    updateScore(score) {
        this.notifySubscribers("update-score-stage1", {
            remainingBirds: this.remainingBirds
        }, {
            scoreToAdd: score
        });
    }
    // control bird firing
    firing(world) {
        let slingshot = this.slingshot;
        let bird = this.bird;
        if (this.remainingBirds == 3) document.getElementById("rb-stage1-red1").style.display = "none";
        else if (this.remainingBirds == 2) document.getElementById("rb-stage1-red2").style.display = "none";
        else if (this.remainingBirds == 1) document.getElementById("rb-stage1-red3").style.display = "none";
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            let newBird = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), 20);
            this.bird = newBird;
            bird = this.bird;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}







class $9d2dea319686bff8$export$681dbc214f7fce93 extends (0, $0bbfdff8836d2637$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/obstacles/wood-square.png";
        this.body.render.sprite.xScale = 0.75;
        this.body.render.sprite.yScale = 0.75;
        this.body.friction = 0.8;
    }
}



class $990468bb64cc59af$export$b53df5012f215d3d extends (0, $0bbfdff8836d2637$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/obstacles/ice-square.png";
        this.body.render.sprite.xScale = 0.75;
        this.body.render.sprite.yScale = 0.75;
        this.body.friction = 0.05;
    }
}






class $779e93a656dd63dd$export$6d158a3c3ee0fdbb extends (0, $c78b7213df7c9fd0$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$1ba50321ba96739));
        this.ground = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$505536d0c98afb2b), (0, $59fe03a7d07f847a$export$36ef235a51dff7c4), (0, $59fe03a7d07f847a$export$71ba42fcf8a11200), (0, $59fe03a7d07f847a$export$769f973c86dc1af0));
        this.slingshot = new (0, $efca504d705dbb19$export$106a1768f35cf5d9)(this.bird);
        this.pig1 = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)(710, 180, (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.pig2 = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)(650, 180, (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.pig3 = new (0, $c23e5d08e6ed898f$export$ce8db840f17332db)(771, 180, (0, $59fe03a7d07f847a$export$15e081af6720bfc6));
        this.pyramid = Matter.Composites.pyramid(500, 200, 7, 7, 0, 0, function(x, y) {
            let box;
            if (x == 620 || x == 740) box = new (0, $990468bb64cc59af$export$b53df5012f215d3d)(x, y, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
            else box = new (0, $9d2dea319686bff8$export$681dbc214f7fce93)(x, y, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
            return box.getBody();
        });
        this.flyingBird = this.bird;
        this.composites.push(this.slingshot.getLeftElastic());
        this.composites.push(this.slingshot.getRightElastic());
        this.composites.push(this.slingshot.getSlingshotBody());
        this.composites.push(this.ground.getBody());
        this.composites.push(this.bird.getBody());
        this.composites.push(this.pig1.getBody());
        this.composites.push(this.pig2.getBody());
        this.composites.push(this.pig3.getBody());
        this.composites.push(this.pyramid);
    }
    getComposites() {
        return this.composites;
    }
    // transmit information to ScoreDisplay
    updateScore(score) {
        this.notifySubscribers("update-score-stage2", {
            remainingBirds: this.remainingBirds
        }, {
            scoreToAdd: score
        });
    }
    // control bird firing
    firing(world) {
        let slingshot = this.slingshot;
        let bird = this.bird;
        if (this.remainingBirds == 3) document.getElementById("rb-stage2-red1").style.display = "none";
        else if (this.remainingBirds == 2) document.getElementById("rb-stage2-chuck1").style.display = "none";
        else if (this.remainingBirds == 1) document.getElementById("rb-stage2-chuck2").style.display = "none";
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            let newBird = new (0, $64ecbcc1bbb33f85$export$e0cc5cfdd2689f48)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$6072ea6461b4d979));
            this.bird = newBird;
            bird = this.bird;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}













class $4345a6b99b7cc113$export$afc2b1ec76c7d2e9 extends (0, $c78b7213df7c9fd0$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $b484b98dc9506182$export$74330acc58d077f9)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$1ba50321ba96739));
        this.ground = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$505536d0c98afb2b), (0, $59fe03a7d07f847a$export$36ef235a51dff7c4), (0, $59fe03a7d07f847a$export$71ba42fcf8a11200), (0, $59fe03a7d07f847a$export$769f973c86dc1af0));
        this.slingshot = new (0, $efca504d705dbb19$export$106a1768f35cf5d9)(this.bird);
        this.pig1 = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)(990, 300, (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.pig2 = new (0, $3346fabb30e81fb1$export$55443b8f1efd7137)(960, 170, (0, $59fe03a7d07f847a$export$7dfe989db8551c2c));
        this.pig3 = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)(930, 300, (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.pig4 = new (0, $a30c8e2c0b426f08$export$2135a04fb4b93399)(1050, 300, (0, $59fe03a7d07f847a$export$8bca3475abc2fbf2));
        this.steelSquare1 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(900, 250, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.steelSquare2 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(960, 250, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.steelSquare3 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(1020, 250, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.pyramid = Matter.Composites.pyramid(840, 400, 5, 5, 0, 0, function(x, y) {
            let box = new (0, $9d2dea319686bff8$export$681dbc214f7fce93)(x, y, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
            return box.getBody();
        });
        this.flyingBird = this.bird;
        this.composites.push(this.slingshot.getLeftElastic());
        this.composites.push(this.slingshot.getRightElastic());
        this.composites.push(this.slingshot.getSlingshotBody());
        this.composites.push(this.ground.getBody());
        this.composites.push(this.bird.getBody());
        this.composites.push(this.pig1.getBody());
        this.composites.push(this.pig2.getBody());
        this.composites.push(this.pig3.getBody());
        this.composites.push(this.pig4.getBody());
        this.composites.push(this.steelSquare1.getBody());
        this.composites.push(this.steelSquare2.getBody());
        this.composites.push(this.steelSquare3.getBody());
        this.composites.push(this.pyramid);
    }
    getComposites() {
        return this.composites;
    }
    // transmit information to ScoreDisplay
    updateScore(score) {
        this.notifySubscribers("update-score-stage3", {
            remainingBirds: this.remainingBirds
        }, {
            scoreToAdd: score
        });
    }
    // control bird firing
    firing(world) {
        let slingshot = this.slingshot;
        let bird = this.bird;
        let newBird;
        if (this.remainingBirds == 3) {
            document.getElementById("rb-stage3-red1").style.display = "none";
            newBird = new (0, $64ecbcc1bbb33f85$export$e0cc5cfdd2689f48)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$6072ea6461b4d979));
        } else if (this.remainingBirds == 2) {
            document.getElementById("rb-stage3-chuck1").style.display = "none";
            newBird = new (0, $ac4c5c502d587500$export$5c826d372fd8b619)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$ab1db39109f73a1c));
        } else if (this.remainingBirds == 1) document.getElementById("rb-stage3-bomb1").style.display = "none";
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            this.bird = newBird;
            bird = this.bird;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}









class $f9667fcbd1a5ec7a$export$d3fee3dc5cdc6838 extends (0, $c78b7213df7c9fd0$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $c3c1ad29b354c5a3$export$1ddf40a7e646abd0)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$825e0964753ee409));
        this.ground1 = new (0, $2a3cf7cfbb957889$export$c6957adcf93c393f)((0, $59fe03a7d07f847a$export$505536d0c98afb2b), (0, $59fe03a7d07f847a$export$36ef235a51dff7c4), (0, $59fe03a7d07f847a$export$71ba42fcf8a11200), (0, $59fe03a7d07f847a$export$769f973c86dc1af0));
        this.slingshot = new (0, $efca504d705dbb19$export$106a1768f35cf5d9)(this.bird);
        this.pig = new (0, $c23e5d08e6ed898f$export$ce8db840f17332db)(800, 480, (0, $59fe03a7d07f847a$export$15e081af6720bfc6));
        this.steelSquare1 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(600, 540, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.steelSquare2 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(600, 480, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.steelSquare3 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(600, 420, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.steelSquare4 = new (0, $bc99b89ea5fc0981$export$25beb7769fa512b)(800, 540, (0, $59fe03a7d07f847a$export$eb13a36a06ee9779), (0, $59fe03a7d07f847a$export$eb13a36a06ee9779));
        this.flyingBird = this.bird;
        this.composites.push(this.slingshot.getLeftElastic());
        this.composites.push(this.slingshot.getRightElastic());
        this.composites.push(this.slingshot.getSlingshotBody());
        this.composites.push(this.ground1.getBody());
        this.composites.push(this.bird.getBody());
        this.composites.push(this.pig.getBody());
        this.composites.push(this.steelSquare1.getBody());
        this.composites.push(this.steelSquare2.getBody());
        this.composites.push(this.steelSquare3.getBody());
        this.composites.push(this.steelSquare4.getBody());
    }
    getComposites() {
        return this.composites;
    }
    // transmit information to ScoreDisplay
    updateScore(score) {
        this.notifySubscribers("update-score-stage4", {
            remainingBirds: this.remainingBirds
        }, {
            scoreToAdd: score
        });
    }
    // control bird firing
    firing(world) {
        let slingshot = this.slingshot;
        let bird = this.bird;
        let newBird;
        if (this.remainingBirds == 3) {
            document.getElementById("rb-stage4-hal1").style.display = "none";
            newBird = new (0, $c3c1ad29b354c5a3$export$1ddf40a7e646abd0)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$825e0964753ee409));
        } else if (this.remainingBirds == 2) {
            document.getElementById("rb-stage4-hal2").style.display = "none";
            newBird = new (0, $c3c1ad29b354c5a3$export$1ddf40a7e646abd0)((0, $59fe03a7d07f847a$export$c780001c1465f77e), (0, $59fe03a7d07f847a$export$6ae89c657c51e582), (0, $59fe03a7d07f847a$export$825e0964753ee409));
        } else if (this.remainingBirds == 1) document.getElementById("rb-stage4-hal3").style.display = "none";
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            this.bird = newBird;
            bird = this.bird;
            (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}


class $f6b07fa1124f14fc$export$ec9f4d63c1b2b2d3 {
    constructor(){
        this.remainingBirds = 3;
        this.score_stage1 = 0;
        this.score_stage2 = 0;
        this.score_stage3 = 0;
        this.score_stage4 = 0;
        this.score_stage1_high = 0;
        this.score_stage2_high = 0;
        this.score_stage3_high = 0;
        this.score_stage4_high = 0;
    }
    // update score if user get high record
    updateStar(stageName) {
        this.storeHighScore();
        if (stageName === "stage1") {
            if (this.score_stage1_high === 1) {
                document.getElementById("score1").innerHTML = `high record : \u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
                document.getElementById("stage1-star").innerHTML = `\u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
            }
        } else if (stageName === "stage2") {
            if (this.score_stage2_high === 1) {
                document.getElementById("score2").innerHTML = `high record : \u{2B50}\u{FE0F}`;
                document.getElementById("stage2-star").innerHTML = `\u{2B50}\u{FE0F}`;
            } else if (this.score_stage2_high > 1 && this.score_stage2_high < 4) {
                document.getElementById("score2").innerHTML = `high record : \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
                document.getElementById("stage2-star").innerHTML = `\u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
            } else if (this.score_stage2_high === 4) {
                document.getElementById("score2").innerHTML = `high record : \u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
                document.getElementById("stage2-star").innerHTML = `\u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
            }
        } else if (stageName === "stage3") {
            if (this.score_stage3_high === 1 || this.score_stage3_high === 2) {
                document.getElementById("score3").innerHTML = `high record : \u{2B50}\u{FE0F}`;
                document.getElementById("stage3-star").innerHTML = `\u{2B50}\u{FE0F}`;
            } else if (this.score_stage3_high > 2 && this.score_stage3_high < 6) {
                document.getElementById("score3").innerHTML = `high record : \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
                document.getElementById("stage3-star").innerHTML = `\u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
            } else if (this.score_stage3_high === 6) {
                document.getElementById("score3").innerHTML = `high record : \u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
                document.getElementById("stage3-star").innerHTML = `\u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
            }
        } else if (stageName === "stage4") {
            if (this.score_stage4_high === 2) {
                document.getElementById("score4").innerHTML = `high record : \u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
                document.getElementById("stage4-star").innerHTML = `\u{2B50}\u{FE0F} \u{2B50}\u{FE0F} \u{2B50}\u{FE0F}`;
            }
        }
    }
    // store high score in class
    storeHighScore() {
        if (this.score_stage1 > this.score_stage1_high) this.score_stage1_high = this.score_stage1;
        else if (this.score_stage2 > this.score_stage2_high) this.score_stage2_high = this.score_stage2;
        else if (this.score_stage3 > this.score_stage3_high) this.score_stage3_high = this.score_stage3;
        else if (this.score_stage4 > this.score_stage4_high) this.score_stage4_high = this.score_stage4;
    }
    // receive information from stages
    update(source, ...others) {
        if (source === "update-score-stage1") {
            const { remainingBirds: remainingBirds } = others[0];
            const { scoreToAdd: scoreToAdd } = others[1];
            this.score_stage1 += scoreToAdd;
            this.remainingBirds = remainingBirds;
            this.updateStar("stage1");
        } else if (source === "update-score-stage2") {
            const { remainingBirds: remainingBirds } = others[0];
            const { scoreToAdd: scoreToAdd } = others[1];
            this.score_stage2 += scoreToAdd;
            this.remainingBirds = remainingBirds;
            this.updateStar("stage2");
        } else if (source === "update-score-stage3") {
            const { remainingBirds: remainingBirds } = others[0];
            const { scoreToAdd: scoreToAdd } = others[1];
            this.score_stage3 += scoreToAdd;
            this.remainingBirds = remainingBirds;
            this.updateStar("stage3");
        } else if (source === "update-score-stage4") {
            const { remainingBirds: remainingBirds } = others[0];
            const { scoreToAdd: scoreToAdd } = others[1];
            this.score_stage4 += scoreToAdd;
            this.remainingBirds = remainingBirds;
            this.updateStar("stage4");
        }
    }
}


const $72ac39c9524057bd$var$stage1 = document.getElementById("stage1");
const $72ac39c9524057bd$var$stage2 = document.getElementById("stage2");
const $72ac39c9524057bd$var$stage3 = document.getElementById("stage3");
const $72ac39c9524057bd$var$stage4 = document.getElementById("stage4");
const $72ac39c9524057bd$var$playHomeButton = document.getElementById("play-home");
const $72ac39c9524057bd$var$restartButton = document.getElementById("restart-btn");
const $72ac39c9524057bd$var$homeButton = document.getElementById("home-btn");
const $72ac39c9524057bd$var$stageButton = document.getElementById("stage-btn");
let $72ac39c9524057bd$var$score, $72ac39c9524057bd$var$engine, $72ac39c9524057bd$var$render, $72ac39c9524057bd$var$mouse, $72ac39c9524057bd$var$runner, $72ac39c9524057bd$var$mouseConstraint, $72ac39c9524057bd$var$homeScreen, $72ac39c9524057bd$var$tutorialStage, $72ac39c9524057bd$var$pyramidStage, $72ac39c9524057bd$var$twoPyramidStage, $72ac39c9524057bd$var$boomerangStage;
let $72ac39c9524057bd$var$stageName = "home";
let $72ac39c9524057bd$var$firing = false;
function $72ac39c9524057bd$var$setup() {
    const CANVAS = createCanvas(0, 0);
    CANVAS.parent("AngryBirds");
    $72ac39c9524057bd$var$score = new (0, $f6b07fa1124f14fc$export$ec9f4d63c1b2b2d3)();
    // init render canvas
    $72ac39c9524057bd$var$engine = (0, $59fe03a7d07f847a$export$2c3b404bf3a77a1f).create();
    $72ac39c9524057bd$var$render = (0, $59fe03a7d07f847a$export$160ae30d75f98247).create({
        element: document.getElementById("AngryBirds"),
        engine: $72ac39c9524057bd$var$engine,
        options: {
            width: (0, $59fe03a7d07f847a$export$71ba42fcf8a11200),
            height: (0, $59fe03a7d07f847a$export$11450214e8737bc1),
            showAngleIndicator: false,
            wireframes: false,
            background: "lightblue"
        }
    });
    (0, $59fe03a7d07f847a$export$160ae30d75f98247).run($72ac39c9524057bd$var$render);
    $72ac39c9524057bd$var$runner = (0, $59fe03a7d07f847a$export$571ad3bcba5a0c45).create();
    (0, $59fe03a7d07f847a$export$571ad3bcba5a0c45).run($72ac39c9524057bd$var$runner, $72ac39c9524057bd$var$engine);
    // add mouse constraint to canvas
    $72ac39c9524057bd$var$mouse = (0, $59fe03a7d07f847a$export$7caecd373b84cec3).create($72ac39c9524057bd$var$render.canvas);
    $72ac39c9524057bd$var$mouseConstraint = (0, $59fe03a7d07f847a$export$958fcd69b8edf071).create($72ac39c9524057bd$var$engine, {
        mouse: $72ac39c9524057bd$var$mouse,
        constraint: {
            stiffness: 0.05,
            render: {
                visible: false
            }
        }
    });
    $72ac39c9524057bd$var$render.mouse = $72ac39c9524057bd$var$mouse;
}
// add composites to render canvas
function $72ac39c9524057bd$var$draw() {
    if ($72ac39c9524057bd$var$stageName === "home") {
        (0, $59fe03a7d07f847a$export$43586241d9db0c6d).clear($72ac39c9524057bd$var$engine.world);
        $72ac39c9524057bd$var$homeScreen = new (0, $9e482991d048b59c$export$5106198af9e0a79d)();
        $72ac39c9524057bd$var$addComposites($72ac39c9524057bd$var$homeScreen);
    } else if ($72ac39c9524057bd$var$stageName === "tutorial") {
        (0, $59fe03a7d07f847a$export$43586241d9db0c6d).clear($72ac39c9524057bd$var$engine.world);
        $72ac39c9524057bd$var$score.score_stage1 = 0;
        $72ac39c9524057bd$var$tutorialStage = new (0, $f62da825f7db0092$export$ed229dc90776b6d0)();
        $72ac39c9524057bd$var$getStage($72ac39c9524057bd$var$tutorialStage);
    } else if ($72ac39c9524057bd$var$stageName === "pyramid") {
        (0, $59fe03a7d07f847a$export$43586241d9db0c6d).clear($72ac39c9524057bd$var$engine.world);
        $72ac39c9524057bd$var$score.score_stage2 = 0;
        $72ac39c9524057bd$var$pyramidStage = new (0, $779e93a656dd63dd$export$6d158a3c3ee0fdbb)();
        $72ac39c9524057bd$var$getStage($72ac39c9524057bd$var$pyramidStage);
    } else if ($72ac39c9524057bd$var$stageName === "twoPyramid") {
        (0, $59fe03a7d07f847a$export$43586241d9db0c6d).clear($72ac39c9524057bd$var$engine.world);
        $72ac39c9524057bd$var$score.score_stage3 = 0;
        $72ac39c9524057bd$var$twoPyramidStage = new (0, $4345a6b99b7cc113$export$afc2b1ec76c7d2e9)();
        $72ac39c9524057bd$var$getStage($72ac39c9524057bd$var$twoPyramidStage);
    } else if ($72ac39c9524057bd$var$stageName === "boomerang") {
        (0, $59fe03a7d07f847a$export$43586241d9db0c6d).clear($72ac39c9524057bd$var$engine.world);
        $72ac39c9524057bd$var$score.score_stage4 = 0;
        $72ac39c9524057bd$var$boomerangStage = new (0, $f9667fcbd1a5ec7a$export$d3fee3dc5cdc6838)();
        $72ac39c9524057bd$var$getStage($72ac39c9524057bd$var$boomerangStage);
    }
    noLoop();
}
// remove composites from render canvas when stage button is clicked
$72ac39c9524057bd$var$stage1.addEventListener("click", function(event) {
    event.preventDefault();
    $72ac39c9524057bd$var$resetStage("tutorial");
});
$72ac39c9524057bd$var$stage2.addEventListener("click", function(event) {
    event.preventDefault();
    $72ac39c9524057bd$var$resetStage("pyramid");
});
$72ac39c9524057bd$var$stage3.addEventListener("click", function(event) {
    event.preventDefault();
    $72ac39c9524057bd$var$resetStage("twoPyramid");
});
$72ac39c9524057bd$var$stage4.addEventListener("click", function(event) {
    event.preventDefault();
    $72ac39c9524057bd$var$resetStage("boomerang");
});
// home screen to stage select screen
$72ac39c9524057bd$var$playHomeButton.addEventListener("click", function(event) {
    event.preventDefault();
    let awaitReset = new Promise((resolve)=>{
        $72ac39c9524057bd$var$stageName = "selectStage";
        setTimeout(function() {
            resolve("success");
        }, 100);
    });
    awaitReset.then(()=>{
        loop();
    });
});
// when user click restart button
$72ac39c9524057bd$var$restartButton.addEventListener("click", function(event) {
    event.preventDefault();
    if ($72ac39c9524057bd$var$stageName === "tutorial") {
        $72ac39c9524057bd$var$score.score_stage1 = 0;
        document.getElementById("rb-stage1-red1").style.display = "flex";
        document.getElementById("rb-stage1-red2").style.display = "flex";
        document.getElementById("rb-stage1-red3").style.display = "flex";
    } else if ($72ac39c9524057bd$var$stageName === "pyramid") {
        $72ac39c9524057bd$var$score.score_stage2 = 0;
        document.getElementById("rb-stage2-red1").style.display = "flex";
        document.getElementById("rb-stage2-chuck1").style.display = "flex";
        document.getElementById("rb-stage2-chuck2").style.display = "flex";
    } else if ($72ac39c9524057bd$var$stageName === "twoPyramid") {
        $72ac39c9524057bd$var$score.score_stage3 = 0;
        document.getElementById("rb-stage3-red1").style.display = "flex";
        document.getElementById("rb-stage3-chuck1").style.display = "flex";
        document.getElementById("rb-stage3-bomb1").style.display = "flex";
    } else if ($72ac39c9524057bd$var$stageName === "boomerang") {
        $72ac39c9524057bd$var$score.score_stage4 = 0;
        document.getElementById("rb-stage4-hal1").style.display = "flex";
        document.getElementById("rb-stage4-hal2").style.display = "flex";
        document.getElementById("rb-stage4-hal3").style.display = "flex";
    }
    $72ac39c9524057bd$var$resetStage($72ac39c9524057bd$var$stageName);
});
// when user click home button at pause screen
$72ac39c9524057bd$var$homeButton.addEventListener("click", function(event) {
    event.preventDefault();
    $72ac39c9524057bd$var$resetStage("home");
});
// when user click stage select button at pause screen
$72ac39c9524057bd$var$stageButton.addEventListener("click", function(event) {
    event.preventDefault();
    $72ac39c9524057bd$var$resetStage("home");
});
// bird ability
function $72ac39c9524057bd$var$keyPressed() {
    if (key === " ") {
        if ($72ac39c9524057bd$var$stageName === "tutorial") {
            if ($72ac39c9524057bd$var$tutorialStage.remainingBirds >= 0) $72ac39c9524057bd$var$tutorialStage.flyingBird.ability();
        } else if ($72ac39c9524057bd$var$stageName === "pyramid") {
            if ($72ac39c9524057bd$var$pyramidStage.remainingBirds >= 0) $72ac39c9524057bd$var$pyramidStage.flyingBird.ability();
        } else if ($72ac39c9524057bd$var$stageName === "twoPyramid") {
            if ($72ac39c9524057bd$var$twoPyramidStage.remainingBirds >= 0) $72ac39c9524057bd$var$twoPyramidStage.flyingBird.ability();
        } else if ($72ac39c9524057bd$var$stageName === "boomerang") {
            if ($72ac39c9524057bd$var$boomerangStage.remainingBirds >= 0) $72ac39c9524057bd$var$boomerangStage.flyingBird.ability();
        }
    }
}
// function at home and stage select stage
function $72ac39c9524057bd$var$mousePressed() {
    if ($72ac39c9524057bd$var$stageName === "home" || $72ac39c9524057bd$var$stageName === "selectStage") $72ac39c9524057bd$var$homeScreen.addBody($72ac39c9524057bd$var$engine.world);
}
// reset events
function $72ac39c9524057bd$var$resetEvents() {
    if ($72ac39c9524057bd$var$stageName === "tutorial" || $72ac39c9524057bd$var$stageName === "pyramid" || $72ac39c9524057bd$var$stageName === "twoPyramid" || $72ac39c9524057bd$var$stageName === "boomerang") {
        (0, $59fe03a7d07f847a$export$ada873a34909da65).off($72ac39c9524057bd$var$mouseConstraint, "enddrag");
        (0, $59fe03a7d07f847a$export$ada873a34909da65).off($72ac39c9524057bd$var$engine, "afterUpdate");
    }
}
// check firing events
function $72ac39c9524057bd$var$firingEvents(stage) {
    if (stage.remainingBirds > 0) {
        (0, $59fe03a7d07f847a$export$ada873a34909da65).on($72ac39c9524057bd$var$mouseConstraint, "startdrag", function() {
            setTimeout(function() {
                stage.slingshot.elastic1.body.render.visible = true;
                stage.slingshot.elastic2.body.render.visible = true;
            }, 100);
        });
        (0, $59fe03a7d07f847a$export$ada873a34909da65).on($72ac39c9524057bd$var$mouseConstraint, "enddrag", function(event) {
            stage.flyingBird = stage.bird;
            stage.slingshot.elastic1.body.render.visible = false;
            stage.slingshot.elastic2.body.render.visible = false;
            if (event.body === stage.bird.body) {
                $72ac39c9524057bd$var$firing = true;
                stage.remaingBirds -= 1;
            }
        });
        (0, $59fe03a7d07f847a$export$ada873a34909da65).on($72ac39c9524057bd$var$engine, "afterUpdate", function() {
            $72ac39c9524057bd$var$addScore(stage);
            if ($72ac39c9524057bd$var$firing && Math.abs(stage.bird.body.position.x - (0, $59fe03a7d07f847a$export$c780001c1465f77e)) < 20 && Math.abs(stage.bird.body.position.y - (0, $59fe03a7d07f847a$export$6ae89c657c51e582)) < 20 && stage.remainingBirds > 0) {
                stage.firing($72ac39c9524057bd$var$engine.world);
                $72ac39c9524057bd$var$firing = false;
            }
        });
    }
}
// add stage score
function $72ac39c9524057bd$var$addScore(stage) {
    let score = 0;
    if ($72ac39c9524057bd$var$stageName === "tutorial") {
        if (stage.pig.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        }
    } else if ($72ac39c9524057bd$var$stageName === "pyramid") {
        if (stage.pig1.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig1.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig2.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig2.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig3.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig3.body.position.x = -100;
            score += 2;
            stage.updateScore(score);
        }
    } else if ($72ac39c9524057bd$var$stageName === "twoPyramid") {
        if (stage.pig1.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig1.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig2.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig2.body.position.x = -100;
            score += 3;
            stage.updateScore(score);
        } else if (stage.pig3.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig3.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig4.body.position.x > (0, $59fe03a7d07f847a$export$71ba42fcf8a11200)) {
            stage.pig4.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        }
    } else if ($72ac39c9524057bd$var$stageName === "boomerang") {
        if (stage.pig.body.position.x < 700) {
            stage.pig.body.position.x = -100;
            score += 2;
            stage.updateScore(score);
        }
    }
}
// add composites of stage
function $72ac39c9524057bd$var$addComposites(stage) {
    (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add($72ac39c9524057bd$var$engine.world, stage.getComposites());
    (0, $59fe03a7d07f847a$export$43586241d9db0c6d).add($72ac39c9524057bd$var$engine.world, $72ac39c9524057bd$var$mouseConstraint);
}
// add composites and firing events
function $72ac39c9524057bd$var$getStage(stage) {
    let getStageComposite = new Promise((resolve)=>{
        $72ac39c9524057bd$var$addComposites(stage);
        setTimeout(function() {
            resolve("success");
        }, 250);
    });
    getStageComposite.then(()=>{
        stage.subscribe($72ac39c9524057bd$var$score);
        $72ac39c9524057bd$var$firingEvents(stage);
    });
}
// reset stage and change stageName
function $72ac39c9524057bd$var$resetStage(stage) {
    let awaitReset = new Promise((resolve)=>{
        $72ac39c9524057bd$var$resetEvents();
        setTimeout(function() {
            resolve("success");
        }, 100);
    });
    awaitReset.then(()=>{
        $72ac39c9524057bd$var$stageName = stage;
    }).then(()=>{
        loop();
    });
}
window.setup = $72ac39c9524057bd$var$setup;
window.draw = $72ac39c9524057bd$var$draw;
window.keyPressed = $72ac39c9524057bd$var$keyPressed;
window.mousePressed = $72ac39c9524057bd$var$mousePressed;


//# sourceMappingURL=index.9b9edbea.js.map
