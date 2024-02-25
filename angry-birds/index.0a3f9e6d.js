(function () {
let $3496e9ad29e1027f$export$2c3b404bf3a77a1f = Matter.Engine, $3496e9ad29e1027f$export$160ae30d75f98247 = Matter.Render, $3496e9ad29e1027f$export$571ad3bcba5a0c45 = Matter.Runner, $3496e9ad29e1027f$export$494c5ef0c7f1eca0 = Matter.Composites, $3496e9ad29e1027f$export$ada873a34909da65 = Matter.Events, $3496e9ad29e1027f$export$aec1359a0a40a615 = Matter.Constraint, $3496e9ad29e1027f$export$958fcd69b8edf071 = Matter.MouseConstraint, $3496e9ad29e1027f$export$7caecd373b84cec3 = Matter.Mouse, $3496e9ad29e1027f$export$43586241d9db0c6d = Matter.Composite, $3496e9ad29e1027f$export$d8385f27924644d0 = Matter.Bodies, $3496e9ad29e1027f$export$4b2c32e08f77ff18 = Matter.Body;
const $3496e9ad29e1027f$export$71ba42fcf8a11200 = 1200;
const $3496e9ad29e1027f$export$11450214e8737bc1 = 600;
const $3496e9ad29e1027f$export$c780001c1465f77e = 250;
const $3496e9ad29e1027f$export$6ae89c657c51e582 = 450;
const $3496e9ad29e1027f$export$1ba50321ba96739 = 25;
const $3496e9ad29e1027f$export$6072ea6461b4d979 = 35;
const $3496e9ad29e1027f$export$ab1db39109f73a1c = 40;
const $3496e9ad29e1027f$export$825e0964753ee409 = 38;
const $3496e9ad29e1027f$export$8bca3475abc2fbf2 = 20;
const $3496e9ad29e1027f$export$15e081af6720bfc6 = 25;
const $3496e9ad29e1027f$export$7dfe989db8551c2c = 50;
const $3496e9ad29e1027f$export$eb13a36a06ee9779 = 60;
const $3496e9ad29e1027f$export$769f973c86dc1af0 = 30;
const $3496e9ad29e1027f$export$505536d0c98afb2b = $3496e9ad29e1027f$export$71ba42fcf8a11200 / 2;
const $3496e9ad29e1027f$export$36ef235a51dff7c4 = $3496e9ad29e1027f$export$11450214e8737bc1 - $3496e9ad29e1027f$export$769f973c86dc1af0 / 2;
const $3496e9ad29e1027f$export$f7994d0fc0f6294c = $3496e9ad29e1027f$export$c780001c1465f77e - 18;
const $3496e9ad29e1027f$export$41e664dc98ff491a = $3496e9ad29e1027f$export$c780001c1465f77e + 6;
const $3496e9ad29e1027f$export$1e4be4250b9bcf30 = $3496e9ad29e1027f$export$6ae89c657c51e582 + 5;
const $3496e9ad29e1027f$export$ae39de71e9f0f803 = $3496e9ad29e1027f$export$c780001c1465f77e - 6;
const $3496e9ad29e1027f$export$5c2cfd2f409694e5 = $3496e9ad29e1027f$export$36ef235a51dff7c4 - 75;


class $f5200a23e21c1e85$export$4b2c32e08f77ff18 {
    constructor(){
        this.body = undefined;
    }
    getBody() {
        return this.body;
    }
}


class $5c193931e2412da7$export$e71c4d32a2263218 extends (0, $f5200a23e21c1e85$export$4b2c32e08f77ff18) {
    constructor(x, y, w, h){
        super();
        this.body = Matter.Bodies.rectangle(x, y, w, h);
    }
}


class $8b48ea8fd397d874$export$c6957adcf93c393f extends (0, $5c193931e2412da7$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.isStatic = true;
        this.body.friction = 0.6;
        this.body.render.fillStyle = "grey";
    }
}



class $9360e6be263863e9$export$9fbb62047327c811 extends (0, $f5200a23e21c1e85$export$4b2c32e08f77ff18) {
    constructor(x, y, r){
        super();
        this.body = Matter.Bodies.circle(x, y, r, {
            density: 0.005
        });
        this.isAbility = true;
    }
}


class $1c996feb42bbfa65$export$74330acc58d077f9 extends (0, $9360e6be263863e9$export$9fbb62047327c811) {
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



class $7cadb4b63a986fbd$export$e0cc5cfdd2689f48 extends (0, $9360e6be263863e9$export$9fbb62047327c811) {
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



class $6f6790eb21e9a2b9$export$5c826d372fd8b619 extends (0, $9360e6be263863e9$export$9fbb62047327c811) {
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



class $074ed09bdbc43f7b$export$1ddf40a7e646abd0 extends (0, $9360e6be263863e9$export$9fbb62047327c811) {
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



class $6c84192bdbb3fe6a$export$5b49fc0c2cf32189 extends (0, $f5200a23e21c1e85$export$4b2c32e08f77ff18) {
    constructor(x, y, r){
        super();
        this.body = Matter.Bodies.circle(x, y, r, {
            density: 0.005
        });
    }
}


class $7c308b39738b5a68$export$2135a04fb4b93399 extends (0, $6c84192bdbb3fe6a$export$5b49fc0c2cf32189) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/pigs/minion-pig.png";
        this.body.render.sprite.xScale = 0.3;
        this.body.render.sprite.yScale = 0.3;
    }
}



class $aca196ce3bf5c585$export$ce8db840f17332db extends (0, $6c84192bdbb3fe6a$export$5b49fc0c2cf32189) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/pigs/corporal-pig.png";
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    }
}



class $ea61a12c50c50131$export$55443b8f1efd7137 extends (0, $6c84192bdbb3fe6a$export$5b49fc0c2cf32189) {
    constructor(x, y, r){
        super(x, y, r);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/pigs/king-pig.png";
        this.body.render.sprite.xScale = 0.7;
        this.body.render.sprite.yScale = 0.7;
    }
}



class $ca575dbac3f394ed$export$5106198af9e0a79d {
    constructor(){
        this.composites = [];
        this.groundTop = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$505536d0c98afb2b), (0, $3496e9ad29e1027f$export$11450214e8737bc1) - (0, $3496e9ad29e1027f$export$36ef235a51dff7c4), (0, $3496e9ad29e1027f$export$71ba42fcf8a11200), (0, $3496e9ad29e1027f$export$769f973c86dc1af0));
        this.groundBottom = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$505536d0c98afb2b), (0, $3496e9ad29e1027f$export$36ef235a51dff7c4), (0, $3496e9ad29e1027f$export$71ba42fcf8a11200), (0, $3496e9ad29e1027f$export$769f973c86dc1af0));
        this.groundLeft = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) / 2, (0, $3496e9ad29e1027f$export$11450214e8737bc1) / 2, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$11450214e8737bc1));
        this.groundRight = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$71ba42fcf8a11200) - (0, $3496e9ad29e1027f$export$769f973c86dc1af0) / 2, (0, $3496e9ad29e1027f$export$11450214e8737bc1) / 2, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$11450214e8737bc1));
        this.RedBird = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$1ba50321ba96739));
        this.ChuckBird = new (0, $7cadb4b63a986fbd$export$e0cc5cfdd2689f48)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$6072ea6461b4d979));
        this.BombBird = new (0, $6f6790eb21e9a2b9$export$5c826d372fd8b619)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$ab1db39109f73a1c));
        this.HalBird = new (0, $074ed09bdbc43f7b$export$1ddf40a7e646abd0)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$825e0964753ee409));
        this.MinionPig = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.CorporalPig = new (0, $aca196ce3bf5c585$export$ce8db840f17332db)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$15e081af6720bfc6));
        this.KingPig = new (0, $ea61a12c50c50131$export$55443b8f1efd7137)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$7dfe989db8551c2c));
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
        let newBody = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$1ba50321ba96739));
        let rand = Math.floor(Math.random() * 7);
        if (rand === 0) newBody = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$1ba50321ba96739));
        else if (rand === 1) newBody = new (0, $7cadb4b63a986fbd$export$e0cc5cfdd2689f48)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$6072ea6461b4d979));
        else if (rand === 2) newBody = new (0, $6f6790eb21e9a2b9$export$5c826d372fd8b619)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$ab1db39109f73a1c));
        else if (rand === 3) newBody = new (0, $074ed09bdbc43f7b$export$1ddf40a7e646abd0)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$825e0964753ee409));
        else if (rand === 4) newBody = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        else if (rand === 5) newBody = new (0, $aca196ce3bf5c585$export$ce8db840f17332db)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$15e081af6720bfc6));
        else if (rand === 6) newBody = new (0, $ea61a12c50c50131$export$55443b8f1efd7137)((0, $3496e9ad29e1027f$export$769f973c86dc1af0) + Math.random() * 1000, (0, $3496e9ad29e1027f$export$769f973c86dc1af0), (0, $3496e9ad29e1027f$export$7dfe989db8551c2c));
        (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add(world, newBody.getBody());
    }
}









class $2c5a976f6f6d43f5$export$56ebabebb04a9ca9 extends (0, $f5200a23e21c1e85$export$4b2c32e08f77ff18) {
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


class $7f72b6da968e17fb$export$106a1768f35cf5d9 extends (0, $f5200a23e21c1e85$export$4b2c32e08f77ff18) {
    constructor(bird){
        super();
        this.bird = bird;
        this.elastic1 = new (0, $2c5a976f6f6d43f5$export$56ebabebb04a9ca9)((0, $3496e9ad29e1027f$export$f7994d0fc0f6294c), (0, $3496e9ad29e1027f$export$1e4be4250b9bcf30), this.bird.getBody());
        this.elastic2 = new (0, $2c5a976f6f6d43f5$export$56ebabebb04a9ca9)((0, $3496e9ad29e1027f$export$41e664dc98ff491a), (0, $3496e9ad29e1027f$export$1e4be4250b9bcf30), this.bird.getBody());
        this.elastic1.body.render.visible = false;
        this.elastic2.body.render.visible = false;
        this.slingshotBody = new (0, $5c193931e2412da7$export$e71c4d32a2263218)((0, $3496e9ad29e1027f$export$ae39de71e9f0f803), (0, $3496e9ad29e1027f$export$5c2cfd2f409694e5), 0.1, 0.1);
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



class $56cacfd614a32a3b$export$25beb7769fa512b extends (0, $5c193931e2412da7$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/obstacles/steel-square.png";
        this.body.render.sprite.xScale = 0.75;
        this.body.render.sprite.yScale = 0.75;
        this.body.isStatic = true;
        this.body.friction = 0.6;
    }
}


class $100f70ffc1832845$export$b6bbab5a9b109038 {
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



class $b76dc8ad93bc0134$export$ed229dc90776b6d0 extends (0, $100f70ffc1832845$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$1ba50321ba96739));
        this.ground = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$505536d0c98afb2b), (0, $3496e9ad29e1027f$export$36ef235a51dff7c4), (0, $3496e9ad29e1027f$export$71ba42fcf8a11200), (0, $3496e9ad29e1027f$export$769f973c86dc1af0));
        this.slingshot = new (0, $7f72b6da968e17fb$export$106a1768f35cf5d9)(this.bird);
        this.pig = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)(1000, 300, (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.steelSquare = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(1000, 400, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
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
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            let newBird = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), 20);
            this.bird = newBird;
            bird = this.bird;
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}







class $72649c3d55030c05$export$681dbc214f7fce93 extends (0, $5c193931e2412da7$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/obstacles/wood-square.png";
        this.body.render.sprite.xScale = 0.75;
        this.body.render.sprite.yScale = 0.75;
        this.body.friction = 0.8;
    }
}



class $5294cd6203cd3458$export$b53df5012f215d3d extends (0, $5c193931e2412da7$export$e71c4d32a2263218) {
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.body.render.sprite.texture = "https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/data/obstacles/ice-square.png";
        this.body.render.sprite.xScale = 0.75;
        this.body.render.sprite.yScale = 0.75;
        this.body.friction = 0.05;
    }
}






class $53969d97fa1fb58d$export$6d158a3c3ee0fdbb extends (0, $100f70ffc1832845$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$1ba50321ba96739));
        this.ground = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$505536d0c98afb2b), (0, $3496e9ad29e1027f$export$36ef235a51dff7c4), (0, $3496e9ad29e1027f$export$71ba42fcf8a11200), (0, $3496e9ad29e1027f$export$769f973c86dc1af0));
        this.slingshot = new (0, $7f72b6da968e17fb$export$106a1768f35cf5d9)(this.bird);
        this.pig1 = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)(710, 180, (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.pig2 = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)(650, 180, (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.pig3 = new (0, $aca196ce3bf5c585$export$ce8db840f17332db)(771, 180, (0, $3496e9ad29e1027f$export$15e081af6720bfc6));
        this.pyramid = Matter.Composites.pyramid(500, 200, 7, 7, 0, 0, function(x, y) {
            let box;
            if (x == 620 || x == 740) box = new (0, $5294cd6203cd3458$export$b53df5012f215d3d)(x, y, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
            else box = new (0, $72649c3d55030c05$export$681dbc214f7fce93)(x, y, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
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
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            let newBird = new (0, $7cadb4b63a986fbd$export$e0cc5cfdd2689f48)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$6072ea6461b4d979));
            this.bird = newBird;
            bird = this.bird;
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}













class $5470540ddd3552b0$export$afc2b1ec76c7d2e9 extends (0, $100f70ffc1832845$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $1c996feb42bbfa65$export$74330acc58d077f9)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$1ba50321ba96739));
        this.ground = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$505536d0c98afb2b), (0, $3496e9ad29e1027f$export$36ef235a51dff7c4), (0, $3496e9ad29e1027f$export$71ba42fcf8a11200), (0, $3496e9ad29e1027f$export$769f973c86dc1af0));
        this.slingshot = new (0, $7f72b6da968e17fb$export$106a1768f35cf5d9)(this.bird);
        this.pig1 = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)(990, 300, (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.pig2 = new (0, $ea61a12c50c50131$export$55443b8f1efd7137)(960, 170, (0, $3496e9ad29e1027f$export$7dfe989db8551c2c));
        this.pig3 = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)(930, 300, (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.pig4 = new (0, $7c308b39738b5a68$export$2135a04fb4b93399)(1050, 300, (0, $3496e9ad29e1027f$export$8bca3475abc2fbf2));
        this.steelSquare1 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(900, 250, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
        this.steelSquare2 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(960, 250, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
        this.steelSquare3 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(1020, 250, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
        this.pyramid = Matter.Composites.pyramid(840, 400, 5, 5, 0, 0, function(x, y) {
            let box = new (0, $72649c3d55030c05$export$681dbc214f7fce93)(x, y, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
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
            newBird = new (0, $7cadb4b63a986fbd$export$e0cc5cfdd2689f48)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$6072ea6461b4d979));
        } else if (this.remainingBirds == 2) {
            document.getElementById("rb-stage3-chuck1").style.display = "none";
            newBird = new (0, $6f6790eb21e9a2b9$export$5c826d372fd8b619)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$ab1db39109f73a1c));
        } else if (this.remainingBirds == 1) document.getElementById("rb-stage3-bomb1").style.display = "none";
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            this.bird = newBird;
            bird = this.bird;
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}









class $bbae9ea8ec001bef$export$d3fee3dc5cdc6838 extends (0, $100f70ffc1832845$export$b6bbab5a9b109038) {
    constructor(){
        super();
        this.composites = [];
        this.remainingBirds = 3;
        this.bird = new (0, $074ed09bdbc43f7b$export$1ddf40a7e646abd0)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$825e0964753ee409));
        this.ground1 = new (0, $8b48ea8fd397d874$export$c6957adcf93c393f)((0, $3496e9ad29e1027f$export$505536d0c98afb2b), (0, $3496e9ad29e1027f$export$36ef235a51dff7c4), (0, $3496e9ad29e1027f$export$71ba42fcf8a11200), (0, $3496e9ad29e1027f$export$769f973c86dc1af0));
        this.slingshot = new (0, $7f72b6da968e17fb$export$106a1768f35cf5d9)(this.bird);
        this.pig = new (0, $aca196ce3bf5c585$export$ce8db840f17332db)(800, 480, (0, $3496e9ad29e1027f$export$15e081af6720bfc6));
        this.steelSquare1 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(600, 540, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
        this.steelSquare2 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(600, 480, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
        this.steelSquare3 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(600, 420, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
        this.steelSquare4 = new (0, $56cacfd614a32a3b$export$25beb7769fa512b)(800, 540, (0, $3496e9ad29e1027f$export$eb13a36a06ee9779), (0, $3496e9ad29e1027f$export$eb13a36a06ee9779));
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
            newBird = new (0, $074ed09bdbc43f7b$export$1ddf40a7e646abd0)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$825e0964753ee409));
        } else if (this.remainingBirds == 2) {
            document.getElementById("rb-stage4-hal2").style.display = "none";
            newBird = new (0, $074ed09bdbc43f7b$export$1ddf40a7e646abd0)((0, $3496e9ad29e1027f$export$c780001c1465f77e), (0, $3496e9ad29e1027f$export$6ae89c657c51e582), (0, $3496e9ad29e1027f$export$825e0964753ee409));
        } else if (this.remainingBirds == 1) document.getElementById("rb-stage4-hal3").style.display = "none";
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getLeftElastic());
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).remove(world, slingshot.getRightElastic());
        } else {
            this.bird = newBird;
            bird = this.bird;
            (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}


class $93c9df0b20e99e72$export$ec9f4d63c1b2b2d3 {
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


const $21c1f424c41fee96$var$stage1 = document.getElementById("stage1");
const $21c1f424c41fee96$var$stage2 = document.getElementById("stage2");
const $21c1f424c41fee96$var$stage3 = document.getElementById("stage3");
const $21c1f424c41fee96$var$stage4 = document.getElementById("stage4");
const $21c1f424c41fee96$var$playHomeButton = document.getElementById("play-home");
const $21c1f424c41fee96$var$restartButton = document.getElementById("restart-btn");
const $21c1f424c41fee96$var$homeButton = document.getElementById("home-btn");
const $21c1f424c41fee96$var$stageButton = document.getElementById("stage-btn");
let $21c1f424c41fee96$var$score, $21c1f424c41fee96$var$engine, $21c1f424c41fee96$var$render, $21c1f424c41fee96$var$mouse, $21c1f424c41fee96$var$runner, $21c1f424c41fee96$var$mouseConstraint, $21c1f424c41fee96$var$homeScreen, $21c1f424c41fee96$var$tutorialStage, $21c1f424c41fee96$var$pyramidStage, $21c1f424c41fee96$var$twoPyramidStage, $21c1f424c41fee96$var$boomerangStage;
let $21c1f424c41fee96$var$stageName = "home";
let $21c1f424c41fee96$var$firing = false;
function $21c1f424c41fee96$var$setup() {
    const CANVAS = createCanvas(0, 0);
    CANVAS.parent("AngryBirds");
    $21c1f424c41fee96$var$score = new (0, $93c9df0b20e99e72$export$ec9f4d63c1b2b2d3)();
    // init render canvas
    $21c1f424c41fee96$var$engine = (0, $3496e9ad29e1027f$export$2c3b404bf3a77a1f).create();
    $21c1f424c41fee96$var$render = (0, $3496e9ad29e1027f$export$160ae30d75f98247).create({
        element: document.getElementById("AngryBirds"),
        engine: $21c1f424c41fee96$var$engine,
        options: {
            width: (0, $3496e9ad29e1027f$export$71ba42fcf8a11200),
            height: (0, $3496e9ad29e1027f$export$11450214e8737bc1),
            showAngleIndicator: false,
            wireframes: false,
            background: "lightblue"
        }
    });
    (0, $3496e9ad29e1027f$export$160ae30d75f98247).run($21c1f424c41fee96$var$render);
    $21c1f424c41fee96$var$runner = (0, $3496e9ad29e1027f$export$571ad3bcba5a0c45).create();
    (0, $3496e9ad29e1027f$export$571ad3bcba5a0c45).run($21c1f424c41fee96$var$runner, $21c1f424c41fee96$var$engine);
    // add mouse constraint to canvas
    $21c1f424c41fee96$var$mouse = (0, $3496e9ad29e1027f$export$7caecd373b84cec3).create($21c1f424c41fee96$var$render.canvas);
    $21c1f424c41fee96$var$mouseConstraint = (0, $3496e9ad29e1027f$export$958fcd69b8edf071).create($21c1f424c41fee96$var$engine, {
        mouse: $21c1f424c41fee96$var$mouse,
        constraint: {
            stiffness: 0.05,
            render: {
                visible: false
            }
        }
    });
    $21c1f424c41fee96$var$render.mouse = $21c1f424c41fee96$var$mouse;
}
// add composites to render canvas
function $21c1f424c41fee96$var$draw() {
    if ($21c1f424c41fee96$var$stageName === "home") {
        (0, $3496e9ad29e1027f$export$43586241d9db0c6d).clear($21c1f424c41fee96$var$engine.world);
        $21c1f424c41fee96$var$homeScreen = new (0, $ca575dbac3f394ed$export$5106198af9e0a79d)();
        $21c1f424c41fee96$var$addComposites($21c1f424c41fee96$var$homeScreen);
    } else if ($21c1f424c41fee96$var$stageName === "tutorial") {
        (0, $3496e9ad29e1027f$export$43586241d9db0c6d).clear($21c1f424c41fee96$var$engine.world);
        $21c1f424c41fee96$var$score.score_stage1 = 0;
        $21c1f424c41fee96$var$tutorialStage = new (0, $b76dc8ad93bc0134$export$ed229dc90776b6d0)();
        $21c1f424c41fee96$var$getStage($21c1f424c41fee96$var$tutorialStage);
    } else if ($21c1f424c41fee96$var$stageName === "pyramid") {
        (0, $3496e9ad29e1027f$export$43586241d9db0c6d).clear($21c1f424c41fee96$var$engine.world);
        $21c1f424c41fee96$var$score.score_stage2 = 0;
        $21c1f424c41fee96$var$pyramidStage = new (0, $53969d97fa1fb58d$export$6d158a3c3ee0fdbb)();
        $21c1f424c41fee96$var$getStage($21c1f424c41fee96$var$pyramidStage);
    } else if ($21c1f424c41fee96$var$stageName === "twoPyramid") {
        (0, $3496e9ad29e1027f$export$43586241d9db0c6d).clear($21c1f424c41fee96$var$engine.world);
        $21c1f424c41fee96$var$score.score_stage3 = 0;
        $21c1f424c41fee96$var$twoPyramidStage = new (0, $5470540ddd3552b0$export$afc2b1ec76c7d2e9)();
        $21c1f424c41fee96$var$getStage($21c1f424c41fee96$var$twoPyramidStage);
    } else if ($21c1f424c41fee96$var$stageName === "boomerang") {
        (0, $3496e9ad29e1027f$export$43586241d9db0c6d).clear($21c1f424c41fee96$var$engine.world);
        $21c1f424c41fee96$var$score.score_stage4 = 0;
        $21c1f424c41fee96$var$boomerangStage = new (0, $bbae9ea8ec001bef$export$d3fee3dc5cdc6838)();
        $21c1f424c41fee96$var$getStage($21c1f424c41fee96$var$boomerangStage);
    }
    noLoop();
}
// remove composites from render canvas when stage button is clicked
$21c1f424c41fee96$var$stage1.addEventListener("click", function(event) {
    event.preventDefault();
    $21c1f424c41fee96$var$resetStage("tutorial");
});
$21c1f424c41fee96$var$stage2.addEventListener("click", function(event) {
    event.preventDefault();
    $21c1f424c41fee96$var$resetStage("pyramid");
});
$21c1f424c41fee96$var$stage3.addEventListener("click", function(event) {
    event.preventDefault();
    $21c1f424c41fee96$var$resetStage("twoPyramid");
});
$21c1f424c41fee96$var$stage4.addEventListener("click", function(event) {
    event.preventDefault();
    $21c1f424c41fee96$var$resetStage("boomerang");
});
// home screen to stage select screen
$21c1f424c41fee96$var$playHomeButton.addEventListener("click", function(event) {
    event.preventDefault();
    let awaitReset = new Promise((resolve)=>{
        $21c1f424c41fee96$var$stageName = "selectStage";
        setTimeout(function() {
            resolve("success");
        }, 100);
    });
    awaitReset.then(()=>{
        loop();
    });
});
// when user click restart button
$21c1f424c41fee96$var$restartButton.addEventListener("click", function(event) {
    event.preventDefault();
    if ($21c1f424c41fee96$var$stageName === "tutorial") {
        $21c1f424c41fee96$var$score.score_stage1 = 0;
        document.getElementById("rb-stage1-red1").style.display = "flex";
        document.getElementById("rb-stage1-red2").style.display = "flex";
        document.getElementById("rb-stage1-red3").style.display = "flex";
    } else if ($21c1f424c41fee96$var$stageName === "pyramid") {
        $21c1f424c41fee96$var$score.score_stage2 = 0;
        document.getElementById("rb-stage2-red1").style.display = "flex";
        document.getElementById("rb-stage2-chuck1").style.display = "flex";
        document.getElementById("rb-stage2-chuck2").style.display = "flex";
    } else if ($21c1f424c41fee96$var$stageName === "twoPyramid") {
        $21c1f424c41fee96$var$score.score_stage3 = 0;
        document.getElementById("rb-stage3-red1").style.display = "flex";
        document.getElementById("rb-stage3-chuck1").style.display = "flex";
        document.getElementById("rb-stage3-bomb1").style.display = "flex";
    } else if ($21c1f424c41fee96$var$stageName === "boomerang") {
        $21c1f424c41fee96$var$score.score_stage4 = 0;
        document.getElementById("rb-stage4-hal1").style.display = "flex";
        document.getElementById("rb-stage4-hal2").style.display = "flex";
        document.getElementById("rb-stage4-hal3").style.display = "flex";
    }
    $21c1f424c41fee96$var$resetStage($21c1f424c41fee96$var$stageName);
});
// when user click home button at pause screen
$21c1f424c41fee96$var$homeButton.addEventListener("click", function(event) {
    event.preventDefault();
    $21c1f424c41fee96$var$resetStage("home");
});
// when user click stage select button at pause screen
$21c1f424c41fee96$var$stageButton.addEventListener("click", function(event) {
    event.preventDefault();
    $21c1f424c41fee96$var$resetStage("home");
});
// bird ability
function $21c1f424c41fee96$var$keyPressed() {
    if (key === " ") {
        if ($21c1f424c41fee96$var$stageName === "tutorial") {
            if ($21c1f424c41fee96$var$tutorialStage.remainingBirds >= 0) $21c1f424c41fee96$var$tutorialStage.flyingBird.ability();
        } else if ($21c1f424c41fee96$var$stageName === "pyramid") {
            if ($21c1f424c41fee96$var$pyramidStage.remainingBirds >= 0) $21c1f424c41fee96$var$pyramidStage.flyingBird.ability();
        } else if ($21c1f424c41fee96$var$stageName === "twoPyramid") {
            if ($21c1f424c41fee96$var$twoPyramidStage.remainingBirds >= 0) $21c1f424c41fee96$var$twoPyramidStage.flyingBird.ability();
        } else if ($21c1f424c41fee96$var$stageName === "boomerang") {
            if ($21c1f424c41fee96$var$boomerangStage.remainingBirds >= 0) $21c1f424c41fee96$var$boomerangStage.flyingBird.ability();
        }
    }
}
// function at home and stage select stage
function $21c1f424c41fee96$var$mousePressed() {
    if ($21c1f424c41fee96$var$stageName === "home" || $21c1f424c41fee96$var$stageName === "selectStage") $21c1f424c41fee96$var$homeScreen.addBody($21c1f424c41fee96$var$engine.world);
}
// reset events
function $21c1f424c41fee96$var$resetEvents() {
    if ($21c1f424c41fee96$var$stageName === "tutorial" || $21c1f424c41fee96$var$stageName === "pyramid" || $21c1f424c41fee96$var$stageName === "twoPyramid" || $21c1f424c41fee96$var$stageName === "boomerang") {
        (0, $3496e9ad29e1027f$export$ada873a34909da65).off($21c1f424c41fee96$var$mouseConstraint, "enddrag");
        (0, $3496e9ad29e1027f$export$ada873a34909da65).off($21c1f424c41fee96$var$engine, "afterUpdate");
    }
}
// check firing events
function $21c1f424c41fee96$var$firingEvents(stage) {
    if (stage.remainingBirds > 0) {
        (0, $3496e9ad29e1027f$export$ada873a34909da65).on($21c1f424c41fee96$var$mouseConstraint, "startdrag", function() {
            setTimeout(function() {
                stage.slingshot.elastic1.body.render.visible = true;
                stage.slingshot.elastic2.body.render.visible = true;
            }, 100);
        });
        (0, $3496e9ad29e1027f$export$ada873a34909da65).on($21c1f424c41fee96$var$mouseConstraint, "enddrag", function(event) {
            stage.flyingBird = stage.bird;
            stage.slingshot.elastic1.body.render.visible = false;
            stage.slingshot.elastic2.body.render.visible = false;
            if (event.body === stage.bird.body) {
                $21c1f424c41fee96$var$firing = true;
                stage.remaingBirds -= 1;
            }
        });
        (0, $3496e9ad29e1027f$export$ada873a34909da65).on($21c1f424c41fee96$var$engine, "afterUpdate", function() {
            $21c1f424c41fee96$var$addScore(stage);
            if ($21c1f424c41fee96$var$firing && Math.abs(stage.bird.body.position.x - (0, $3496e9ad29e1027f$export$c780001c1465f77e)) < 20 && Math.abs(stage.bird.body.position.y - (0, $3496e9ad29e1027f$export$6ae89c657c51e582)) < 20 && stage.remainingBirds > 0) {
                stage.firing($21c1f424c41fee96$var$engine.world);
                $21c1f424c41fee96$var$firing = false;
            }
        });
    }
}
// add stage score
function $21c1f424c41fee96$var$addScore(stage) {
    let score = 0;
    if ($21c1f424c41fee96$var$stageName === "tutorial") {
        if (stage.pig.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        }
    } else if ($21c1f424c41fee96$var$stageName === "pyramid") {
        if (stage.pig1.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig1.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig2.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig2.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig3.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig3.body.position.x = -100;
            score += 2;
            stage.updateScore(score);
        }
    } else if ($21c1f424c41fee96$var$stageName === "twoPyramid") {
        if (stage.pig1.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig1.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig2.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig2.body.position.x = -100;
            score += 3;
            stage.updateScore(score);
        } else if (stage.pig3.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig3.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        } else if (stage.pig4.body.position.x > (0, $3496e9ad29e1027f$export$71ba42fcf8a11200)) {
            stage.pig4.body.position.x = -100;
            score += 1;
            stage.updateScore(score);
        }
    } else if ($21c1f424c41fee96$var$stageName === "boomerang") {
        if (stage.pig.body.position.x < 700) {
            stage.pig.body.position.x = -100;
            score += 2;
            stage.updateScore(score);
        }
    }
}
// add composites of stage
function $21c1f424c41fee96$var$addComposites(stage) {
    (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add($21c1f424c41fee96$var$engine.world, stage.getComposites());
    (0, $3496e9ad29e1027f$export$43586241d9db0c6d).add($21c1f424c41fee96$var$engine.world, $21c1f424c41fee96$var$mouseConstraint);
}
// add composites and firing events
function $21c1f424c41fee96$var$getStage(stage) {
    let getStageComposite = new Promise((resolve)=>{
        $21c1f424c41fee96$var$addComposites(stage);
        setTimeout(function() {
            resolve("success");
        }, 250);
    });
    getStageComposite.then(()=>{
        stage.subscribe($21c1f424c41fee96$var$score);
        $21c1f424c41fee96$var$firingEvents(stage);
    });
}
// reset stage and change stageName
function $21c1f424c41fee96$var$resetStage(stage) {
    let awaitReset = new Promise((resolve)=>{
        $21c1f424c41fee96$var$resetEvents();
        setTimeout(function() {
            resolve("success");
        }, 100);
    });
    awaitReset.then(()=>{
        $21c1f424c41fee96$var$stageName = stage;
    }).then(()=>{
        loop();
    });
}
window.setup = $21c1f424c41fee96$var$setup;
window.draw = $21c1f424c41fee96$var$draw;
window.keyPressed = $21c1f424c41fee96$var$keyPressed;
window.mousePressed = $21c1f424c41fee96$var$mousePressed;

})();
//# sourceMappingURL=index.0a3f9e6d.js.map
