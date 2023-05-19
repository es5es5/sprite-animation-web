import { animationStates, spriteAnimations, } from "./assets/shadowDog/shadowDogStates.js";
var canvas = document.getElementById("canvas1");
var selectElement = document.getElementById("animations");
animationStates.forEach(function (states) {
    var opt = document.createElement("option");
    opt.value = states.name;
    opt.innerHTML = states.name;
    selectElement.appendChild(opt);
});
selectElement.addEventListener("change", function (event) {
    var element = event.target;
    playerState = element.value;
});
var ctx = canvas.getContext("2d");
var CANVAS_WIDTH = (canvas.width = 600);
var CANVAS_HEIGHT = (canvas.height = 600);
var playerImage = new Image();
playerImage.src = "./assets/shadowDog/shadowDog.png";
var spriteWidth = 575;
var spriteHeight = 523;
var playerState = "run";
var gameFrame = 0;
var staggerFrames = 5;
animationStates.forEach(function (state, index) {
    var frames = {
        loc: [],
    };
    for (var j = 0; j < state.frames; j++) {
        var positionX = j * spriteWidth;
        var positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
});
console.log("spriteAnimations", spriteAnimations);
var x = 0;
function animate() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var position = Math.floor(gameFrame / staggerFrames) %
        spriteAnimations[playerState].loc.length;
    var frameX = spriteWidth * position;
    var frameY = spriteAnimations[playerState].loc[position].y;
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
