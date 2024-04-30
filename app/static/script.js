

// setup 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
resizeCanvas(canvas, ctx); 
let grid = new Grid(canvas, ctx);
grid.handleResize();
let snake = new Snake(canvas, ctx, grid);
snake.handleResize();
let target = new Target(ctx, grid, snake);
target.newTarget();

// animation loop
let counter = 0
let targetX, targetY
[targetX, targetY] = target.newTarget() 

function anim(){

    if (counter % 6 == 0){
        // adjust speed ^^^ 

        grid.clear('black')
        snake.step()

        // check if snake ate the target
        // if yes, generate new target and grow snake 
        if (snake.checkCollision(targetX, targetY)){
            [targetX, targetY] = target.newTarget();
            snake.grow()
        }
        
        // check if snake ran into itsself
        // if yes, game over! 
        /* 
            FINISH LATER
        if (snake.checkCollision(...snake.body[snake.head])){
            snake.reset();
        }
        */

        target.draw(targetX, targetY) 
        snake.draw()
    }
    counter++
    window.requestAnimationFrame(anim);
}
anim()



// Call the resizeCanvas function initially and whenever the window is resized
window.onload = () => { 
    resizeCanvas(canvas, ctx); 
    grid.width = canvas.width;
    grid.height = canvas.height;
    grid.handleResize();
    snake.handleResize();
    target.newTarget(); 
} 
window.onresize = () => { 
    resizeCanvas(canvas, ctx); 
    grid.width = canvas.width;
    grid.height = canvas.height;
    grid.handleResize();
    snake.handleResize();
    target.newTarget();
} 

// Accept Keyboard Inputs: w, a, s, d 
// and UP, DOWN, RIGHT, LEFT arrows 
document.addEventListener('keydown', function(event) {
    handleKeydown(event, snake)
});
