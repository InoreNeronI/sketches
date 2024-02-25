
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $86fa0225824825e4$exports = {};
$86fa0225824825e4$exports = p5ex;


var $dd27126f9435d831$exports = {};
$dd27126f9435d831$exports = CreativeCodingCore;


const $1a0e32da377773d1$export$8daf0a5483c69bae = "FarEast";
const $1a0e32da377773d1$export$f84da9ebf46464d1 = (0, $dd27126f9435d831$exports.HtmlUtility).getElementOrBody($1a0e32da377773d1$export$8daf0a5483c69bae);
const $1a0e32da377773d1$export$224ac526c9f67070 = {
    width: 800,
    height: 800
};
const $1a0e32da377773d1$export$7981ec9c38cd4336 = true;
const $1a0e32da377773d1$export$35f95f7e7baec047 = true;
const $1a0e32da377773d1$export$7f22e5407c8d00b7 = "../assets/far-east";



let $3f4530b3753d8437$export$842059ba0e43130d;
let $3f4530b3753d8437$export$84584c2a98eb6753;
const $3f4530b3753d8437$var$setJp = (font)=>$3f4530b3753d8437$export$842059ba0e43130d = font;
const $3f4530b3753d8437$var$setEn = (font)=>$3f4530b3753d8437$export$84584c2a98eb6753 = font;
const $3f4530b3753d8437$export$11e63f7b0f3d9900 = (p, files)=>{
    p.loadFont(`${(0, $1a0e32da377773d1$export$7f22e5407c8d00b7)}/${files.jp}`, $3f4530b3753d8437$var$setJp);
    p.loadFont(`${(0, $1a0e32da377773d1$export$7f22e5407c8d00b7)}/${files.en}`, $3f4530b3753d8437$var$setEn);
};


var $81709504aa1e0498$exports = {};
$81709504aa1e0498$exports = p5;



let $b7581b6060df425a$var$volume = 0;
let $b7581b6060df425a$var$music;
let $b7581b6060df425a$var$gunSound;
let $b7581b6060df425a$var$bombSound;
let $b7581b6060df425a$var$preAppearanceSound;
let $b7581b6060df425a$var$appearanceSound;
let $b7581b6060df425a$var$damageSound;
const $b7581b6060df425a$var$createLoadFile = (p)=>{
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ const p5Sound = p;
    return (file)=>p5Sound.loadSound(`${(0, $1a0e32da377773d1$export$7f22e5407c8d00b7)}/${file}`);
};
const $b7581b6060df425a$export$11e63f7b0f3d9900 = (p, files)=>{
    const loadFile = $b7581b6060df425a$var$createLoadFile(p);
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ const pAny = p;
    if (0, $1a0e32da377773d1$export$7981ec9c38cd4336) {
        pAny.soundFormats("ogg", "mp3");
        $b7581b6060df425a$var$music = loadFile(files.music);
        $b7581b6060df425a$var$music.setLoop(true);
    }
    pAny.soundFormats("wav");
    $b7581b6060df425a$var$gunSound = loadFile(files.gunSound);
    $b7581b6060df425a$var$gunSound.setLoop(true);
    $b7581b6060df425a$var$bombSound = loadFile(files.bombSound);
    $b7581b6060df425a$var$preAppearanceSound = loadFile(files.preAppearanceSound);
    $b7581b6060df425a$var$appearanceSound = loadFile(files.appearanceSound);
    $b7581b6060df425a$var$damageSound = loadFile(files.damageSound);
    const tmpDiv = p.createDiv();
    tmpDiv.position(0, 0);
    pAny.userStartAudio().then(()=>tmpDiv.remove());
};
const $b7581b6060df425a$var$playMusic = ()=>{
    if (0, $1a0e32da377773d1$export$7981ec9c38cd4336) $b7581b6060df425a$var$music.play();
};
const $b7581b6060df425a$var$stopMusic = ()=>{
    if (0, $1a0e32da377773d1$export$7981ec9c38cd4336) $b7581b6060df425a$var$music.stop();
};
const $b7581b6060df425a$export$246e658b67178cb0 = (vol)=>{
    if (0, $1a0e32da377773d1$export$7981ec9c38cd4336) $b7581b6060df425a$var$music.setVolume(vol);
    $b7581b6060df425a$var$gunSound.setVolume(0.25 * vol);
    $b7581b6060df425a$var$bombSound.setVolume(0.65 * vol);
    $b7581b6060df425a$var$preAppearanceSound.setVolume(0.3 * vol);
    $b7581b6060df425a$var$appearanceSound.setVolume(0.5 * vol);
    $b7581b6060df425a$var$damageSound.setVolume(1.0 * vol);
    if ($b7581b6060df425a$var$volume === 0 && vol > 0) $b7581b6060df425a$var$playMusic();
    else if ($b7581b6060df425a$var$volume > 0 && vol === 0) $b7581b6060df425a$var$stopMusic();
    $b7581b6060df425a$var$volume = vol;
};
const $b7581b6060df425a$export$261db870e77e0eb4 = ()=>{
    if (!$b7581b6060df425a$var$gunSound.isPlaying()) $b7581b6060df425a$var$gunSound.play();
};
const $b7581b6060df425a$export$6c92483f4a4c292e = ()=>{
    if ($b7581b6060df425a$var$gunSound.isPlaying()) $b7581b6060df425a$var$gunSound.stop();
};
const $b7581b6060df425a$var$playRestart = (sound)=>{
    if (sound.isPlaying()) sound.stop();
    sound.play();
};
const $b7581b6060df425a$export$3ca364567c609e46 = ()=>$b7581b6060df425a$var$playRestart($b7581b6060df425a$var$bombSound);
const $b7581b6060df425a$export$12fe957efa720b3 = ()=>$b7581b6060df425a$var$playRestart($b7581b6060df425a$var$preAppearanceSound);
const $b7581b6060df425a$export$3a6a822f243dd388 = ()=>$b7581b6060df425a$var$playRestart($b7581b6060df425a$var$appearanceSound);
const $b7581b6060df425a$export$8c1bc81195937a74 = ()=>$b7581b6060df425a$var$playRestart($b7581b6060df425a$var$damageSound);











var $af68f5fe2253efa6$exports = {};

$parcel$export($af68f5fe2253efa6$exports, "create", function () { return $af68f5fe2253efa6$export$185802fd694ee1f5; });
$parcel$export($af68f5fe2253efa6$exports, "use", function () { return $af68f5fe2253efa6$export$1f96ae73734a86cc; });
$parcel$export($af68f5fe2253efa6$exports, "kill", function () { return $af68f5fe2253efa6$export$dfdb508572caf3d7; });
$parcel$export($af68f5fe2253efa6$exports, "runAndDraw", function () { return $af68f5fe2253efa6$export$3a64bf52feaec98c; });
$parcel$export($af68f5fe2253efa6$exports, "reset", function () { return $af68f5fe2253efa6$export$aad8462122ac592b; });
$parcel$export($af68f5fe2253efa6$exports, "breakActors", function () { return $af68f5fe2253efa6$export$9b6ff1e3e84c4aea; });
$parcel$export($af68f5fe2253efa6$exports, "checkCollision", function () { return $af68f5fe2253efa6$export$65cbfae5bde8bfd2; });


const $af68f5fe2253efa6$export$185802fd694ee1f5 = (capacity)=>{
    const prototypeStructure = {
        active: false,
        frameCount: 0,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        rotationAngle: 0,
        scaleFactor: 1,
        drawGraphics: ()=>{},
        drawGraphicsDamaged: null,
        run: ()=>{},
        collisionDistance: 0,
        life: 0,
        damagedRemainingCount: 0
    };
    return {
        soa: (0, $dd27126f9435d831$exports.StructureOfArrays).from(prototypeStructure, capacity),
        startIndex: Infinity,
        endIndex: 0
    };
};
const $af68f5fe2253efa6$export$1f96ae73734a86cc = (group, x, y, vx, vy, angle, type)=>{
    const { data: data, length: length } = group.soa;
    const { active: active } = data;
    for(let i = 0; i < length; i += 1){
        if (active[i]) continue;
        active[i] = true;
        data.x[i] = x;
        data.y[i] = y;
        data.vx[i] = vx;
        data.vy[i] = vy;
        data.rotationAngle[i] = angle;
        data.scaleFactor[i] = 1;
        data.run[i] = type.run;
        data.drawGraphics[i] = type.draw;
        data.drawGraphicsDamaged[i] = type.drawDamaged || null;
        data.collisionDistance[i] = type.collisionDistance;
        data.life[i] = type.maxLife;
        data.frameCount[i] = 0;
        data.damagedRemainingCount[i] = 0;
        if (i < group.startIndex) group.startIndex = i;
        if (i >= group.endIndex) group.endIndex = i + 1;
        return i;
    }
    return null;
};
const $af68f5fe2253efa6$var$findFirstActive = (active, startIndex, endIndex)=>{
    for(let i = startIndex; i < endIndex; i += 1){
        if (active[i]) return i;
    }
    return Infinity;
};
const $af68f5fe2253efa6$var$findLastActive = (active, startIndex, endIndex)=>{
    for(let i = endIndex - 1; i >= startIndex; i -= 1){
        if (active[i]) return i;
    }
    return -1;
};
const $af68f5fe2253efa6$export$dfdb508572caf3d7 = (group, index)=>{
    const { soa: soa, startIndex: startIndex, endIndex: endIndex } = group;
    const { active: active } = soa.data;
    if (!active[index]) return false;
    active[index] = false;
    if (index === startIndex) group.startIndex = $af68f5fe2253efa6$var$findFirstActive(active, startIndex + 1, endIndex);
    if (index === endIndex) group.endIndex = $af68f5fe2253efa6$var$findLastActive(active, group.startIndex, endIndex - 1) + 1;
    return true;
};
const $af68f5fe2253efa6$export$3a64bf52feaec98c = (group)=>{
    const { soa: soa, startIndex: startIndex, endIndex: endIndex } = group;
    if (startIndex >= soa.length) return;
    const { data: data } = soa;
    const { active: active, frameCount: frameCount, drawGraphics: drawGraphics, drawGraphicsDamaged: drawGraphicsAlternative, x: x, y: y, vx: vx, vy: vy, run: run, rotationAngle: rotationAngle, scaleFactor: scaleFactor, damagedRemainingCount: damagedRemainingCount } = data;
    const tmpPosition = {
        x: 0,
        y: 0
    };
    for(let i = startIndex; i < endIndex; i += 1){
        if (!active[i]) continue;
        run[i](data, i);
        tmpPosition.x = x[i] += vx[i];
        tmpPosition.y = y[i] += vy[i];
        if (!(0, $dd27126f9435d831$exports.RectangleRegion).containsPoint((0, $86fa0225824825e4$exports.canvas).logicalRegion, tmpPosition, -100)) {
            $af68f5fe2253efa6$export$dfdb508572caf3d7(group, i);
            continue;
        }
        const thisScaleFactor = scaleFactor[i];
        const drawDamaged = drawGraphicsAlternative[i];
        const damaged = damagedRemainingCount[i] > 0;
        if (thisScaleFactor > 0) (0, $86fa0225824825e4$exports.drawTransformed)(damaged && drawDamaged && frameCount[i] % 4 < 2 ? drawDamaged : drawGraphics[i], x[i], y[i], rotationAngle[i], thisScaleFactor);
        if (damaged) damagedRemainingCount[i] -= 1;
        frameCount[i] += 1;
    }
};
const $af68f5fe2253efa6$export$aad8462122ac592b = (group)=>{
    const { active: active, run: run, drawGraphics: drawGraphics, drawGraphicsDamaged: drawGraphicsDamaged } = group.soa.data;
    const emptyFunction = ()=>{};
    for(let i = 0, len = group.soa.length; i < len; i += 1){
        active[i] = false;
        run[i] = emptyFunction;
        drawGraphics[i] = emptyFunction;
        drawGraphicsDamaged[i] = null;
    }
    group.startIndex = Infinity;
    group.endIndex = 0;
    return group;
};
const $af68f5fe2253efa6$export$9b6ff1e3e84c4aea = (group, fireParticle)=>{
    const { active: active, x: x, y: y, run: run, drawGraphics: drawGraphics, drawGraphicsDamaged: drawGraphicsDamaged } = group.soa.data;
    const emptyFunction = ()=>{};
    for(let i = 0, len = group.soa.length; i < len; i += 1){
        if (!active[i]) continue;
        fireParticle(x[i], y[i]);
        active[i] = false;
        run[i] = emptyFunction;
        drawGraphics[i] = emptyFunction;
        drawGraphicsDamaged[i] = null;
    }
    group.startIndex = Infinity;
    group.endIndex = 0;
    return group;
};
const $af68f5fe2253efa6$export$65cbfae5bde8bfd2 = (group, otherGroup, onCollide)=>{
    const data = group.soa.data;
    const otherData = otherGroup.soa.data;
    const { active: active, x: x, y: y, collisionDistance: collisionDistance } = data;
    const otherActive = otherData.active;
    const otherX = otherData.x;
    const otherY = otherData.y;
    const otherCollisionDistance = otherData.collisionDistance;
    for(let index = group.startIndex; index < group.endIndex; index += 1){
        if (!active[index]) continue;
        const thisX = x[index];
        const thisY = y[index];
        const thisCollisionDistance = collisionDistance[index];
        for(let otherIndex = otherGroup.startIndex; otherIndex < otherGroup.endIndex; otherIndex += 1){
            if (!otherActive[otherIndex]) continue;
            const distanceThreshold = thisCollisionDistance + otherCollisionDistance[otherIndex];
            const actualDistanceX = Math.abs(thisX - otherX[otherIndex]);
            if (actualDistanceX > distanceThreshold) continue;
            const actualDistanceY = Math.abs(thisY - otherY[otherIndex]);
            if (actualDistanceY > distanceThreshold) continue;
            onCollide(group, index, otherGroup, otherIndex);
        }
    }
};






let $0b372efcce0441b1$var$frameCount = 0;
const $0b372efcce0441b1$var$playerGroup = $af68f5fe2253efa6$exports.create(1);
let $0b372efcce0441b1$export$ba4e342ea91ac6ec = false;
const $0b372efcce0441b1$export$11ae10a4ef8c3aa4 = (type)=>{
    $af68f5fe2253efa6$exports.use($0b372efcce0441b1$var$playerGroup, 0.5 * (0, $1a0e32da377773d1$export$224ac526c9f67070).width, (0, $1a0e32da377773d1$export$224ac526c9f67070).height - 100, 0, 0, -(0, $dd27126f9435d831$exports.Math).HALF_PI, type);
    $0b372efcce0441b1$export$ba4e342ea91ac6ec = true;
};
const $0b372efcce0441b1$export$a62b7fa33642815b = ()=>{
    $af68f5fe2253efa6$exports.kill($0b372efcce0441b1$var$playerGroup, 0);
    $0b372efcce0441b1$export$ba4e342ea91ac6ec = false;
    $b7581b6060df425a$export$6c92483f4a4c292e();
};
const $0b372efcce0441b1$export$22d967c21f4978ff = ()=>$0b372efcce0441b1$export$ba4e342ea91ac6ec ? $0b372efcce0441b1$var$playerGroup.soa.data.life[0] : 0;
const $0b372efcce0441b1$var$playerX = $0b372efcce0441b1$var$playerGroup.soa.data.x;
const $0b372efcce0441b1$var$playerY = $0b372efcce0441b1$var$playerGroup.soa.data.y;
const $0b372efcce0441b1$export$7848f0bf324f14a2 = (x, y)=>{
    const xDifference = $0b372efcce0441b1$var$playerX[0] - x;
    const yDifference = $0b372efcce0441b1$var$playerY[0] - y;
    if (xDifference === 0 && yDifference === 0) return 0;
    return Math.atan2(yDifference, xDifference);
};
const $0b372efcce0441b1$var$playerBulletGroup = $af68f5fe2253efa6$exports.create(128);
const $0b372efcce0441b1$var$fire = (group)=>(x, y, speed, directionAngle, type)=>$af68f5fe2253efa6$exports.use(group, x, y, speed * Math.cos(directionAngle), speed * Math.sin(directionAngle), directionAngle, type);
const $0b372efcce0441b1$export$ce026964000ee940 = $0b372efcce0441b1$var$fire($0b372efcce0441b1$var$playerBulletGroup);
const $0b372efcce0441b1$var$enemyGroup = $af68f5fe2253efa6$exports.create(32);
let $0b372efcce0441b1$export$afa6aa69c9a732dd = 0;
const $0b372efcce0441b1$export$942bce15f660128c = (x, y, type)=>{
    const index = $af68f5fe2253efa6$exports.use($0b372efcce0441b1$var$enemyGroup, x, y, 0, 0, (0, $dd27126f9435d831$exports.Math).HALF_PI, type);
    if (index != null) $0b372efcce0441b1$export$afa6aa69c9a732dd += 1;
    return index;
};
const $0b372efcce0441b1$export$8a2d3cbe71e8e119 = (index)=>{
    $af68f5fe2253efa6$exports.kill($0b372efcce0441b1$var$enemyGroup, index);
    $0b372efcce0441b1$export$afa6aa69c9a732dd -= 1;
};
const $0b372efcce0441b1$export$a8632a732abf7cb7 = (index)=>$0b372efcce0441b1$var$enemyGroup.soa.data.active[index];
const $0b372efcce0441b1$var$enemyBulletGroup = $af68f5fe2253efa6$exports.create(1024);
const $0b372efcce0441b1$export$4fe124ca8cee4bc9 = $0b372efcce0441b1$var$fire($0b372efcce0441b1$var$enemyBulletGroup);
const $0b372efcce0441b1$var$particleGroup = $af68f5fe2253efa6$exports.create(256);
const $0b372efcce0441b1$export$6f51c6174433c0be = (x, y, type)=>$af68f5fe2253efa6$exports.use($0b372efcce0441b1$var$particleGroup, x, y, 0, 0, 0, type);
const $0b372efcce0441b1$export$4f7edc95e736bc50 = $0b372efcce0441b1$var$fire($0b372efcce0441b1$var$particleGroup);
const $0b372efcce0441b1$export$100429cbbacc0af1 = (index)=>$af68f5fe2253efa6$exports.kill($0b372efcce0441b1$var$particleGroup, index);
const $0b372efcce0441b1$export$c15a40b3139f3ae7 = (index, run)=>{
    $0b372efcce0441b1$var$particleGroup.soa.data.run[index] = run;
};
const $0b372efcce0441b1$var$actorGroups = [
    $0b372efcce0441b1$var$particleGroup,
    $0b372efcce0441b1$var$playerGroup,
    $0b372efcce0441b1$var$enemyGroup,
    $0b372efcce0441b1$var$playerBulletGroup,
    $0b372efcce0441b1$var$enemyBulletGroup
];
const $0b372efcce0441b1$export$3a64bf52feaec98c = ()=>{
    (0, $dd27126f9435d831$exports.ArrayUtility).loop($0b372efcce0441b1$var$actorGroups, $af68f5fe2253efa6$exports.runAndDraw);
    $0b372efcce0441b1$var$frameCount += 1;
};
const $0b372efcce0441b1$export$aad8462122ac592b = ()=>{
    $0b372efcce0441b1$var$frameCount = 0;
    (0, $dd27126f9435d831$exports.ArrayUtility).loop($0b372efcce0441b1$var$actorGroups, $af68f5fe2253efa6$exports.reset);
};
const $0b372efcce0441b1$export$eea5a0dff8a7c4f9 = (onHitEnemy)=>$af68f5fe2253efa6$exports.checkCollision($0b372efcce0441b1$var$playerBulletGroup, $0b372efcce0441b1$var$enemyGroup, onHitEnemy);
const $0b372efcce0441b1$export$c89eaa0a169c02e4 = (onHitPlayer)=>{
    if ($0b372efcce0441b1$var$frameCount % 2 === 0) return;
    if ($0b372efcce0441b1$var$playerGroup.soa.data.damagedRemainingCount[0] > 0) return;
    $af68f5fe2253efa6$exports.checkCollision($0b372efcce0441b1$var$enemyBulletGroup, $0b372efcce0441b1$var$playerGroup, onHitPlayer);
};
const $0b372efcce0441b1$export$823d2c70d11b2f09 = (fireParticle)=>$af68f5fe2253efa6$exports.breakActors($0b372efcce0441b1$var$enemyBulletGroup, fireParticle);







let $7df79922a748b1b8$export$615455393ee443ca;
let $7df79922a748b1b8$export$9bebbe3edaf607d5;
let $7df79922a748b1b8$var$enemies;
const $7df79922a748b1b8$export$797a470f5288f525 = ()=>(0, $dd27126f9435d831$exports.Random).fromArray($7df79922a748b1b8$var$enemies);
let $7df79922a748b1b8$export$72e3ce9a9469f5f6;
let $7df79922a748b1b8$export$cf1f36c47da3ba85;
let $7df79922a748b1b8$var$particles;
const $7df79922a748b1b8$export$ec81a0a9fb866aea = ()=>(0, $dd27126f9435d831$exports.Random).fromArray($7df79922a748b1b8$var$particles);
const $7df79922a748b1b8$var$bulletParameter = {
    char: "\u591A",
    dir: 3,
    flip: false
};
const $7df79922a748b1b8$var$playerParameter = {
    char: "\u53C2",
    dir: 0,
    flip: false
};
const $7df79922a748b1b8$var$enemyParameters = [
    {
        char: "\u6B20",
        dir: 0,
        flip: false
    },
    {
        char: "\u6D1E",
        dir: 0,
        flip: true
    },
    {
        char: "\u9BF5",
        dir: 3,
        flip: false
    },
    {
        char: "\u5A03",
        dir: 0,
        flip: true
    },
    {
        char: "\u8FA3",
        dir: 1,
        flip: true
    },
    {
        char: "\u9154",
        dir: 0,
        flip: false
    },
    {
        char: "\u5F6B",
        dir: 3,
        flip: false
    },
    {
        char: "\u59D4",
        dir: 2,
        flip: true
    },
    {
        char: "\u7DBE",
        dir: 3,
        flip: false
    },
    {
        char: "\u5112",
        dir: 0,
        flip: true
    },
    {
        char: "\u4FFA",
        dir: 0,
        flip: true
    },
    {
        char: "\u55AA",
        dir: 0,
        flip: true
    },
    {
        char: "\u6C88",
        dir: 0,
        flip: true
    },
    {
        char: "\u6F14",
        dir: 1,
        flip: false
    },
    {
        char: "\u6669",
        dir: 2,
        flip: false
    },
    {
        char: "\u643A",
        dir: 3,
        flip: false
    },
    {
        char: "\u8A60",
        dir: 0,
        flip: true
    },
    {
        char: "\u7B46",
        dir: 0,
        flip: true
    },
    {
        char: "\u7B51",
        dir: 0,
        flip: true
    },
    {
        char: "\u82D1",
        dir: 2,
        flip: true
    },
    {
        char: "\u6458",
        dir: 1,
        flip: false
    },
    {
        char: "\u63CF",
        dir: 2,
        flip: true
    },
    {
        char: "\u7B97",
        dir: 2,
        flip: true
    },
    {
        char: "\u8F1D",
        dir: 1,
        flip: false
    },
    {
        char: "\u90F7",
        dir: 1,
        flip: false
    },
    {
        char: "\u89E3",
        dir: 2,
        flip: true
    },
    {
        char: "\u9453",
        dir: 2,
        flip: true
    },
    {
        char: "\u7C38",
        dir: 3,
        flip: true
    },
    {
        char: "\u8B90",
        dir: 2,
        flip: true
    },
    {
        char: "\u6FEF",
        dir: 0,
        flip: true
    },
    {
        char: "\u92F3",
        dir: 0,
        flip: true
    },
    {
        char: "\u7A81",
        dir: 2,
        flip: true
    },
    {
        char: "\u63A2",
        dir: 2,
        flip: true
    },
    {
        char: "\u90AA",
        dir: 3,
        flip: false
    },
    {
        char: "\u6DD1",
        dir: 1,
        flip: true
    },
    {
        char: "\u64C1",
        dir: 1,
        flip: false
    },
    {
        char: "\u685F",
        dir: 3,
        flip: true
    },
    {
        char: "\u5451",
        dir: 0,
        flip: true
    },
    {
        char: "\u6851",
        dir: 0,
        flip: true
    }
];
const $7df79922a748b1b8$var$createCharacterGraphics = (param, size, color)=>{
    const halfSize = 0.5 * size;
    const graphics = (0, $86fa0225824825e4$exports.p).createGraphics(size, size);
    const g = graphics; // eslint-disable-line @typescript-eslint/no-explicit-any
    g.push();
    g.translate(halfSize, halfSize);
    g.rotate(param.dir * (0, $dd27126f9435d831$exports.Math).HALF_PI);
    if (param.flip) g.scale(-1, 1);
    g.fill(color);
    g.textFont($3f4530b3753d8437$export$842059ba0e43130d, 0.8 * size);
    g.textAlign((0, $86fa0225824825e4$exports.p).CENTER, (0, $86fa0225824825e4$exports.p).CENTER);
    g.text(param.char, 0, -0.2 * size);
    g.pop();
    return graphics;
};
const $7df79922a748b1b8$var$mirrorGraphics = (graphics)=>{
    /* eslint-disable @typescript-eslint/no-explicit-any */ const img = (0, $86fa0225824825e4$exports.graphicsToImage)(graphics);
    const { width: width, height: height } = img;
    const mask = (0, $86fa0225824825e4$exports.p).createGraphics(width, height);
    mask.fill(0);
    mask.noStroke();
    mask.rect(0, 0, width, 0.5 * height);
    img.mask(mask);
    const g = graphics; // just for typing
    g.clear();
    g.image(img, 0, 0);
    g.translate(0, height);
    g.scale(1, -1);
    g.image(img, 0, 0);
/* eslint-enable */ };
const $7df79922a748b1b8$var$createActorGraphics = (param, size, color)=>{
    const graphics = $7df79922a748b1b8$var$createCharacterGraphics(param, size, color);
    $7df79922a748b1b8$var$mirrorGraphics(graphics);
    return ()=>{
        (0, $86fa0225824825e4$exports.p).image(graphics, 0, 0);
    };
};
(0, $86fa0225824825e4$exports.onSetup).push((p)=>{
    const emptyFunction = ()=>{};
    const firePlayerBullet = (x, y)=>$0b372efcce0441b1$export$ce026964000ee940(x, y, 70, -(0, $dd27126f9435d831$exports.Math).HALF_PI, $7df79922a748b1b8$export$72e3ce9a9469f5f6);
    const shotKeyCodes = [
        32,
        90,
        122,
        74,
        106,
        13,
        10
    ];
    const margin = 30;
    const keepInScreen = (data, i)=>{
        const x = data.x[i];
        const y = data.y[i];
        const { width: width, height: height } = (0, $86fa0225824825e4$exports.canvas).logicalSize;
        if (x < margin) data.x[i] = margin;
        else if (x >= width - margin) data.x[i] = width - margin - 1;
        if (y < margin) data.y[i] = margin;
        else if (y >= height - margin) data.y[i] = height - margin - 1;
    };
    $7df79922a748b1b8$export$9bebbe3edaf607d5 = $7df79922a748b1b8$var$createActorGraphics($7df79922a748b1b8$var$playerParameter, 100, p.color(0, 64, 0));
    $7df79922a748b1b8$export$615455393ee443ca = {
        run: (data, i)=>{
            keepInScreen(data, i);
            const { vx: vx, vy: vy } = data;
            const moveDirection = (0, $86fa0225824825e4$exports.MoveKeys).unitVector;
            vx[i] = 10 * moveDirection.x;
            vy[i] = 10 * moveDirection.y;
            if (!(0, $86fa0225824825e4$exports.KeyBoard).anyKeyIsDown(shotKeyCodes)) {
                $b7581b6060df425a$export$6c92483f4a4c292e();
                return;
            }
            if (data.frameCount[i] % 16 === 0) return;
            if (data.frameCount[i] % 2 === 1) return;
            const x = data.x[i];
            const y = data.y[i];
            firePlayerBullet(x - 45, y);
            firePlayerBullet(x, y - 20);
            firePlayerBullet(x + 45, y);
            firePlayerBullet(x - 45, y - 30);
            firePlayerBullet(x, y - 50);
            firePlayerBullet(x + 45, y - 30);
            $b7581b6060df425a$export$261db870e77e0eb4();
        },
        draw: $7df79922a748b1b8$export$9bebbe3edaf607d5,
        drawDamaged: ()=>{},
        collisionDistance: 20,
        maxLife: 3
    };
    $7df79922a748b1b8$export$72e3ce9a9469f5f6 = {
        run: emptyFunction,
        draw: $7df79922a748b1b8$var$createActorGraphics($7df79922a748b1b8$var$bulletParameter, 40, p.color(128, 144, 128)),
        collisionDistance: 15,
        maxLife: 1
    };
    const runEnemyCandidates = [
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const directionToPlayer = $0b372efcce0441b1$export$7848f0bf324f14a2(x, y);
            data.rotationAngle[i] = directionToPlayer;
            if (data.frameCount[i] % 4 === 0 && (0, $dd27126f9435d831$exports.Random).bool(0.2)) $0b372efcce0441b1$export$4fe124ca8cee4bc9(x, y, 4, directionToPlayer, $7df79922a748b1b8$export$cf1f36c47da3ba85);
        },
        (data, i)=>{
            const frameCount = data.frameCount[i];
            const x = data.x[i];
            const y = data.y[i];
            if (frameCount % 120 < 30) {
                if (frameCount % 6 === 0) $0b372efcce0441b1$export$4fe124ca8cee4bc9(x, y, 5, data.rotationAngle[i], $7df79922a748b1b8$export$cf1f36c47da3ba85);
            } else {
                const directionToPlayer = $0b372efcce0441b1$export$7848f0bf324f14a2(x, y);
                data.rotationAngle[i] += 0.2 * (directionToPlayer - data.rotationAngle[i]);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            const directionToPlayer = $0b372efcce0441b1$export$7848f0bf324f14a2(x, y);
            data.rotationAngle[i] = directionToPlayer;
            if (frameCount % 90 < 45) return;
            if (frameCount % 4 === 0) {
                const angle = 0.008 * frameCount;
                for(let i = 0; i < 4; i += 1)$0b372efcce0441b1$export$4fe124ca8cee4bc9(x, y, 8, angle + i * (0, $dd27126f9435d831$exports.Math).HALF_PI, $7df79922a748b1b8$export$cf1f36c47da3ba85);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            const directionToPlayer = $0b372efcce0441b1$export$7848f0bf324f14a2(x, y);
            data.rotationAngle[i] = directionToPlayer;
            if (frameCount % 90 > 0) return;
            for(let i = 0; i < 24; i += 1){
                const angle = i * (0, $dd27126f9435d831$exports.Math).TWO_PI / 24;
                $0b372efcce0441b1$export$4fe124ca8cee4bc9(x, y, 3, angle + frameCount, $7df79922a748b1b8$export$cf1f36c47da3ba85);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            if (frameCount % 180 < 90) {
                if (frameCount % 4 === 0) {
                    const bx = x + (0, $dd27126f9435d831$exports.Random).between(-50, 50);
                    const by = y + (0, $dd27126f9435d831$exports.Random).between(-50, 50);
                    const angle = $0b372efcce0441b1$export$7848f0bf324f14a2(bx, by);
                    $0b372efcce0441b1$export$4fe124ca8cee4bc9(bx, by, 4, angle, $7df79922a748b1b8$export$cf1f36c47da3ba85);
                }
            } else {
                const directionToPlayer = $0b372efcce0441b1$export$7848f0bf324f14a2(x, y);
                data.rotationAngle[i] += 0.1 * (directionToPlayer - data.rotationAngle[i]);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            const rotationAngle = data.rotationAngle[i];
            if (frameCount % 180 < 90) {
                if (frameCount % 4 === 0) {
                    const speed = 4 + 0.2 * (frameCount % 90);
                    const x1 = x - 40;
                    $0b372efcce0441b1$export$4fe124ca8cee4bc9(x1, y, speed, rotationAngle, $7df79922a748b1b8$export$cf1f36c47da3ba85);
                    const x2 = x + 40;
                    $0b372efcce0441b1$export$4fe124ca8cee4bc9(x2, y, speed, rotationAngle, $7df79922a748b1b8$export$cf1f36c47da3ba85);
                }
            } else {
                const directionToPlayer = $0b372efcce0441b1$export$7848f0bf324f14a2(x, y);
                data.rotationAngle[i] += 0.1 * (directionToPlayer - rotationAngle);
            }
        }
    ];
    const enemyColor = p.color(32, 0, 0);
    const enemyDamagedColor = p.color(192, 0, 0);
    $7df79922a748b1b8$var$enemies = $7df79922a748b1b8$var$enemyParameters.map((param, index)=>{
        return {
            run: runEnemyCandidates[index % runEnemyCandidates.length],
            draw: $7df79922a748b1b8$var$createActorGraphics(param, 160, enemyColor),
            drawDamaged: $7df79922a748b1b8$var$createActorGraphics(param, 160, enemyDamagedColor),
            collisionDistance: 70,
            maxLife: 200
        };
    });
    $7df79922a748b1b8$export$cf1f36c47da3ba85 = {
        run: emptyFunction,
        draw: $7df79922a748b1b8$var$createActorGraphics($7df79922a748b1b8$var$bulletParameter, 40, p.color(0)),
        collisionDistance: 5,
        maxLife: 1
    };
    const particleColor = p.color(160, 156, 152);
    const runParticle = (data, i)=>{
        const progressRatio = data.frameCount[i] / 45;
        data.scaleFactor[i] = 1 - (0, $dd27126f9435d831$exports.Easing).easeInQuad(progressRatio);
        data.vx[i] *= 0.9;
        data.vy[i] *= 0.9;
        data.vy[i] += 0.1;
        if (data.frameCount[i] > 45) $0b372efcce0441b1$export$100429cbbacc0af1(i);
    };
    $7df79922a748b1b8$var$particles = $7df79922a748b1b8$var$enemyParameters.map((param)=>{
        return {
            run: runParticle,
            draw: $7df79922a748b1b8$var$createActorGraphics(param, 32, particleColor),
            collisionDistance: 0,
            maxLife: 0
        };
    });
}); // const directionArray: readonly Direction[] = [0, 1, 2, 3];
 // export const createRandom = (collisionDistance: number) => {
 //   const char = Random.fromArray(kanjis);
 //   const dir = Random.fromArray(directionArray);
 //   console.log(`char: ${char}, dir: ${dir}`);
 //   return {
 //     draw: createActorGraphics({ char, dir, flip: false }, 100, p.color(0)),
 //     collisionDistance
 //   };
 // };





var $6b8cd4f52d43e84d$export$7254cc27399e90bd;
(function(State) {
    State["ACTIVE"] = "ACTIVE";
    State["APPROACHING"] = "APPROACHING";
    State["ABSENT"] = "ABSENT";
})($6b8cd4f52d43e84d$export$7254cc27399e90bd || ($6b8cd4f52d43e84d$export$7254cc27399e90bd = {}));
const $6b8cd4f52d43e84d$export$8837f4fc672e936d = [
    {
        x: 0.25 * (0, $1a0e32da377773d1$export$224ac526c9f67070).width,
        y: 0.25 * (0, $1a0e32da377773d1$export$224ac526c9f67070).height,
        index: -1,
        state: "ABSENT"
    },
    {
        x: 0.5 * (0, $1a0e32da377773d1$export$224ac526c9f67070).width,
        y: 0.15 * (0, $1a0e32da377773d1$export$224ac526c9f67070).height,
        index: -1,
        state: "ABSENT"
    },
    {
        x: 0.75 * (0, $1a0e32da377773d1$export$224ac526c9f67070).width,
        y: 0.25 * (0, $1a0e32da377773d1$export$224ac526c9f67070).height,
        index: -1,
        state: "ABSENT"
    }
];
const $6b8cd4f52d43e84d$export$aad8462122ac592b = (addEnemy)=>{
    for(let i = 0; i < $6b8cd4f52d43e84d$export$8837f4fc672e936d.length; i += 1){
        const slot = $6b8cd4f52d43e84d$export$8837f4fc672e936d[i];
        addEnemy(slot);
    }
};
const $6b8cd4f52d43e84d$export$722fbec263ad908a = (addEnemy)=>{
    for(let i = 0; i < $6b8cd4f52d43e84d$export$8837f4fc672e936d.length; i += 1){
        const slot = $6b8cd4f52d43e84d$export$8837f4fc672e936d[i];
        switch(slot.state){
            case "ACTIVE":
                if (!$0b372efcce0441b1$export$a8632a732abf7cb7(slot.index)) slot.state = "ABSENT";
                break;
            case "ABSENT":
                if ((0, $dd27126f9435d831$exports.Random).bool(0.02)) addEnemy(slot);
                break;
        }
    }
};




var $717bacc4c6b09b5d$var$ShakeType;
let $717bacc4c6b09b5d$var$score = 0;
var $717bacc4c6b09b5d$export$7254cc27399e90bd;
(function(State) {
    State["PLAYING"] = "PLAYING";
    State["RESULT"] = "RESULT";
})($717bacc4c6b09b5d$export$7254cc27399e90bd || ($717bacc4c6b09b5d$export$7254cc27399e90bd = {}));
let $717bacc4c6b09b5d$export$ca000e230c0caa3e = "PLAYING";
const $717bacc4c6b09b5d$var$timerSet = (0, $dd27126f9435d831$exports.Timer).Set.create(64);
const $717bacc4c6b09b5d$var$fireParticles = (x, y, count, maxPositionOffset, maxSpeed)=>{
    for(let i = 0; i < count; i += 1)$0b372efcce0441b1$export$4f7edc95e736bc50(x + (0, $dd27126f9435d831$exports.Random).between(-maxPositionOffset, maxPositionOffset), y + (0, $dd27126f9435d831$exports.Random).between(-maxPositionOffset, maxPositionOffset), (0, $dd27126f9435d831$exports.Random).between(5, maxSpeed), (0, $dd27126f9435d831$exports.Random).angle(), $7df79922a748b1b8$export$ec81a0a9fb866aea());
};
const $717bacc4c6b09b5d$var$addAppearanceParticle = (x, y, bearing)=>{
    const index = $0b372efcce0441b1$export$6f51c6174433c0be(0, 0, $7df79922a748b1b8$export$ec81a0a9fb866aea());
    if (index == null) return;
    $0b372efcce0441b1$export$c15a40b3139f3ae7(index, (data, i)=>{
        const frameCount = data.frameCount[i];
        const progressRatio = frameCount / 60;
        data.rotationAngle[i] -= 0.3;
        data.scaleFactor[i] = 5 * (0, $dd27126f9435d831$exports.Easing).easeInQuad(progressRatio);
        const currentDistance = (1 - progressRatio) * 100;
        const currentBearing = bearing + frameCount * 0.1;
        data.x[i] = x + currentDistance * Math.cos(currentBearing);
        data.y[i] = y + currentDistance * Math.sin(currentBearing);
        if (frameCount > 60) $0b372efcce0441b1$export$100429cbbacc0af1(i);
    });
};
const $717bacc4c6b09b5d$var$addAppearanceEffect = (x, y)=>{
    for(let i = 0; i < 8; i += 1)$717bacc4c6b09b5d$var$addAppearanceParticle(x, y, i / 8 * (0, $dd27126f9435d831$exports.Math).TWO_PI);
};
const $717bacc4c6b09b5d$var$addEnemy = (slot)=>{
    const { x: x, y: y } = slot;
    $717bacc4c6b09b5d$var$addAppearanceEffect(x, y);
    (0, $dd27126f9435d831$exports.Timer).Set.addTimer($717bacc4c6b09b5d$var$timerSet, (0, $dd27126f9435d831$exports.Timer).create(60, undefined, ()=>{
        const index = $0b372efcce0441b1$export$942bce15f660128c(x, y, $7df79922a748b1b8$export$797a470f5288f525());
        if (index === null) return;
        slot.index = index;
        slot.state = $6b8cd4f52d43e84d$export$7254cc27399e90bd.ACTIVE;
        $717bacc4c6b09b5d$var$fireParticles(x, y, 32, 30, 30);
        $b7581b6060df425a$export$3a6a822f243dd388();
    }));
    slot.state = $6b8cd4f52d43e84d$export$7254cc27399e90bd.APPROACHING;
    $b7581b6060df425a$export$12fe957efa720b3();
};
const $717bacc4c6b09b5d$export$aad8462122ac592b = (playable = true)=>{
    $717bacc4c6b09b5d$var$score = 0;
    $717bacc4c6b09b5d$export$ca000e230c0caa3e = "PLAYING";
    (0, $dd27126f9435d831$exports.Timer).Set.clear($717bacc4c6b09b5d$var$timerSet);
    $0b372efcce0441b1$export$aad8462122ac592b();
    $0b372efcce0441b1$export$11ae10a4ef8c3aa4($7df79922a748b1b8$export$615455393ee443ca);
    if (!playable) $0b372efcce0441b1$export$a62b7fa33642815b();
    $6b8cd4f52d43e84d$export$aad8462122ac592b($717bacc4c6b09b5d$var$addEnemy);
};
const $717bacc4c6b09b5d$var$onHitEnemy = (playerBullet, playerBulletIndex, enemy, enemyIndex)=>{
    const x = playerBullet.soa.data.x[playerBulletIndex];
    const y = playerBullet.soa.data.y[playerBulletIndex];
    $af68f5fe2253efa6$exports.kill(playerBullet, playerBulletIndex);
    if ((0, $dd27126f9435d831$exports.Random).bool(0.2)) $717bacc4c6b09b5d$var$fireParticles(x, y, 1, 5, 15);
    const enemyLife = enemy.soa.data.life[enemyIndex] -= 1;
    enemy.soa.data.damagedRemainingCount[enemyIndex] = 2;
    $717bacc4c6b09b5d$var$score += 10;
    if (enemyLife <= 0) {
        $0b372efcce0441b1$export$8a2d3cbe71e8e119(enemyIndex);
        $717bacc4c6b09b5d$var$fireParticles(x, y, 64, 50, 35);
        $717bacc4c6b09b5d$var$score += 8000;
        (0, $86fa0225824825e4$exports.setShake)(0.05, 0.8, "VERTICAL");
        $b7581b6060df425a$export$3ca364567c609e46();
    }
};
const $717bacc4c6b09b5d$var$onHitPlayer = (enemyBullet, enemyBulletIndex, player, playerIndex)=>{
    const x = enemyBullet.soa.data.x[enemyBulletIndex];
    const y = enemyBullet.soa.data.y[enemyBulletIndex];
    $af68f5fe2253efa6$exports.kill(enemyBullet, enemyBulletIndex);
    const playerLife = player.soa.data.life[playerIndex] -= 1;
    player.soa.data.damagedRemainingCount[playerIndex] = 180;
    if (playerLife > 0) {
        $717bacc4c6b09b5d$var$fireParticles(x, y, 64, 30, 30);
        (0, $86fa0225824825e4$exports.setShake)(0.1, 0.9, "HORIZONTAL", true);
    } else {
        $0b372efcce0441b1$export$a62b7fa33642815b();
        $717bacc4c6b09b5d$var$fireParticles(x, y, 128, 50, 30);
        (0, $86fa0225824825e4$exports.setShake)(0.2, 0.95, "HORIZONTAL", true);
        $717bacc4c6b09b5d$export$ca000e230c0caa3e = "RESULT";
    }
    $b7581b6060df425a$export$8c1bc81195937a74();
    $0b372efcce0441b1$export$823d2c70d11b2f09((x, y)=>$0b372efcce0441b1$export$4f7edc95e736bc50(x, y, 0, 0, $7df79922a748b1b8$export$ec81a0a9fb866aea()));
};
const $717bacc4c6b09b5d$var$drawLife = ()=>{
    const extraLifeCount = Math.max(0, $0b372efcce0441b1$export$22d967c21f4978ff() - 1);
    let x = 30;
    const y = 30;
    for(let i = 0; i < extraLifeCount; i += 1){
        (0, $86fa0225824825e4$exports.drawTransformed)($7df79922a748b1b8$export$9bebbe3edaf607d5, x, y, -(0, $dd27126f9435d831$exports.Math).HALF_PI, 0.5);
        x += 60;
    }
};
const $717bacc4c6b09b5d$var$drawScore = ()=>{
    (0, $86fa0225824825e4$exports.p).textSize(24);
    (0, $86fa0225824825e4$exports.p).textAlign((0, $86fa0225824825e4$exports.p).RIGHT);
    (0, $86fa0225824825e4$exports.p).text(`SCORE: ${(0, $86fa0225824825e4$exports.p).nfc($717bacc4c6b09b5d$var$score, 0)}`, (0, $86fa0225824825e4$exports.canvas).logicalSize.width - 20, 40);
};
const $717bacc4c6b09b5d$var$drawResult = ()=>{
    (0, $86fa0225824825e4$exports.p).textAlign((0, $86fa0225824825e4$exports.p).CENTER);
    (0, $86fa0225824825e4$exports.p).textSize(64);
    (0, $86fa0225824825e4$exports.p).text("RESULT", (0, $86fa0225824825e4$exports.canvas).logicalCenterPosition.x, (0, $86fa0225824825e4$exports.canvas).logicalCenterPosition.y);
    (0, $86fa0225824825e4$exports.p).textSize(96);
    (0, $86fa0225824825e4$exports.p).text((0, $86fa0225824825e4$exports.p).nfc($717bacc4c6b09b5d$var$score, 0), (0, $86fa0225824825e4$exports.canvas).logicalCenterPosition.x, (0, $86fa0225824825e4$exports.canvas).logicalCenterPosition.y + 128);
};
const $717bacc4c6b09b5d$export$889ea624f2cb2c57 = ()=>{
    (0, $86fa0225824825e4$exports.applyShake)();
    $0b372efcce0441b1$export$3a64bf52feaec98c();
    $0b372efcce0441b1$export$eea5a0dff8a7c4f9($717bacc4c6b09b5d$var$onHitEnemy);
    $0b372efcce0441b1$export$c89eaa0a169c02e4($717bacc4c6b09b5d$var$onHitPlayer);
    (0, $dd27126f9435d831$exports.Timer).Set.step($717bacc4c6b09b5d$var$timerSet);
    $6b8cd4f52d43e84d$export$722fbec263ad908a($717bacc4c6b09b5d$var$addEnemy);
    switch($717bacc4c6b09b5d$export$ca000e230c0caa3e){
        case "PLAYING":
            $717bacc4c6b09b5d$var$drawScore();
            $717bacc4c6b09b5d$var$drawLife();
            break;
        case "RESULT":
            $717bacc4c6b09b5d$var$drawResult();
            break;
    }
};


// ---- variables | functions ----
let $0ca56e2dd2c61860$var$drawBackground;
let $0ca56e2dd2c61860$var$volumeSlider;
let $0ca56e2dd2c61860$var$gameIsStarted = false;
// ---- reset & initialize ----
const $0ca56e2dd2c61860$var$prelaod = ()=>{
    $3f4530b3753d8437$export$11e63f7b0f3d9900((0, $86fa0225824825e4$exports.p), {
        jp: "NotoSerifJP-Medium-subset.otf",
        en: "NotoSerifJP-Bold-subset.otf"
    });
    $b7581b6060df425a$export$11e63f7b0f3d9900((0, $86fa0225824825e4$exports.p), {
        music: "WELCOMEB4CK.ogg",
        gunSound: "submachinegun1_edit.wav",
        bombSound: "bomb2_edit.wav",
        preAppearanceSound: "enemy-advent1.wav",
        appearanceSound: "punch-high2.wav",
        damageSound: "cannon1_edit.wav"
    });
};
const $0ca56e2dd2c61860$var$reset = ()=>{
    $717bacc4c6b09b5d$export$aad8462122ac592b($0ca56e2dd2c61860$var$gameIsStarted);
};
const $0ca56e2dd2c61860$var$updateVolume = ()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $b7581b6060df425a$export$246e658b67178cb0($0ca56e2dd2c61860$var$volumeSlider.value() * 0.01);
};
const $0ca56e2dd2c61860$var$initializeVolumeSlider = ()=>{
    $0ca56e2dd2c61860$var$volumeSlider = (0, $86fa0225824825e4$exports.p).createSlider(0, 100, 15, 5);
    $0ca56e2dd2c61860$var$volumeSlider.position((0, $86fa0225824825e4$exports.canvas).scaleFactor * 50, (0, $86fa0225824825e4$exports.canvas).scaleFactor * ((0, $86fa0225824825e4$exports.canvas).logicalSize.height - 40));
    $0ca56e2dd2c61860$var$volumeSlider.style("width", `${(0, $86fa0225824825e4$exports.canvas).scaleFactor * 200}px`);
    $0ca56e2dd2c61860$var$volumeSlider.style("height", `${(0, $86fa0225824825e4$exports.canvas).scaleFactor * 25}px`);
    $0ca56e2dd2c61860$var$updateVolume();
};
const $0ca56e2dd2c61860$var$initialize = ()=>{
    const backgroundPixels = (0, $86fa0225824825e4$exports.createPixels)(()=>{
        (0, $86fa0225824825e4$exports.canvas).drawScaled(()=>{
            const { width: width, height: height } = (0, $1a0e32da377773d1$export$224ac526c9f67070);
            (0, $86fa0225824825e4$exports.p).background(248);
            (0, $86fa0225824825e4$exports.p).stroke(128, 112, 96, 4);
            (0, $86fa0225824825e4$exports.p).strokeCap((0, $86fa0225824825e4$exports.p).SQUARE);
            (0, $86fa0225824825e4$exports.p).strokeWeight(20);
            for(let i = 0; i < 2000; i += 1){
                const x = (0, $86fa0225824825e4$exports.p).random(0, width);
                const y = (0, $86fa0225824825e4$exports.p).random(-50, height - 50);
                (0, $86fa0225824825e4$exports.p).line(x, y, x, y + (0, $86fa0225824825e4$exports.p).random(50, 200));
            }
        });
    });
    $0ca56e2dd2c61860$var$drawBackground = ()=>(0, $86fa0225824825e4$exports.replaceCanvasPixels)(backgroundPixels);
    (0, $86fa0225824825e4$exports.p).imageMode((0, $86fa0225824825e4$exports.p).CENTER);
    (0, $86fa0225824825e4$exports.p).textFont($3f4530b3753d8437$export$84584c2a98eb6753);
    $0ca56e2dd2c61860$var$initializeVolumeSlider();
    $0ca56e2dd2c61860$var$reset();
};
// ---- draw ----
const $0ca56e2dd2c61860$var$drawInstruction = ()=>{
    (0, $86fa0225824825e4$exports.p).push();
    (0, $86fa0225824825e4$exports.p).textFont($3f4530b3753d8437$export$84584c2a98eb6753, 24);
    (0, $86fa0225824825e4$exports.p).textAlign((0, $86fa0225824825e4$exports.p).LEFT);
    (0, $86fa0225824825e4$exports.p).text("ARROW / WASD :", 160, 500);
    (0, $86fa0225824825e4$exports.p).text("MOVE", 460, 500);
    (0, $86fa0225824825e4$exports.p).text("Z / J / SPACE / ENTER :", 160, 540);
    (0, $86fa0225824825e4$exports.p).text("SHOOT", 460, 540);
    (0, $86fa0225824825e4$exports.p).text("PRESS SPACE KEY TO START", 160, 600);
    (0, $86fa0225824825e4$exports.p).pop();
};
const $0ca56e2dd2c61860$var$drawSketch = ()=>{
    $717bacc4c6b09b5d$export$889ea624f2cb2c57();
    if (!$0ca56e2dd2c61860$var$gameIsStarted) $0ca56e2dd2c61860$var$drawInstruction();
    (0, $86fa0225824825e4$exports.p).textFont($3f4530b3753d8437$export$84584c2a98eb6753, 16);
    (0, $86fa0225824825e4$exports.p).textAlign((0, $86fa0225824825e4$exports.p).LEFT);
    (0, $86fa0225824825e4$exports.p).text("VOL", 10, (0, $86fa0225824825e4$exports.canvas).logicalSize.height - 23);
};
const $0ca56e2dd2c61860$var$draw = ()=>{
    $0ca56e2dd2c61860$var$drawBackground();
    (0, $86fa0225824825e4$exports.canvas).drawScaled($0ca56e2dd2c61860$var$drawSketch);
    $0ca56e2dd2c61860$var$updateVolume();
};
// ---- UI ----
const $0ca56e2dd2c61860$var$keyTyped = ()=>{
    switch((0, $86fa0225824825e4$exports.p).key){
        // case "p":
        //   pauseOrResume();
        //   break;
        case "g":
            (0, $86fa0225824825e4$exports.p).save("image.png");
            break;
    }
    if (!$0ca56e2dd2c61860$var$gameIsStarted && (0, $86fa0225824825e4$exports.p).keyCode === 32) {
        $717bacc4c6b09b5d$export$aad8462122ac592b(true);
        $0ca56e2dd2c61860$var$gameIsStarted = true;
    }
    if ($717bacc4c6b09b5d$export$ca000e230c0caa3e === $717bacc4c6b09b5d$export$7254cc27399e90bd.RESULT) $717bacc4c6b09b5d$export$aad8462122ac592b(true);
};
// ---- start sketch ----
const $0ca56e2dd2c61860$var$setP5Methods = (p)=>{
    p.preload = $0ca56e2dd2c61860$var$prelaod;
    p.draw = $0ca56e2dd2c61860$var$draw;
    p.mouseMoved = ()=>{
        (0, $86fa0225824825e4$exports.Mouse).updatePosition();
        (0, $86fa0225824825e4$exports.Mouse).onMoved();
    };
    p.mousePressed = (0, $86fa0225824825e4$exports.Mouse).onPressed;
    p.keyTyped = $0ca56e2dd2c61860$var$keyTyped;
    p.keyPressed = ()=>{
        (0, $86fa0225824825e4$exports.MoveKeys).onPressed();
        if ((0, $86fa0225824825e4$exports.MoveKeys).up || (0, $86fa0225824825e4$exports.MoveKeys).left || (0, $86fa0225824825e4$exports.MoveKeys).down || (0, $86fa0225824825e4$exports.MoveKeys).right) return false;
    };
    p.keyReleased = ()=>{
        (0, $86fa0225824825e4$exports.MoveKeys).onReleased();
    };
};
(0, $86fa0225824825e4$exports.startSketch)({
    htmlElement: (0, $1a0e32da377773d1$export$f84da9ebf46464d1),
    logicalCanvasSize: (0, $1a0e32da377773d1$export$224ac526c9f67070),
    initialize: $0ca56e2dd2c61860$var$initialize,
    setP5Methods: $0ca56e2dd2c61860$var$setP5Methods,
    fittingOption: (0, $1a0e32da377773d1$export$35f95f7e7baec047) ? undefined : null
});


//# sourceMappingURL=index.b7d62efe.js.map
