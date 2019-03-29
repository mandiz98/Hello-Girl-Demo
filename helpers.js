function randomSize() {
    return "" + (Math.random() * 25) + "px"
}

function randomDirection(x, y) {
    return {
        x: x + (-100 + Math.random() * 200),
        y: y + (-100 + Math.random() * 200)
    }
}

function randomColor() {
    return "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")"
}