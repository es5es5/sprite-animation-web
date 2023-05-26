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
const CANVAS_WIDTH = (canvas.width = 360)
const CANVAS_HEIGHT = (canvas.height = 370)

const frameImage = new Image()
frameImage.src = './assets/map/frame.png'
const TITLE_BAR_HEIGHT = 37
const FRAME_PADDING = 4
const FRAME_WIDTH = (frameImage.width = CANVAS_WIDTH)
const FRAME_HEIGHT = (frameImage.height = CANVAS_HEIGHT)

const backgroundImage = new Image()
backgroundImage.src = './assets/map/background.png'
const BACKGROUND_WIDTH = (backgroundImage.width = 360)
const BACKGROUND_HEIGHT = (backgroundImage.height = 360)

const catImage = new Image()
catImage.src = './assets/cat/cat.png'

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
  // ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position =
    Math.floor(gameFrame / spriteAnimations[currentState].speed) %
    spriteAnimations[currentState].loc.length
  let frameX = spriteWidth * position
  let frameY = spriteAnimations[currentState].loc[position].y

  // Drawing Frame
  ctx?.drawImage(frameImage, 0, 0, FRAME_WIDTH, FRAME_HEIGHT)

  // Drawing Background
  ctx?.drawImage(
    backgroundImage,
    FRAME_PADDING,
    TITLE_BAR_HEIGHT,
    FRAME_WIDTH - FRAME_PADDING * 2,
    FRAME_HEIGHT - TITLE_BAR_HEIGHT - FRAME_PADDING,
  )

  // Drawing Cat
  ctx?.drawImage(
    catImage,

    frameX, // Sprite Frame X Start
    frameY, // Sprite Frame Y Start
    spriteWidth, // Sprite Frame X End
    spriteHeight, // Sprite Frame Y End

    CANVAS_WIDTH / 2 - spriteWidth / 2, // Drawing Position X Start
    CANVAS_HEIGHT - spriteHeight - TITLE_BAR_HEIGHT + FRAME_PADDING * 2, // Drawing Position Y Start
    spriteWidth, // Drawing Position X End
    spriteHeight, // Drawing Position Y End
  )

  gameFrame++
  requestAnimationFrame(animate)
}

animate()
