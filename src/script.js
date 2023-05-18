var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 600;
var CANVAS_HEIGHT = canvas.height = 600;
var playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
var spriteWidth = 575;
var spriteHeight = 523;
var frameX = 0;
var frameY = 0;
var x = 0;
function animate() {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx?.fillRect(100, 50, 100, 100)
    // ctx?.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
}
animate();
