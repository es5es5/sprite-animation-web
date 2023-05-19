var canvas = document.getElementById('canvas1');
var dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (event) {
    var element = event.target;
    playerState = element.value;
});
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 600;
var CANVAS_HEIGHT = canvas.height = 600;
var playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
var spriteWidth = 575;
var spriteHeight = 523;
var playerState = 'run';
var gameFrame = 0;
var staggerFrames = 5;
var spriteAnimations = [];
var animationStates = [{
        name: 'idle',
        frames: 7,
    }, {
        name: 'jump',
        frames: 7,
    }, {
        name: 'fall',
        frames: 7,
    }, {
        name: 'run',
        frames: 9,
    }, {
        name: 'dizzy',
        frames: 11,
    }, {
        name: 'sit',
        frames: 5,
    }, {
        name: 'roll',
        frames: 7,
    }, {
        name: 'bite',
        frames: 7,
    }, {
        name: 'ko',
        frames: 12,
    }, {
        name: 'getHit',
        frames: 4,
    },
];
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
console.log('spriteAnimations', spriteAnimations);
var x = 0;
function animate() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    var position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    var frameX = spriteWidth * position;
    var frameY = spriteAnimations[playerState].loc[position].y;
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
