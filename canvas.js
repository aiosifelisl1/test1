const ctx = document.querySelector('canvas').getContext('2d')
const state = {
    W: document.documentElement.clientWidth,
    H: document.documentElement.clientHeight,
    keyState: {},
    keys: {
        LEFT: 37, UP: 38, 
        RIGHT: 39, DOWN: 40, 
        SPACE: 32
    },
    frameCount: 0,
    mouseX: 0,
    mouseY: 0,
    mouseDown: false,
    score: 0,
    screen: null
}


window.onload = init


function init() {
    state.screen = new Screen()
    input()
    fit()
    frame()
}

function frame() {
    window.requestAnimationFrame(frame)
    fit()
    ctx.clearRect(0, 0, state.W, state.H)
    state.screen.update()
    state.screen.render()
    state.frameCount++
}

function fit() {
    state.W = document.documentElement.clientWidth
    state.H = document.documentElement.clientHeight
    ctx.canvas.width = state.W
    ctx.canvas.height = state.H
}


function input() {
    document.body.onmousedown = function () {
        state.mouseDown = true
    }
    
    document.body.onmouseup = function () {
        state.mouseDown = false
    }
    
    document.body.ontouchstart = function () {
        state.mouseDown = true
    }
    
    document.body.ontouchend = function () {
        state.mouseDown = true
    }
    
    document.body.onmousemove = function (e) {
        state.mouseX = e.clientX
        state.mouseY = e.clientY
    }
    
    document.body.onkeydown = function (e) {
        state.keyState[e.keyCode] = true
    }
    
    document.body.onkeyup = function (e) {
        delete state.keyState[e.keyCode]
    }
}


function Screen() {
    this.angle = 0
    this.x = 10;
    this.y = 10;
}

Screen.prototype.render = function () {
    ctx.fillStyle = '#555555'
    ctx.fillRect(0, 0, state.W, state.H)
    ctx.strokeStyle = '#ffffff'
    ctx.arc(this.x, this.y, 0, Math.PI * 2, false)
    ctx.fill()
}

Screen.prototype.update = function () {
    this.angle += 0.01
}























