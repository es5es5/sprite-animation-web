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
var CANVAS_WIDTH = (canvas.width = 360);
var CANVAS_HEIGHT = (canvas.height = 370);
var frameImage = new Image();
frameImage.src = './assets/map/frame.png';
var TITLE_BAR_HEIGHT = 37;
var FRAME_PADDING = 4;
var FRAME_WIDTH = (frameImage.width = CANVAS_WIDTH);
var FRAME_HEIGHT = (frameImage.height = CANVAS_HEIGHT);
var backgroundImage = new Image();
backgroundImage.src = './assets/map/background.png';
var BACKGROUND_WIDTH = (backgroundImage.width = 360);
var BACKGROUND_HEIGHT = (backgroundImage.height = 360);
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
    // ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    var position = Math.floor(gameFrame / spriteAnimations[currentState].speed) %
        spriteAnimations[currentState].loc.length;
    var frameX = spriteWidth * position;
    var frameY = spriteAnimations[currentState].loc[position].y;
    // Drawing Frame
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(frameImage, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    // Drawing Background
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(backgroundImage, FRAME_PADDING, TITLE_BAR_HEIGHT, FRAME_WIDTH - FRAME_PADDING * 2, FRAME_HEIGHT - TITLE_BAR_HEIGHT - FRAME_PADDING);
    // Drawing Cat
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(catImage, frameX, // Sprite Frame X Start
    frameY, // Sprite Frame Y Start
    spriteWidth, // Sprite Frame X End
    spriteHeight, // Sprite Frame Y End
    CANVAS_WIDTH / 2 - spriteWidth / 2, // Drawing Position X Start
    CANVAS_HEIGHT - spriteHeight - TITLE_BAR_HEIGHT + FRAME_PADDING * 2, // Drawing Position Y Start
    spriteWidth, // Drawing Position X End
    spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
