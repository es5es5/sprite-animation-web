import {
  animationStates,
  spriteAnimations,
} from "./assets/shadowDog/shadowDogStates.js";

const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
const selectElement = document.getElementById(
  "animations"
) as HTMLSelectElement;
animationStates.forEach((states) => {
  let opt = document.createElement("option");
  opt.value = states.name;
  opt.innerHTML = states.name;
  selectElement.appendChild(opt);
});

selectElement.addEventListener("change", (event: Event): void => {
  const element = event.target as HTMLSelectElement;
  playerState = element.value;
});

const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "./assets/shadowDog/shadowDog.png";

const spriteWidth = 575;
const spriteHeight = 523;
let playerState = "run";

let gameFrame = 0;
const staggerFrames = 5;

animationStates.forEach((state, index) => {
  let frames = {
    loc: [] as Array<{ x: number; y: number }>,
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

console.log("spriteAnimations", spriteAnimations);

let x = 0;
function animate() {
  ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx?.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
