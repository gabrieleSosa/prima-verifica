let lato = 50
let w = 400
let h = 400
let x, y
x=0
y=0

function pulizia() {
    
    background("black")
    x=0
    y=0
}

function setup() {
    createCanvas(w,h)
    background("black")
    stroke("white")
}

function draw() {
    
    let r = random()


    if (r>0.5) {
        
        line(x+lato, y, x, y+lato)
        
    } else {
        line(x, y, x+lato, y+lato)
    }

    x=x+lato
    if (x>=400) {
        
        x=0
        y=y+lato
    }
}