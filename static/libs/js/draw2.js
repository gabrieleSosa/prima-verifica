let lato = 40
let d = 20

let x = 0
let y = 0

function pulizia() {
    background("red")
    x=0
    y=0
}

function setup() {
    createCanvas(400,400)
    background("red")
}

function draw() {
    
    let r = random()

    if (r>0.5) {
        
        fill("white")
        square(x, y, lato)

        fill("black")
        circle(x+lato/2, y+lato/2, d)
    } else {
        fill("black")
        square(x, y, lato)

        fill("white")
        circle(x+lato/2, y+lato/2, d)
    }

    x=x+lato

    if (x>=400) {
        
        x=0
        y=y+lato
    }
}
