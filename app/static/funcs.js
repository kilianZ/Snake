
/*
    SOME USEFUL FUNCTIONS
*/

// Function to resize the canvas to fill the browser window
function resizeCanvas(canvas, ctx) {
    console.log('resize')
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    return [w, h];
}

function handleKeydown(e, snake){
    switch(e.keyCode){
        case 87:
            console.log('set direction UP')
            snake.dX = 0
            snake.dY = -1
            break;
        case 65:
            console.log('set direction LEFT')
            snake.dX = -1
            snake.dY = 0
            break;
        case 83: 
            console.log('set direction DOWN')
            snake.dX = 0
            snake.dY = -1
            break;
        case 68: 
            console.log('set direction RIGHT') 
            snake.dX = 1
            snake.dY = 0 
            break;
    }
}