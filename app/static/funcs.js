
/*
    SOME USEFUL FUNCTIONS
*/

// Function to resize the canvas to fill the browser window
function resizeCanvas(canvas, ctx) {
    console.log('resize');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    return [w, h];
}

function gcd(a,b) {
    // euclids algorithm for gcd 
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function handleKeydown(e, snake){
    switch(e.keyCode){
        case 87:
        case 38:
            // console.log('set direction UP')
            if (snake.dY == 1) break;
            // break if current direction is DOWN 
            snake.dX = 0;
            snake.dY = -1;
            break;
        case 65:
        case 37:
            // console.log('set direction LEFT')
            if (snake.dX == 1) break;
            // break if current direction is RIGHT
            snake.dX = -1
            snake.dY = 0
            break;
        case 83:
        case 40: 
            // console.log('set direction DOWN')
            if (snake.dY == -1) break;
            // break if current direction is UP 
            snake.dX = 0;
            snake.dY = 1;
            break;
        case 68:
        case 39: 
            // console.log('set direction RIGHT') 
            if (snake.dX == -1) break;
            // break if current direction is LEFT  
            snake.dX = 1;
            snake.dY = 0;
            break;
    }

}