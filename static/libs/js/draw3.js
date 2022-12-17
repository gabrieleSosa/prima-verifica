let lato = 100
let x =0
let y=0

function pulizia() {
    x=0
    y=0
    background("white")
}

function setup() {
    
    createCanvas(400, 400)
    background("red")
}

function draw() {
    
    let r = random(0, 4)

    if (r>0 && r<1) {

        fill("white")
        triangle(x, y, x+lato, y, x, y+lato)
        fill("black")
        triangle(x+lato, y, x+lato, y+lato, x, y+lato)
    } else if (r>1 && r<2) {
        
        fill("black")
        triangle(x, y, x, y+lato, x+lato, y+lato)
        fill("white")
        triangle(x, y, x+lato, y, x+lato, y+lato)
    } else if (r>2 && r<3) {
        
        fill("black")
        triangle(x, y, x+lato, y, x, y+lato)
        fill("white")
        triangle(x+lato, y, x+lato, y+lato, x, y+lato)
    }else {
        
        fill("white")
        triangle(x, y, x, y+lato, x+lato, y+lato)
        fill("black")
        triangle(x, y, x+lato, y, x+lato, y+lato)
    }

    x=x+lato

    if (x>=400) {
        
        x=0
        y=y+lato
    }
}