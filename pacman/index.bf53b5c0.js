let fontRegular;
function preload() {
    fontRegular = loadFont("../assets/Creepster-Regular.ttf");
}
function setup() {
    background(100);
    Z = 40;
    T = 15;
    pacx = 11 * Z;
    pacy = 16 * Z;
    pacmx = 0;
    pacmy = 0;
    pacd = 0;
    wacn = 0;
    score = 0;
    GT = [
        14,
        16,
        18,
        20
    ];
    ghostx = [
        9 * Z,
        10 * Z,
        11 * Z,
        12 * Z
    ];
    ghosty = [
        10 * Z,
        10 * Z,
        10 * Z,
        10 * Z
    ];
    ghostmx = [
        1,
        -1,
        0,
        0
    ];
    ghostmy = [
        0,
        0,
        0,
        0
    ];
    ghoststate = [
        0,
        0,
        0,
        0
    ];
    colorMode(HSB, 256);
    ghostcol = [
        color(0, 200, 255),
        color(220, 125, 255),
        color(120, 200, 255),
        color(20, 150, 255)
    ];
    colorMode(RGB, 256);
    powerpellet = 0;
    pacstate = 0;
    life = 0;
    levelstring = [
        "11111111111111111111111",
        "1          1          1",
        "1+111 1111 1 1111 111+1",
        "1 111 1111 1 1111 111 1",
        "1                     1",
        "1 111 1 1111111 1 111 1",
        "1     1    1    1     1",
        "11111 1111 1 1111 11111",
        "----1 1         1 1----",
        "11111 1 111-111 1 11111",
        "        1-----1        ",
        "11111 1 1111111 1 11111",
        "----1 1         1 1----",
        "11111 1 1111111 1 11111",
        "1         -1-         1",
        "1 111 1111-1-1111 111 1",
        "1+  1   -------   1  +1",
        "111 1 1 1111111 1 1 111",
        "1     1    1    1     1",
        "1 11111111 1 11111111 1",
        "1                     1",
        "11111111111111111111111"
    ];
    w = 23;
    h = 22;
    lvlw = w * Z;
    lvlh = h * Z;
    windowWidth = lvlw;
    windowHeight = lvlh;
    const CANVAS = createCanvas(windowWidth, windowHeight);
    CANVAS.parent("Pacman");
    aap = [];
    for(i = 0; i < w * h; i++)aap.push(getlevel(i % w * Z, Z * floor(i / w)) == "1" ? -1 : 0);
}
function getlevel(x1, y1) {
    var nstr1 = levelstring[floor(y1 / Z)];
    return nstr1.charAt(floor(x1 / Z));
}
function setlevel(x1, y1, v) {
    var nstr1 = levelstring[floor(y1 / Z)];
    levelstring[floor(y1 / Z)] = nstr1.substr(0, floor(x1 / Z)) + v + nstr1.substr(floor(x1 / Z) + 1, 99);
}
function astar(x2, y2, x1, y1) {
    var aa = aap.slice(0);
    var q = [
        x1,
        y1
    ];
    //i = 0
    while(true){
        var x3 = q.shift();
        var y3 = q.shift();
        if (aa[x3 + y3 * w] == 0) {
            if (abs(x3 - x2) + abs(y3 - y2) < 2) //ellipse(x*Z+Z/2,y*Z+Z/2,Z/4)
            return atan2(y3 - y2, x3 - x2);
            aa[x3 + y3 * w] = 1;
            //text(i++,x*Z+Z/2,y*Z+Z/2)
            q.push(x3 - 1, y3, x3 + 1, y3, x3, y3 - 1, x3, y3 + 1);
        }
    }
}
function draw() {
    background(color(32, 32, 64));
    for(y = 0; y < 22; y++){
        nstr = levelstring[y];
        for(x = 0; x < 23; x++)if (aap[x + y * w] == -1) {
            fill(color(64, 64, 255));
            rect(x * Z, y * Z, Z, Z);
        } else if (nstr.charAt(x) == " ") {
            fill(color(255, 255, 190));
            ellipse(x * Z + Z / 2, y * Z + Z / 2, Z / 4);
        } else if (nstr.charAt(x) == "+") {
            fill(color(255, 255, 0));
            ellipse(x * Z + Z / 2, y * Z + Z / 2, Z / 2);
        }
    }
    if (pacx % Z < Z / T && pacy % Z < Z / T || pacmx == 0 && pacmy == 0) {
        if (getlevel(pacx, pacy) == " ") score++;
        if (getlevel(pacx, pacy) == "+") powerpellet = 500;
        if (pacx >= 0) setlevel(pacx, pacy, "-");
        pacx = (pacx + lvlw) % lvlw;
        if (getlevel(pacx, pacy) == " ") score++;
        if (pacx >= 0) setlevel(pacx, pacy, "-");
        if (keyIsDown(LEFT_ARROW)) {
            pacmy = 0;
            pacmx = -Z / T;
            pacd = PI;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            pacmy = 0;
            pacmx = Z / T;
            pacd = 0;
        }
        if (keyIsDown(UP_ARROW)) {
            pacmy = -Z / T;
            pacmx = 0;
            pacd = PI / 2;
        }
        if (keyIsDown(DOWN_ARROW)) {
            pacmy = Z / T;
            pacmx = 0;
            pacd = PI * 3 / 2;
        }
        x = pacx + pacmx * T;
        y = pacy + pacmy * T;
        if (getlevel(x, y) == "1") {
            pacmx = 0;
            pacmy = 0;
        }
    }
    powerpellet--;
    for(i = 0; i < 4; i++)if (ghoststate[i] == 1) {
        for(ix = -1; ix < 2; ix += 2){
            fill(color(255));
            stroke(color(0));
            ellipse(ghostx[i] + Z / 2 + ix * 8, ghosty[i] + Z / 2, 12);
            fill(color(0));
            ellipse(ghostx[i] + Z / 2 + ix * 8 + 3 * ghostmx[i], ghosty[i] + Z / 2 + 3 * ghostmy[i] + 1, 4);
        }
        if (pacstate == 0) {
            it = 0;
            pmx = ghostmx[i];
            pmy = ghostmy[i];
            if (ghostx[i] % Z < Z / GT[i] && ghosty[i] % Z < Z / GT[i] || ghostmx[i] == 0 && ghostmy[i] == 0) {
                d = astar(floor(ghostx[i] / Z), floor(ghosty[i] / Z), 11, 10);
                ghostmx[i] = cos(d);
                ghostmy[i] = sin(d);
                if (dist(ghostx[i], ghosty[i], 11 * Z, 10 * Z) < 10) ghoststate[i]++;
            }
            ghostx[i] += ghostmx[i] * Z / GT[i];
            ghosty[i] += ghostmy[i] * Z / GT[i];
        }
    } else {
        noStroke();
        fill(powerpellet > 0 && powerpellet % 20 > 10 || powerpellet > 100 ? color(0, 0, 255) : ghostcol[i]);
        ellipse(ghostx[i] + Z / 2, ghosty[i] + Z / 2, Z - 4);
        rect(ghostx[i] + 2, ghosty[i] + Z / 2, Z - 4, Z / 2);
        for(ix = -1; ix < 2; ix += 2){
            fill(color(255));
            stroke(color(0));
            ellipse(ghostx[i] + Z / 2 + ix * 8, ghosty[i] + Z / 2, 12);
            fill(color(0));
            ellipse(ghostx[i] + Z / 2 + ix * 8 + 3 * ghostmx[i], ghosty[i] + Z / 2 + 3 * ghostmy[i] + 1, 4);
        }
        if (ghoststate[i] > 0) {
            ghoststate[i]++;
            if (ghoststate[i] > 200) ghoststate[i] = 0;
            while(ghostx[i] % Z < Z / GT[i] && ghosty[i] % Z < Z / GT[i] && (it++ == 0 || random() < 0.25) || ghostmx[i] == 0 && ghostmy[i] == 0){
                ghostmx[i] = random() < 0.5 ? 1 : -1;
                x = ghostx[i] + ghostmx[i] * Z;
                y = ghosty[i] + ghostmy[i] * Z;
                if (getlevel(x, y) == "1") {
                    ghostmx[i] = 0;
                    ghostmy[i] = 0;
                }
            }
        } else if (pacstate == 0) {
            it = 0;
            pmx = ghostmx[i];
            pmy = ghostmy[i];
            while(ghostx[i] % Z < Z / GT[i] && ghosty[i] % Z < Z / GT[i] && (it++ == 0 || random() < 0.25) || ghostmx[i] == 0 && ghostmy[i] == 0){
                ghostmx[i] = 0;
                ghostmy[i] = 0;
                ghostx[i] = (ghostx[i] + lvlw) % lvlw; // ; ghosty[i] = round((ghosty[i]+lvlw) % lvlw)
                if (random() < 0.4) {
                    d = astar(floor(ghostx[i] / Z), floor(ghosty[i] / Z), min(w - 1, round(pacx / Z)), round(pacy / Z));
                    if (powerpellet > 0) d += PI;
                    ghostmx[i] = cos(d);
                    ghostmy[i] = sin(d);
                } else if (random() < 0.5) {
                    ghostmx[i] = pmx;
                    ghostmy[i] = pmy;
                } else if (random() < 0.5) ghostmx[i] = random() < 0.5 ? 1 : -1;
                else ghostmy[i] = random() < 0.5 ? 1 : -1;
                x = ghostx[i] + ghostmx[i] * Z;
                y = ghosty[i] + ghostmy[i] * Z;
                if (getlevel(x, y) == "1") {
                    ghostmx[i] = 0;
                    ghostmy[i] = 0;
                }
            }
            ghostx[i] += ghostmx[i] * Z / GT[i];
            ghosty[i] += ghostmy[i] * Z / GT[i];
            if (dist(ghostx[i], ghosty[i], pacx, pacy) < Z) {
                if (powerpellet > -10) ghoststate[i] = 1;
                else pacstate = 1;
            }
        }
    }
    if (pacstate == 0) {
        pacx += pacmx;
        pacy += pacmy;
        if (pacmx != 0 || pacmy != 0) wacn += 0.5;
        else wacn = 3;
        wac = abs(wacn % 10 - 5) * PI / 12;
        fill(color(255, 255, 0));
        noStroke();
        beginShape(TRIANGLE_FAN);
        vertex(pacx + Z / 2, pacy + Z / 2);
        for(d = pacd + wac; d < pacd - wac + PI * 2; d += PI / 12)vertex(pacx + Z / 2 + Z / 2 * cos(d), pacy + Z / 2 - Z / 2 * sin(d));
        endShape();
    } else {
        fill(color(255, 255, 0));
        noStroke();
        beginShape(TRIANGLE_FAN);
        vertex(pacx + Z / 2, pacy + Z / 2);
        for(d = PI / 2 + pacstate * PI / 100; d < PI * 5 / 2 - pacstate * PI / 100; d += PI / 20)vertex(pacx + Z / 2 + Z / 2 * cos(d), pacy + Z / 2 - Z / 2 * sin(d));
        endShape();
        if (pacstate++ > 100) {
            pacx = 11 * Z;
            pacy = 16 * Z;
            pacmx = 0;
            pacmy = 0;
            pacd = 0;
            wacn = 0;
            pacstate = 0;
            life--;
            ghostx = [
                9 * Z,
                10 * Z,
                11 * Z,
                12 * Z
            ];
            ghosty = [
                10 * Z,
                10 * Z,
                10 * Z,
                10 * Z
            ];
        }
    }
    textFont(fontRegular);
    text("Score: " + score, 50, 25);
//; stroke(color(255))
//if (getlevel(mouseX,mouseY) != '1')
//{d = astar(floor(mouseX/Z),floor(mouseY/Z),floor(pacx/Z),floor(pacy/Z)) ; line(mouseX,mouseY,mouseX+50*cos(d),mouseY+50*sin(d))}
}

//# sourceMappingURL=index.bf53b5c0.js.map
