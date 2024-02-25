(function () {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $58e3d9da52961b1d$exports = {};
$58e3d9da52961b1d$exports = p5ex;


var $c32446a6160af894$exports = {};
$c32446a6160af894$exports = CreativeCodingCore;


const $6f098652ce98b7dd$export$8daf0a5483c69bae = "FarEast";
const $6f098652ce98b7dd$export$f84da9ebf46464d1 = (0, $c32446a6160af894$exports.HtmlUtility).getElementOrBody($6f098652ce98b7dd$export$8daf0a5483c69bae);
const $6f098652ce98b7dd$export$224ac526c9f67070 = {
    width: 800,
    height: 800
};
const $6f098652ce98b7dd$export$7981ec9c38cd4336 = true;
const $6f098652ce98b7dd$export$35f95f7e7baec047 = true;
const $6f098652ce98b7dd$export$7f22e5407c8d00b7 = "../assets/far-east";



let $bf937b7598948cb4$export$842059ba0e43130d;
let $bf937b7598948cb4$export$84584c2a98eb6753;
const $bf937b7598948cb4$var$setJp = (font)=>$bf937b7598948cb4$export$842059ba0e43130d = font;
const $bf937b7598948cb4$var$setEn = (font)=>$bf937b7598948cb4$export$84584c2a98eb6753 = font;
const $bf937b7598948cb4$export$11e63f7b0f3d9900 = (p, files)=>{
    p.loadFont(`${(0, $6f098652ce98b7dd$export$7f22e5407c8d00b7)}/${files.jp}`, $bf937b7598948cb4$var$setJp);
    p.loadFont(`${(0, $6f098652ce98b7dd$export$7f22e5407c8d00b7)}/${files.en}`, $bf937b7598948cb4$var$setEn);
};


var $b58180e457bfdc70$exports = {};
$b58180e457bfdc70$exports = p5;



let $e402834bc38a3248$var$volume = 0;
let $e402834bc38a3248$var$music;
let $e402834bc38a3248$var$gunSound;
let $e402834bc38a3248$var$bombSound;
let $e402834bc38a3248$var$preAppearanceSound;
let $e402834bc38a3248$var$appearanceSound;
let $e402834bc38a3248$var$damageSound;
const $e402834bc38a3248$var$createLoadFile = (p)=>{
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ const p5Sound = p;
    return (file)=>p5Sound.loadSound(`${(0, $6f098652ce98b7dd$export$7f22e5407c8d00b7)}/${file}`);
};
const $e402834bc38a3248$export$11e63f7b0f3d9900 = (p, files)=>{
    const loadFile = $e402834bc38a3248$var$createLoadFile(p);
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ const pAny = p;
    if (0, $6f098652ce98b7dd$export$7981ec9c38cd4336) {
        pAny.soundFormats("ogg", "mp3");
        $e402834bc38a3248$var$music = loadFile(files.music);
        $e402834bc38a3248$var$music.setLoop(true);
    }
    pAny.soundFormats("wav");
    $e402834bc38a3248$var$gunSound = loadFile(files.gunSound);
    $e402834bc38a3248$var$gunSound.setLoop(true);
    $e402834bc38a3248$var$bombSound = loadFile(files.bombSound);
    $e402834bc38a3248$var$preAppearanceSound = loadFile(files.preAppearanceSound);
    $e402834bc38a3248$var$appearanceSound = loadFile(files.appearanceSound);
    $e402834bc38a3248$var$damageSound = loadFile(files.damageSound);
    const tmpDiv = p.createDiv();
    tmpDiv.position(0, 0);
    pAny.userStartAudio().then(()=>tmpDiv.remove());
};
const $e402834bc38a3248$var$playMusic = ()=>{
    if (0, $6f098652ce98b7dd$export$7981ec9c38cd4336) $e402834bc38a3248$var$music.play();
};
const $e402834bc38a3248$var$stopMusic = ()=>{
    if (0, $6f098652ce98b7dd$export$7981ec9c38cd4336) $e402834bc38a3248$var$music.stop();
};
const $e402834bc38a3248$export$246e658b67178cb0 = (vol)=>{
    if (0, $6f098652ce98b7dd$export$7981ec9c38cd4336) $e402834bc38a3248$var$music.setVolume(vol);
    $e402834bc38a3248$var$gunSound.setVolume(0.25 * vol);
    $e402834bc38a3248$var$bombSound.setVolume(0.65 * vol);
    $e402834bc38a3248$var$preAppearanceSound.setVolume(0.3 * vol);
    $e402834bc38a3248$var$appearanceSound.setVolume(0.5 * vol);
    $e402834bc38a3248$var$damageSound.setVolume(1.0 * vol);
    if ($e402834bc38a3248$var$volume === 0 && vol > 0) $e402834bc38a3248$var$playMusic();
    else if ($e402834bc38a3248$var$volume > 0 && vol === 0) $e402834bc38a3248$var$stopMusic();
    $e402834bc38a3248$var$volume = vol;
};
const $e402834bc38a3248$export$261db870e77e0eb4 = ()=>{
    if (!$e402834bc38a3248$var$gunSound.isPlaying()) $e402834bc38a3248$var$gunSound.play();
};
const $e402834bc38a3248$export$6c92483f4a4c292e = ()=>{
    if ($e402834bc38a3248$var$gunSound.isPlaying()) $e402834bc38a3248$var$gunSound.stop();
};
const $e402834bc38a3248$var$playRestart = (sound)=>{
    if (sound.isPlaying()) sound.stop();
    sound.play();
};
const $e402834bc38a3248$export$3ca364567c609e46 = ()=>$e402834bc38a3248$var$playRestart($e402834bc38a3248$var$bombSound);
const $e402834bc38a3248$export$12fe957efa720b3 = ()=>$e402834bc38a3248$var$playRestart($e402834bc38a3248$var$preAppearanceSound);
const $e402834bc38a3248$export$3a6a822f243dd388 = ()=>$e402834bc38a3248$var$playRestart($e402834bc38a3248$var$appearanceSound);
const $e402834bc38a3248$export$8c1bc81195937a74 = ()=>$e402834bc38a3248$var$playRestart($e402834bc38a3248$var$damageSound);











var $e50a3dd5102f7094$exports = {};

$parcel$export($e50a3dd5102f7094$exports, "create", function () { return $e50a3dd5102f7094$export$185802fd694ee1f5; });
$parcel$export($e50a3dd5102f7094$exports, "use", function () { return $e50a3dd5102f7094$export$1f96ae73734a86cc; });
$parcel$export($e50a3dd5102f7094$exports, "kill", function () { return $e50a3dd5102f7094$export$dfdb508572caf3d7; });
$parcel$export($e50a3dd5102f7094$exports, "runAndDraw", function () { return $e50a3dd5102f7094$export$3a64bf52feaec98c; });
$parcel$export($e50a3dd5102f7094$exports, "reset", function () { return $e50a3dd5102f7094$export$aad8462122ac592b; });
$parcel$export($e50a3dd5102f7094$exports, "breakActors", function () { return $e50a3dd5102f7094$export$9b6ff1e3e84c4aea; });
$parcel$export($e50a3dd5102f7094$exports, "checkCollision", function () { return $e50a3dd5102f7094$export$65cbfae5bde8bfd2; });


const $e50a3dd5102f7094$export$185802fd694ee1f5 = (capacity)=>{
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
        soa: (0, $c32446a6160af894$exports.StructureOfArrays).from(prototypeStructure, capacity),
        startIndex: Infinity,
        endIndex: 0
    };
};
const $e50a3dd5102f7094$export$1f96ae73734a86cc = (group, x, y, vx, vy, angle, type)=>{
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
const $e50a3dd5102f7094$var$findFirstActive = (active, startIndex, endIndex)=>{
    for(let i = startIndex; i < endIndex; i += 1){
        if (active[i]) return i;
    }
    return Infinity;
};
const $e50a3dd5102f7094$var$findLastActive = (active, startIndex, endIndex)=>{
    for(let i = endIndex - 1; i >= startIndex; i -= 1){
        if (active[i]) return i;
    }
    return -1;
};
const $e50a3dd5102f7094$export$dfdb508572caf3d7 = (group, index)=>{
    const { soa: soa, startIndex: startIndex, endIndex: endIndex } = group;
    const { active: active } = soa.data;
    if (!active[index]) return false;
    active[index] = false;
    if (index === startIndex) group.startIndex = $e50a3dd5102f7094$var$findFirstActive(active, startIndex + 1, endIndex);
    if (index === endIndex) group.endIndex = $e50a3dd5102f7094$var$findLastActive(active, group.startIndex, endIndex - 1) + 1;
    return true;
};
const $e50a3dd5102f7094$export$3a64bf52feaec98c = (group)=>{
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
        if (!(0, $c32446a6160af894$exports.RectangleRegion).containsPoint((0, $58e3d9da52961b1d$exports.canvas).logicalRegion, tmpPosition, -100)) {
            $e50a3dd5102f7094$export$dfdb508572caf3d7(group, i);
            continue;
        }
        const thisScaleFactor = scaleFactor[i];
        const drawDamaged = drawGraphicsAlternative[i];
        const damaged = damagedRemainingCount[i] > 0;
        if (thisScaleFactor > 0) (0, $58e3d9da52961b1d$exports.drawTransformed)(damaged && drawDamaged && frameCount[i] % 4 < 2 ? drawDamaged : drawGraphics[i], x[i], y[i], rotationAngle[i], thisScaleFactor);
        if (damaged) damagedRemainingCount[i] -= 1;
        frameCount[i] += 1;
    }
};
const $e50a3dd5102f7094$export$aad8462122ac592b = (group)=>{
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
const $e50a3dd5102f7094$export$9b6ff1e3e84c4aea = (group, fireParticle)=>{
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
const $e50a3dd5102f7094$export$65cbfae5bde8bfd2 = (group, otherGroup, onCollide)=>{
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






let $e924c154f00e890f$var$frameCount = 0;
const $e924c154f00e890f$var$playerGroup = $e50a3dd5102f7094$exports.create(1);
let $e924c154f00e890f$export$ba4e342ea91ac6ec = false;
const $e924c154f00e890f$export$11ae10a4ef8c3aa4 = (type)=>{
    $e50a3dd5102f7094$exports.use($e924c154f00e890f$var$playerGroup, 0.5 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).width, (0, $6f098652ce98b7dd$export$224ac526c9f67070).height - 100, 0, 0, -(0, $c32446a6160af894$exports.Math).HALF_PI, type);
    $e924c154f00e890f$export$ba4e342ea91ac6ec = true;
};
const $e924c154f00e890f$export$a62b7fa33642815b = ()=>{
    $e50a3dd5102f7094$exports.kill($e924c154f00e890f$var$playerGroup, 0);
    $e924c154f00e890f$export$ba4e342ea91ac6ec = false;
    $e402834bc38a3248$export$6c92483f4a4c292e();
};
const $e924c154f00e890f$export$22d967c21f4978ff = ()=>$e924c154f00e890f$export$ba4e342ea91ac6ec ? $e924c154f00e890f$var$playerGroup.soa.data.life[0] : 0;
const $e924c154f00e890f$var$playerX = $e924c154f00e890f$var$playerGroup.soa.data.x;
const $e924c154f00e890f$var$playerY = $e924c154f00e890f$var$playerGroup.soa.data.y;
const $e924c154f00e890f$export$7848f0bf324f14a2 = (x, y)=>{
    const xDifference = $e924c154f00e890f$var$playerX[0] - x;
    const yDifference = $e924c154f00e890f$var$playerY[0] - y;
    if (xDifference === 0 && yDifference === 0) return 0;
    return Math.atan2(yDifference, xDifference);
};
const $e924c154f00e890f$var$playerBulletGroup = $e50a3dd5102f7094$exports.create(128);
const $e924c154f00e890f$var$fire = (group)=>(x, y, speed, directionAngle, type)=>$e50a3dd5102f7094$exports.use(group, x, y, speed * Math.cos(directionAngle), speed * Math.sin(directionAngle), directionAngle, type);
const $e924c154f00e890f$export$ce026964000ee940 = $e924c154f00e890f$var$fire($e924c154f00e890f$var$playerBulletGroup);
const $e924c154f00e890f$var$enemyGroup = $e50a3dd5102f7094$exports.create(32);
let $e924c154f00e890f$export$afa6aa69c9a732dd = 0;
const $e924c154f00e890f$export$942bce15f660128c = (x, y, type)=>{
    const index = $e50a3dd5102f7094$exports.use($e924c154f00e890f$var$enemyGroup, x, y, 0, 0, (0, $c32446a6160af894$exports.Math).HALF_PI, type);
    if (index != null) $e924c154f00e890f$export$afa6aa69c9a732dd += 1;
    return index;
};
const $e924c154f00e890f$export$8a2d3cbe71e8e119 = (index)=>{
    $e50a3dd5102f7094$exports.kill($e924c154f00e890f$var$enemyGroup, index);
    $e924c154f00e890f$export$afa6aa69c9a732dd -= 1;
};
const $e924c154f00e890f$export$a8632a732abf7cb7 = (index)=>$e924c154f00e890f$var$enemyGroup.soa.data.active[index];
const $e924c154f00e890f$var$enemyBulletGroup = $e50a3dd5102f7094$exports.create(1024);
const $e924c154f00e890f$export$4fe124ca8cee4bc9 = $e924c154f00e890f$var$fire($e924c154f00e890f$var$enemyBulletGroup);
const $e924c154f00e890f$var$particleGroup = $e50a3dd5102f7094$exports.create(256);
const $e924c154f00e890f$export$6f51c6174433c0be = (x, y, type)=>$e50a3dd5102f7094$exports.use($e924c154f00e890f$var$particleGroup, x, y, 0, 0, 0, type);
const $e924c154f00e890f$export$4f7edc95e736bc50 = $e924c154f00e890f$var$fire($e924c154f00e890f$var$particleGroup);
const $e924c154f00e890f$export$100429cbbacc0af1 = (index)=>$e50a3dd5102f7094$exports.kill($e924c154f00e890f$var$particleGroup, index);
const $e924c154f00e890f$export$c15a40b3139f3ae7 = (index, run)=>{
    $e924c154f00e890f$var$particleGroup.soa.data.run[index] = run;
};
const $e924c154f00e890f$var$actorGroups = [
    $e924c154f00e890f$var$particleGroup,
    $e924c154f00e890f$var$playerGroup,
    $e924c154f00e890f$var$enemyGroup,
    $e924c154f00e890f$var$playerBulletGroup,
    $e924c154f00e890f$var$enemyBulletGroup
];
const $e924c154f00e890f$export$3a64bf52feaec98c = ()=>{
    (0, $c32446a6160af894$exports.ArrayUtility).loop($e924c154f00e890f$var$actorGroups, $e50a3dd5102f7094$exports.runAndDraw);
    $e924c154f00e890f$var$frameCount += 1;
};
const $e924c154f00e890f$export$aad8462122ac592b = ()=>{
    $e924c154f00e890f$var$frameCount = 0;
    (0, $c32446a6160af894$exports.ArrayUtility).loop($e924c154f00e890f$var$actorGroups, $e50a3dd5102f7094$exports.reset);
};
const $e924c154f00e890f$export$eea5a0dff8a7c4f9 = (onHitEnemy)=>$e50a3dd5102f7094$exports.checkCollision($e924c154f00e890f$var$playerBulletGroup, $e924c154f00e890f$var$enemyGroup, onHitEnemy);
const $e924c154f00e890f$export$c89eaa0a169c02e4 = (onHitPlayer)=>{
    if ($e924c154f00e890f$var$frameCount % 2 === 0) return;
    if ($e924c154f00e890f$var$playerGroup.soa.data.damagedRemainingCount[0] > 0) return;
    $e50a3dd5102f7094$exports.checkCollision($e924c154f00e890f$var$enemyBulletGroup, $e924c154f00e890f$var$playerGroup, onHitPlayer);
};
const $e924c154f00e890f$export$823d2c70d11b2f09 = (fireParticle)=>$e50a3dd5102f7094$exports.breakActors($e924c154f00e890f$var$enemyBulletGroup, fireParticle);







let $8b45237272ebbf97$export$615455393ee443ca;
let $8b45237272ebbf97$export$9bebbe3edaf607d5;
let $8b45237272ebbf97$var$enemies;
const $8b45237272ebbf97$export$797a470f5288f525 = ()=>(0, $c32446a6160af894$exports.Random).fromArray($8b45237272ebbf97$var$enemies);
let $8b45237272ebbf97$export$72e3ce9a9469f5f6;
let $8b45237272ebbf97$export$cf1f36c47da3ba85;
let $8b45237272ebbf97$var$particles;
const $8b45237272ebbf97$export$ec81a0a9fb866aea = ()=>(0, $c32446a6160af894$exports.Random).fromArray($8b45237272ebbf97$var$particles);
const $8b45237272ebbf97$var$bulletParameter = {
    char: "\u591A",
    dir: 3,
    flip: false
};
const $8b45237272ebbf97$var$playerParameter = {
    char: "\u53C2",
    dir: 0,
    flip: false
};
const $8b45237272ebbf97$var$enemyParameters = [
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
const $8b45237272ebbf97$var$createCharacterGraphics = (param, size, color)=>{
    const halfSize = 0.5 * size;
    const graphics = (0, $58e3d9da52961b1d$exports.p).createGraphics(size, size);
    const g = graphics; // eslint-disable-line @typescript-eslint/no-explicit-any
    g.push();
    g.translate(halfSize, halfSize);
    g.rotate(param.dir * (0, $c32446a6160af894$exports.Math).HALF_PI);
    if (param.flip) g.scale(-1, 1);
    g.fill(color);
    g.textFont($bf937b7598948cb4$export$842059ba0e43130d, 0.8 * size);
    g.textAlign((0, $58e3d9da52961b1d$exports.p).CENTER, (0, $58e3d9da52961b1d$exports.p).CENTER);
    g.text(param.char, 0, -0.2 * size);
    g.pop();
    return graphics;
};
const $8b45237272ebbf97$var$mirrorGraphics = (graphics)=>{
    /* eslint-disable @typescript-eslint/no-explicit-any */ const img = (0, $58e3d9da52961b1d$exports.graphicsToImage)(graphics);
    const { width: width, height: height } = img;
    const mask = (0, $58e3d9da52961b1d$exports.p).createGraphics(width, height);
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
const $8b45237272ebbf97$var$createActorGraphics = (param, size, color)=>{
    const graphics = $8b45237272ebbf97$var$createCharacterGraphics(param, size, color);
    $8b45237272ebbf97$var$mirrorGraphics(graphics);
    return ()=>{
        (0, $58e3d9da52961b1d$exports.p).image(graphics, 0, 0);
    };
};
(0, $58e3d9da52961b1d$exports.onSetup).push((p)=>{
    const emptyFunction = ()=>{};
    const firePlayerBullet = (x, y)=>$e924c154f00e890f$export$ce026964000ee940(x, y, 70, -(0, $c32446a6160af894$exports.Math).HALF_PI, $8b45237272ebbf97$export$72e3ce9a9469f5f6);
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
        const { width: width, height: height } = (0, $58e3d9da52961b1d$exports.canvas).logicalSize;
        if (x < margin) data.x[i] = margin;
        else if (x >= width - margin) data.x[i] = width - margin - 1;
        if (y < margin) data.y[i] = margin;
        else if (y >= height - margin) data.y[i] = height - margin - 1;
    };
    $8b45237272ebbf97$export$9bebbe3edaf607d5 = $8b45237272ebbf97$var$createActorGraphics($8b45237272ebbf97$var$playerParameter, 100, p.color(0, 64, 0));
    $8b45237272ebbf97$export$615455393ee443ca = {
        run: (data, i)=>{
            keepInScreen(data, i);
            const { vx: vx, vy: vy } = data;
            const moveDirection = (0, $58e3d9da52961b1d$exports.MoveKeys).unitVector;
            vx[i] = 10 * moveDirection.x;
            vy[i] = 10 * moveDirection.y;
            if (!(0, $58e3d9da52961b1d$exports.KeyBoard).anyKeyIsDown(shotKeyCodes)) {
                $e402834bc38a3248$export$6c92483f4a4c292e();
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
            $e402834bc38a3248$export$261db870e77e0eb4();
        },
        draw: $8b45237272ebbf97$export$9bebbe3edaf607d5,
        drawDamaged: ()=>{},
        collisionDistance: 20,
        maxLife: 3
    };
    $8b45237272ebbf97$export$72e3ce9a9469f5f6 = {
        run: emptyFunction,
        draw: $8b45237272ebbf97$var$createActorGraphics($8b45237272ebbf97$var$bulletParameter, 40, p.color(128, 144, 128)),
        collisionDistance: 15,
        maxLife: 1
    };
    const runEnemyCandidates = [
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const directionToPlayer = $e924c154f00e890f$export$7848f0bf324f14a2(x, y);
            data.rotationAngle[i] = directionToPlayer;
            if (data.frameCount[i] % 4 === 0 && (0, $c32446a6160af894$exports.Random).bool(0.2)) $e924c154f00e890f$export$4fe124ca8cee4bc9(x, y, 4, directionToPlayer, $8b45237272ebbf97$export$cf1f36c47da3ba85);
        },
        (data, i)=>{
            const frameCount = data.frameCount[i];
            const x = data.x[i];
            const y = data.y[i];
            if (frameCount % 120 < 30) {
                if (frameCount % 6 === 0) $e924c154f00e890f$export$4fe124ca8cee4bc9(x, y, 5, data.rotationAngle[i], $8b45237272ebbf97$export$cf1f36c47da3ba85);
            } else {
                const directionToPlayer = $e924c154f00e890f$export$7848f0bf324f14a2(x, y);
                data.rotationAngle[i] += 0.2 * (directionToPlayer - data.rotationAngle[i]);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            const directionToPlayer = $e924c154f00e890f$export$7848f0bf324f14a2(x, y);
            data.rotationAngle[i] = directionToPlayer;
            if (frameCount % 90 < 45) return;
            if (frameCount % 4 === 0) {
                const angle = 0.008 * frameCount;
                for(let i = 0; i < 4; i += 1)$e924c154f00e890f$export$4fe124ca8cee4bc9(x, y, 8, angle + i * (0, $c32446a6160af894$exports.Math).HALF_PI, $8b45237272ebbf97$export$cf1f36c47da3ba85);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            const directionToPlayer = $e924c154f00e890f$export$7848f0bf324f14a2(x, y);
            data.rotationAngle[i] = directionToPlayer;
            if (frameCount % 90 > 0) return;
            for(let i = 0; i < 24; i += 1){
                const angle = i * (0, $c32446a6160af894$exports.Math).TWO_PI / 24;
                $e924c154f00e890f$export$4fe124ca8cee4bc9(x, y, 3, angle + frameCount, $8b45237272ebbf97$export$cf1f36c47da3ba85);
            }
        },
        (data, i)=>{
            const x = data.x[i];
            const y = data.y[i];
            const frameCount = data.frameCount[i];
            if (frameCount % 180 < 90) {
                if (frameCount % 4 === 0) {
                    const bx = x + (0, $c32446a6160af894$exports.Random).between(-50, 50);
                    const by = y + (0, $c32446a6160af894$exports.Random).between(-50, 50);
                    const angle = $e924c154f00e890f$export$7848f0bf324f14a2(bx, by);
                    $e924c154f00e890f$export$4fe124ca8cee4bc9(bx, by, 4, angle, $8b45237272ebbf97$export$cf1f36c47da3ba85);
                }
            } else {
                const directionToPlayer = $e924c154f00e890f$export$7848f0bf324f14a2(x, y);
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
                    $e924c154f00e890f$export$4fe124ca8cee4bc9(x1, y, speed, rotationAngle, $8b45237272ebbf97$export$cf1f36c47da3ba85);
                    const x2 = x + 40;
                    $e924c154f00e890f$export$4fe124ca8cee4bc9(x2, y, speed, rotationAngle, $8b45237272ebbf97$export$cf1f36c47da3ba85);
                }
            } else {
                const directionToPlayer = $e924c154f00e890f$export$7848f0bf324f14a2(x, y);
                data.rotationAngle[i] += 0.1 * (directionToPlayer - rotationAngle);
            }
        }
    ];
    const enemyColor = p.color(32, 0, 0);
    const enemyDamagedColor = p.color(192, 0, 0);
    $8b45237272ebbf97$var$enemies = $8b45237272ebbf97$var$enemyParameters.map((param, index)=>{
        return {
            run: runEnemyCandidates[index % runEnemyCandidates.length],
            draw: $8b45237272ebbf97$var$createActorGraphics(param, 160, enemyColor),
            drawDamaged: $8b45237272ebbf97$var$createActorGraphics(param, 160, enemyDamagedColor),
            collisionDistance: 70,
            maxLife: 200
        };
    });
    $8b45237272ebbf97$export$cf1f36c47da3ba85 = {
        run: emptyFunction,
        draw: $8b45237272ebbf97$var$createActorGraphics($8b45237272ebbf97$var$bulletParameter, 40, p.color(0)),
        collisionDistance: 5,
        maxLife: 1
    };
    const particleColor = p.color(160, 156, 152);
    const runParticle = (data, i)=>{
        const progressRatio = data.frameCount[i] / 45;
        data.scaleFactor[i] = 1 - (0, $c32446a6160af894$exports.Easing).easeInQuad(progressRatio);
        data.vx[i] *= 0.9;
        data.vy[i] *= 0.9;
        data.vy[i] += 0.1;
        if (data.frameCount[i] > 45) $e924c154f00e890f$export$100429cbbacc0af1(i);
    };
    $8b45237272ebbf97$var$particles = $8b45237272ebbf97$var$enemyParameters.map((param)=>{
        return {
            run: runParticle,
            draw: $8b45237272ebbf97$var$createActorGraphics(param, 32, particleColor),
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





var $a0b6c23978e2e100$export$7254cc27399e90bd;
(function(State) {
    State["ACTIVE"] = "ACTIVE";
    State["APPROACHING"] = "APPROACHING";
    State["ABSENT"] = "ABSENT";
})($a0b6c23978e2e100$export$7254cc27399e90bd || ($a0b6c23978e2e100$export$7254cc27399e90bd = {}));
const $a0b6c23978e2e100$export$8837f4fc672e936d = [
    {
        x: 0.25 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).width,
        y: 0.25 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).height,
        index: -1,
        state: "ABSENT"
    },
    {
        x: 0.5 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).width,
        y: 0.15 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).height,
        index: -1,
        state: "ABSENT"
    },
    {
        x: 0.75 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).width,
        y: 0.25 * (0, $6f098652ce98b7dd$export$224ac526c9f67070).height,
        index: -1,
        state: "ABSENT"
    }
];
const $a0b6c23978e2e100$export$aad8462122ac592b = (addEnemy)=>{
    for(let i = 0; i < $a0b6c23978e2e100$export$8837f4fc672e936d.length; i += 1){
        const slot = $a0b6c23978e2e100$export$8837f4fc672e936d[i];
        addEnemy(slot);
    }
};
const $a0b6c23978e2e100$export$722fbec263ad908a = (addEnemy)=>{
    for(let i = 0; i < $a0b6c23978e2e100$export$8837f4fc672e936d.length; i += 1){
        const slot = $a0b6c23978e2e100$export$8837f4fc672e936d[i];
        switch(slot.state){
            case "ACTIVE":
                if (!$e924c154f00e890f$export$a8632a732abf7cb7(slot.index)) slot.state = "ABSENT";
                break;
            case "ABSENT":
                if ((0, $c32446a6160af894$exports.Random).bool(0.02)) addEnemy(slot);
                break;
        }
    }
};




var $e249802e4e448892$var$ShakeType;
let $e249802e4e448892$var$score = 0;
var $e249802e4e448892$export$7254cc27399e90bd;
(function(State) {
    State["PLAYING"] = "PLAYING";
    State["RESULT"] = "RESULT";
})($e249802e4e448892$export$7254cc27399e90bd || ($e249802e4e448892$export$7254cc27399e90bd = {}));
let $e249802e4e448892$export$ca000e230c0caa3e = "PLAYING";
const $e249802e4e448892$var$timerSet = (0, $c32446a6160af894$exports.Timer).Set.create(64);
const $e249802e4e448892$var$fireParticles = (x, y, count, maxPositionOffset, maxSpeed)=>{
    for(let i = 0; i < count; i += 1)$e924c154f00e890f$export$4f7edc95e736bc50(x + (0, $c32446a6160af894$exports.Random).between(-maxPositionOffset, maxPositionOffset), y + (0, $c32446a6160af894$exports.Random).between(-maxPositionOffset, maxPositionOffset), (0, $c32446a6160af894$exports.Random).between(5, maxSpeed), (0, $c32446a6160af894$exports.Random).angle(), $8b45237272ebbf97$export$ec81a0a9fb866aea());
};
const $e249802e4e448892$var$addAppearanceParticle = (x, y, bearing)=>{
    const index = $e924c154f00e890f$export$6f51c6174433c0be(0, 0, $8b45237272ebbf97$export$ec81a0a9fb866aea());
    if (index == null) return;
    $e924c154f00e890f$export$c15a40b3139f3ae7(index, (data, i)=>{
        const frameCount = data.frameCount[i];
        const progressRatio = frameCount / 60;
        data.rotationAngle[i] -= 0.3;
        data.scaleFactor[i] = 5 * (0, $c32446a6160af894$exports.Easing).easeInQuad(progressRatio);
        const currentDistance = (1 - progressRatio) * 100;
        const currentBearing = bearing + frameCount * 0.1;
        data.x[i] = x + currentDistance * Math.cos(currentBearing);
        data.y[i] = y + currentDistance * Math.sin(currentBearing);
        if (frameCount > 60) $e924c154f00e890f$export$100429cbbacc0af1(i);
    });
};
const $e249802e4e448892$var$addAppearanceEffect = (x, y)=>{
    for(let i = 0; i < 8; i += 1)$e249802e4e448892$var$addAppearanceParticle(x, y, i / 8 * (0, $c32446a6160af894$exports.Math).TWO_PI);
};
const $e249802e4e448892$var$addEnemy = (slot)=>{
    const { x: x, y: y } = slot;
    $e249802e4e448892$var$addAppearanceEffect(x, y);
    (0, $c32446a6160af894$exports.Timer).Set.addTimer($e249802e4e448892$var$timerSet, (0, $c32446a6160af894$exports.Timer).create(60, undefined, ()=>{
        const index = $e924c154f00e890f$export$942bce15f660128c(x, y, $8b45237272ebbf97$export$797a470f5288f525());
        if (index === null) return;
        slot.index = index;
        slot.state = $a0b6c23978e2e100$export$7254cc27399e90bd.ACTIVE;
        $e249802e4e448892$var$fireParticles(x, y, 32, 30, 30);
        $e402834bc38a3248$export$3a6a822f243dd388();
    }));
    slot.state = $a0b6c23978e2e100$export$7254cc27399e90bd.APPROACHING;
    $e402834bc38a3248$export$12fe957efa720b3();
};
const $e249802e4e448892$export$aad8462122ac592b = (playable = true)=>{
    $e249802e4e448892$var$score = 0;
    $e249802e4e448892$export$ca000e230c0caa3e = "PLAYING";
    (0, $c32446a6160af894$exports.Timer).Set.clear($e249802e4e448892$var$timerSet);
    $e924c154f00e890f$export$aad8462122ac592b();
    $e924c154f00e890f$export$11ae10a4ef8c3aa4($8b45237272ebbf97$export$615455393ee443ca);
    if (!playable) $e924c154f00e890f$export$a62b7fa33642815b();
    $a0b6c23978e2e100$export$aad8462122ac592b($e249802e4e448892$var$addEnemy);
};
const $e249802e4e448892$var$onHitEnemy = (playerBullet, playerBulletIndex, enemy, enemyIndex)=>{
    const x = playerBullet.soa.data.x[playerBulletIndex];
    const y = playerBullet.soa.data.y[playerBulletIndex];
    $e50a3dd5102f7094$exports.kill(playerBullet, playerBulletIndex);
    if ((0, $c32446a6160af894$exports.Random).bool(0.2)) $e249802e4e448892$var$fireParticles(x, y, 1, 5, 15);
    const enemyLife = enemy.soa.data.life[enemyIndex] -= 1;
    enemy.soa.data.damagedRemainingCount[enemyIndex] = 2;
    $e249802e4e448892$var$score += 10;
    if (enemyLife <= 0) {
        $e924c154f00e890f$export$8a2d3cbe71e8e119(enemyIndex);
        $e249802e4e448892$var$fireParticles(x, y, 64, 50, 35);
        $e249802e4e448892$var$score += 8000;
        (0, $58e3d9da52961b1d$exports.setShake)(0.05, 0.8, "VERTICAL");
        $e402834bc38a3248$export$3ca364567c609e46();
    }
};
const $e249802e4e448892$var$onHitPlayer = (enemyBullet, enemyBulletIndex, player, playerIndex)=>{
    const x = enemyBullet.soa.data.x[enemyBulletIndex];
    const y = enemyBullet.soa.data.y[enemyBulletIndex];
    $e50a3dd5102f7094$exports.kill(enemyBullet, enemyBulletIndex);
    const playerLife = player.soa.data.life[playerIndex] -= 1;
    player.soa.data.damagedRemainingCount[playerIndex] = 180;
    if (playerLife > 0) {
        $e249802e4e448892$var$fireParticles(x, y, 64, 30, 30);
        (0, $58e3d9da52961b1d$exports.setShake)(0.1, 0.9, "HORIZONTAL", true);
    } else {
        $e924c154f00e890f$export$a62b7fa33642815b();
        $e249802e4e448892$var$fireParticles(x, y, 128, 50, 30);
        (0, $58e3d9da52961b1d$exports.setShake)(0.2, 0.95, "HORIZONTAL", true);
        $e249802e4e448892$export$ca000e230c0caa3e = "RESULT";
    }
    $e402834bc38a3248$export$8c1bc81195937a74();
    $e924c154f00e890f$export$823d2c70d11b2f09((x, y)=>$e924c154f00e890f$export$4f7edc95e736bc50(x, y, 0, 0, $8b45237272ebbf97$export$ec81a0a9fb866aea()));
};
const $e249802e4e448892$var$drawLife = ()=>{
    const extraLifeCount = Math.max(0, $e924c154f00e890f$export$22d967c21f4978ff() - 1);
    let x = 30;
    const y = 30;
    for(let i = 0; i < extraLifeCount; i += 1){
        (0, $58e3d9da52961b1d$exports.drawTransformed)($8b45237272ebbf97$export$9bebbe3edaf607d5, x, y, -(0, $c32446a6160af894$exports.Math).HALF_PI, 0.5);
        x += 60;
    }
};
const $e249802e4e448892$var$drawScore = ()=>{
    (0, $58e3d9da52961b1d$exports.p).textSize(24);
    (0, $58e3d9da52961b1d$exports.p).textAlign((0, $58e3d9da52961b1d$exports.p).RIGHT);
    (0, $58e3d9da52961b1d$exports.p).text(`SCORE: ${(0, $58e3d9da52961b1d$exports.p).nfc($e249802e4e448892$var$score, 0)}`, (0, $58e3d9da52961b1d$exports.canvas).logicalSize.width - 20, 40);
};
const $e249802e4e448892$var$drawResult = ()=>{
    (0, $58e3d9da52961b1d$exports.p).textAlign((0, $58e3d9da52961b1d$exports.p).CENTER);
    (0, $58e3d9da52961b1d$exports.p).textSize(64);
    (0, $58e3d9da52961b1d$exports.p).text("RESULT", (0, $58e3d9da52961b1d$exports.canvas).logicalCenterPosition.x, (0, $58e3d9da52961b1d$exports.canvas).logicalCenterPosition.y);
    (0, $58e3d9da52961b1d$exports.p).textSize(96);
    (0, $58e3d9da52961b1d$exports.p).text((0, $58e3d9da52961b1d$exports.p).nfc($e249802e4e448892$var$score, 0), (0, $58e3d9da52961b1d$exports.canvas).logicalCenterPosition.x, (0, $58e3d9da52961b1d$exports.canvas).logicalCenterPosition.y + 128);
};
const $e249802e4e448892$export$889ea624f2cb2c57 = ()=>{
    (0, $58e3d9da52961b1d$exports.applyShake)();
    $e924c154f00e890f$export$3a64bf52feaec98c();
    $e924c154f00e890f$export$eea5a0dff8a7c4f9($e249802e4e448892$var$onHitEnemy);
    $e924c154f00e890f$export$c89eaa0a169c02e4($e249802e4e448892$var$onHitPlayer);
    (0, $c32446a6160af894$exports.Timer).Set.step($e249802e4e448892$var$timerSet);
    $a0b6c23978e2e100$export$722fbec263ad908a($e249802e4e448892$var$addEnemy);
    switch($e249802e4e448892$export$ca000e230c0caa3e){
        case "PLAYING":
            $e249802e4e448892$var$drawScore();
            $e249802e4e448892$var$drawLife();
            break;
        case "RESULT":
            $e249802e4e448892$var$drawResult();
            break;
    }
};


// ---- variables | functions ----
let $f4c12acded82ea22$var$drawBackground;
let $f4c12acded82ea22$var$volumeSlider;
let $f4c12acded82ea22$var$gameIsStarted = false;
// ---- reset & initialize ----
const $f4c12acded82ea22$var$prelaod = ()=>{
    $bf937b7598948cb4$export$11e63f7b0f3d9900((0, $58e3d9da52961b1d$exports.p), {
        jp: "NotoSerifJP-Medium-subset.otf",
        en: "NotoSerifJP-Bold-subset.otf"
    });
    $e402834bc38a3248$export$11e63f7b0f3d9900((0, $58e3d9da52961b1d$exports.p), {
        music: "WELCOMEB4CK.ogg",
        gunSound: "submachinegun1_edit.wav",
        bombSound: "bomb2_edit.wav",
        preAppearanceSound: "enemy-advent1.wav",
        appearanceSound: "punch-high2.wav",
        damageSound: "cannon1_edit.wav"
    });
};
const $f4c12acded82ea22$var$reset = ()=>{
    $e249802e4e448892$export$aad8462122ac592b($f4c12acded82ea22$var$gameIsStarted);
};
const $f4c12acded82ea22$var$updateVolume = ()=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $e402834bc38a3248$export$246e658b67178cb0($f4c12acded82ea22$var$volumeSlider.value() * 0.01);
};
const $f4c12acded82ea22$var$initializeVolumeSlider = ()=>{
    $f4c12acded82ea22$var$volumeSlider = (0, $58e3d9da52961b1d$exports.p).createSlider(0, 100, 15, 5);
    $f4c12acded82ea22$var$volumeSlider.position((0, $58e3d9da52961b1d$exports.canvas).scaleFactor * 50, (0, $58e3d9da52961b1d$exports.canvas).scaleFactor * ((0, $58e3d9da52961b1d$exports.canvas).logicalSize.height - 40));
    $f4c12acded82ea22$var$volumeSlider.style("width", `${(0, $58e3d9da52961b1d$exports.canvas).scaleFactor * 200}px`);
    $f4c12acded82ea22$var$volumeSlider.style("height", `${(0, $58e3d9da52961b1d$exports.canvas).scaleFactor * 25}px`);
    $f4c12acded82ea22$var$updateVolume();
};
const $f4c12acded82ea22$var$initialize = ()=>{
    const backgroundPixels = (0, $58e3d9da52961b1d$exports.createPixels)(()=>{
        (0, $58e3d9da52961b1d$exports.canvas).drawScaled(()=>{
            const { width: width, height: height } = (0, $6f098652ce98b7dd$export$224ac526c9f67070);
            (0, $58e3d9da52961b1d$exports.p).background(248);
            (0, $58e3d9da52961b1d$exports.p).stroke(128, 112, 96, 4);
            (0, $58e3d9da52961b1d$exports.p).strokeCap((0, $58e3d9da52961b1d$exports.p).SQUARE);
            (0, $58e3d9da52961b1d$exports.p).strokeWeight(20);
            for(let i = 0; i < 2000; i += 1){
                const x = (0, $58e3d9da52961b1d$exports.p).random(0, width);
                const y = (0, $58e3d9da52961b1d$exports.p).random(-50, height - 50);
                (0, $58e3d9da52961b1d$exports.p).line(x, y, x, y + (0, $58e3d9da52961b1d$exports.p).random(50, 200));
            }
        });
    });
    $f4c12acded82ea22$var$drawBackground = ()=>(0, $58e3d9da52961b1d$exports.replaceCanvasPixels)(backgroundPixels);
    (0, $58e3d9da52961b1d$exports.p).imageMode((0, $58e3d9da52961b1d$exports.p).CENTER);
    (0, $58e3d9da52961b1d$exports.p).textFont($bf937b7598948cb4$export$84584c2a98eb6753);
    $f4c12acded82ea22$var$initializeVolumeSlider();
    $f4c12acded82ea22$var$reset();
};
// ---- draw ----
const $f4c12acded82ea22$var$drawInstruction = ()=>{
    (0, $58e3d9da52961b1d$exports.p).push();
    (0, $58e3d9da52961b1d$exports.p).textFont($bf937b7598948cb4$export$84584c2a98eb6753, 24);
    (0, $58e3d9da52961b1d$exports.p).textAlign((0, $58e3d9da52961b1d$exports.p).LEFT);
    (0, $58e3d9da52961b1d$exports.p).text("ARROW / WASD :", 160, 500);
    (0, $58e3d9da52961b1d$exports.p).text("MOVE", 460, 500);
    (0, $58e3d9da52961b1d$exports.p).text("Z / J / SPACE / ENTER :", 160, 540);
    (0, $58e3d9da52961b1d$exports.p).text("SHOOT", 460, 540);
    (0, $58e3d9da52961b1d$exports.p).text("PRESS SPACE KEY TO START", 160, 600);
    (0, $58e3d9da52961b1d$exports.p).pop();
};
const $f4c12acded82ea22$var$drawSketch = ()=>{
    $e249802e4e448892$export$889ea624f2cb2c57();
    if (!$f4c12acded82ea22$var$gameIsStarted) $f4c12acded82ea22$var$drawInstruction();
    (0, $58e3d9da52961b1d$exports.p).textFont($bf937b7598948cb4$export$84584c2a98eb6753, 16);
    (0, $58e3d9da52961b1d$exports.p).textAlign((0, $58e3d9da52961b1d$exports.p).LEFT);
    (0, $58e3d9da52961b1d$exports.p).text("VOL", 10, (0, $58e3d9da52961b1d$exports.canvas).logicalSize.height - 23);
};
const $f4c12acded82ea22$var$draw = ()=>{
    $f4c12acded82ea22$var$drawBackground();
    (0, $58e3d9da52961b1d$exports.canvas).drawScaled($f4c12acded82ea22$var$drawSketch);
    $f4c12acded82ea22$var$updateVolume();
};
// ---- UI ----
const $f4c12acded82ea22$var$keyTyped = ()=>{
    switch((0, $58e3d9da52961b1d$exports.p).key){
        // case "p":
        //   pauseOrResume();
        //   break;
        case "g":
            (0, $58e3d9da52961b1d$exports.p).save("image.png");
            break;
    }
    if (!$f4c12acded82ea22$var$gameIsStarted && (0, $58e3d9da52961b1d$exports.p).keyCode === 32) {
        $e249802e4e448892$export$aad8462122ac592b(true);
        $f4c12acded82ea22$var$gameIsStarted = true;
    }
    if ($e249802e4e448892$export$ca000e230c0caa3e === $e249802e4e448892$export$7254cc27399e90bd.RESULT) $e249802e4e448892$export$aad8462122ac592b(true);
};
// ---- start sketch ----
const $f4c12acded82ea22$var$setP5Methods = (p)=>{
    p.preload = $f4c12acded82ea22$var$prelaod;
    p.draw = $f4c12acded82ea22$var$draw;
    p.mouseMoved = ()=>{
        (0, $58e3d9da52961b1d$exports.Mouse).updatePosition();
        (0, $58e3d9da52961b1d$exports.Mouse).onMoved();
    };
    p.mousePressed = (0, $58e3d9da52961b1d$exports.Mouse).onPressed;
    p.keyTyped = $f4c12acded82ea22$var$keyTyped;
    p.keyPressed = ()=>{
        (0, $58e3d9da52961b1d$exports.MoveKeys).onPressed();
        if ((0, $58e3d9da52961b1d$exports.MoveKeys).up || (0, $58e3d9da52961b1d$exports.MoveKeys).left || (0, $58e3d9da52961b1d$exports.MoveKeys).down || (0, $58e3d9da52961b1d$exports.MoveKeys).right) return false;
    };
    p.keyReleased = ()=>{
        (0, $58e3d9da52961b1d$exports.MoveKeys).onReleased();
    };
};
(0, $58e3d9da52961b1d$exports.startSketch)({
    htmlElement: (0, $6f098652ce98b7dd$export$f84da9ebf46464d1),
    logicalCanvasSize: (0, $6f098652ce98b7dd$export$224ac526c9f67070),
    initialize: $f4c12acded82ea22$var$initialize,
    setP5Methods: $f4c12acded82ea22$var$setP5Methods,
    fittingOption: (0, $6f098652ce98b7dd$export$35f95f7e7baec047) ? undefined : null
});

})();
//# sourceMappingURL=index.59f27736.js.map
