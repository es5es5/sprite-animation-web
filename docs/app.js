import { animationStates, spriteAnimations, spriteSettings, } from './assets/cat/states.js';
var canvas = document.getElementById('canvas1');
var selectElement = document.getElementById('animations');
animationStates.forEach(function (states) {
    var opt = document.createElement('option');
    opt.value = states.name;
    opt.innerHTML = states.name;
    selectElement.appendChild(opt);
});
selectElement.addEventListener('change', function (event) {
    var element = event.target;
    currentState = element.value;
});
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = (canvas.width = 96);
var CANVAS_HEIGHT = (canvas.height = 96);
var backgroundImage = new Image();
backgroundImage.src = './assets/map/map.png';
var homeImage = new Image();
homeImage.src = './assets/map/home.png';
var catImage = new Image();
catImage.src = './assets/cat/cat.png';
var spriteWidth = spriteSettings.spriteWidth;
var spriteHeight = spriteSettings.spriteHeight;
var currentState = spriteSettings.initialState;
var gameFrame = 0;
var staggerFrames = 10;
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
    spriteAnimations[state.name].speed = state.speed;
});
var x = 0;
function animate() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var position = Math.floor(gameFrame / spriteAnimations[currentState].speed) %
        spriteAnimations[currentState].loc.length;
    var frameX = spriteWidth * position;
    var frameY = spriteAnimations[currentState].loc[position].y;
    // Drawing Background
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(backgroundImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Drawing Home
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(homeImage, 1, 10, CANVAS_WIDTH - 2, CANVAS_HEIGHT - 11);
    // Drawing Cat
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(catImage, frameX, // Sprite Frame X Start
    frameY, // Sprite Frame Y Start
    spriteWidth, // Sprite Frame X End
    spriteHeight, // Sprite Frame Y End
    CANVAS_WIDTH / 2 - spriteWidth / 2, // Drawing Position X Start
    CANVAS_HEIGHT - spriteHeight - 6, // Drawing Position Y Start
    spriteWidth, // Drawing Position X End
    spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
