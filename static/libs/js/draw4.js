let l = 60

let x = 5
let y = l/2

let w = 600
let h = 600

let b = 0

function pulizia() {
    x=0
    y=l/2
    background("red")
}

function setup() {
    
    createCanvas(w,h)
    background("red")
}

function draw() {
    
    let ry = random(-5, 5)
    let ry2 = random(-5, 5)
    let b = random(100, 255)

    stroke(0, 0, b)
    strokeWeight(3)
    line(x, y+ry, x+l-5, y+ry2)

    x += l

    if (x >= w) {
        x = 0
        y += l
    }
}