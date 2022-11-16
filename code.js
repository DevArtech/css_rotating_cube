const cube = document.getElementById("cube");
const sides = document.querySelectorAll('.side');
const nums = document.querySelectorAll('.num');

const disButton = document.getElementById("display");
const numButton = document.getElementById("numbers");
const matButton = document.getElementById("matrix");

const disStats = document.getElementById("stats");
const disX = document.getElementById("x");
const disY = document.getElementById("y");
const disZ = document.getElementById("z");
disStats.style.setProperty("display", "none");

const disSpeeds = document.getElementById("speeds");
const speedX = document.getElementById("xSpeed");
const speedY = document.getElementById("ySpeed");
const speedZ = document.getElementById("zSpeed");
disSpeeds.style.setProperty("display", "none");

const disScale = document.getElementById("scale");
const scale = document.getElementById("scaleBar");
disScale.style.setProperty("display", "none");

var x = 0;
var y = 0;
var z = 0;
var s = 20;

var xSpeed = 0.5;
var ySpeed = 0.5;
var zSpeed = 0.5;
speedX.value = xSpeed * 100;
speedY.value = ySpeed * 100;
speedZ.value = zSpeed * 100;
scale.value = s;

var dashed = false;
var numbers = false;
var matrix = false;

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");


var interval = setInterval(incrementX, 10);
var interval = setInterval(incrementY, 10);
var interval = setInterval(incrementZ, 10);

/**Rotation methods*/

function incrementX(){
    x = x + xSpeed;
    if(x >= 360) {
        x = 0;
    }
    x = Math.round(x * 100) / 100
    cube.style.setProperty("transform", "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)");
    disX.innerHTML = "X Angle: " + x;
}

function incrementY() {
    y = y + ySpeed;
    if(y >= 360) {
        y = 0;
    }
    y = Math.round(y* 100) / 100
    cube.style.setProperty("transform", "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)");
    disY.innerHTML = "Y Angle: " + y;
}

function incrementZ() {
    z = z + zSpeed;
    if(z >= 360) {
        z = 0;
    }
    z = Math.round(z * 100) / 100
    cube.style.setProperty("transform", "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)");
    disZ.innerHTML = "Z Angle: " + z;
}

/**Methods to call for switching diplay */

function switchDisplay() {
    if(dashed == true) {
        dashedToSolid();
    } else {
        solidToDashed();
    }
}

function switchNumbers() {
    if(numbers == true) {
        showNumbers();
    } else {
        hideNumbers();
    }
}

function switchMatrix() {
    if(matrix == true) {
        noMatrix();
    } else {
        matrixMode();
    }
}

/**Methods to change the display from solid to dashed*/

function solidToDashed() {
    if(!matrix) {
        for (const side of sides) {
            side.style.setProperty("border", "1px dashed black");
            side.style.setProperty("background", "none");
        }
    } else {
        for (const side of sides) {
            side.style.setProperty("border", "1px dashed rgb(3, 255, 37)");
            side.style.setProperty("background", "none");
        }
    }
    dashed = true;
}

function dashedToSolid() {
    if(!matrix) {
        for (const side of sides) {
            side.style.setProperty("border", "none");
            side.style.setProperty("background", "linear-gradient(135deg, rgb(117, 156, 179) 0%, rgb(210, 234, 240) 100%)");
        }   
    } else {
        for (const side of sides) {
            side.style.setProperty("border", "1px solid rgb(3, 255, 37)");
        }  
    }
    dashed = false;
}

/**Methods to hide/show numbers */

function hideNumbers(){
    for (const num of nums) {
        num.style.setProperty("display", "none");
        num.style.setProperty("color", "black");
    }
    numbers = true;
}

function showNumbers() {
    if(!matrix) {
        for (const num of nums) {
            num.style.setProperty("display", "block");
            num.style.setProperty("color", "black");
        }
    } else {
        for (const num of nums) {
            num.style.setProperty("display", "block");
            num.style.setProperty("color", "rgb(3, 255, 37)");
        }
    }
    numbers = false;
}

/**Methods to enable/display Matrix Mode (For fun) */

function matrixMode() {
    matrix = true;
    if(!numbers) {
        switchNumbers();
    }
    if(!dashed) {
        switchDisplay();
    }
    for (const side of sides) {
        side.style.setProperty("border", "1px dashed rgb(3, 255, 37)");
        side.style.setProperty("background", "none");
    }
    for (const num of nums) {
        num.style.setProperty("display", "none");
        num.style.setProperty("color", "black");
    }
    document.body.style.setProperty("background", "black");

    disButton.style.setProperty("background", "black");
    disButton.style.setProperty("border", "1px dashed rgb(3, 255, 37)");
    disButton.style.setProperty("color", "rgb(3, 255, 37)");

    numButton.style.setProperty("background", "black");
    numButton.style.setProperty("border", "1px dashed rgb(3, 255, 37)");
    numButton.style.setProperty("color", "rgb(3, 255, 37)");

    matButton.style.setProperty("background", "black");
    matButton.style.setProperty("border", "1px dashed rgb(3, 255, 37)");
    matButton.style.setProperty("color", "rgb(3, 255, 37)");

    disStats.style.setProperty("display", "block");
    disSpeeds.style.setProperty("display", "block");
    disScale.style.setProperty("display", "block");
}

function noMatrix() {
    matrix = false;
    if(numbers) {
        switchNumbers();
    }
    if(dashed) {
        switchDisplay();
    }
    for (const side of sides) {
        side.style.setProperty("border", "none");
            side.style.setProperty("background", "linear-gradient(135deg, rgb(117, 156, 179) 0%, rgb(210, 234, 240) 100%)");
    }
    for (const num of nums) {
        num.style.setProperty("display", "block");
        num.style.setProperty("color", "black");
    }
    document.body.style.setProperty("background", "white");

    disButton.style.setProperty("background", "rgb(235, 235, 235)");
    disButton.style.setProperty("border", "1px solid black");
    disButton.style.setProperty("color", "black");

    numButton.style.setProperty("background", "rgb(235, 235, 235)");
    numButton.style.setProperty("border", "1px solid black");
    numButton.style.setProperty("color", "black");

    matButton.style.setProperty("background", "rgb(235, 235, 235)");
    matButton.style.setProperty("border", "1px solid black");
    matButton.style.setProperty("color", "black");

    disStats.style.setProperty("display", "none");
    disSpeeds.style.setProperty("display", "none");
    disScale.style.setProperty("display", "none");
}

/** Update Speed values from sliders */

if (speedX.addEventListener) {
    speedX.addEventListener("click", changeX, false);
}
else if (speedX.attachEvent) {
    speedX.attachEvent('onclick', changeX);
}

if (speedY.addEventListener) {
    speedY.addEventListener("click", changeY, false);
}
else if (speedY.attachEvent) {
    speedY.attachEvent('onclick', changeY);
}

if (speedZ.addEventListener) {
    speedZ.addEventListener("click", changeZ, false);
}
else if (speedZ.attachEvent) {
    speedZ.attachEvent('onclick', changeZ);
}

function changeX() {
    xSpeed = speedX.value / 100;
    console.log(xSpeed);
}

function changeY() {
    ySpeed = speedY.value / 100;
    console.log(ySpeed);
}

function changeZ() {
    zSpeed = speedZ.value / 100;
    console.log(zSpeed);
}

/**Update Scale of Cube */

if (scale.addEventListener) {
    scale.addEventListener("mouseover", setInterval(changeScale, 5), false);
}
else if (scale.attachEvent) {
    scale.attachEvent('mouseover', setInterval(changeScale, 5));
}

if (scale.addEventListener) {
    scale.addEventListener("mouseout", clearInterval(changeScale), false);
}
else if (scale.attachEvent) {
    scale.attachEvent('mouseout', clearInterval(changeScale));
}

function changeScale() {
    s = scale.value;

    one.style.setProperty('transform', "translateZ(-" + (s * 10) / 2 + "px) rotateY(180deg)");
    two.style.setProperty("transform", "translateY(" + (s * 10) / 2 + "px) rotateX(-90deg)");
    three.style.setProperty("transform", "translateX(" + (s * 10) / 2 + "px) rotateY(90deg)");
    four.style.setProperty("transform", "translateY(-" + (s * 10) / 2 + "px) rotateX(90deg)");
    five.style.setProperty("transform", "translateX(-" + (s * 10) / 2 + "px) rotateY(-90deg)");
    six.style.setProperty("transform", "translateZ(" + (s * 10) / 2 + "px)");

    for(const side of sides) {
        side.style.setProperty("width", s * 10 + "px");
        side.style.setProperty("height", s * 10 + "px");
    }

    for(const num of nums) {
        num.style.setProperty("line-height", (s * 10) + "px");
        num.style.setProperty("font-size", ((s * 10) / 2) + "px");
    }
}

changeScale();