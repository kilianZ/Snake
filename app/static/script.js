
/*
    MAIN CODE!
*/


// setup 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let grid = new Grid(canvas, ctx) 
let snake = new Snake() 


// animation loop
x = y = counter = 0
function draw(){
    if (counter % 10 == 0){
        // clear 
        x = (x + 1) % grid.gridWidth
        y = (y + 1) % grid.gridHeight
        grid.clear('black')
        grid.fillCell(x, y) 
    }
    counter++
    window.requestAnimationFrame(draw);
}
draw()

// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = '#FF0000';
// ctx.fillRect(0,0,100,100)


// Call the resizeCanvas function initially and whenever the window is resized
window.onload = () => { 
    resizeCanvas(canvas, ctx); 
    grid.width = canvas.width;
    grid.height = canvas.height;
} 
window.onresize = () => { 
    resizeCanvas(canvas, ctx); 
    grid.width = canvas.width;
    grid.height = canvas.height;
} 

grid.print('hello console')
