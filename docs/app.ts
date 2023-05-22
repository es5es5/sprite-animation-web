import {
  animationStates,
  spriteAnimations,
  spriteSettings,
} from './assets/cat/states.js'

const canvas = document.getElementById('canvas1') as HTMLCanvasElement
const selectElement = document.getElementById('animations') as HTMLSelectElement
animationStates.forEach((states) => {
  let opt = document.createElement('option')
  opt.value = states.name
  opt.innerHTML = states.name
  selectElement.appendChild(opt)
})

selectElement.addEventListener('change', (event: Event): void => {
  const element = event.target as HTMLSelectElement
  currentState = element.value
})

const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = (canvas.width = 200)
const CANVAS_HEIGHT = (canvas.height = 200)

const backgroundImage = new Image()
backgroundImage.src = './assets/map/map.png'

const playerImage = new Image()
playerImage.src = './assets/cat/cat.png'

const spriteWidth = spriteSettings.spriteWidth
const spriteHeight = spriteSettings.spriteHeight
let currentState = spriteSettings.initialState

let gameFrame = 0
const staggerFrames = 10

animationStates.forEach((state, index) => {
  let frames = {
    loc: [] as Array<{ x: number; y: number }>,
  }
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({ x: positionX, y: positionY })
  }
  spriteAnimations[state.name] = frames
  spriteAnimations[state.name].speed = state.speed
})

let x = 0
function animate() {
  ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx?.drawImage(backgroundImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position =
    Math.floor(gameFrame / spriteAnimations[currentState].speed) %
    spriteAnimations[currentState].loc.length
  let frameX = spriteWidth * position
  let frameY = spriteAnimations[currentState].loc[position].y

  ctx?.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    CANVAS_WIDTH / 2 - spriteWidth / 2,
    CANVAS_HEIGHT - spriteHeight - 3,
    spriteWidth,
    spriteHeight,
  )

  gameFrame++
  requestAnimationFrame(animate)
}

animate()
